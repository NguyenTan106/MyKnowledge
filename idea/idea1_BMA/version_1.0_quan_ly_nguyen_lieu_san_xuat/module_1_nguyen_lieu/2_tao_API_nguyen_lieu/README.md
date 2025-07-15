# 🧩 Task: Tạo API CRUD Nguyên liệu (/api/ingredients)

| STT | Tên Subtask                                  | Mô tả                                              | Đầu ra kỳ vọng                                 |
| --- | -------------------------------------------- | -------------------------------------------------- | ---------------------------------------------- |
| 1️⃣ | Viết route GET `/api/ingredients`            | Lấy danh sách tất cả nguyên liệu                   | Danh sách JSON trả về dữ liệu đúng định dạng   |
| 2️⃣ | Viết route GET `/api/ingredients/:id`        | Lấy chi tiết 1 nguyên liệu theo `id`               | Trả về chi tiết hoặc lỗi nếu không tìm thấy    |
| 3️⃣ | Viết route POST `/api/ingredients`           | Tạo nguyên liệu mới                                | Trả về dữ liệu mới tạo, validate hợp lệ        |
| 4️⃣ | Viết route PUT `/api/ingredients/:id`        | Cập nhật nguyên liệu                               | Trả về dữ liệu mới sau cập nhật                |
| 5️⃣ | Viết route DELETE `/api/ingredients/:id`     | Xoá nguyên liệu                                    | Trả về confirm hoặc lỗi nếu không tồn tại      |
| 6️⃣ | Validate dữ liệu đầu vào                     | Sử dụng Zod hoặc schema đơn giản để tránh lỗi nhập | Báo lỗi rõ ràng nếu thiếu trường hoặc sai kiểu |
| 7️⃣ | Test các API bằng Postman                    | Tạo collection test các API CRUD                   | File Postman Collection `.json`                |
| 8️⃣ | Viết log cho mỗi hành động (ActivityLog)     | Ghi log mỗi lần thêm/sửa/xoá nguyên liệu           | Bảng `ActivityLog` có bản ghi đúng             |
