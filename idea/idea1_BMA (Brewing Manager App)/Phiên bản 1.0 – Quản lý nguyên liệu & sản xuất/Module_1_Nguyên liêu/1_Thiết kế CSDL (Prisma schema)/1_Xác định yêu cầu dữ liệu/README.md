
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
| Tên bảng            | Chức năng chính                                          |
| ------------------- | -------------------------------------------------------- |
| `User`              | Phân quyền: quản lý, thợ nấu, nhân viên kho              |
| `IngredientHistory` | Lưu lịch sử nhập kho, trừ kho thủ công                   |
| `BatchLog`          | Ghi lại tiến trình từng bước trong mẻ nấu (log timeline) |
| `Attachment`        | Lưu file PDF công thức, ảnh nấu bia, biên bản            |
