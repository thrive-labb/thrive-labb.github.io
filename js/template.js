// Load Navbar
fetch('navbar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar-container').innerHTML = data;
        setActiveNavLink();
        initializeMobileToggle();
    });

// Load Footer
// In template.js
console.log('Template.js loaded');

fetch('footer.html')
    .then(response => {
        console.log('Footer fetch response:', response);
        return response.text();
    })
    .then(data => {
        console.log('Footer HTML:', data.substring(0, 100)); // Show first 100 chars
        document.getElementById('footer-container').innerHTML = data;
    })
    .catch(error => {
        console.error('Error loading footer:', error);
        // Fallback: show footer directly
        document.getElementById('footer-container').innerHTML = `...your footer html...`;
    });
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || 
            (currentPage === 'index.html' && href === 'index.html') ||
            (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

function initializeMobileToggle() {
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = mobileToggle.querySelector('i');
            if (icon) {
                icon.className = navMenu.classList.contains('active') ? 'fas fa-times' : 'fas fa-bars';
            }
        });
    }
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                const icon = mobileToggle?.querySelector('i');
                if (icon) icon.className = 'fas fa-bars';
            }
        });
    });
}
