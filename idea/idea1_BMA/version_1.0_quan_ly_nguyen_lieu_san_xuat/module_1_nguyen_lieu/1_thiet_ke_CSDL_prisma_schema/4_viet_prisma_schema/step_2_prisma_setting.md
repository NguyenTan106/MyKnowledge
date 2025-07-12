---
title: "Step 2 Prisma Setting"
description: ""
tags: ["idea", "idea1_BMA", "version_1.0_quan_ly_nguyen_lieu_san_xuat", "module_1_nguyen_lieu", "1_thiet_ke_CSDL_prisma_schema", "4_viet_prisma_schema"]
category: "4_viet_prisma_schema"
slug: "/idea/idea1_BMA/version_1.0_quan_ly_nguyen_lieu_san_xuat/module_1_nguyen_lieu/1_thiet_ke_CSDL_prisma_schema/4_viet_prisma_schema/step_2_prisma_setting.md"
createdAt: "2025-07-12T13:44:10"
updatedAt: "2025-07-12T16:42:14"
draft: false
---
# 🚀 Khởi Tạo Dự Án Prisma + TypeScript

Hướng dẫn thiết lập môi trường phát triển backend sử dụng **Prisma ORM** kết hợp **TypeScript**.

---

## ✅ Bước 1: Tạo thư mục và khởi tạo dự án

```bash
mkdir Brewing_Manager_App
cd Brewing_Manager_App
npm init -y
```
___

## ✅ Bước 2: Cài đặt thư viện cần thiết
```bash
npm install --save-dev prisma typescript ts-node @types/node nodemon && npm install @prisma/client
```

**Giải thích:**
📌 [Chú thích 6 thư viện vừa tải](explain_libraries.md)

___

## ✅ Bước 3: Khởi tạo prisma

```bash
npx prisma init --datasource-provider postgresql
```
**✅ Giải thích từng phần:**
| Thành phần                         | Ý nghĩa                                                                |
| ---------------------------------- | ---------------------------------------------------------------------- |
| `npx`                              | Chạy một package (ở đây là `prisma`) mà không cần cài global           |
| `prisma init`                      | Khởi tạo cấu trúc mặc định cho Prisma (thư mục `prisma/`, file `.env`) |
| `--datasource-provider postgresql` | Chỉ định loại **CSDL** bạn sử dụng là **PostgreSQL**                   |


### 📁 Kết quả sau khi chạy:
Lệnh này tạo ra các file sau:
```bash
.
├── prisma/
│   └── schema.prisma       # File định nghĩa datasource & models
├── .env                    # File chứa DATABASE_URL
```

### 📄 Nội dung tự động tạo:

`prisma/schema.prisma`
```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

`.env`
```env
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/DATABASE"
```
- Cần thay đổi USER, PASSWORD, DATABASE cho đúng cấu hình thực tế.

### 📌 Mục đích chính của lệnh này:
- Tạo bộ khởi đầu để dùng Prisma với PostgreSQL

- Không cần phải sửa thủ công phần `provider = "..."` nữa

- Giúp khởi động dự án nhanh và chính xác theo loại CSDL bạn muốn dùng

___

## ✅ Bước 4: Tạo file `tsconfig.json`
- Tham khảo tại [docs](https://www.prisma.io/docs/guides/permit-io-access-control#13-set-up-your-typescript-config)  của Prisma

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "CommonJS",
    "moduleResolution": "node",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true,
    "outDir": "dist"
  },
}
```
### ✅ Giải thích chi tiết từng tùy chọn
🔧 `compilerOptions`: Thiết lập cách biên dịch
| Tùy chọn                                 | Giải thích                                                                      |
| ---------------------------------------- | ------------------------------------------------------------------------------- |
| `target: "ES2020"`                       | Mã JavaScript đầu ra sẽ tuân theo chuẩn ECMAScript 2020                         |
| `module: "CommonJS"`                     | Dùng chuẩn module CommonJS (thường dùng trong Node.js)                          |
| `moduleResolution: "node"`               | Cách TypeScript tìm module giống như Node.js                                    |
| `esModuleInterop: true`                  | Cho phép import thư viện CommonJS bằng cú pháp ESModule (`import fs from "fs"`) |
| `forceConsistentCasingInFileNames: true` | Ngăn lỗi do khác biệt chữ hoa/thường giữa file name (giúp code cross-platform)  |
| `strict: true`                           | Bật tất cả các kiểm tra nghiêm ngặt về kiểu (giúp viết code an toàn hơn)        |
| `skipLibCheck: true`                     | Bỏ qua kiểm tra type trong thư viện (giúp build nhanh hơn)                      |
| `outDir: "dist"`                         | Chỉ định thư mục chứa file `.js` sau khi biên dịch                              |

___


## ✅ Bước 5 (tùy chọn): Format và tải extension: `Prisma`

1. [Tải extension Prisma](https://marketplace.visualstudio.com/items?itemName=Prisma.prisma)
2. Vào file `setting.json` trên VSCode
- Thêm đoạn này vào
```json
  "[prisma]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "Prisma.prisma"
  },
```

- Hoặc có thể dùng dòng lệnh (thủ công):
```bash
npx prisma format
```
