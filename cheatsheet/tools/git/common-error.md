---
title: "Common Error"
description: ""
tags: ["cheatsheet", "tools", "git"]
category: "git"
slug: "/cheatsheet/tools/git/common-error.md"
createdAt: "2025-07-11T12:12:50"
updatedAt: "2025-07-11T12:29:42"
draft: false
---
## 🔐 Tình huống: Chưa cấu hình Git hoặc cấu hình sai tài khoản

## 🧭 Kiểm tra cấu hình hiện tại:

```bash
git config --global user.name
git config --global user.email
git remote -v
```

## 🛠 Nếu máy chưa cấu hình Git:

```bash
git config --global user.name "Tên của bạn"
git config --global user.email "email@example.com"
```

## 🧪 Nếu đang dùng Git với email/tài khoản khác:

- ✅ Cách 1: Thay đổi cấu hình toàn cục (toàn máy):

```bash
git config --global user.name "New Name"
git config --global user.email "new-email@example.com"
```

- ✅ Cách 2: Cấu hình riêng cho từng repo (an toàn hơn):

```bash
git config user.name "New Name"
git config user.email "new-email@example.com"
```

> 📌 Ưu tiên cách 2 nếu bạn dùng nhiều tài khoản GitHub (ví dụ: cá nhân & công ty)
