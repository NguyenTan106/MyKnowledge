---
title: "Common Target"
description: ""
tags: ["cheatsheet", "tools", "git"]
category: "git"
slug: "/cheatsheet/tools/git/common-target.md"
createdAt: "2025-07-11T12:12:50"
updatedAt: "2025-07-11T12:29:42"
draft: false
---
## ✅ MỤC TIÊU THƯỜNG GẶP KHI DÙNG GIT

| Tình huống                       | Mục tiêu cụ thể                        |
| -------------------------------- | -------------------------------------- |
| 🔃 Clone project về máy          | Lấy toàn bộ mã nguồn từ GitHub         |
| ⬆️ Push code của mình lên GitHub | Upload source code + version control   |
| ⬇️ Pull code mới từ GitHub       | Cập nhật bản mới nhất từ nhóm/remote   |
| 🔀 Merge, giải conflict          | Gộp nhánh hoặc xử lý khi đụng thay đổi |

## 🔽 1. Clone project về máy lần đầu

```bash
git clone https://github.com/username/repo-name.git
cd repo-name
```

> 📌 Nếu bạn clone xong, mặc định đã có remote origin trỏ đến repo.

## ✏️ 2. Làm việc với project (add, commit, push)

> 📌 Lần đầu kết nối với git:

```bash
git init                         # Khởi tạo
git commit -m "first commit"
git branch -M main               # Đổi nhánh
git remote add origin <link git> # Kết nối đến repo đã tạo sẵn trên git
git push -u origin main
```

1. Sau khi sửa file:

```bash
git status               # Kiểm tra file thay đổi
git add .                # Stage toàn bộ thay đổi
git commit -m "Nội dung commit rõ ràng"
```

2. Push code lên GitHub:

```bash
git push                 # Nếu nhánh đã gắn với remote
```

> 📌 Lần đầu push nhánh mới:

```bash
git push -u origin ten-nhanh
```

## 🔃 3. Pull bản mới nhất từ GitHub

- Trước khi code tiếp – bạn nên luôn pull:

```bash
git pull                 # Từ nhánh đang làm việc
```

> 📌 Nếu đang code dở mà có thay đổi từ nhóm → dễ bị xung đột (conflict)
> → Hãy stash tạm trước:

```bash
git stash
git pull
git stash pop            # Lấy lại code của mình
```

## 🔐 Thêm remote nếu tự tạo repo sau

```bash
git remote add origin https://github.com/username/repo.git
git push -u origin main
```

> 💬 “Luôn pull trước khi push để tránh conflict.
> Đặt tên commit ngắn gọn – dễ hiểu – tránh sửa lại nhiều lần.”
