const swiper = new Swiper('.juri', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  allowTouchMove: true,
  spaceBetween: 40,
  slidesPerView: 1,
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1366: {
      slidesPerView: 4,
    }
  }
});
