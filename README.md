# 河並研究室 Web Site

金沢工業大学 情報理工学部 情報工学科 河並研究室のWebサイトです。  
研究テーマ、学生の成果、大学院進学を考える学生向けの情報、公開プロジェクト、問い合わせ先などを掲載しています。

## 公開サイト

https://kawalab.github.io/

## 研究室について

河並研究室では、IoT・センサ・AI・ネットワーク・教育工学を活用し、人の行動や学びを支援する情報システムの研究開発に取り組んでいます。

主な研究領域は以下です。

- 運動解析・ウェアラブルセンシング・モーションキャプチャ
- 歩容解析・インソール型センサ
- センサネットワーク・IoT
- STEAM教育・プログラミング教材開発（プロトタイピング、おもちゃハック、ドローン、eSports）
- 小型ドローン制御
- eSports・生体情報分析・プレイ動画解析

## ファイル構成

- index.html
- README.md
- .nojekyll
- .gitignore
- assets/
  - css/
    - style.css
  - js/
    - main.js
  - images/

## 更新方法

### 本文を修正する場合

`index.html` を編集します。  
ページは1ページ構成で、主に以下のセクションに分かれています。

- About
- Research
- Skills
- Graduate
- Achievements
- Projects
- Contact

### デザインを修正する場合

`assets/css/style.css` を編集します。

主な色は `:root` 内のCSS変数で管理しています。

- --main
- --main-dark
- --accent

### 画像を差し替える場合

`assets/images/` 内の画像を差し替えます。  
ファイル名を変えた場合は、`index.html` 側の `<img src="...">` も修正してください。

## GitHub Pages

このサイトは GitHub Pages で公開しています。

設定は以下を想定しています。

- Settings > Pages
- Source: Deploy from a branch
- Branch: main
- Folder: / root

`index.html` がトップページとして表示されます。

## 編集時の注意

- `index.html` は長いため、セクション単位で編集してください。
- 活動記録や業績を追加する場合は、`Achievements` セクションに追記してください。
- 公開プロジェクトや教材を追加する場合は、`Projects` セクションに追記してください。
- 画像を追加する場合は、ファイルサイズが大きくなりすぎないようにしてください。
- 大学名、所属、連絡先などの基本情報を変更する場合は、`Contact` セクションも確認してください。

## ライセンス・利用について

このリポジトリは河並研究室Webサイト管理用です。  
掲載している写真、図、文章の無断転載はご遠慮ください。

## 管理者

河並研究室  
金沢工業大学 情報理工学部 情報工学科  
https://kawalab.github.io/
