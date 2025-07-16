## ✅ Tổng quan các thao tác CRUD với mẻ nấu:

| API Route          | Phương thức | Mô tả                           |
| ------------------ | ----------- | ------------------------------- |
| `/api/batches`     | `GET`       | Lấy danh sách tất cả mẻ nấu     |
| `/api/batches/:id` | `GET`       | Lấy thông tin chi tiết 1 mẻ nấu |
| `/api/batches`     | `POST`      | Tạo mẻ nấu mới                  |
| `/api/batches/:id` | `PUT`       | Cập nhật thông tin mẻ nấu       |
| `/api/batches/:id` | `DELETE`    | Xoá mẻ nấu                      |

## 🧩 Phân rã Task Tạo API CRUD cho Mẻ Nấu

| STT | Tên Subtask                          | Mục tiêu / Kết quả kỳ vọng                 |
| --- | ------------------------------------ | ------------------------------------------ |
| 1️⃣ | Tạo schema Prisma cho `Batch`        | Bảng Batch được tạo trong DB               |
| 2️⃣ | Viết route `GET /api/batches`        | Trả danh sách mẻ nấu                       |
| 3️⃣ | Viết route `GET /api/batches/:id`    | Trả thông tin mẻ cụ thể                    |
| 4️⃣ | Viết route `POST /api/batches`       | Tạo mẻ mới + validate công thức            |
| 5️⃣ | Tự động trừ kho nguyên liệu          | Khi tạo mẻ mới, trừ kho từ nguyên liệu cần |
| 6️⃣ | Viết route `PUT /api/batches/:id`    | Cho phép cập nhật tình trạng, ghi chú      |
| 7️⃣ | Viết route `DELETE /api/batches/:id` | Xóa mẻ                                     |
| 8️⃣ | Tạo bảng phụ `BatchIngredient`       | Ghi nhận nguyên liệu dùng cho từng mẻ      |
| 9️⃣ | Ghi log hoạt động mẻ nấu             | Lưu lại ai tạo, lúc nào                    |
| 🔟  | Test Postman các API                 | Xác nhận hoạt động chuẩn                   |

## ✨ Cấu trúc bảng Batch (như đã định nghĩa trước)
```prisma
model Batch {
  id        Int      @id @default(autoincrement())
  code      String   @unique
  beerName  String
  status    Status   @default(boiling)
  volume    Float
  notes     String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  ingredients BatchIngredient[]
}
```
**Với enum:**

```prisma
enum Status {
  boiling
  fermenting
  cold_crashing
  done
}
```
