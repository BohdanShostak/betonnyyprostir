// Ініціалізація GLightbox
const lightbox9 = GLightbox({
  elements: [
    {
      href: 'images/brukivka/30x30/30x30_1.jpg',
      type: 'image'
    },
    {
      href: 'images/brukivka/30x30/30x30_2.jpg',
      type: 'image'
    },
    {
      href: 'images/brukivka/30x30/30x30_3.jpg',
      type: 'image'
    },
    {
      href: 'images/brukivka/30x30/30x30_4.jpg',
      type: 'image'
    },
    {
      href: 'images/brukivka/30x30/30x30_5.jpg',
      type: 'image'
    },
    {
      href: 'images/brukivka/30x30/30x30_6.jpg',
      type: 'image'
    },
    {
      href: 'images/brukivka/30x30/30x30_7.jpg',
      type: 'image'
    },
    {
      href: 'images/brukivka/30x30/30x30_8.jpg',
      type: 'image'
    },
    {
      href: 'images/brukivka/30x30/30x30_9.jpg',
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
  const btn = document.getElementById('openGallery30x30');
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    lightbox9.open();
  });
});
