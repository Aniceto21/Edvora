document.addEventListener('DOMContentLoaded', () => {
    const careerCards = document.querySelectorAll('.career-card');
    
    careerCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 50);
    });

    careerCards.forEach(card => {
        card.addEventListener('click', (e) => {
            const field = card.dataset.field;
            console.log(`Navigating to ${field} career field`);
        });

        card.addEventListener('mouseenter', () => {
            card.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        });
    });

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    careerCards.forEach(card => {
        observer.observe(card);
    });
});
