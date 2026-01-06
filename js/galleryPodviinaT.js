// Ініціалізація GLightbox
const lightbox11 = GLightbox({
  elements: [
    {
      href: 'images/brukivka/podviina_T/Podviina_T_1.jpg',
      type: 'image'
    },
    {
       href: 'images/brukivka/podviina_T/Podviina_T_2.jpg',
       type: 'image'
    },
    {
       href: 'images/brukivka/podviina_T/Podviina_T_3.jpg',
       type: 'image'
    },
    {
       href: 'images/brukivka/podviina_T/Podviina_T_4.jpg',
       type: 'image'
    },
    {
       href: 'images/brukivka/podviina_T/Podviina_T_5.jpg',
       type: 'image'
    },
    {
       href: 'images/brukivka/podviina_T/Podviina_T_6.jpg',
       type: 'image'
    },
    {
       href: 'images/brukivka/podviina_T/Podviina_T_7.jpg',
       type: 'image'
    },
    {
       href: 'images/brukivka/podviina_T/Podviina_T_8.jpg',
       type: 'image'
    },
    {
       href: 'images/brukivka/podviina_T/Podviina_T_9.jpg',
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
  const btn = document.getElementById('openGalleryPodviinaT');
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    lightbox11.open();
  });
});
