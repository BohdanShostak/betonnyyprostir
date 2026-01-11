// Ініціалізація GLightbox
const lightbox6 = GLightbox({
  elements: [
    {
      href: 'images/brukivka/venetsia/Venetsia_1.jpg',
      type: 'image'
    },
    {
      href: 'images/brukivka/venetsia/Venetsia_2.jpg',
      ype: 'image'
    },
    {
      href: 'images/brukivka/venetsia/Venetsia_3.jpg',
      type: 'image'
    },
    {
      href: 'images/brukivka/venetsia/Venetsia_4.jpg',
      type: 'image'
    },
    {
      href: 'images/brukivka/venetsia/Venetsia_5.jpg',
      type: 'image'
    },
    {
      href: 'images/brukivka/venetsia/Venetsia_6.jpg',
      type: 'image'
    },
    {
      href: 'images/brukivka/venetsia/Venetsia_7.jpg',
      type: 'image'
    },
    {
      href: 'images/brukivka/venetsia/Venetsia_8.jpg',
      type: 'image'
    },
    {
      href: 'images/brukivka/venetsia/Venetsia_9.jpg',
      type: 'image'
    },
    {
      href: 'images/brukivka/venetsia/Venetsia_10.jpg',
      type: 'image'
    },
    {
      href: 'images/brukivka/venetsia/Venetsia_11.jpg',
      type: 'image'
    },
    {
      href: 'images/brukivka/venetsia/Venetsia_12.jpg',
      type: 'image'
    },
    {
      href: 'images/brukivka/venetsia/Venetsia_13.jpg',
      type: 'image'
    },
    {
      href: 'images/brukivka/venetsia/Venetsia_14.jpg',
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
  const btn = document.getElementById('openGalleryVenetsiia');
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    lightbox6.open();
  });
});
