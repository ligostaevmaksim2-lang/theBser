// Конфигурация API theBser
const CONFIG = {
    API_URL: "https://api.thebservices.online",
    SUGGEST_BOT_URL: "https://t.me/thebser_suggest_bot"
};

// Единая логика темной/светлой темы для всех страниц
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    applyTheme(savedTheme);

    const toggleBtn = document.getElementById('theme-toggle') || document.getElementById('themeToggle');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            const current = document.documentElement.classList.contains('dark-theme') ? 'dark' : 'light';
            const next = current === 'dark' ? 'light' : 'dark';
            applyTheme(next);
        });
    }
}

function applyTheme(theme) {
    const icon = document.getElementById('theme-icon') || document.getElementById('themeIcon');
    if (theme === 'dark') {
        document.documentElement.classList.add('dark-theme');
        document.body.classList.add('dark-theme');
        if (icon) icon.className = 'fas fa-moon text-xl';
    } else {
        document.documentElement.classList.remove('dark-theme');
        document.body.classList.remove('dark-theme');
        if (icon) icon.className = 'fas fa-sun text-xl';
    }
    localStorage.setItem('theme', theme);
}

document.addEventListener('DOMContentLoaded', initTheme);