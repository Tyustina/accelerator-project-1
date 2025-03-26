import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/mousewheel';

new Swiper('.trainers__swiper', {
  modules: [Navigation ],
  loop: true,
  navigation: {
    nextEl: '.trainers__button--next',
    prevEl: '.trainers__button--prev',
  },
  allowTouchMove: true,
  spaceBetween: 40,
  slidesPerView: 1,
  speed: 400,
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    1366: {
      slidesPerView: 4,
      slidesPerGroup: 4,
    }
  }
});

new Swiper('.reviews__swiper', {
  modules: [Navigation],
  loop: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  allowTouchMove: true,
  spaceBetween: 10,
  slidesPerView: 1,
  slidesPerGroup: 1,
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    768: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    }
  }
});
