// Theme: default from system, persist in localStorage
const html = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const themeToggleMobile = document.getElementById('themeToggleMobile');
const themeIcon = document.getElementById('themeIcon');
const themeIconMobile = document.getElementById('themeIconMobile');

function setTheme(dark) {
  if (dark) {
    html.classList.add('dark');
    themeIcon.textContent = '☀️';
    themeIconMobile.textContent = '☀️';
  } else {
    html.classList.remove('dark');
    themeIcon.textContent = '🌙';
    themeIconMobile.textContent = '🌙';
  }
  localStorage.theme = dark ? 'dark' : 'light';
}

function initTheme() {
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    setTheme(true);
  } else {
    setTheme(false);
  }
}

initTheme();

themeToggle?.addEventListener('click', () => setTheme(!html.classList.contains('dark')));
themeToggleMobile?.addEventListener('click', () => setTheme(!html.classList.contains('dark')));

// Hamburger menu
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const mobileLinks = document.querySelectorAll('.mobile-link');

hamburger?.addEventListener('click', () => mobileMenu?.classList.toggle('hidden'));

mobileLinks?.forEach(link => {
  link.addEventListener('click', () => mobileMenu?.classList.add('hidden'));
});
