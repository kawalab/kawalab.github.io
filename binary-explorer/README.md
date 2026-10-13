# バイナリエクスプローラ

公開URL: https://kawalab.github.io/binary-explorer/

0と1を操作して、文字・画像・音・数値表現の変化を体験するWeb教材です。
このディレクトリの `index.html` は、CSSとJavaScriptを同梱した配布用HTMLです。
活動履歴ページ末尾の「公開プロジェクト・教材」からリンクしています。

## 更新方法

開発元は `kawanami/binary-explore-edu` です（閲覧・更新にはアクセス権が必要な場合があります）。

1. 開発元で変更・テストを完了します。
2. `node scripts/package-distribution.js` を実行します。
3. 生成された `dist/distribution/BinaryExplorer/index.html` を、このディレクトリの `index.html` にコピーします。
4. このリポジトリのルートで `node scripts/add-google-tag.cjs` を実行し、公開サイト用のGoogle Analyticsタグを追加します（既存のタグは重複追加しません）。
5. 差分を確認し、作業ブランチからPR経由で公開します。

教材本体は生成されたHTMLを直接編集せず、開発元から再生成してください。公開サイト用の計測タグのみ、上記スクリプトで追加します。

## 数の実験

2の補数、固定小数点、浮動小数点、精度・誤差の4テーマを追加。保存精度と表示桁数の違いを体験できます。
