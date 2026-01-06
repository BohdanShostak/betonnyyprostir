// Ініціалізація GLightbox
const lightbox8 = GLightbox({
  elements: [
    {
      href: 'images/brukivka/venetsia_ryflena/venetsia_ryflena_1.jpg',
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
  const btn = document.getElementById('openGalleryVenetsiiaRyflena');
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    lightbox8.open();
  });
});
