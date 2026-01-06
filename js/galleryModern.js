// Ініціалізація GLightbox
const lightbox3 = GLightbox({
  elements: [
    {
      href: 'images/brukivka/modern/modern_1.jpg',
      type: 'image'
    },
    {
      href: 'images/brukivka/modern/modern_2.jpg',
      type: 'image'
    },
    {
      href: 'images/brukivka/modern/modern_3.jpg',
      type: 'image'
    },
    {
      href: 'images/brukivka/modern/modern_4.jpg',
      type: 'image'
    },
    {
      href: 'images/brukivka/modern/modern_5.jpg',
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
  const btn = document.getElementById('openGalleryModern');
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    lightbox3.open();
  });
});
