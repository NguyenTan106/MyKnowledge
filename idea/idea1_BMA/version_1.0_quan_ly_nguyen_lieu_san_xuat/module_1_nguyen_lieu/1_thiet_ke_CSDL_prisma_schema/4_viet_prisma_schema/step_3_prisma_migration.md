---
title: "Step 3 Prisma Migration"
description: ""
tags: ["idea", "idea1_BMA", "version_1.0_quan_ly_nguyen_lieu_san_xuat", "module_1_nguyen_lieu", "1_thiet_ke_CSDL_prisma_schema", "4_viet_prisma_schema"]
category: "4_viet_prisma_schema"
slug: "/idea/idea1_BMA/version_1.0_quan_ly_nguyen_lieu_san_xuat/module_1_nguyen_lieu/1_thiet_ke_CSDL_prisma_schema/4_viet_prisma_schema/step_3_prisma_migration.md"
createdAt: "2025-07-12T14:46:10"
updatedAt: "2025-07-12T17:55:38"
draft: false
---
# 🚀 Tạo database và Prisma Client

### ✅ Bước 1: Vào file 📁 `prisma/schema.prisma`
**1. Thêm đoạn này vào:**
```prisma
// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

// Looking for ways to speed up your queries, or scale easily with your serverless or edge functions?
// Try Prisma Accelerate: https://pris.ly/cli/accelerate-init

generator client {
  provider = "prisma-client-js"
  // output   = "../generated/prisma"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

enum Status {
  boiling
  fermenting
  cold_crashing
  done
}

model Ingredient {
  id                Int      @id @default(autoincrement())
  name              String
  type              String
  unit              String
  quantity          Float
  lowStockThreshold Float
  lastImportDate    DateTime
  notes             String?
  createdAt         DateTime @default(now())
  updatedAt         DateTime @updatedAt

  batchIngredients  BatchIngredient[]
  recipeIngredients RecipeIngredient[]
}

model Batch {
  id        Int      @id @default(autoincrement())
  code      String
  beerName  String
  status    Status
  volume    Float
  notes     String?
  recipeId  Int? // liên kết công thức (optional)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  recipe           Recipe?           @relation(fields: [recipeId], references: [id])
  batchIngredients BatchIngredient[]
}

model BatchIngredient {
  id           Int   @id @default(autoincrement())
  batchId      Int
  ingredientId Int
  amountUsed   Float

  batch      Batch      @relation(fields: [batchId], references: [id])
  ingredient Ingredient @relation(fields: [ingredientId], references: [id])
}

model Recipe {
  id           Int      @id @default(autoincrement())
  name         String
  description  String?
  note         String?
  instructions String?
  createdAt    DateTime @default(now())
  updatedAt    DateTime @updatedAt

  recipeIngredients RecipeIngredient[]
  batches           Batch[]
}

model RecipeIngredient {
  id           Int   @id @default(autoincrement())
  recipeId     Int
  ingredientId Int
  amountNeeded Float

  recipe     Recipe     @relation(fields: [recipeId], references: [id])
  ingredient Ingredient @relation(fields: [ingredientId], references: [id])
}
```

**2. Chạy lệnh khởi tạo database:**
```bash
npx prisma migrate dev --name init
```
*📌 Lúc này kiểm tra lại database đã được khởi tạo các bảng dữ liệu (tables) mong muốn chưa*
___

### ✅ Bước 2: Tạo Prisma Client
**1. Chạy lệnh:**
```bash
npx prisma generate
```

**2. Tạo file `prisma/prisma.ts` hoặc `prisma/seed.ts`**
- Gọi `PrismaClient` từ thư viện:
- Tham khảo đầy đủ ở [docs](https://www.prisma.io/docs/orm/prisma-client/setup-and-configuration/introduction#3-importing-prisma-client) của Prisma

```ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
// use `prisma` in your application to read and write data in your DB

async function main() {
  await prisma.ingredient.create({
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

**3. Sau đó chạy lệnh**
```bash
npx prisma db seed
```

*📌 Kiểm tra kết quả được tạo ra trong database*