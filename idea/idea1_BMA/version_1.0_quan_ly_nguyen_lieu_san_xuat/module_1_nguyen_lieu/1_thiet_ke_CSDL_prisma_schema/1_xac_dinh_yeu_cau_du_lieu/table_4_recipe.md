---
title: "Table 4 Recipe"
description: ""
tags: ["idea", "idea1_BMA", "version_1.0_quan_ly_nguyen_lieu_san_xuat", "module_1_nguyen_lieu", "1_thiet_ke_CSDL_prisma_schema", "1_xac_dinh_yeu_cau_du_lieu"]
category: "1_xac_dinh_yeu_cau_du_lieu"
slug: "/idea/idea1_BMA/version_1.0_quan_ly_nguyen_lieu_san_xuat/module_1_nguyen_lieu/1_thiet_ke_CSDL_prisma_schema/1_xac_dinh_yeu_cau_du_lieu/table_4_recipe.md"
createdAt: "2025-07-11T21:56:55"
updatedAt: "2025-07-11T23:58:08"
draft: false
---
## 📘 Bảng 4: `Recipe`

###  🎯 Mục tiêu
Lưu trữ các công thức nấu bia, bao gồm tên, mô tả, hướng dẫn quy trình và ghi chú tùy ý.

___
### 📋 Cấu trúc bảng `BatchIngredient`
| Trường         | Kiểu dữ liệu | Bắt buộc | Mô tả                                                  |
| -------------- | ------------ | -------- | ------------------------------------------------------ |
| `id`           | Int          | ✅        | Mã định danh tự động tăng                              |
| `name`         | String       | ✅        | Tên công thức (VD: “IPA cổ điển”, “Stout đặc biệt”)    |
| `description`  | String       | ❌        | Mô tả ngắn về công thức                                |
| `note`         | String       | ❌        | Ghi chú kỹ thuật, lưu ý đặc biệt                       |
| `instructions` | Text         | ❌        | Hướng dẫn từng bước: thời gian nấu, lên men, ủ lạnh... |
| `createdAt`    | DateTime     | ✅        | Ngày tạo công thức                                     |
| `updatedAt`    | DateTime     | ✅        | Ngày cập nhật cuối cùng                                |


___

### 🧪 Dữ liệu mẫu:
```json
{
  "id": 1,
  "name": "IPA cổ điển",
  "description": "Công thức IPA đậm đà, hương hoa mạnh",
  "note": "Thích hợp dùng Cascade và US-05",
  "instructions": "Nấu 90 phút → Lên men 10 ngày → Ủ lạnh 7 ngày",
  "createdAt": "2025-06-25T08:00:00Z",
  "updatedAt": "2025-07-01T10:00:00Z"
}

```
___

### 🔁 Mối quan hệ
- 1 Recipe có thể có nhiều nguyên liệu (→ RecipeIngredient)

- Có thể liên kết Recipe → Batch nếu mẻ sử dụng công thức này (FK trong bảng Batch, tùy chọn)
