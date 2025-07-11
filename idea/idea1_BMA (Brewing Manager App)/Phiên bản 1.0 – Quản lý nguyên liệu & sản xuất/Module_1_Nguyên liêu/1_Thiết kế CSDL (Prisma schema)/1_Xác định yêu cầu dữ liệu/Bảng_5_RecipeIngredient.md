## 🧂 Bảng 5: `RecipeIngredient`

###  🎯 Mục tiêu
Liệt kê nguyên liệu được sử dụng trong từng công thức, bao gồm định mức (số lượng cần dùng).

___
### 📋 Cấu trúc bảng `RecipeIngredient`
| Trường         | Kiểu dữ liệu | Bắt buộc | Mô tả                                                            |
| -------------- | ------------ | -------- | ---------------------------------------------------------------- |
| `id`           | Int          | ✅        | Mã định danh                                                     |
| `recipeId`     | Int (FK)     | ✅        | Khóa ngoại tới bảng `Recipe`                                     |
| `ingredientId` | Int (FK)     | ✅        | Khóa ngoại tới bảng `Ingredient`                                 |
| `amountNeeded` | Float        | ✅        | Lượng nguyên liệu cần dùng (đơn vị tương ứng trong `Ingredient`) |


___

### 🧪 Dữ liệu mẫu:
```json
{
  "id": 1,
  "recipeId": 1,
  "ingredientId": 1,
  "amountNeeded": 550
}
```
___

### 🔁 Mối quan hệ
- Nhiều nguyên liệu → 1 công thức

- 1 nguyên liệu có thể xuất hiện trong nhiều công thức
→ Quan hệ N-N giữa Recipe và Ingredient thông qua RecipeIngredient
