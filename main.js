// Fade-in on scroll
const observer = new IntersectionObserver(
  (entries) => entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
  }),
  { threshold: 0.12 }
);

document.querySelectorAll('.feature-card, .download-card, .spec').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity .5s ease, transform .5s ease';
  observer.observe(el);
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.feature-card, .download-card, .spec').forEach((el, i) => {
    el.style.transitionDelay = `${i * 60}ms`;
  });
});

document.addEventListener('animationend', () => {}, { once: true });

// Add .visible class
const style = document.createElement('style');
style.textContent = '.visible { opacity: 1 !important; transform: none !important; }';
document.head.appendChild(style);

// Active nav link highlight on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 100) current = s.id; });
  navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + current));
}, { passive: true });
