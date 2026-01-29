// ============================================================================
// ADMIN-PANEL.JS - Логіка адмін-панелі
// ============================================================================

// Глобальні змінні
let projectsData = { projects: [] };
let aboutData = {
    profile: {},
    skills: {},
    education: [],
    goals: {},
    contacts: {}
};

// ============================================================================
// НАВІГАЦІЯ
// ============================================================================

function selectFile(fileType) {
    document.getElementById('file-selector').style.display = 'none';
    
    if (fileType === 'projects') {
        document.getElementById('projects-editor').classList.add('active');
        loadProjectsFromLocalStorage();
        renderProjectsList();
        updateProjectsExport();
    } else if (fileType === 'about') {
        document.getElementById('about-editor').classList.add('active');
        loadAboutFromLocalStorage();
        renderAboutPreview();
        updateAboutExport();
    }
}

function backToSelector() {
    document.getElementById('file-selector').style.display = 'grid';
    document.getElementById('projects-editor').classList.remove('active');
    document.getElementById('about-editor').classList.remove('active');
}

// ============================================================================
// PROJECTS - ЗАВАНТАЖЕННЯ
// ============================================================================

function loadProjectsFile(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const data = JSON.parse(e.target.result);
            projectsData = data;
            localStorage.setItem('portfolioProjects', JSON.stringify(projectsData));
            renderProjectsList();
            updateProjectsExport();
            showAlert('success', '✅ Файл projects.json завантажено!');
        } catch (error) {
            showAlert('error', '❌ Помилка: невірний формат JSON');
            console.error(error);
        }
    };
    reader.readAsText(file);
}

function loadProjectsFromLocalStorage() {
    const saved = localStorage.getItem('portfolioProjects');
    if (saved) {
        try {
            projectsData = JSON.parse(saved);
        } catch (error) {
            console.error('Помилка читання localStorage:', error);
        }
    }
}

function resetProjects() {
    if (confirm('⚠️ Видалити ВСІ проєкти? Це незворотна дія!')) {
        projectsData = { projects: [] };
        localStorage.setItem('portfolioProjects', JSON.stringify(projectsData));
        renderProjectsList();
        updateProjectsExport();
        showAlert('warning', '🗑️ Всі проєкти видалено');
    }
}

// ============================================================================
// ABOUT - ЗАВАНТАЖЕННЯ
// ============================================================================

function loadAboutFile(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const data = JSON.parse(e.target.result);
            aboutData = data;
            localStorage.setItem('portfolioAbout', JSON.stringify(aboutData));
            renderAboutPreview();
            updateAboutExport();
            showAlert('success', '✅ Файл about.json завантажено!');
        } catch (error) {
            showAlert('error', '❌ Помилка: невірний формат JSON');
            console.error(error);
        }
    };
    reader.readAsText(file);
}

function loadAboutFromLocalStorage() {
    const saved = localStorage.getItem('portfolioAbout');
    if (saved) {
        try {
            aboutData = JSON.parse(saved);
        } catch (error) {
            console.error('Помилка читання localStorage:', error);
        }
    }
}

function resetAbout() {
    if (confirm('⚠️ Видалити ВСІ дані профілю? Це незворотна дія!')) {
        aboutData = {
            profile: {},
            skills: {},
            education: [],
            goals: {},
            contacts: {}
        };
        localStorage.setItem('portfolioAbout', JSON.stringify(aboutData));
        renderAboutPreview();
        updateAboutExport();
        showAlert('warning', '🗑️ Дані профілю видалено');
    }
}

// ============================================================================
// ТАББИ
// ============================================================================

