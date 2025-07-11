---
title: "Table 5 RecipeIngredient"
description: ""
tags: ["idea", "idea1_BMA", "version_1.0_quan_ly_nguyen_lieu_san_xuat", "module_1_nguyen_lieu", "1_thiet_ke_CSDL_prisma_schema", "1_xac_dinh_yeu_cau_du_lieu"]
category: "1_xac_dinh_yeu_cau_du_lieu"
slug: "/idea/idea1_BMA/version_1.0_quan_ly_nguyen_lieu_san_xuat/module_1_nguyen_lieu/1_thiet_ke_CSDL_prisma_schema/1_xac_dinh_yeu_cau_du_lieu/table_5_recipeIngredient.md"
createdAt: "2025-07-11T21:57:09"
updatedAt: "2025-07-11T23:58:08"
draft: false
---
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
