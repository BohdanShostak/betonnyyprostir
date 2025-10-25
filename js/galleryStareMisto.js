// Ініціалізація GLightbox
const lightbox = GLightbox({
  elements: [
    {
      href: 'images/brukivka/stare_misto/Stare misto 1.jpg',
      type: 'image'
    },
    {
      href: 'images/brukivka/stare_misto/Stare misto 2.jpg',
      type: 'image'
    },
    {
      href: 'images/brukivka/stare_misto/Stare misto 3.jpg',
      type: 'image'
    },
    {
      href: 'images/brukivka/stare_misto/Stare misto 4.jpg',
      type: 'image'
    },
    {
      href: 'images/brukivka/stare_misto/Stare misto 5.jpg',
      type: 'image'
    },
    {
      href: 'images/brukivka/stare_misto/Stare misto 6.jpg',
      type: 'image'
    },
    {
      href: 'images/brukivka/stare_misto/Stare misto 7.jpg',
      type: 'image'
    },
    {
      href: 'images/brukivka/stare_misto/Stare misto 8.jpg',
      type: 'image'
    },
    {
      href: 'images/brukivka/stare_misto/Stare misto 9.jpg',
      type: 'image'
    },
    {
      href: 'images/brukivka/stare_misto/Stare misto 10.jpg',
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
  const btn = document.getElementById('openGallery');
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    lightbox.open();
  });
});
