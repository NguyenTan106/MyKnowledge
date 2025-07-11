---
title: "Pre Project"
description: ""
tags: ["idea", "idea1_MPM (Material & Production Manager)"]
category: "idea1_MPM (Material & Production Manager)"
slug: "/idea/idea1_MPM (Material & Production Manager)/pre-project.md"
createdAt: "2025-07-11T12:42:53"
updatedAt: "2025-07-11T15:00:16"
draft: false
---
# ✅ Tổng quan Stack đề xuất (hiện đại - dễ triển khai - có GUI đẹp)

| Thành phần             | Công cụ đề xuất            | Lý do chọn                                                                 |
|------------------------|----------------------------|-----------------------------------------------------------------------------|
| **Giao diện (Frontend)** | React + Tailwind CSS        | Giao diện nhanh, đẹp, dễ tùy biến, cộng đồng lớn                           |
| **Backend (API)**      | Node.js + Express.js        | Dễ tích hợp với React, đơn giản cho REST API                               |
| **Cơ sở dữ liệu**       | SQLite / PostgreSQL         | SQLite dễ dùng cho local, PostgreSQL mạnh nếu triển khai thật              |
| **ORM**                | Prisma                      | Quản lý database dễ, có CLI và type-safety tốt với TypeScript              |
| **Quản lý state UI**    | React Context / Redux Toolkit | Quản lý form, nhập kho, trạng thái mẻ nấu                                  |
| **Xử lý biểu đồ**       | Recharts                    | Tạo biểu đồ tồn kho, sản xuất mẻ đơn giản                                  |
| **Auth (nếu cần)**      | Firebase Auth / Auth.js     | Nếu có nhiều nhân sự cần phân quyền                                        |
| **Lưu file (công thức)**| File JSON / Markdown / SQLite | Tùy mục tiêu, có thể cho lưu công thức nấu offline                        |

___

# 🛠️ Công cụ phát triển

| Mục đích                        | Công cụ             |
|---------------------------------|----------------------|
| Soạn code                      | VS Code             |
| Quản lý project                | Git + GitHub        |
| Cài đặt & chạy database        | SQLite Viewer / TablePlus |
| Giao tiếp frontend ↔ backend   | Postman (test API)  |
| Thiết kế UI mockup             | Figma (nếu cần)     |

___

# 🚀 Gợi ý khởi đầu nhanh

## 📁 Tạo cấu trúc thư mục:

```bash
brew-manager/
├── client/ # React App
├── server/ # Node.js API
├── prisma/ # Prisma ORM config
├── database/ # SQLite file hoặc migration
└── README.md
```

___

## ▶️ Bắt đầu:

### Khởi tạo server:

```bash
mkdir server && cd server
npm init -y
npm install express cors prisma @prisma/client
npx prisma init
```

### 🚀 Khởi tạo frontend với Vite:


**📦 1. Tạo project React + TypeScript bằng Vite**
```bash
npm create vite@latest client -- --template react-ts
cd client
```
**💿 2. Cài đặt Tailwind CSS**
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

**🛠️ 3. Cấu hình Tailwind**
Trong `tailwind.config.js`, chỉnh:
```bash
content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"]
```

Trong `src/index.css`, thay thế bằng:

```bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```
Và trong `main.tsx`, nhớ import:
```bash
import './index.css'
```
**▶️ 4. Chạy thử**
```bash
npm run dev
```

## 🔁 Tích hợp đơn giản:
- React → gửi request tới /api/ingredients (Express)
- Express → truy vấn Prisma tới SQLite

## 🎯 Ưu tiên triển khai
1. 📦 Module “Quản lý nguyên liệu” → thêm / sửa / cảnh báo số lượng thấp

2. 🍺 Module “Tạo mẻ nấu” → chọn công thức → kiểm tra đủ nguyên liệu → trừ kho

3. 📊 Module “Thống kê” → biểu đồ sử dụng / cảnh báo

4. 📅 Module “Lịch sản xuất” → timeline mẻ nấu

___