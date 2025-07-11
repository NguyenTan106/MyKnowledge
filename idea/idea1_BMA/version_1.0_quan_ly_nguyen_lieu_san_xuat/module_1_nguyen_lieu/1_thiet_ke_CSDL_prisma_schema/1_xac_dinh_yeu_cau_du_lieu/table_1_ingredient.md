---
title: "Table 1 Ingredient"
description: ""
tags: ["idea", "idea1_BMA", "version_1.0_quan_ly_nguyen_lieu_san_xuat", "module_1_nguyen_lieu", "1_thiet_ke_CSDL_prisma_schema", "1_xac_dinh_yeu_cau_du_lieu"]
category: "1_xac_dinh_yeu_cau_du_lieu"
slug: "/idea/idea1_BMA/version_1.0_quan_ly_nguyen_lieu_san_xuat/module_1_nguyen_lieu/1_thiet_ke_CSDL_prisma_schema/1_xac_dinh_yeu_cau_du_lieu/table_1_ingredient.md"
createdAt: "2025-07-11T21:12:38"
updatedAt: "2025-07-11T23:58:08"
draft: false
---
## 📦 Bảng 1: `Ingredient`
###  🎯 Mục tiêu
Quản lý danh sách nguyên liệu trong kho, bao gồm: tên, đơn vị, số lượng tồn, ngưỡng cảnh báo, ngày nhập kho gần nhất và ghi chú.

___
### 📋 Cấu trúc bảng `Ingredient`
| Trường              | Kiểu dữ liệu | Bắt buộc | Mô tả                                               |
| ------------------- | ------------ | -------- | --------------------------------------------------- |
| `id`                | Int          | ✅        | Mã định danh tự động tăng                           |
| `name`              | String       | ✅        | Tên nguyên liệu (duy nhất)                          |
| `type`              | String       | ✅        | Loại nguyên liệu (`malt`, `hop`, `yeast`, `other`)  |
| `unit`              | String       | ✅        | Đơn vị tính (vd: `kg`, `g`, `gói`, `l`)             |
| `quantity`          | Float        | ✅        | Số lượng tồn kho hiện tại                           |
| `lowStockThreshold` | Float        | ✅        | Ngưỡng cảnh báo số lượng thấp                       |
| `lastImportDate`    | DateTime     | ✅        | Ngày nhập gần nhất của nguyên liệu                  |
| `note`              | String       | ❌        | Ghi chú bổ sung (nguồn gốc, cách dùng, đặc điểm...) |
| `createdAt`         | DateTime     | ✅        | Ngày tạo bản ghi                                    |
| `updatedAt`         | DateTime     | ✅        | Tự động cập nhật mỗi lần sửa                        |

___
### 🧪 Dữ liệu mẫu:
```json
{
  "id": 1,
  "name": "Cascade",
  "type": "hop",
  "unit": "g",
  "quantity": 850,
  "lowStockThreshold": 500,
  "lastImportDate": "2025-07-01T00:00:00Z",
  "note": "Dùng cho IPA, hương cam chanh mạnh",
  "createdAt": "2025-07-01T10:15:00Z",
  "updatedAt": "2025-07-01T10:15:00Z"
}
```
___
### 🔁 Mối quan hệ
- 1 Ingredient có thể được dùng trong nhiều mẻ → Quan hệ 1-N với bảng BatchIngredient
