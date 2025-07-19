// JS Animations for fade, movement, and smooth effects on scroll

document.addEventListener('DOMContentLoaded', () => {
    // Animate splash cards (project cards) only when projects section is in view
    const splashCards = document.querySelectorAll('.project-item');
    const projectsSection = document.getElementById('projects');
    let cardsAnimated = false;

    function animateSplashCards() {
        if (cardsAnimated) return;
        const rect = projectsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            splashCards.forEach((card, i) => {
                setTimeout(() => {
                    card.classList.add('fade-side-in');
                }, i * 160);
            });
            cardsAnimated = true;
            window.removeEventListener('scroll', animateSplashCards);
        }
    }
    splashCards.forEach((card, i) => {
        card.classList.add('fade-side-init');
        card.classList.add(i % 2 === 0 ? 'from-left' : 'from-right');
            });
    window.addEventListener('scroll', animateSplashCards);
    animateSplashCards();

    // Animate sections
    const sections = document.querySelectorAll('section');
    const fadeSection = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });
    sections.forEach(section => {
        section.classList.add('section-fade-init');
        fadeSection.observe(section);
    });
});
