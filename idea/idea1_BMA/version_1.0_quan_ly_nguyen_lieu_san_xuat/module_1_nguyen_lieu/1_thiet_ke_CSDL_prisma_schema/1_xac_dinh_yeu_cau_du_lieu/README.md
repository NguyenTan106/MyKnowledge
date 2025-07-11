
## 🧩 Tổng quan CSDL – Các bảng cốt lõi
| Bảng                  | Mục tiêu chính                                   |
| --------------------- | ------------------------------------------------ |
| `Ingredient`          | Danh sách nguyên liệu trong kho                  |
| `Batch`               | Quản lý từng mẻ nấu (loại bia, ngày nấu...)      |
| `BatchIngredient`     | Liên kết nguyên liệu với từng mẻ nấu             |
| `Recipe` *(tuỳ chọn)* | Định nghĩa công thức bia có thể tái sử dụng      |
| `RecipeIngredient`    | Nguyên liệu của từng công thức (nếu có `Recipe`) |

___
## 🔗 Tùy chọn mở rộng (sau này)
| Bảng mới           | Gợi ý bổ sung                                     | Mục tiêu                                |
| ------------------ | ------------------------------------------------- | --------------------------------------- |
| `User`             | Quản lý nhân sự (quản lý, kho, nấu...)            | Phân quyền sử dụng và ghi log           |
| `StockTransaction` | Ghi nhận mọi thay đổi kho (nhập, trừ, điều chỉnh) | Lịch sử tồn kho minh bạch               |
| `BatchLog`         | Ghi timeline tiến độ từng bước mẻ                 | Giám sát chất lượng theo từng giai đoạn |
| `Attachment`       | File công thức, hình ảnh, biên bản kiểm tra       | Lưu trữ minh chứng và tài liệu kỹ thuật |
| `Supplier`         | Danh bạ nhà cung cấp nguyên liệu                  | Quản lý chuỗi cung ứng                  |
