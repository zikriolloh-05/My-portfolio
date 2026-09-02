// ===== NAVBAR TOGGLE =====
const navToggle = document.getElementById('navToggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// ===== ACTIVE NAV LINK =====
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveLink() {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveLink);
window.addEventListener('load', updateActiveLink);

// ===== DARK MODE TOGGLE =====
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
    updateThemeIcon(savedTheme);
} else {
    body.classList.add('dark-mode');
    updateThemeIcon('dark-mode');
}

themeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        localStorage.setItem('theme', 'light-mode');
        updateThemeIcon('light-mode');
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode');
        updateThemeIcon('dark-mode');
    }
});

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    if (theme === 'dark-mode') {
        icon.className = 'fas fa-moon';
    } else {
        icon.className = 'fas fa-sun';
    }
}

// ===== LANGUAGE SWITCHER =====
const langBtns = document.querySelectorAll('.lang-btn');
let currentLang = 'ru';

const translations = {
    ru: {
        home: 'Главная',
        about: 'Обо мне',
        skills: 'Навыки',
        projects: 'Проекты',
        contact: 'Контакты',
        Resume: 'мое резюме',
        greeting: 'Привет, я',
        myName: 'Шарипов Зикриоллох',
        typing: 'Фронтенд разработчик',
        description: 'Создаю современные, быстрые и интерактивные веб-приложения с использованием передовых технологий',
        projects_btn: 'Мои проекты',
        contact_btn: 'Связаться',
        photo: 'Ваше фото',
        about_title: 'Обо мне',
        about_text: 'Я фронтенд разработчик с страстью к созданию красивых и функциональных веб-интерфейсов. Мой подход сочетает креативность с технической точностью, чтобы превращать сложные задачи в элегантные решения.',
        exp: 'Года опыта',
        projects_count: 'Проектов',
        clients: 'Клиентов',
        skills_title: 'Мои навыки',
        responsive: 'Tailwind CSS',
        projects_title: 'Мои проекты',
        project1_title: 'Todo List',
        project1_desc: 'Полнофункциональный интернет-магазин с корзиной и оплатой',
        project2_title: 'Мобильное приложение',
        project2_desc: 'Кроссплатформенное приложение для управления задачами',
        project3_title: 'Панель управления',
        project3_desc: 'Аналитическая панель с графиками и визуализацией данных',
        more: 'Подробнее →',
        showMore: 'Показать больше',
        contact_title: 'Связаться со мной',
        location: 'Таджикистан, Душанбе',
        name_placeholder: 'Ваше имя',
        email_placeholder: 'Ваш email',
        message_placeholder: 'Сообщение',
        send: 'Отправить',
        footer: '© 2026 Шарипов Зикриоллоҳ. Все права защищены',
        languages_title: '🌍 Языки',
        lang_tj: 'Таджикский',
        lang_tj_level: 'Родной',
        lang_ru: 'Русский',
        lang_ru_level: 'Свободно',
        lang_en: 'Английский',
        lang_en_level: 'Средний',
        goals_title: '🎯 Мои цели',
        goal1: 'Стать Senior разработчиком',
        goal2: 'Создавать полезные продукты для людей',
        goal3: 'Работать в международной компании',
        goal4: 'Постоянно учиться новому',
    },
    tj: {
        home: 'Асосӣ',
        about: 'Дар бораи ман',
        skills: 'Маҳоратҳо',
        projects: 'Лоиҳаҳо',
        contact: 'Тамос',
        Resume: 'резумеи ман',
        greeting: 'Салом, ман',
        myName: 'Шарипов Зикриоллоҳ',
        typing: 'Таҳиягари фронтенд',
        description: 'Веб-барномаҳои муосир, зуд ва интерактивӣ бо истифода аз технологияҳои пешрафта эҷод мекунам',
        projects_btn: 'Лоиҳаҳои ман',
        contact_btn: 'Тамос гиред',
        photo: 'Акси шумо',
        about_title: 'Дар бораи ман',
        about_text: 'Ман таҳиягари фронтенд ҳастам, ки ба эҷоди интерфейсҳои зебо ва функсионалии веб шавқ дорам. Равиши ман эҷодкорӣ ва дақиқии техникиро муттаҳид мекунад, то вазифаҳои мураккабро ба ҳалли элегантӣ табдил диҳад.',
        exp: 'Сол таҷриба',
        projects_count: 'Лоиҳа',
        clients: 'Мизоҷон',
        skills_title: 'Маҳоратҳои ман',
        responsive: 'Tailwind CSS',
        projects_title: 'Лоиҳаҳои ман',
        project1_title: 'Todo List',
        project1_desc: 'Мағозаи интернетии пурра бо сабад ва пардохт',
        project2_title: 'Барномаи мобилӣ',
        project2_desc: 'Барномаи кроссплатформа барои идоракунии вазифаҳо',
        project3_title: 'Панели идоракунӣ',
        project3_desc: 'Панели таҳлилӣ бо графикҳо ва визуализатсияи маълумот',
        more: 'Муфассал →',
        showMore: 'бештар нишон диҳед',
        contact_title: 'Бо ман тамос гиред',
        location: 'Тоҷикистон, Душанбе',
        name_placeholder: 'Номи шумо',
        email_placeholder: 'Почтаи шумо',
        message_placeholder: 'Паём',
        send: 'Фиристодан',
        footer: '© 2026 Шарипов Зикриоллоҳ. Ҳама ҳуқуқҳо ҳифз шудаанд',
        languages_title: '🌍 Забонҳо',
        lang_tj: 'Тоҷикӣ',
        lang_tj_level: 'Модарӣ',
        lang_ru: 'Русӣ',
        lang_ru_level: 'Озод',
        lang_en: 'Англисӣ',
        lang_en_level: 'Миёна',
        goals_title: '🎯 Ҳадафҳои ман',
        goal1: 'Таҳиягари Senior шавам',
        goal2: 'Маҳсулоти муфид барои одамон эҷод кунам',
        goal3: 'Дар ширкати байналмилалӣ кор кунам',
        goal4: 'Ҳар рӯз чизи нав омӯзам',
    },
    en: {
        home: 'Home',
        about: 'About',
        skills: 'Skills',
        projects: 'Projects',
        contact: 'Contact',
        Resume: 'My resume',
        greeting: 'Hello, I\'m',
        myName: 'Sharipov Zikriolloh',
        typing: 'Frontend Developer',
        description: 'Creating modern, fast and interactive web applications using cutting-edge technologies',
        projects_btn: 'My Projects',
        contact_btn: 'Contact Me',
        photo: 'Your Photo',
        about_title: 'About Me',
        about_text: 'I am a frontend developer with a passion for creating beautiful and functional web interfaces. My approach combines creativity with technical precision to turn complex tasks into elegant solutions.',
        exp: 'Years Experience',
        projects_count: 'Projects',
        clients: 'Clients',
        skills_title: 'My Skills',
        responsive: 'Tailwind CSS',
        projects_title: 'My Projects',
        project1_title: 'Todo List',
        project1_desc: 'Full-featured online store with cart and payment',
        project2_title: 'Mobile App',
        project2_desc: 'Cross-platform task management application',
        project3_title: 'Dashboard',
        project3_desc: 'Analytics dashboard with charts and data visualization',
        more: 'Learn More →',
        showMore: 'show more',
        contact_title: 'Contact Me',
        location: 'Tajikistan, Dushanbe',
        name_placeholder: 'Your Name',
        email_placeholder: 'Your Email',
        message_placeholder: 'Message',
        send: 'Send',
        footer: '© 2026 Sharipov Zikriolloh. All rights reserved',
        languages_title: '🌍 Languages',
        lang_tj: 'Tajik',
        lang_tj_level: 'Native',
        lang_ru: 'Russian',
        lang_ru_level: 'Fluent',
        lang_en: 'English',
        lang_en_level: 'Intermediate',
        goals_title: '🎯 My Goals',
        goal1: 'Become a Senior Developer',
        goal2: 'Create useful products for people',
        goal3: 'Work in an international company',
        goal4: 'Keep learning new things',
    }
};

langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        langBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentLang = btn.dataset.lang;
        translatePage(currentLang);
        localStorage.setItem('lang', currentLang);
    });
});

const savedLang = localStorage.getItem('lang');
if (savedLang) {
    currentLang = savedLang;
    langBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === savedLang);
    });
    translatePage(savedLang);
}

function translatePage(lang) {
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.dataset.key;
        if (translations[lang] && translations[lang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[lang][key];
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });
}

// ===== TYPING ANIMATION =====
const typingText = document.querySelector('.typing-text');
const words = {
    ru: ['Фронтенд разработчик', 'React разработчик', 'Создаю сайты', 'Веб-разработчик'],
    tj: ['Таҳиягари фронтенд', 'Таҳиягари React', 'Сайтҳо месозам', 'Таҳиягари веб'],
    en: ['Frontend Developer', 'React Developer', 'Creating websites', 'Web Developer']
};

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let currentWords = words.ru;

function updateTypingWords() {
    currentWords = words[currentLang] || words.ru;
}

function typeEffect() {
    updateTypingWords();
    const currentWord = currentWords[wordIndex];

    if (isDeleting) {
        typingText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => isDeleting = true, 2000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % currentWords.length;
    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);
}

document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        setTimeout(() => {
            wordIndex = 0;
            charIndex = 0;
            isDeleting = false;
        }, 100);
    });
});

