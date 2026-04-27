# 河並研究室 GitHub Pages 1ページ版

GitHub Pagesを研究室サイトのメインとして運用するための、1ページ完結型サイトです。

## 構成

```text
.
├─ index.html
├─ assets/
│  ├─ css/style.css
│  ├─ js/main.js
│  └─ images/
├─ README.md
├─ .gitignore
└─ .nojekyll
```

## 公開方法

1. GitHubで新しいリポジトリを作成します。
2. このフォルダの中身をリポジトリ直下に置きます。
3. GitHubにpushします。
4. GitHubの `Settings > Pages` を開きます。
5. `Deploy from a branch` を選びます。
6. Branchを `main`、Folderを `/root` に設定します。
7. 数分後にGitHub PagesのURLが発行されます。

## 方針

- GitHub Pagesを研究室サイトのメインとして扱う
- 長い1ページ構成にし、固定メニューで移動しやすくする
- 大学院進学を促すため、Graduate Study セクションを強める
- 研究室の成果は代表例を掲載し、詳細はresearchmapや論文、GitHub等に接続する
- HTML/CSSは人が修正しやすいようにコメントと改行を入れる

## 編集しやすい箇所

- メニュー項目: `index.html` の `<nav class="global-nav">`
- 研究テーマ: `#research` セクション
- 大学院進学メッセージ: `#graduate` セクション
- 成果・業績: `#achievements` セクション
- 公開プロジェクト: `#projects` セクション
- 色味: `assets/css/style.css` の `:root`
