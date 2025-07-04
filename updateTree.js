const fs = require("fs");
const path = require("path");

const START = "<!-- MENU-START -->";
const END = "<!-- MENU-END -->";
const SUMMARY_FILE = "README.md"; // hoặc SUMMARY.md

const IGNORE_DIRS = [".git", "node_modules", ".vscode"];
const IGNORE_FILES = [".DS_Store"];

const isMarkdown = (filename) => filename.endsWith(".md");
const isIgnored = (name) =>
  IGNORE_DIRS.includes(name) || IGNORE_FILES.includes(name);

function walk(dir, indent = 0) {
  let output = "";
  const items = fs.readdirSync(dir).sort((a, b) => a.localeCompare(b));

  for (const item of items) {
    if (isIgnored(item)) continue;
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    const relativePath = fullPath.replace(/\\/g, "/"); // cross-platform

    const indentStr = "  ".repeat(indent);

    if (stat.isDirectory()) {
      output += `${indentStr}- [${item}](${relativePath}/)\n`;
      output += walk(fullPath, indent + 1);
    } else if (isMarkdown(item)) {
      output += `${indentStr}- [${item}](${relativePath})\n`;
    }
  }

  return output;
}

function updateSummary() {
  const tree = walk(".");

  let content = fs.readFileSync(SUMMARY_FILE, "utf8");

  const startIndex = content.indexOf(START);
  const endIndex = content.indexOf(END);

  if (startIndex === -1 || endIndex === -1 || endIndex < startIndex) {
    console.error("⚠️ Không tìm thấy thẻ đánh dấu để cập nhật.");
    return;
  }

  const before = content.slice(0, startIndex + START.length);
  const after = content.slice(endIndex);

  const newContent = `${before}\n\n${tree}\n${after}`;
  fs.writeFileSync(SUMMARY_FILE, newContent, "utf8");

  console.log("✅ Đã chèn lại nội dung vào vùng MENU.");
}

updateSummary();
