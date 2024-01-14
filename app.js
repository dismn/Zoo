// Отримуємо всі посилання, які починаються з "#"
const links = document.querySelectorAll('a[href^="#"]');

// Додаємо обробник події для кожного посилання
links.forEach(link => {
    link.addEventListener('click', scrollToSection);
});

// Функція, яка обробляє подію кліку і плавно переходить до відповідного розділу
function scrollToSection(event) {
    event.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}