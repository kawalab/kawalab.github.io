# バイナリエクスプローラ

公開URL: https://kawalab.github.io/binary-explorer/

0と1を操作して、文字・画像・音の変化を体験するWeb教材です。
このディレクトリの `index.html` は、CSSとJavaScriptを同梱した配布用HTMLです。
活動履歴ページ末尾の「公開プロジェクト・教材」からリンクしています。

## 更新方法

開発元は `kawanami/binary-explore-edu` です（閲覧・更新にはアクセス権が必要な場合があります）。

1. 開発元で変更・テストを完了します。
2. `node scripts/package-distribution.js` を実行します。
3. 生成された `dist/distribution/BinaryExplorer/index.html` を、このディレクトリの `index.html` にコピーします。
4. このリポジトリへコミット・pushし、GitHub Pagesの公開結果を確認します。

生成されたHTMLは直接編集せず、開発元から再生成してください。
