
document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    const dropdowns = document.querySelectorAll('.dropdown');

    if (burger && navLinks) {
        burger.onclick = function() {
            burger.classList.toggle('active');
            navLinks.classList.toggle('active');
            document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : 'auto';
        };
    }

    dropdowns.forEach(function(dd) {
        const btn = dd.querySelector('.dropbtn');
        if (btn) {
            btn.onclick = function(e) {
                if (window.innerWidth <= 960) {
                    e.preventDefault();
                    dd.classList.toggle('active');
                }
            };
        }
    });

    // Close mobile menu on link click
    navLinks.querySelectorAll('a').forEach(link => {
        link.onclick = function() {
            if (!link.classList.contains('dropbtn')) {
                burger.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        };
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.rev').forEach(el => observer.observe(el));
});
