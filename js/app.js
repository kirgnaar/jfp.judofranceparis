
document.addEventListener('DOMContentLoaded', () => {
    console.log("JFP UI v3.1 Initializing...");

    const nav = document.getElementById('nav');
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    const dropdowns = document.querySelectorAll('.dropdown');

    // Debugging Check
    if (!burger) console.error("Error: Burger element not found!");
    if (!navLinks) console.error("Error: Nav-links element not found!");

    // Scroll Effect
    if (nav) {
        window.addEventListener('scroll', () => {
            nav.classList.toggle('scrolled', window.scrollY > 50);
        });
    }

    // Burger Click
    if (burger && navLinks) {
        burger.addEventListener('click', (e) => {
            console.log("Burger clicked");
            burger.classList.toggle('active');
            navLinks.classList.toggle('active');
            document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : 'auto';
        });
    }

    // Mobile Dropdowns (Click instead of Hover)
    dropdowns.forEach(dropdown => {
        const btn = dropdown.querySelector('.dropbtn');
        if (btn) {
            btn.addEventListener('click', (e) => {
                if (window.innerWidth <= 960) {
                    console.log("Dropdown clicked");
                    e.preventDefault();
                    e.stopPropagation();
                    dropdown.classList.toggle('active');
                }
            });
        }
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navLinks && navLinks.classList.contains('active') && !nav.contains(e.target)) {
            burger.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    console.log("JFP UI v3.1 Ready.");
});
