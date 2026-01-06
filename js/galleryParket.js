// Ініціалізація GLightbox
const lightbox10 = GLightbox({
  elements: [
    {
      href: 'images/brukivka/parket/parket_1.jpg',
      type: 'image'
    },
    {
      href: 'images/brukivka/parket/parket_2.jpg',
      type: 'image'
    },
    {
      href: 'images/brukivka/parket/parket_3.jpg',
      type: 'image'
    },
    {
      href: 'images/brukivka/parket/parket_4.jpg',
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
  const btn = document.getElementById('openGalleryParket');
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    lightbox10.open();
  });
});
