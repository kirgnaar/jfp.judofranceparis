document.addEventListener('DOMContentLoaded', () => {
  // Navigation scroll effect
  const nav = document.getElementById('nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 60);
    });
  }

  // Intersection Observer for reveal animations
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.rev').forEach(el => obs.observe(el));

  // Form submission feedback
  const sendBtn = document.getElementById('sendBtn');
  if (sendBtn) {
    sendBtn.addEventListener('click', function() {
      // Simulation simple d'envoi
      const originalText = this.textContent;
      this.textContent = '✓ Message envoyé !';
      this.style.background = '#1a5c1a';
      setTimeout(() => {
        this.textContent = originalText;
        this.style.background = '';
      }, 3000);
    });
  }

  // Mobile navigation (optional extension if needed)
  console.log("JFP.JudoFranceParis 2026 initialized.");
});
