// i18n.js - Система локалізації для портфоліо
const translations = {
    uk: {
        // Navigation
        nav: {
            home: "Головна",
            projects: "Проєкти",
            about: "Про мене"
        },
        
        // Hero Section (Homepage)
        hero: {
            label: "Портфоліо",
            greeting: "Привіт! Я",
            role: "— розробник ігор та застосунків.",
            subtitle: "Пишу на C# / .NET, працюю з Unity, люблю чистий код і мінімалізм. Тут зібрав кілька робіт, які можу показати на співбесіді.",
            viewProjects: "Дивитись проєкти",
            aboutMe: "Про мене"
        },
        
        // Featured Section (Homepage)
        featured: {
            title: "Обрані проєкти",
            subtitle: "Найцікавіші роботи з мого портфоліо"
        },
        
        // Projects Page
        projectsPage: {
            title: "Мої проєкти",
            subtitle: "Фільтруй за типом (Ігри/Застосунки), технологіями (Unity, C#, Алгоритми) або просто шукай за назвою.",
            filters: "Фільтри:",
            search: "Пошук за назвою...",
            all: "Всі",
            games: "Ігри",
            apps: "Застосунки",
            programming: "Програмування",
            noResults: "Нічого не знайдено",
            noResultsText: "Спробуй змінити фільтри або пошуковий запит",
            noProjects: "Поки що немає проєктів.",
            goToAdmin: "Перейди в",
            adminPanel: "адмін-панель",
            toAddFirst: "щоб додати перший проєкт!",
            github: "GitHub",
            demo: "Demo",
            loading: "Завантаження проєктів..."
        },
        
        // About Page
        aboutPage: {
            title: "Про мене",
            skills: "Навички",
            education: "Освіта",
            goals: "Мої цілі",
            contacts: "Контакти",
            contactSubtitle: "Найшвидше — лист на пошту або повідомлення в Telegram.",
            noData: "Дані профілю відсутні",
            loading: "Завантаження..."
        },
        
        // Footer
        footer: {
            rights: "Усі права захищено."
        },
        
        // Common
        common: {
            completed: "Завершено",
            inProgress: "В розробці",
            featured: "На головній"
        }
    },
    
    en: {
        // Navigation
        nav: {
            home: "Home",
            projects: "Projects",
            about: "About"
        },
        
        // Hero Section (Homepage)
        hero: {
            label: "Portfolio",
            greeting: "Hi! I'm",
            role: "— game and application developer.",
            subtitle: "I write in C# / .NET, work with Unity, love clean code and minimalism. Here I've gathered some works that I can show in an interview.",
            viewProjects: "View Projects",
            aboutMe: "About Me"
        },
        
        // Featured Section (Homepage)
        featured: {
            title: "Featured Projects",
            subtitle: "The most interesting works from my portfolio"
        },
        
        // Projects Page
        projectsPage: {
            title: "My Projects",
            subtitle: "Filter by type (Games/Apps), technologies (Unity, C#, Algorithms) or just search by name.",
            filters: "Filters:",
            search: "Search by name...",
            all: "All",
            games: "Games",
            apps: "Apps",
            programming: "Programming",
            noResults: "Nothing found",
            noResultsText: "Try changing filters or search query",
            noProjects: "No projects yet.",
            goToAdmin: "Go to",
            adminPanel: "admin panel",
            toAddFirst: "to add the first project!",
            github: "GitHub",
            demo: "Demo",
            loading: "Loading projects..."
        },
        
        // About Page
        aboutPage: {
            title: "About Me",
            skills: "Skills",
            education: "Education",
            goals: "My Goals",
            contacts: "Contacts",
            contactSubtitle: "The fastest way — email or Telegram message.",
            noData: "Profile data is missing",
            loading: "Loading..."
        },
        
        // Footer
        footer: {
            rights: "All rights reserved."
        },
        
        // Common
        common: {
            completed: "Completed",
            inProgress: "In Progress",
            featured: "Featured"
        }
    },
    
    pl: {
        // Navigation
        nav: {
            home: "Główna",
            projects: "Projekty",
            about: "O mnie"
        },
        
        // Hero Section (Homepage)
        hero: {
            label: "Portfolio",
            greeting: "Cześć! Jestem",
            role: "— programista gier i aplikacji.",
            subtitle: "Piszę w C# / .NET, pracuję z Unity, kocham czysty kod i minimalizm. Tutaj zebrałem kilka prac, które mogę pokazać na rozmowie kwalifikacyjnej.",
            viewProjects: "Zobacz projekty",
            aboutMe: "O mnie"
        },
        
        // Featured Section (Homepage)
        featured: {
            title: "Wyróżnione projekty",
            subtitle: "Najciekawsze prace z mojego portfolio"
        },
        
        // Projects Page
        projectsPage: {
            title: "Moje projekty",
            subtitle: "Filtruj według typu (Gry/Aplikacje), technologii (Unity, C#, Algorytmy) lub po prostu wyszukaj według nazwy.",
            filters: "Filtry:",
            search: "Wyszukaj według nazwy...",
            all: "Wszystkie",
            games: "Gry",
            apps: "Aplikacje",
            programming: "Programowanie",
            noResults: "Nic nie znaleziono",
            noResultsText: "Spróbuj zmienić filtry lub zapytanie wyszukiwania",
            noProjects: "Nie ma jeszcze projektów.",
            goToAdmin: "Przejdź do",
            adminPanel: "panel administratora",
            toAddFirst: "aby dodać pierwszy projekt!",
            github: "GitHub",
            demo: "Demo",
            loading: "Ładowanie projektów..."
        },
        
        // About Page
        aboutPage: {
            title: "O mnie",
            skills: "Umiejętności",
            education: "Edukacja",
            goals: "Moje cele",
            contacts: "Kontakt",
            contactSubtitle: "Najszybszy sposób — e-mail lub wiadomość na Telegramie.",
            noData: "Brak danych profilu",
            loading: "Ładowanie..."
        },
        
        // Footer
        footer: {
            rights: "Wszelkie prawa zastrzeżone."
        },
        
        // Common
        common: {
            completed: "Ukończono",
            inProgress: "W trakcie",
            featured: "Wyróżnione"
        }
    },
    
    de: {
        // Navigation
        nav: {
            home: "Startseite",
            projects: "Projekte",
            about: "Über mich"
        },
        
        // Hero Section (Homepage)
        hero: {
            label: "Portfolio",
            greeting: "Hallo! Ich bin",
            role: "— Spiele- und Anwendungsentwickler.",
            subtitle: "Ich schreibe in C# / .NET, arbeite mit Unity, liebe sauberen Code und Minimalismus. Hier habe ich einige Arbeiten gesammelt, die ich in einem Interview zeigen kann.",
            viewProjects: "Projekte ansehen",
            aboutMe: "Über mich"
        },
        
        // Featured Section (Homepage)
        featured: {
            title: "Hervorgehobene Projekte",
            subtitle: "Die interessantesten Arbeiten aus meinem Portfolio"
        },
        
        // Projects Page
        projectsPage: {
            title: "Meine Projekte",
            subtitle: "Filtern Sie nach Typ (Spiele/Apps), Technologien (Unity, C#, Algorithmen) oder suchen Sie einfach nach Namen.",
            filters: "Filter:",
            search: "Nach Namen suchen...",
            all: "Alle",
            games: "Spiele",
            apps: "Anwendungen",
            programming: "Programmierung",
            noResults: "Nichts gefunden",
            noResultsText: "Versuchen Sie, Filter oder Suchanfrage zu ändern",
            noProjects: "Noch keine Projekte.",
            goToAdmin: "Gehen Sie zu",
            adminPanel: "Admin-Panel",
            toAddFirst: "um das erste Projekt hinzuzufügen!",
            github: "GitHub",
            demo: "Demo",
            loading: "Projekte werden geladen..."
        },
        
        // About Page
        aboutPage: {
            title: "Über mich",
            skills: "Fähigkeiten",
            education: "Bildung",
            goals: "Meine Ziele",
            contacts: "Kontakte",
            contactSubtitle: "Der schnellste Weg — E-Mail oder Telegram-Nachricht.",
            noData: "Profildaten fehlen",
            loading: "Wird geladen..."
        },
        
        // Footer
        footer: {
            rights: "Alle Rechte vorbehalten."
        },
        
        // Common
        common: {
            completed: "Abgeschlossen",
            inProgress: "In Arbeit",
            featured: "Hervorgehoben"
        }
    }
};

// Function to get translation
function t(key, lang = null) {
    const currentLang = lang || localStorage.getItem('language') || 'uk';
    const keys = key.split('.');
    let value = translations[currentLang];
    
    for (const k of keys) {
        value = value?.[k];
    }
    
    return value || key;
}

// Function to translate page
function translatePage() {
    const currentLang = localStorage.getItem('language') || 'uk';
    
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = t(key, currentLang);
    });
    
    // Translate placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        element.placeholder = t(key, currentLang);
    });
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { t, translatePage, translations };
}