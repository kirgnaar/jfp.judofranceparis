const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });
}

// Validation simple du formulaire d'inscription
const handleForm = () => {
    const form = document.querySelector('#inscription-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert("Merci ! Votre pré-inscription pour la saison 2026 a été envoyée. Nous vous contacterons prochainement.");
            form.reset();
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    navSlide();
    handleForm();
});
