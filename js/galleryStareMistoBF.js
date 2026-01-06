// Ініціалізація GLightbox
const lightbox2 = GLightbox({
  elements: [
    {
      href: 'images/brukivka/stare_misto_mini_phaska/stare_misto_bf_1.jpg',
      type: 'image'
    },
    {
      href: 'images/brukivka/stare_misto_mini_phaska/stare_misto_bf_2.jpg',
      type: 'image'
    },
    {
      href: 'images/brukivka/stare_misto_mini_phaska/stare_misto_bf_3.jpg',
      type: 'image'
    },
    {
      href: 'images/brukivka/stare_misto_mini_phaska/stare_misto_bf_4.jpg',
      type: 'image'
    },
    {
      href: 'images/brukivka/stare_misto_mini_phaska/stare_misto_bf_5.jpg',
      type: 'image'
    },
    {
      href: 'images/brukivka/stare_misto_mini_phaska/stare_misto_bf_6.jpg',
      type: 'image'
    },
    {
      href: 'images/brukivka/stare_misto_mini_phaska/stare_misto_bf_7.jpg',
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
  const btn = document.getElementById('openGalleryStareMistoBF');
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    lightbox2.open();
  });
});
