(() => {
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  const openMenuBtn = document.querySelector('[data-mobile-open]');
  const closeMenuBtn = document.querySelector('[data-mobile-close]');
  // добавили доп класс что бы закрыть после нажатия на ссылку
  const menuLinks = document.querySelectorAll('[data-mobile-link]');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  menuLinks.forEach(menuLink => {
    menuLink.addEventListener('click', toggleMenu);
  });

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();

function smoothScroll(target) {
  const anchor = document.querySelector(target);
  if (anchor) {
    anchor.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = this.getAttribute('href');
    smoothScroll(target);
  });
});
