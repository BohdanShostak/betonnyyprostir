// Ініціалізація GLightbox
const lightbox4 = GLightbox({
  elements: [
    {
      href: 'images/brukivka/lainstoun/Lainstoun_2.jpg',
      type: 'image'
    },
    {
      href: 'images/brukivka/lainstoun/Lainstoun_3.jpg',
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
  const btn = document.getElementById('openGalleryLainStoun');
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    lightbox4.open();
  });
});
