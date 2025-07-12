---
title: "3 Kiem Tra Kha Nang Mo Rong"
description: ""
tags: ["idea", "idea1_BMA", "version_1.0_quan_ly_nguyen_lieu_san_xuat", "module_1_nguyen_lieu", "1_thiet_ke_CSDL_prisma_schema"]
category: "1_thiet_ke_CSDL_prisma_schema"
slug: "/idea/idea1_BMA/version_1.0_quan_ly_nguyen_lieu_san_xuat/module_1_nguyen_lieu/1_thiet_ke_CSDL_prisma_schema/3_kiem_tra_kha_nang_mo_rong.md"
createdAt: "2025-07-11T21:16:42"
updatedAt: "2025-07-11T23:58:08"
draft: false
---

## 🚀 Đánh giá & Gợi ý mở rộng theo từng bảng

### 📦 Bảng `Ingredient`


| Hiện tại                    | Gợi ý mở rộng                                          | Mục đích                                 |
| --------------------------- | ------------------------------------------------------ | ---------------------------------------- |
| Lưu thông tin tồn kho       | ➕ `pricePerUnit`, `supplierName`, `origin`             | Quản lý giá nhập, nhà cung cấp           |
| Một bản ghi = 1 nguyên liệu | ➕ **bảng phụ `IngredientHistory`** (lưu log nhập/xuất) | Theo dõi biến động kho, vòng quay hàng   |
| Không có hạn dùng           | ➕ `expirationDate`                                     | Quản lý hạn sử dụng cho men/hop nhạy cảm |
| Không có ảnh                | ➕ `imageUrl`                                           | Hiển thị trực quan cho người dùng mới    |

___

### 🍺 Bảng `Batch`

| Hiện tại                          | Gợi ý mở rộng                                | Mục đích                                       |
| --------------------------------- | -------------------------------------------- | ---------------------------------------------- |
| Mẻ chỉ có status & ngày bắt đầu   | ➕ `startDate`, `endDate`, `bottlingDate`     | Tính thời gian nấu/ủ/lên men                   |
| Không có người phụ trách          | ➕ `userId` (nếu có bảng `User`)              | Theo dõi ai đã thực hiện mẻ                    |
| Không theo dõi chi tiết quá trình | ➕ bảng `BatchLog` (ghi từng bước, từng ngày) | Theo dõi sát quy trình và truy vết lỗi         |
| Không có trạng thái chất lượng    | ➕ `qualityRating`, `issuesNote`              | Ghi nhận chất lượng mẻ (ví dụ: hỏng, bị ôi...) |


___

### 🧮 Bảng `BatchIngredient`

| Hiện tại     | Gợi ý mở rộng                                      | Mục đích                          |
| ------------ | -------------------------------------------------- | --------------------------------- |
| Ghi đơn giản | ➕ `unitCost`, `totalCost`, `importSource`          | Phân tích chi phí theo từng mẻ    |
| Không log    | ➕ bảng `StockTransaction` (loại: “used for batch”) | Gộp nhập/xuất/tiêu thụ vào 1 bảng |

___

### 📘 Bảng `Recipe`

| Hiện tại              | Gợi ý mở rộng                                   | Mục đích                                           |
| --------------------- | ----------------------------------------------- | -------------------------------------------------- |
| Ghi cơ bản            | ➕ `version`, `isPublic`, `createdByUserId`      | Cho phép nhiều công thức giống nhau khác phiên bản |
| Không có tệp đính kèm | ➕ bảng `Attachment` (PDF, hình ảnh, bảng excel) | Gắn file mô tả quy trình, hình ảnh nấu bia         |
| Chỉ mô tả văn bản     | ➕ bảng `RecipeStep`                             | Phân tách từng bước → quản lý chi tiết hơn         |

___

### 🧂 Bảng `RecipeIngredient`

| Hiện tại              | Gợi ý mở rộng                    | Mục đích                             |
| --------------------- | -------------------------------- | ------------------------------------ |
| Ghi lượng nguyên liệu | ➕ `stepNumber`, `timing`, `note` | Ghi rõ thêm hoa khi nào, men khi nào |


___

### 📌 Tổng kết tư duy mở rộng

| Bảng               | Mục đích chính                                           |
| ------------------ | -------------------------------------------------------- |
| `User`             | Quản lý người dùng (quản lý, nhân viên, phụ bếp...)      |
| `StockTransaction` | Ghi nhận mọi thay đổi trong kho (nhập, xuất, điều chỉnh) |
| `BatchLog`         | Ghi timeline từng mẻ: nấu, lên men, ủ lạnh, đóng chai... |
| `Attachment`       | Lưu file PDF, hình ảnh, công thức                        |
| `Supplier`         | Danh bạ nhà cung cấp                                     |
| `QualityCheck`     | Ghi nhận đánh giá chất lượng đầu ra của từng mẻ          |
| `NotificationLog`  | Ghi lại các cảnh báo đã gửi (VD: nguyên liệu sắp hết)    |
