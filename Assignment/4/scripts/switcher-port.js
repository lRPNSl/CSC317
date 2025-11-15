document.addEventListener('DOMContentLoaded', function() {
    const themeButtons = document.querySelectorAll('.theme-button');
    const themeStylesheet = document.getElementById('css-theme');
    const STORAGE_KEY = 'portfolioTheme';

    function setActiveTheme(themeName) {
        themeStylesheet.href = `styles/${themeName}.css`;

        themeButtons.forEach(button => {
            button.classList.toggle('active', button.dataset.theme === themeName);
        });

        localStorage.setItem(STORAGE_KEY, themeName);
    }

    const savedTheme = localStorage.getItem(STORAGE_KEY);

    if (savedTheme) {
        setActiveTheme(savedTheme);
    } else {
        setActiveTheme('styles');
    }

    themeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const themeName = this.dataset.theme;
            setActiveTheme(themeName);
        });
    });
});
