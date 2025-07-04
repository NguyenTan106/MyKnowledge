const fs = require("fs");
const path = require("path");

const ROOT_DIR = path.resolve(__dirname); // tuyệt đối luôn đúng

function formatLocalDate(date) {
  const yyyy = date.getFullYear();
  const mm = `${date.getMonth() + 1}`.padStart(2, "0");
  const dd = `${date.getDate()}`.padStart(2, "0");
  const hh = `${date.getHours()}`.padStart(2, "0");
  const mi = `${date.getMinutes()}`.padStart(2, "0");
  const ss = `${date.getSeconds()}`.padStart(2, "0");
  return `${yyyy}-${mm}-${dd}T${hh}:${mi}:${ss}`;
}

function getTagsFromPath(relPath) {
  const segments = relPath.split(/[\\/]/); // dùng regex thay vì path.sep
  segments.pop(); // remove filename
  return segments.filter((s) => !!s && !s.startsWith("."));
}
function getCategoryFromPath(relPath) {
  const parts = relPath.split(/[\\/]/); // dùng regex để đa nền tảng
  parts.pop(); // remove filename
  return parts.length > 0 ? parts[parts.length - 1] : "general";
}

// Chuyển front matter lines -> object
function parseFrontMatterLines(lines) {
  const result = {};
  for (const line of lines) {
    const match = line.match(/^(\w+):\s*(.*)$/);
    if (match) {
      let key = match[1];
      let val = match[2].trim();

      // Xử lý chuỗi mảng
      if (val.startsWith("[") && val.endsWith("]")) {
        val = val
          .slice(1, -1)
          .split(",")
          .map((s) => s.trim().replace(/^"|"$/g, ""));
      } else {
        val = val.replace(/^"|"$/g, "");
      }

      // Ép kiểu đúng
      if (key === "draft") val = val === "true" || val === true;
      if (key === "tags" && !Array.isArray(val)) {
        val = [val];
      }
      if (key === "createdAt" || key === "updatedAt") {
        val = normalizeDateField(val, null); // null nếu không hợp lệ
      }

      result[key] = val;
    }
  }
  return result;
}

// Chuyển object -> front matter lines
function frontMatterToLines(fm) {
  return [
    `title: "${fm.title}"`,
    `description: "${fm.description}"`,
    `tags: [${fm.tags.map((t) => `"${t}"`).join(", ")}]`,
    `category: "${fm.category}"`,
    `slug: "${fm.slug}"`,
    `createdAt: "${fm.createdAt}"`,
    `updatedAt: "${fm.updatedAt}"`,
    `draft: ${fm.draft}`,
  ];
}
function deepEqual(a, b) {
  if (Array.isArray(a) && Array.isArray(b)) {
    return a.length === b.length && a.every((val, idx) => val === b[idx]);
  }
  return a == b; // dùng == để so sánh "mềm"
}

function updateFile(filePath, relPath) {
  // console.log("🔍 Scanning file:", relPath);

  const stat = fs.statSync(filePath);
  const createdAt = formatLocalDate(stat.birthtime || stat.ctime);
  const mtime = formatLocalDate(stat.mtime);
  const filename = path.basename(filePath);

  const title = filename
    .replace(".md", "")
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
  const tags = getTagsFromPath(relPath);
  const category = getCategoryFromPath(relPath);
  const slug = "/" + relPath.replace(/\\/g, "/");

  const content = fs.readFileSync(filePath, "utf-8");
  const lines = content.split("\n");

  const start = lines.findIndex((line) => line.trim() === "---");
  const end = lines.findIndex(
    (line, idx) => idx > start && line.trim() === "---"
  );

  let body = "";
  let frontLines = [];

  if (start !== -1 && end !== -1) {
    frontLines = lines.slice(start + 1, end);
    body = lines.slice(end + 1).join("\n");
  } else {
    body = content;
    frontLines = [];
  }

  const fm = parseFrontMatterLines(frontLines);
  // console.log(fm);

  const expected = {
    title,
    description: fm.description || "",
    tags,
    category,
    slug,
    createdAt: normalizeDateField(fm.createdAt, createdAt),
    draft: fm.draft === true || fm.draft === "true" ? true : false,
  };

  let changed = false;

  // So sánh từng trường (trừ updatedAt)
  for (const key in expected) {
    if (!deepEqual(fm[key], expected[key])) {
      console.log(expected);
      fm[key] = expected[key];
      changed = true;
    }
  }
  // Nếu có thay đổi thì cập nhật updatedAt
  if (changed) {
    fm.updatedAt = formatLocalDate(new Date());
    console.log(fm);
  } else {
    fm.updatedAt = fm.updatedAt || mtime;
    // console.log("chạy tới đây:", fm);
  }

  const newHeader = ["---", ...frontMatterToLines(fm), "---"].join("\n");
  const newContent = newHeader + "\n" + body.trimStart();

  let cleanedBody = body.trimStart();
  if (start === -1 || end === -1) {
    const bodyLines = cleanedBody.split("\n");
    while (bodyLines.length && bodyLines[0].trim() === "---") {
      bodyLines.shift(); // loại bỏ tất cả dòng '---' ở đầu file
    }
    cleanedBody = bodyLines.join("\n");
  }

  const currentContent = content.trim();

  if (newContent.trim() !== currentContent) {
    fm.updatedAt = formatLocalDate(new Date()); // force cập nhật
    const finalContent = [
      "---",
      ...frontMatterToLines(fm),
      "---",
      cleanedBody,
    ].join("\n");
    fs.writeFileSync(filePath, finalContent, "utf-8");
    const action = start === -1 || end === -1 ? "➕ Thêm mới" : "♻️  Cập nhật";
    console.log(`${action} front matter:`, relPath);
  }
}

function normalizeDateField(value, fallback) {
  try {
    const d = new Date(value);
    if (!isNaN(d)) return formatLocalDate(d);
  } catch {}
  return fallback;
}

function walkDir(currentPath) {
  const files = fs.readdirSync(currentPath);
  for (const file of files) {
    const fullPath = path.join(currentPath, file);
    const relPath = path.relative(ROOT_DIR, fullPath);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      walkDir(fullPath);
    } else if (
      file.endsWith(".md") &&
      file !== "README.md" &&
      !file.startsWith(".")
    ) {
      updateFile(fullPath, relPath);
    }
  }
}

// 🚀 Start
walkDir(ROOT_DIR);
