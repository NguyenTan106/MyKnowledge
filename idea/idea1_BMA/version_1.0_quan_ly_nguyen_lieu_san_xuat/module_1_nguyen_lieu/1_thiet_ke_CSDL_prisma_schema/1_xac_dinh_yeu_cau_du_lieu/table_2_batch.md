---
title: "Table 2 Batch"
description: ""
tags: ["idea", "idea1_BMA", "version_1.0_quan_ly_nguyen_lieu_san_xuat", "module_1_nguyen_lieu", "1_thiet_ke_CSDL_prisma_schema", "1_xac_dinh_yeu_cau_du_lieu"]
category: "1_xac_dinh_yeu_cau_du_lieu"
slug: "/idea/idea1_BMA/version_1.0_quan_ly_nguyen_lieu_san_xuat/module_1_nguyen_lieu/1_thiet_ke_CSDL_prisma_schema/1_xac_dinh_yeu_cau_du_lieu/table_2_batch.md"
createdAt: "2025-07-11T21:52:05"
updatedAt: "2025-07-12T16:41:19"
draft: false
---
## 🍺 Bảng 2: `Batch`
###  🎯 Mục tiêu
Lưu thông tin của mỗi mẻ nấu bia: loại bia, mã mẻ, ngày nấu, trạng thái hiện tại, sản lượng và ghi chú tiến trình.
___
### 📋 Cấu trúc bảng `Batch`
| Trường      | Kiểu dữ liệu | Bắt buộc | Mô tả                                                           |
| ----------- | ------------ | -------- | --------------------------------------------------------------- |
| `id`        | Int          | ✅        | Mã mẻ (tự động tăng)                                            |
| `code`      | String       | ✅        | Mã định danh mẻ: `B001`, `B002`...                              |
| `beerName`  | String       | ✅        | Tên loại bia (IPA, Stout...)                                    |
| `status`    | Enum/String  | ✅        | Trạng thái mẻ: `boiling`, `fermenting`, `cold_crashing`, `done` |
| `startDate` | DateTime     | ✅        | Ngày bắt đầu nấu                                                |
| `volume`    | Float        | ✅        | Sản lượng dự kiến (lít)                                         |
| `notes`      | String       | ❌        | Ghi chú: dùng men gì, điều chỉnh đặc biệt                       |
| `createdAt` | DateTime     | ✅        | Ngày tạo                                                        |
| `updatedAt` | DateTime     | ✅        | Ngày cập nhật cuối cùng                                         |
___

### 🧪 Dữ liệu mẫu:
```json
{
  "id": 2,
  "code": "B002",
  "beerName": "Stout",
  "status": "cold_crashing",
  "startDate": "2025-07-03T00:00:00Z",
  "volume": 50,
  "notes": "Thêm hoa Cascade cuối",
  "createdAt": "2025-07-03T08:00:00Z",
  "updatedAt": "2025-07-09T10:00:00Z"
}

```
___

### 🔁 Mối quan hệ
- 1 Batch có thể dùng nhiều nguyên liệu → Quan hệ N-N với bảng Ingredient, qua bảng BatchIngredient
