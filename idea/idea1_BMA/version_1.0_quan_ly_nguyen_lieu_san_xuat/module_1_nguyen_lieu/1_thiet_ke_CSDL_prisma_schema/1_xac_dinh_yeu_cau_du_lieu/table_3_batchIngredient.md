---
title: "Table 3 BatchIngredient"
description: ""
tags: ["idea", "idea1_BMA", "version_1.0_quan_ly_nguyen_lieu_san_xuat", "module_1_nguyen_lieu", "1_thiet_ke_CSDL_prisma_schema", "1_xac_dinh_yeu_cau_du_lieu"]
category: "1_xac_dinh_yeu_cau_du_lieu"
slug: "/idea/idea1_BMA/version_1.0_quan_ly_nguyen_lieu_san_xuat/module_1_nguyen_lieu/1_thiet_ke_CSDL_prisma_schema/1_xac_dinh_yeu_cau_du_lieu/table_3_batchIngredient.md"
createdAt: "2025-07-11T21:54:35"
updatedAt: "2025-07-11T23:58:08"
draft: false
---
## 🧮 Bảng 3: `BatchIngredient`

###  🎯 Mục tiêu
Ghi lại chi tiết nguyên liệu nào được sử dụng trong mỗi mẻ, và với số lượng bao nhiêu.

___
### 📋 Cấu trúc bảng `BatchIngredient`
| Trường         | Kiểu dữ liệu | Bắt buộc | Mô tả                                    |
| -------------- | ------------ | -------- | ---------------------------------------- |
| `id`           | Int          | ✅        | Khoá chính tự động tăng                  |
| `batchId`      | Int (FK)     | ✅        | Tham chiếu đến bảng `Batch`              |
| `ingredientId` | Int (FK)     | ✅        | Tham chiếu đến bảng `Ingredient`         |
| `amountUsed`   | Float        | ✅        | Số lượng nguyên liệu đã dùng trong mẻ đó |

___

### 🧪 Dữ liệu mẫu:
```json
{
  "id": 1,
  "batchId": 2,
  "ingredientId": 1,
  "amountUsed": 500
}

```
___

### 🔁 Mối quan hệ
- Nhiều nguyên liệu được dùng trong nhiều mẻ
→ Quan hệ N-N giữa Batch và Ingredient, trung gian là BatchIngredient
