import Swiper from 'swiper';
import { Navigation, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/mousewheel';

const trainersSwiper = new Swiper('.juri__swiper', {
  modules: [Navigation, Mousewheel],
  loop: true,
  navigation: {
    nextEl: '.juri__button--next',
    prevEl: '.juri__button--prev',
  },
  spaceBetween: 40,
  slidesPerView: 1,
  slidesPerGroup: 1,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1366: {
      slidesPerView: 4,
      touch: false,
      simulateTouch: false,
      mousewheel: false,
      keyboard: false,
    }
  }
});

const reviewsSwiper = new Swiper('.reviews__swiper', {
  modules: [Navigation, Mousewheel],
  loop: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  spaceBetween: 40,
  slidesPerView: 1,
  slidesPerGroup: 1,
  touch: true,
  simulateTouch: true,
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    1366: {
      touch: false,
      simulateTouch: false,
      mousewheel: false,
      keyboard: false,
    }
  }
});

trainersSwiper.init();
reviewsSwiper.init();
