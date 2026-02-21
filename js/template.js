// Load Navbar
fetch('Navbar.html')  // Note: capital N to match your filename
    .then(response => {
        if (!response.ok) throw new Error('Navbar not found');
        return response.text();
    })
    .then(data => {
        document.getElementById('navbar-container').innerHTML = data;
        setActiveNavLink();
        initializeMobileToggle();
    })
    .catch(error => {
        console.error('Error loading navbar:', error);
        document.getElementById('navbar-container').innerHTML = '<p style="color:red">Navbar failed to load</p>';
    });

// Load Footer
fetch('Footer.html')  // Note: capital F to match your filename
    .then(response => {
        if (!response.ok) throw new Error('Footer not found');
        return response.text();
    })
    .then(data => {
        document.getElementById('footer-container').innerHTML = data;
    })
    .catch(error => {
        console.error('Error loading footer:', error);
        document.getElementById('footer-container').innerHTML = '<p style="color:red">Footer failed to load</p>';
    });

function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) link.classList.add('active');
    });
}

function initializeMobileToggle() {
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = mobileToggle.querySelector('i');
            if (icon) icon.className = navMenu.classList.contains('active') ? 'fas fa-times' : 'fas fa-bars';
        });
    }
}
