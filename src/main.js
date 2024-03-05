(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-mobile-open]'),
    closeMenuBtn: document.querySelector('[data-mobile-close]'),
    menu: document.querySelector('[data-mobile-menu]'),
    menuLinks: document.querySelectorAll('[data-mobile-link]'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  refs.menuLinks.forEach(menuLink => {
    menuLink.addEventListener('click', () => {
      toggleMenu();
    });
  });

  function toggleMenu() {
    refs.menu.classList.toggle('is-open');
  }
})();

(() => {
  const refs = {
    openModalBtns: document.querySelectorAll('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtns.forEach(btn => {
    btn.addEventListener('click', toggleModal);
  });
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-open-modal');
  }
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

// window.addEventListener('scroll', function () {
//   let scrolledX = window.scrollX;
//   let scrolledY = window.scrollY;
//   let background = document.querySelector('body');
//   background.style.backgroundPosition =
//     -(scrolledX * 0.1) + 'px ' + -(scrolledY * 0.1) + 'px'; // Изменяем позицию фонового изображения
// });
