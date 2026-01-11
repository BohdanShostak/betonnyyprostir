// Ініціалізація GLightbox
const lightbox7 = GLightbox({
  elements: [
    {
      href: 'images/brukivka/tsehlynka/Tsehlynka_1.jpg',
      type: 'image'
    },
    {
      href: 'images/brukivka/tsehlynka/Tsehlynka_2.jpg',
      type: 'image'
    },
    {
      href: 'images/brukivka/tsehlynka/Tsehlynka_3.jpg',
      type: 'image'
    },
    {
      href: 'images/brukivka/tsehlynka/Tsehlynka_4.jpg',
      type: 'image'
    },
    {
      href: 'images/brukivka/tsehlynka/Tsehlynka_5.jpg',
      type: 'image'
    },
    {
      href: 'images/brukivka/tsehlynka/Tsehlynka_6.jpg',
      type: 'image'
    }
  ],
  touchNavigation: true,
  loop: true,
  autoplayVideos: true,
  zoomable: true,
  plyr: { css: 'https://cdn.plyr.io/3.6.8/plyr.css' }
});

// Подія на кнопку
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById('openGalleryTsehlynka');
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    lightbox7.open();
  });
});
