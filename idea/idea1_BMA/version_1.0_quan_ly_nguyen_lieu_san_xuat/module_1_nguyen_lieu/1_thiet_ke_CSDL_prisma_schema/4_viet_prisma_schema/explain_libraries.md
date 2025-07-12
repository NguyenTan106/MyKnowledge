---
title: "Explain Libraries"
description: ""
tags: ["idea", "idea1_BMA", "version_1.0_quan_ly_nguyen_lieu_san_xuat", "module_1_nguyen_lieu", "1_thiet_ke_CSDL_prisma_schema", "4_viet_prisma_schema"]
category: "4_viet_prisma_schema"
slug: "/idea/idea1_BMA/version_1.0_quan_ly_nguyen_lieu_san_xuat/module_1_nguyen_lieu/1_thiet_ke_CSDL_prisma_schema/4_viet_prisma_schema/explain_libraries.md"
createdAt: "2025-07-12T13:50:40"
updatedAt: "2025-07-12T16:41:19"
draft: false
---
## 📝 Chú thích:

### ✅ 1. `prisma`
> ORM (Object-Relational Mapping) giúp giao tiếp với database như PostgreSQL, MySQL, SQLite... thông qua mã TypeScript.

- Dùng để sinh model, migration, kết nối CSDL.

- Viết truy vấn bằng cú pháp đơn giản thay vì SQL thuần.

📌 Ví dụ:
```ts
const users = await prisma.user.findMany();
```
### ✅ 2. `@prisma/client`
- Thư viện `client` được Prisma sinh ra để giao tiếp với database

📌 Ví dụ:
```ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
// use `prisma` in your application to read and write data in your DB

async function main() {
  await prisma.ingredient.deleteMany();
    const ingredient = await prisma.ingredient.create({
      data: {
        name: "Cascade",
        type: "hop",
        unit: "g",
        quantity: 850,
        lowStockThreshold: 500,
        lastImportDate: "2025-07-01T00:00:00Z",
        notes: "Dùng cho IPA, hương cam chanh mạnh",
        createdAt: "2025-07-01T10:15:00Z",
        updatedAt: "2025-07-01T10:15:00Z",
      },
    });
    console.log(`Created ingredient:`, ingredient);
}

main()
  .then(() => {
    console.log(`successfully`);
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
```

___

### ✅ 3. `typescript`
> Ngôn ngữ lập trình mở rộng từ JavaScript, có hệ thống kiểu tĩnh.

- Biên dịch `.ts` → `.js`.

- Cần thiết để dùng cú pháp TypeScript.

📌 Dùng lệnh:
```bash
npx tsc index.ts
```

___

### ✅ 4. `ts-node`
> Cho phép chạy trực tiếp file `.ts` mà không cần biên dịch thủ công.

- Thay vì `tsc` → `.js`, rồi node, bạn có thể chạy thẳng:

```bash
npx ts-node src/index.ts
```

___

### ✅ 5. `@types/node`
> Bộ định nghĩa kiểu (types) cho thư viện Node.js, giúp TypeScript hiểu các hàm như `process`, `fs`, `path`,...

- Cần để dùng API của Node trong TypeScript.

- Không chứa code, chỉ chứa file `.d.ts`.

📌 Ví dụ: để không bị lỗi khi dùng `process.env.PORT` trong TypeScript.

___

### ✅ 6. `nodemon`
> Tự động restart ứng dụng khi bạn thay đổi file.

- Tăng tốc quá trình phát triển.

- Dùng chung với `ts-node` trong project TS:

📌 Ví dụ trong `package.json`:

___

### 📦 Tóm tắt:
| Gói           | Vai trò chính                             |
| ------------- | ----------------------------------------- |
| `prisma`      | ORM kết nối database                      |
| `typescript`  | Biên dịch TypeScript                      |
| `ts-node`     | Chạy trực tiếp file `.ts` không cần build |
| `@types/node` | Thêm type cho Node.js vào TypeScript      |
| `nodemon`     | Tự động reload khi code thay đổi          |