function switchProjectTab(tab) {
    document.querySelectorAll('#projects-editor .tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('#projects-editor .tab-content').forEach(content => content.classList.remove('active'));
    
    event.target.classList.add('active');
    document.getElementById(`projects-${tab}-tab`).classList.add('active');
    
    if (tab === 'export') {
        updateProjectsExport();
    }
}

function switchAboutTab(tab) {
    document.querySelectorAll('#about-editor .tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('#about-editor .tab-content').forEach(content => content.classList.remove('active'));
    
    event.target.classList.add('active');
    document.getElementById(`about-${tab}-tab`).classList.add('active');
    
    if (tab === 'export') {
        updateAboutExport();
    }
}

// ============================================================================
// PROJECTS - РЕНДЕРИНГ
// ============================================================================

function renderProjectsList() {
    const container = document.getElementById('projects-list');
    
    if (!projectsData.projects || projectsData.projects.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 3rem; color: var(--text-secondary);">
                <p style="font-size: 1.2rem; margin-bottom: 0.5rem;">📂 Поки що немає проєктів</p>
                <p>Завантажте файл projects.json вище</p>
            </div>
        `;
        return;
    }

    container.innerHTML = projectsData.projects.map(project => `
        <div class="project-item">
            <div class="project-info">
                <h3>${project.emoji || '📁'} ${project.title?.uk || project.title?.en || 'Без назви'}</h3>
                <p>${project.shortDescription?.uk || project.description?.uk || 'Опис відсутній'}</p>
                <div class="project-tags">
                    ${(project.technologies || []).map(tech => `<span class="tag">${tech}</span>`).join('')}
                    ${project.featured ? '<span class="tag featured">⭐ Featured</span>' : ''}
                    ${project.status ? `<span class="tag">${project.status}</span>` : ''}
                </div>
            </div>
            <div class="project-actions">
                <button onclick="deleteProject(${project.id})" class="btn btn-danger">🗑️ Видалити</button>
            </div>
        </div>
    `).join('');
}

function deleteProject(id) {
    if (confirm('Видалити цей проєкт?')) {
        const index = projectsData.projects.findIndex(p => p.id === id);
        if (index !== -1) {
            projectsData.projects.splice(index, 1);
            localStorage.setItem('portfolioProjects', JSON.stringify(projectsData));
            renderProjectsList();
            updateProjectsExport();
            showAlert('success', '🗑️ Проєкт видалено');
        }
    }
}

// ============================================================================
// ABOUT - РЕНДЕРИНГ
// ============================================================================

function renderAboutPreview() {
    const container = document.getElementById('about-preview');
    
    if (!aboutData.profile || Object.keys(aboutData.profile).length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 3rem; color: var(--text-secondary);">
                <p style="font-size: 1.2rem; margin-bottom: 0.5rem;">👤 Немає даних профілю</p>
                <p>Завантажте файл about.json вище</p>
            </div>
        `;
        return;
    }

    const profile = aboutData.profile;
    const skills = aboutData.skills || {};
    const education = aboutData.education || [];
    const goals = aboutData.goals || {};
    const contacts = aboutData.contacts || {};

    container.innerHTML = `
        <div style="background: var(--bg-card); padding: 2rem; border-radius: var(--border-radius); border: 1px solid var(--border); margin-bottom: 1rem;">
            <h4 style="color: var(--accent); margin-bottom: 1rem;">👤 Профіль</h4>
            <p><strong>Ім'я (UA):</strong> ${profile.name?.uk || 'Не вказано'}</p>
            <p><strong>Ім'я (EN):</strong> ${profile.name?.en || 'Не вказано'}</p>
            <p><strong>Вік:</strong> ${profile.age || 'Не вказано'}</p>
            <p><strong>Біо параграфів (UA):</strong> ${profile.bio?.uk?.length || 0}</p>
        </div>

        <div style="background: var(--bg-card); padding: 2rem; border-radius: var(--border-radius); border: 1px solid var(--border); margin-bottom: 1rem;">
            <h4 style="color: var(--accent); margin-bottom: 1rem;">💻 Навички</h4>
            <p><strong>Категорій:</strong> ${Object.keys(skills).length}</p>
            ${Object.entries(skills).map(([key, cat]) => `
                <p style="margin-left: 1rem;">• ${cat.title?.uk || key}: ${cat.items?.length || 0} навичок</p>
            `).join('')}
        </div>

        <div style="background: var(--bg-card); padding: 2rem; border-radius: var(--border-radius); border: 1px solid var(--border); margin-bottom: 1rem;">
            <h4 style="color: var(--accent); margin-bottom: 1rem;">📚 Освіта</h4>
            <p><strong>Записів:</strong> ${education.length}</p>
        </div>

        <div style="background: var(--bg-card); padding: 2rem; border-radius: var(--border-radius); border: 1px solid var(--border); margin-bottom: 1rem;">
            <h4 style="color: var(--accent); margin-bottom: 1rem;">🎯 Цілі</h4>
            <p><strong>Короткострокова:</strong> ${goals.short?.description?.uk ? '✅' : '❌'}</p>
            <p><strong>Довгострокова:</strong> ${goals.long?.description?.uk ? '✅' : '❌'}</p>
        </div>

        <div style="background: var(--bg-card); padding: 2rem; border-radius: var(--border-radius); border: 1px solid var(--border);">
            <h4 style="color: var(--accent); margin-bottom: 1rem;">📧 Контакти</h4>
            <p><strong>Email:</strong> ${contacts.email || 'Не вказано'}</p>
            <p><strong>Telegram:</strong> ${contacts.telegram || 'Не вказано'}</p>
            <p><strong>GitHub:</strong> ${contacts.github || 'Не вказано'}</p>
            <p><strong>LinkedIn:</strong> ${contacts.linkedin || 'Не вказано'}</p>
        </div>
    `;
}

// ============================================================================
// ЕКСПОРТ
// ============================================================================

function updateProjectsExport() {
    document.getElementById('projects-json-output').textContent = JSON.stringify(projectsData, null, 2);
}

function updateAboutExport() {
    document.getElementById('about-json-output').textContent = JSON.stringify(aboutData, null, 2);
}

function copyProjectsJSON() {
    const text = JSON.stringify(projectsData, null, 2);
    navigator.clipboard.writeText(text).then(() => {
        showAlert('success', '✅ Скопійовано!');
    });
}

function copyAboutJSON() {
    const text = JSON.stringify(aboutData, null, 2);
    navigator.clipboard.writeText(text).then(() => {
        showAlert('success', '✅ Скопійовано!');
    });
}

function downloadProjectsJSON() {
    const dataStr = JSON.stringify(projectsData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(dataBlob);
    link.download = 'projects.json';
    link.click();
    showAlert('success', '✅ Файл завантажено!');
}

function downloadAboutJSON() {
    const dataStr = JSON.stringify(aboutData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(dataBlob);
    link.download = 'about.json';
    link.click();
    showAlert('success', '✅ Файл завантажено!');
}

// ============================================================================
// АЛЕРТИ
// ============================================================================

function showAlert(type, message) {
    const existingAlert = document.querySelector('.alert-floating');
    if (existingAlert) existingAlert.remove();

    const alert = document.createElement('div');
    alert.className = `alert alert-${type} alert-floating`;
    alert.textContent = message;
    alert.style.position = 'fixed';
    alert.style.top = '2rem';
    alert.style.right = '2rem';
    alert.style.zIndex = '10000';
    alert.style.minWidth = '300px';
    alert.style.animation = 'slideDown 0.3s ease';

    document.body.appendChild(alert);
    setTimeout(() => {
        alert.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => alert.remove(), 300);
    }, 3000);
}

// ============================================================================
// ІНІЦІАЛІЗАЦІЯ
// ============================================================================

window.addEventListener('DOMContentLoaded', () => {
    console.log('✅ Адмін-панель завантажено');
});
