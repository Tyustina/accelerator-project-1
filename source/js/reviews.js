import Swiper from './vendor/swiper.mjs';
import Navigation from './vendor/modules/navigation.mjs';
import Mousewheel from './vendor/modules/mousewheel.mjs';

const swiper = new Swiper('.reviews', {
  modules: [Navigation, Mousewheel],
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  allowTouchMove: true,
  slidesPerView: 1,
  spaceBetween: 40,
});