typeEffect();

// ===== COUNTER ANIMATION =====
const statNumbers = document.querySelectorAll('.stat-number');

const animateCounter = (el) => {
    const target = parseInt(el.dataset.count);
    let current = 0;
    const increment = target / 50;
    const duration = 2000;
    const stepTime = duration / 50;

    const counter = setInterval(() => {
        current += increment;
        if (current >= target) {
            el.textContent = target + '+';
            clearInterval(counter);
        } else {
            el.textContent = Math.floor(current);
        }
    }, stepTime);
};

const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const el = entry.target;
            if (!el.dataset.animated) {
                el.dataset.animated = 'true';
                animateCounter(el);
            }
        }
    });
}, observerOptions);

statNumbers.forEach(el => observer.observe(el));

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== PARALLAX EFFECT =====
document.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset;
    const home = document.querySelector('.home');
    if (home) {
        home.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
    }
});

// ===== SHOW MORE / SHOW LESS BUTTON =====
const showMoreBtn = document.getElementById('showMoreBtn');
const hiddenProjects = document.querySelectorAll('.hidden-project');
let isExpanded = false;

if (showMoreBtn) {
    showMoreBtn.addEventListener('click', () => {
        isExpanded = !isExpanded;

        hiddenProjects.forEach((project, index) => {
            if (isExpanded) {
                setTimeout(() => {
                    project.classList.add('show');
                }, index * 100);
            } else {
                project.classList.remove('show');
            }
        });

        const btnText = showMoreBtn.querySelector('.btn-text');
        const btnIcon = showMoreBtn.querySelector('.btn-icon');

        if (isExpanded) {
            btnText.textContent = 'Показать меньше';
            showMoreBtn.classList.add('active');
        } else {
            btnText.textContent = 'Показать больше';
            showMoreBtn.classList.remove('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    hiddenProjects.forEach(project => {
        project.classList.remove('show');
    });
});

// ===== SKILLS SCROLL (ТОЛЬКО ОДИН РАЗ) =====
const skillsGrid = document.getElementById('skillsGrid');
let isMobileSkills = window.innerWidth <= 768;
let autoScrollInterval = null;
let isAutoScrolling = false;

function getCardWidthSkills() {
    const firstCard = skillsGrid ? skillsGrid.querySelector('.skill-card') : null;
    if (firstCard) {
        return firstCard.offsetWidth + 15;
    }
    return 100;
}

function startAutoScroll() {
    if (!isMobileSkills || !skillsGrid) return;
    if (isAutoScrolling) return;

    isAutoScrolling = true;
    const totalCards = skillsGrid.children.length;
    const cardsPerView = 3;
    const maxIndex = Math.ceil(totalCards / cardsPerView) - 1;
    const maxOffset = maxIndex * getCardWidthSkills() * cardsPerView;

    let position = 0;
    const speed = 0.5; // ← скорость движения (чем меньше, тем медленнее)

    function smoothMove() {
        if (!isAutoScrolling) return;

        position += speed;

        if (position >= maxOffset) {
            position = 0;
        }

        skillsGrid.style.transform = `translateX(-${position}px)`;
        skillsGrid.style.transition = 'none';

        requestAnimationFrame(smoothMove);
    }

    // Запускаем плавное движение
    smoothMove();
}

function stopAutoScroll() {
    isAutoScrolling = false;
    autoScrollInterval = null;
}

if (skillsGrid) {
    let touchStartX = 0;
    let touchStartY = 0;
    let touchEndX = 0;
    let isDragging = false;
    let isSwiping = false;

    skillsGrid.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
        isDragging = true;
        isSwiping = false;
        stopAutoScroll();
    }, { passive: true });

    skillsGrid.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        touchEndX = e.touches[0].clientX;
        const diffY = Math.abs(e.touches[0].clientY - touchStartY);
        const diffX = Math.abs(touchStartX - touchEndX);

        if (diffX > 10 && diffY < 20) {
            isSwiping = true;
            e.preventDefault();
        }
    }, { passive: false });

    skillsGrid.addEventListener('touchend', () => {
        if (!isDragging) return;
        isDragging = false;

        if (!isSwiping) {
            setTimeout(startAutoScroll, 5000);
            return;
        }

        const diff = touchStartX - touchEndX;
        if (Math.abs(diff) > 30) {
            const cardWidth = getCardWidthSkills();
            const cardsPerView = 3;
            const totalCards = skillsGrid.children.length;
            const maxIndex = Math.ceil(totalCards / cardsPerView) - 1;

            const transform = skillsGrid.style.transform;
            let currentOffset = 0;
            if (transform) {
                const match = transform.match(/translateX\(-([\d.]+)px\)/);
                if (match) {
                    currentOffset = parseFloat(match[1]);
                }
            }
            let currentIndex = Math.round(currentOffset / (cardWidth * cardsPerView));

            if (diff > 0 && currentIndex < maxIndex) {
                currentIndex++;
            } else if (diff < 0 && currentIndex > 0) {
                currentIndex--;
            }

            const offset = currentIndex * cardWidth * cardsPerView;
            skillsGrid.style.transform = `translateX(-${offset}px)`;
            skillsGrid.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        }

        setTimeout(startAutoScroll, 5000);
    }, { passive: true });
}

