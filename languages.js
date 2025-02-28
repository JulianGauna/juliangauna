const translations = {
    en: {
        "header-title": "Julian",
        "header-subtitle": "Frontend Developer in Training",
        "about-title": "About Me",
        "about-text": "Hi, my name is Julian, I am 15 years old and I am from Argentina. I am learning frontend development and improving my skills every day.",
        "languages-title": "Languages",
        "skills-title": "Technical Skills",
        "design-title": "Design & UX/UI",
        "comments-title": "Leave a Comment",
        "name-label": "Name:",
        "comment-label": "Comment:",
        "submit-button": "Submit",
    },
    es: {
        "header-title": "Julian",
        "header-subtitle": "Desarrollador Frontend en formación",
        "about-title": "Sobre mí",
        "about-text": "Hola, mi nombre es Julian, tengo 15 años y soy de Argentina. Estoy aprendiendo desarrollo frontend y mejorando mis habilidades cada día.",
        "languages-title": "Idiomas",
        "skills-title": "Habilidades Técnicas",
        "design-title": "Diseño y UX/UI",
        "comments-title": "Deja un comentario",
        "name-label": "Nombre:",
        "comment-label": "Comentario:",
        "submit-button": "Enviar",
    },
    ja: {
        "header-title": "ジュリアン",
        "header-subtitle": "フロントエンド開発者のトレーニング中",
        "about-title": "自己紹介",
        "about-text": "こんにちは、私の名前はジュリアンです。私は15歳で、アルゼンチン出身です。フロントエンド開発を学び、日々スキルアップを図っています。",
        "languages-title": "言語",
        "skills-title": "技術スキル",
        "design-title": "デザイン & UX/UI",
        "comments-title": "コメントを残す",
        "name-label": "名前:",
        "comment-label": "コメント:",
        "submit-button": "送信",
    }
};

// Función para cambiar el idioma
const languageSelectors = document.querySelectorAll('.language-selector');
languageSelectors.forEach(selector => {
    selector.addEventListener('click', (e) => {
        const language = e.target.getAttribute('data-language');
        changeLanguage(language);
    });
});

// Función para actualizar el contenido con el idioma seleccionado
function changeLanguage(language) {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        element.textContent = translations[language][key] || element.textContent;
    });
}
