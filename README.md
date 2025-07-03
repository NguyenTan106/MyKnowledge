## Cấu trúc file

# MyKnowledge

📚 **Kho kiến thức cá nhân** – tổ chức hệ thống theo **chủ đề**, **ngôn ngữ lập trình**, **dự án**, và **công cụ hỗ trợ**. Dành riêng để học tập, tra cứu và phát triển lâu dài.

## 📂 Cấu trúc chính:

- `cheatsheet/`  
  ⤷ Tổng hợp nhanh các lệnh, cú pháp, biểu thức thường dùng như Git, Regex, Markdown... dùng để tra cứu nhanh khi làm việc.

- `daily-tips/`  
  ⤷ Ghi chú mẹo ngắn, kinh nghiệm thực chiến, trick debug, phím tắt, cải thiện hiệu suất làm việc.

- `idea/`  
  ⤷ Ghi lại các ý tưởng về sản phẩm, tính năng, project tiềm năng hoặc công nghệ muốn khám phá trong tương lai.

- `learning-plan/`  
  ⤷ Lộ trình học tập ngắn hạn & dài hạn (theo tháng, quý, năm) – chia theo mục tiêu, chủ đề, hoặc vai trò nghề nghiệp (frontend, backend...).

- `programming/`  
  ⤷ Kho kiến thức thuật toán, cấu trúc dữ liệu, nguyên lý lập trình, phân tích hệ thống, OOP, REST API, phân chia theo ngôn ngữ lập trình.

- `project-notes/`  
  ⤷ Nhật ký, phân tích, tiến trình & kỹ thuật được sử dụng trong các dự án cá nhân hoặc nhóm (blockchain, e-commerce...).

- `tools/`  
  ⤷ Tài liệu về cài đặt, cấu hình và sử dụng các công cụ phổ biến: Git, Docker, VS Code, Github CLI, CI/CD...

- `summary/`  
  ⤷ Tổng hợp kiến thức dạng rút gọn, bảng so sánh, mindmap hoặc quick-note để ôn tập nhanh theo chủ đề cụ thể.

---

## ✨ Mục tiêu

- Xây dựng hệ thống kiến thức cá nhân rõ ràng, dễ tra cứu và tái sử dụng.
- Làm nền tảng phát triển blog học tập, tài liệu giảng dạy hoặc port về site cá nhân.
- Dễ dàng mở rộng theo nhu cầu học tập và làm việc thực tế.

---

> 🔧 Được tổ chức dưới dạng Markdown giúp dễ chia sẻ, chuyển đổi sang blog, PDF hoặc dùng với các static site generator như **Docusaurus**, **Next.js (MDX)** hoặc **Astro**.

- [cheatsheet](cheatsheet/README.md)
  - [tool](cheatsheet/tools/)
    - [docker](cheatsheet/tools/docker/)
    - [git](cheatsheet/git/)
      - [basic.md](cheatsheet/git/basic.md)
      - [common-target.md](cheatsheet/git/common-target.md)
      - [common-error.md](cheatsheet/git/common-error.md)
    - [vscode](cheatsheet/tools/vscode/)
  - [syntax](cheatsheet/syntax/)
    - [markdown.md](cheatsheet/syntax/markdown.md)
    - [regex.md](cheatsheet/syntax/regex.md)
- [daily-tips](daily-tips/README.md)
- [idea](idea/README.md)
- [learning-plan](learning-plan/README.md)
- [programming](programming/README.md)
  - [commons](programming/commons/)
    - [api.md](programming/commons/api.md)
    - [markdown.md](programming/commons/markdown.md)
    - [oop.md](programming/commons/oop.md)
    - [restfulApi.md](programming/commons/restfulApi.md)
  - [languages](programming/languages/)
    - [c#](programming/languages/c#/)
      - [frameworks](programming/languages/c#/frameworks/)
        - [tailwind.md](programming/languages/c#/frameworks/tailwind.md)
      - [libraries](programming/languages/c#/libraries/)
      - [basic.md](programming/languages/c#/basic.md)
    - [css](programming/languages/css/)
      - [basic.md](programming/languages/css/basic.md)
    - [html](programming/languages/html/)
      - [basic.md](programming/languages/html/basic.md)
    - [java](programming/languages/java/)
      - [basic.md](programming/languages/java/basic.md)
    - [javascript](programming/languages/javascript/)
      - [frameworks](programming/languages/javascript/frameworks/)
        - [nodejs.md](programming/languages/javascript/frameworks/nodejs.md)
        - [reactjs.md](programming/languages/javascript/frameworks/reactjs.md)
      - [typesscript](programming/languages/javascript/typesscript/)
        - [frameworks](programming/languages/javascript/typesscript/frameworks/)
          - [nodejs.md](programming/languages/javascript/typesscript/frameworks/nodejs.md)
          - [reactjs.md](programming/languages/javascript/typesscript/frameworks/reactjs.md)
        - [basic.md](programming/languages/javascript/typesscript/basic.md)
      - [basic.md](programming/languages/javascript/basic.md)
    - [python](programming/languages/python/)
      - [frameworks](programming/languages/python/frameworks/)
        - [django.md](programming/languages/python/frameworks/django.md)
      - [basic.md](programming/languages/python/basic.md)
    - [solidity](programming/languages/solidity/)
      - [basic.md](programming/languages/solidity/basic.md)
    - [sql](programming/languages/sql/)
      - [nosql](programming/languages/sql/nosql/)
      - [basic.md](programming/languages/sql/basic.md)
  - [theory](programming/theory/)
    - [algorithm](programming/theory/algorithm/)
      - [commons](programming/theory/algorithm/commons/)
        - [search](programming/theory/algorithm/commons/search/)
          - [binary.md](programming/theory/algorithm/commons/search/binary.md)
          - [linear.md](programming/theory/algorithm/commons/search/linear.md)
        - [sort](programming/theory/algorithm/commons/sort/)
          - [bubble.md](programming/theory/algorithm/commons/sort/bubble.md)
          - [insertion.md](programming/theory/algorithm/commons/sort/insertion.md)
          - [selection.md](programming/theory/algorithm/commons/sort/selection.md)
      - [machine-learning](programming/theory/algorithm/machine-learning/)
        - [naive-bayes-classifier.md](programming/theory/algorithm/machine-learning/naive-bayes-classifier.md)
        - [tf-idf.md](programming/theory/algorithm/machine-learning/tf-idf.md)
      - [binary-tree.md](programming/theory/algorithm/binary-tree.md)
      - [dijkstra.md](programming/theory/algorithm/dijkstra.md)
      - [hash.md](programming/theory/algorithm/hash.md)
      - [stack&queue.md](programming/theory/algorithm/stack&queue.md)
    - [data-structure](programming/theory/data-structure/)
    - [design-pattern](programming/theory/design-pattern/)
    - [software-architecture](programming/theory/software-architecture/)
- [project-notes](project-notes/)
  - [personal](project-notes/personal/)
    - [blockchain](project-notes/personal/blockchain/)
    - [e-commerce](project-notes/personal/e-commerce/)
  - [team](project-notes/team/)
  - [README.md](project-notes/README.md)
- [summary](summary/)
  - [README.md](summary/README.md)
- [README.md](README.md)
