const translations = {
    en: {
        "header-title": "Julian",
        "header-subtitle": "Frontend Developer in Training",
        "about-title": "About Me",
        "about-text": "Hi, I'm Julián, I'm 15 years old, and I'm from Argentina. I'm passionate about web development, and I am currently focusing on improving my frontend skills, especially in HTML, CSS, JavaScript, and frameworks like React. Every day I learn something new and aim to keep growing as a developer. I'm excited for the opportunities the future holds in the digital world.",
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
        "about-text": "Hola, soy Julián, tengo 15 años y soy de Argentina. Me apasiona el desarrollo web y actualmente me estoy enfocando en mejorar mis habilidades en frontend, especialmente en HTML, CSS, JavaScript y frameworks como React. Cada día aprendo algo nuevo y busco seguir creciendo como desarrollador. Estoy emocionado por las oportunidades que el futuro me depara en el mundo digital.",
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
        "about-text": "こんにちは、私の名前はジュリアンで、15歳です。アルゼンチン出身です。ウェブ開発に情熱を持っており、現在はフロントエンドのスキル、特にHTML、CSS、JavaScript、Reactなどを学んでいます。毎日新しいことを学び、開発者として成長し続けることを目指しています。未来のデジタル世界での機会を楽しみにしています。",
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
