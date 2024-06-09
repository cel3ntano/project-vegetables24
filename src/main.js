// mobile menu
(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-mobile-open]'),
    closeMenuBtn: document.querySelector('[data-mobile-close]'),
    menu: document.querySelector('[data-mobile-menu]'),
    menuLinks: document.querySelectorAll('[data-mobile-link]'),
    body: document.querySelector('body'),
    html: document.querySelector('html'),
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
    refs.body.classList.toggle('scroll-disabled');
    refs.html.classList.toggle('scroll-disabled');
  }
})();

// modal
(() => {
  const refs = {
    openModalBtns: document.querySelectorAll('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    body: document.querySelector('body'),
    html: document.querySelector('html'),
  };

  refs.openModalBtns.forEach(btn => {
    btn.addEventListener('click', toggleModal);
  });
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-open-modal');
    refs.body.classList.toggle('scroll-disabled');
    refs.html.classList.toggle('scroll-disabled');
    if (refs.modal.classList.contains('is-open-modal')) {
      applyScrollbarWidth();
    } else {
      removeScrollbarWidth();
    }
  }
})();

// smooth scroll
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

const btn = $('#backToTop');

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, '300');
});

// disable header animation on desktop
document.addEventListener('DOMContentLoaded', function () {
  var header = document.querySelector('.header');
  if (window.innerWidth <= 767) {
    header.setAttribute('data-aos', 'fade-down');
    AOS.refresh();
  } else {
    header.removeAttribute('data-aos');
    AOS.refresh();
  }
});

// modal-open scroll lock

const headerContainer = document.querySelector('.header .container');
const modal = document.querySelector('.modal');

function getScrollbarWidth() {
  const scrollDiv = document.createElement('div');
  scrollDiv.style.cssText =
    'width: 100px; height: 100px; overflow: scroll; position: absolute; top: -9999px;';
  document.body.appendChild(scrollDiv);
  const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
}

function applyScrollbarWidth() {
  const scrollbarWidth = getScrollbarWidth();
  document.body.style.paddingRight = scrollbarWidth + 'px';
  headerContainer.style.left = `calc(50% - ${scrollbarWidth / 2}px)`;
  modal.style.marginLeft = `-${scrollbarWidth / 2}px`;
}

function removeScrollbarWidth() {
  document.body.style.paddingRight = '';
  headerContainer.style.left = '50%';
  modal.style.marginLeft = '0';
}
//
// window.addEventListener('scroll', function () {
//   let scrolledX = window.scrollX;
//   let scrolledY = window.scrollY;
//   let background = document.querySelector('body');
//   background.style.backgroundPosition =
//     -(scrolledX * 0.1) + 'px ' + -(scrolledY * 0.1) + 'px'; // Изменяем позицию фонового изображения
// });
