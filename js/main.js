// Language toggle
const langBtn = document.getElementById('langBtn');
let currentLang = 'zh';

langBtn.addEventListener('click', () => {
    currentLang = currentLang === 'zh' ? 'en' : 'zh';
    langBtn.textContent = currentLang === 'zh' ? 'EN' : '中文';
    document.documentElement.lang = currentLang;

    document.querySelectorAll('[data-zh][data-en]').forEach(el => {
        el.innerHTML = el.getAttribute('data-' + currentLang);
    });
});
