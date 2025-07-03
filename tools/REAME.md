# 🛠️ Tools

Thư mục này chứa tài liệu hướng dẫn sử dụng và cấu hình các **công cụ hỗ trợ lập trình** và làm việc hiệu quả hơn, bao gồm:

- Trình soạn thảo mã nguồn (VS Code)
- Hệ thống quản lý mã (Git, GitHub)
- Container & DevOps (Docker)
- CI/CD, Terminal, Plugin, Extension…

---

## ✅ Mục tiêu

- Ghi lại quá trình cài đặt, cấu hình, và cách dùng thực tế
- Tiết kiệm thời gian khi chuyển máy mới, setup lại môi trường
- Làm tài liệu tham khảo khi làm dự án hoặc hướng dẫn người khác

---

## 🔁 Liên kết với thư mục khác

| Thư mục          | Ghi chú liên quan                                        |
| ---------------- | -------------------------------------------------------- |
| `project-notes/` | Thường cần ghi chú lại công cụ đã dùng trong mỗi project |
| `cheatsheet/`    | Có thể tạo bản rút gọn lệnh dùng thường xuyên tại đây    |
| `summary/`       | Tổng hợp so sánh công cụ, tips nâng cao                  |

---

## 📁 Nội dung hiện có

| File        | Mô tả                                                       |
| ----------- | ----------------------------------------------------------- |
| `git.md`    | Lệnh Git cơ bản, cấu hình, gitignore, conflict, stash...    |
| `github.md` | Hướng dẫn sử dụng GitHub, tạo repo, pull request, workflow  |
| `docker.md` | Cài đặt Docker, lệnh build/run, cấu hình Dockerfile, volume |
| `vscode.md` | Cấu hình VS Code, phím tắt, extension, workspace settings   |

---

## 🧠 Gợi ý mở rộng

Bạn có thể thêm các công cụ khác:

- `postman.md`: Test API nhanh
- `fig.md`: Terminal UI đẹp
- `ngrok.md`: Tạo tunnel localhost nhanh
- `firebase.md`: Hosting & realtime database
- `ci-cd.md`: Thiết lập CI/CD (GitHub Actions, GitLab CI...)

---

## 📌 Mỗi file nên bao gồm:

````md
# VS Code Setup

## Cài đặt nhanh

- Link tải: https://code.visualstudio.com/
- Hệ điều hành: Windows, Linux, macOS

## Extension nên dùng

- Prettier – auto format
- ESLint – linting code
- GitLens – quản lý lịch sử Git

## Phím tắt hay dùng

- Ctrl + P: Tìm file nhanh
- Ctrl + Shift + F: Tìm trong toàn project

## Cấu hình settings.json mẫu

```json
{
  "editor.formatOnSave": true,
  "files.autoSave": "onWindowChange"
}

---

> ⚙️ “Công cụ tốt + kỹ năng giỏi = năng suất vượt trội.”
```
````
