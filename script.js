// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const nav = document.getElementById('nav');
const navToggle = document.getElementById('navToggle');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Close mobile menu after tapping a link
  document.querySelectorAll('#navMobile a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Scroll-reveal animation
const revealEls = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window && revealEls.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // small stagger for elements revealing together
        setTimeout(() => entry.target.classList.add('is-visible'), i * 40);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach(el => observer.observe(el));
} else {
  // Fallback: just show everything
  revealEls.forEach(el => el.classList.add('is-visible'));
}
