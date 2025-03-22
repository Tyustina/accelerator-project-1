import Swiper from './vendor/swiper.mjs';
import Navigation from './vendor/modules/navigation.mjs';
import Mousewheel from './vendor/modules/mousewheel.mjs';

const swiper = new Swiper('.juri', {
  modules: [Navigation, Mousewheel],
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
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1366: {
      slidesPerView: 4,
    }
  }
});