let resizeTimeoutSkills;

function handleResizeSkills() {
    clearTimeout(resizeTimeoutSkills);
    resizeTimeoutSkills = setTimeout(() => {
        const newIsMobile = window.innerWidth <= 768;
        if (newIsMobile !== isMobileSkills && skillsGrid) {
            isMobileSkills = newIsMobile;
            if (isMobileSkills) {
                skillsGrid.style.transform = 'translateX(0px)';
                setTimeout(startAutoScroll, 2000);
            } else {
                stopAutoScroll();
                skillsGrid.style.transform = 'none';
                skillsGrid.style.transition = 'none';
            }
        }
    }, 300);
}

window.addEventListener('resize', handleResizeSkills);

function initSkills() {
    if (!skillsGrid) return;
    isMobileSkills = window.innerWidth <= 768;
    if (isMobileSkills) {
        skillsGrid.style.transform = 'translateX(0px)';
        setTimeout(startAutoScroll, 2000);
    } else {
        skillsGrid.style.transform = 'none';
        skillsGrid.style.transition = 'none';
    }
}

window.addEventListener('load', initSkills);

window.addEventListener('orientationchange', () => {
    setTimeout(() => {
        if (!skillsGrid) return;
        stopAutoScroll();
        skillsGrid.style.transform = 'translateX(0px)';
        setTimeout(startAutoScroll, 2000);
    }, 400);
});

