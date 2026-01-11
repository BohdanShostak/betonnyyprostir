// Ініціалізація GLightbox
const lightbox5 = GLightbox({
  elements: [
    {
      href: 'images/brukivka/romb/Romb_1.jpg',
      type: 'image'
    },
    {
      href: 'images/brukivka/romb/Romb_2.jpg',
      type: 'image'
    },
    {
      href: 'images/brukivka/romb/Romb_3.jpg',
      type: 'image'
    },
    {
      href: 'images/brukivka/romb/Romb_4.jpg',
      type: 'image'
    },
    {
      href: 'images/brukivka/romb/Romb_5.jpg',
      type: 'image'
    },
    {
      href: 'images/brukivka/romb/Romb_6.jpg',
      type: 'image'
    },
    {
      href: 'images/brukivka/romb/Romb_7.jpg',
      type: 'image'
    },
    {
      href: 'images/brukivka/romb/Romb_8.jpg',
      type: 'image'
    },
    {
      href: 'images/brukivka/romb/Romb_9.jpg',
      type: 'image'
    },
    {
      href: 'images/brukivka/romb/Romb_10.jpg',
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
  const btn = document.getElementById('openGalleryRomb');
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    lightbox5.open();
  });
});
