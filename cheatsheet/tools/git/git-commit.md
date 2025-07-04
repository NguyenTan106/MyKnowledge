# Git Commit Message Chuẩn Chuyên Nghiệp & Thực Tế

Viết commit message tốt giúp:

- Dễ đọc hiểu lịch sử thay đổi
- Hỗ trợ làm việc nhóm, review, debug
- Hữu ích cho việc rollback, release, audit

---

## ✅ 1. Quy Tắc Chung

- **Dòng đầu tiên ≤ 50 ký tự**, viết ở thì hiện tại (present tense)
- **Không** kết thúc bằng dấu chấm `.`
- Dùng động từ: `add`, `fix`, `update`, `remove`, `refactor`, `implement`...

---

## ✅ 2. Cấu Trúc Commit Message

### Cơ bản (Conventional Commit):

```bash
<type>: <short description>
```

### Mở rộng theo ID và chức năng:

```bash
<type>(<ID>): <action> <feature>
```

- `ID`: mã task, bug, feature, hoặc patch (`BUG-101`, `TASK-22`, `FEAT-12`)
- Có thể thêm mô tả chi tiết hoặc phiên bản: `(patch v2)`, `(2025-07-03)`

---

## ✅ 3. Các `type` thường dùng

| Type       | Mô tả                                    |
| ---------- | ---------------------------------------- |
| `feat`     | Thêm mới tính năng                       |
| `fix`      | Sửa lỗi                                  |
| `docs`     | Cập nhật tài liệu                        |
| `style`    | Sửa style, format, không ảnh hưởng logic |
| `refactor` | Refactor code, không thay đổi logic      |
| `test`     | Thêm hoặc sửa test                       |
| `chore`    | Việc phụ trợ như config, script          |

---

## ✅ 4. Ví dụ Commit Message Thực Tế

| ID       | Chức năng               | Hành động      | Commit Message                                           |
| -------- | ----------------------- | -------------- | -------------------------------------------------------- |
| FEAT-101 | Đăng nhập               | Thêm mới       | `feat(#101): implement login with JWT`                   |
| BUG-202  | Hiển thị tên người dùng | Sửa lần 1      | `fix(#202): fix username not displaying on profile page` |
| BUG-202  |                         | Sửa lần 2      | `fix(#202): correct username render logic (patch v2)`    |
| FEAT-301 | Bộ lọc sản phẩm         | Thêm điều kiện | `feat(#301): add category filter to product list`        |
| UI-404   | Form đăng ký            | Căn chỉnh UI   | `style(#404): adjust register form layout`               |
| TASK-555 | Kiểm tra token          | Refactor       | `refactor(#555): move token validation to middleware`    |

---

## ✅ 5. Mở Rộng: Ghi Nhật Ký Bản Vá (Patch Log)

**Gợi ý** tạo `PATCHLOG.md` để theo dõi thay đổi theo ID:

```markdown
## BUG-202 - Hiển thị tên người dùng sai

- v1: Gán nhầm biến trong profile.jsx
- v2: Thiếu await khi lấy username
- v3: Gọi API sai thời điểm khi chưa load xong userId
```