// ===== PROJECTS SLIDER =====
const projectsGrid = document.getElementById('projectsGrid');
let isMobileProjects = window.innerWidth <= 768;

function getCardWidthProjects() {
    const firstCard = projectsGrid ? projectsGrid.querySelector('.project-card') : null;
    if (firstCard) {
        return firstCard.offsetWidth + 25;
    }
    return 300;
}

// ===== АВТОМАТИЧЕСКАЯ ПРОКРУТКА (медленная) =====
let autoScrollProjects = null;
let isAutoScrollingProjects = false;

function startAutoScrollProjects() {
    if (!isMobileProjects || !projectsGrid) return;
    if (isAutoScrollingProjects) return;
    if (projectsGrid.children.length <= 1) return;

    isAutoScrollingProjects = true;
    const totalCards = projectsGrid.children.length;
    const cardsPerView = 1;
    const maxIndex = Math.ceil(totalCards / cardsPerView) - 1;
    const maxOffset = maxIndex * getCardWidthProjects() * cardsPerView;

    let position = 0;
    const speed = 0.25; // скорость движения (чем меньше, тем медленнее)

    function smoothMove() {
        if (!isAutoScrollingProjects) return;

        position += speed;

        if (position >= maxOffset) {
            position = 0;
        }

        projectsGrid.style.transform = `translateX(-${position}px)`;
        projectsGrid.style.transition = 'none';

        requestAnimationFrame(smoothMove);
    }

    smoothMove();
}

function stopAutoScrollProjects() {
    isAutoScrollingProjects = false;
    autoScrollProjects = null;
}

// ===== СВАЙП ПАЛЬЦЕМ =====
if (projectsGrid) {
    let touchStartX = 0;
    let touchStartY = 0;
    let touchEndX = 0;
    let isDragging = false;
    let isSwiping = false;

    projectsGrid.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
        isDragging = true;
        isSwiping = false;
        stopAutoScrollProjects();
    }, { passive: true });

    projectsGrid.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        touchEndX = e.touches[0].clientX;
        const diffY = Math.abs(e.touches[0].clientY - touchStartY);
        const diffX = Math.abs(touchStartX - touchEndX);

        if (diffX > 10 && diffY < 20) {
            isSwiping = true;
            e.preventDefault();
        }
    }, { passive: false });

    projectsGrid.addEventListener('touchend', () => {
        if (!isDragging) return;
        isDragging = false;

        if (!isSwiping) {
            setTimeout(startAutoScrollProjects, 5000);
            return;
        }

        const diff = touchStartX - touchEndX;
        if (Math.abs(diff) > 30) {
            const cardWidth = getCardWidthProjects();
            const totalCards = projectsGrid.children.length;
            const maxIndex = Math.ceil(totalCards / 1) - 1;

            const transform = projectsGrid.style.transform;
            let currentOffset = 0;
            if (transform) {
                const match = transform.match(/translateX\(-([\d.]+)px\)/);
                if (match) {
                    currentOffset = parseFloat(match[1]);
                }
            }
            let currentIndex = Math.round(currentOffset / cardWidth);

            if (diff > 0 && currentIndex < maxIndex) {
                currentIndex++;
            } else if (diff < 0 && currentIndex > 0) {
                currentIndex--;
            }

            const offset = currentIndex * cardWidth;
            projectsGrid.style.transform = `translateX(-${offset}px)`;
            projectsGrid.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        }

        setTimeout(startAutoScrollProjects, 5000);
    }, { passive: true });
}






