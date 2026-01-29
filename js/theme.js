// ============================================================================
// theme.js - Управління темою та мовою (загальні функції)
// ============================================================================

/**
 * Перемикання теми (темна/світла)
 */
function toggleTheme() {
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    body.setAttribute('data-theme', newTheme);
    document.getElementById('theme-icon').textContent = newTheme === 'dark' ? '🌞' : '🌙';
    saveTheme(newTheme);
}

/**
 * Зміна мови
 * @param {string} lang - Код мови (uk, en, pl, de)
 */
function changeLanguage(lang) {
    saveLanguage(lang);
    translatePage();
    
    // Перезавантаження даних для поточної сторінки
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    if (currentPage === 'index.html' || currentPage === '') {
        if (typeof loadFeaturedProjects === 'function') loadFeaturedProjects();
        if (typeof loadProfileName === 'function') loadProfileName();
    } else if (currentPage === 'projects.html') {
        if (typeof renderProjects === 'function') renderProjects();
        if (typeof loadProfileName === 'function') loadProfileName();
    } else if (currentPage === 'about.html') {
        if (typeof renderAboutPage === 'function') renderAboutPage();
    } else if (currentPage === 'project-details.html') {
        if (typeof loadProjectDetails === 'function') loadProjectDetails();
    }
}

/**
 * Отримати поточну мову (з sessionStorage)
 * @returns {string} Код мови
 */
function getCurrentLanguage() {
    return sessionStorage.getItem('language') || 'uk';
}

/**
 * Зберегти мову (sessionStorage - тільки для поточної сесії)
 * @param {string} lang - Код мови
 */
function saveLanguage(lang) {
    sessionStorage.setItem('language', lang);
}

/**
 * Отримати поточну тему
 * @returns {string} 'dark' або 'light'
 */
function getCurrentTheme() {
    return sessionStorage.getItem('theme') || 'dark';
}

/**
 * Зберегти тему
 * @param {string} theme - 'dark' або 'light'
 */
function saveTheme(theme) {
    sessionStorage.setItem('theme', theme);
}

/**
 * Ініціалізація теми та мови при завантаженні сторінки
 */
function initThemeAndLanguage() {
    // Встановлення теми
    const savedTheme = getCurrentTheme();
    document.body.setAttribute('data-theme', savedTheme);
    const themeIcon = document.getElementById('theme-icon');
    if (themeIcon) {
        themeIcon.textContent = savedTheme === 'dark' ? '🌞' : '🌙';
    }

    // Встановлення мови
    const savedLang = getCurrentLanguage();
    const langSwitch = document.querySelector('.lang-switch');
    if (langSwitch) {
        langSwitch.value = savedLang;
    }

    // Застосування перекладів
    if (typeof translatePage === 'function') {
        translatePage();
    }
}

// Автоматична ініціалізація при завантаженні DOM
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initThemeAndLanguage);
} else {
    initThemeAndLanguage();
}
