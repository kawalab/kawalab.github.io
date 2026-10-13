// Apply site-specific analytics after copying the Binary Explorer distribution.
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const id = 'G-H2GX859R7V';
const tag = `<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=${id}"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${id}');
</script>`;

for (const file of ['index.html', 'profile.html', 'activity.html', 'binary-explorer/index.html']) {
  const target = path.join(root, file);
  const html = fs.readFileSync(target, 'utf8');
  if (html.includes('googletagmanager.com/gtag/js')) {
    if (!html.includes(`gtag('config', '${id}')`)) {
      throw new Error(`Review existing Google tag in ${file}`);
    }
    console.log(`${file}: tag already present`);
    continue;
  }
  if (!html.includes('<head>')) throw new Error(`Missing head in ${file}`);
  const newline = html.includes('\r\n') ? '\r\n' : '\n';
  fs.writeFileSync(target, html.replace('<head>', '<head>' + newline + tag.replaceAll('\n', newline)));
  console.log(`${file}: tag added`);
}
