// Publication filtering (only needed on publications page)
if (document.querySelector('.publications-list')) {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const publicationCards = document.querySelectorAll('.publication-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const filterValue = button.getAttribute('data-filter');
            
            publicationCards.forEach(card => {
                const year = card.getAttribute('data-year');
                const tags = card.getAttribute('data-tags');
                
                if (filterValue === 'all' || filterValue === year || (filterValue === 'tools' && tags === 'tools')) {
                    card.style.display = 'block';
                    setTimeout(() => { 
                        card.style.opacity = '1'; 
                        card.style.transform = 'translateY(0)'; 
                    }, 10);
                } else {
                    card.style.opacity = '0'; 
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => { 
                        card.style.display = 'none'; 
                    }, 300);
                }
            });
        });
    });
}

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        navbar.style.backgroundColor = window.scrollY > 100 ? 'rgba(255, 255, 255, 0.95)' : 'var(--white)';
        navbar.style.backdropFilter = window.scrollY > 100 ? 'blur(10px)' : 'none';
    }
});

// Initialize animations on load
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroButtons = document.querySelector('.hero-buttons');
    
    if (heroTitle) setTimeout(() => { heroTitle.style.opacity = '1'; heroTitle.style.transform = 'translateY(0)'; }, 300);
    if (heroSubtitle) setTimeout(() => { heroSubtitle.style.opacity = '1'; heroSubtitle.style.transform = 'translateY(0)'; }, 600);
    if (heroButtons) setTimeout(() => { heroButtons.style.opacity = '1'; heroButtons.style.transform = 'translateY(0)'; }, 900);
});
