// GitHub Pages 1ページ版の補助スクリプト
// 現在のセクションに応じてメニューを強調します。

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.global-nav a[href^="#"]');

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            const id = entry.target.getAttribute('id');
            navLinks.forEach((link) => {
                link.removeAttribute('aria-current');
                if (link.getAttribute('href') === `#${id}`) {
                    link.setAttribute('aria-current', 'page');
                }
            });
        });
    },
    { rootMargin: '-35% 0px -55% 0px', threshold: 0.01 }
);

sections.forEach((section) => observer.observe(section));
