---
title: "Test"
description: ""
tags: ["project-notes", "personal", "brewing-manger"]
category: "brewing-manger"
slug: "/project-notes/personal/brewing-manger/test.md"
createdAt: "2025-07-28T17:14:53"
updatedAt: "2025-07-28T19:03:30"
draft: false
---
## 1. Kiểm thử chức năng (Functional Test)

| Tính năng                 | Trường hợp kiểm thử         | Dự kiến          | Kết quả thực tế |
| ------------------------- | --------------------------- | ---------------- | --------------- |
| Tạo nguyên liệu           | Nhập đầy đủ dữ liệu         | Thành công       | ✅ / ❌           |
| Tạo nguyên liệu           | Thiếu tên nguyên liệu       | Báo lỗi          | ✅ / ❌           |
| Tạo công thức             | Chọn nguyên liệu + số lượng | Thành công       | ✅ / ❌           |
| Tạo batch mới             | Chọn công thức, người nấu   | Thành công       | ✅ / ❌           |
| Lấy danh sách nguyên liệu | Gọi API GET `/ingredients`  | Trả về mảng JSON | ✅ / ❌           |
| Đăng nhập sai mật khẩu    | Gửi POST `/login`           | Trả về lỗi 401   | ✅ / ❌           |
