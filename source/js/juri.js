import Swiper from 'swiper';
import {Navigation, Pagination, Mousewheel} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/mousewheel';

Swiper.use ([Navigation, Pagination]);

const swiperJuri = new Swiper('.juri__swiper', {
  modules: [Navigation, Pagination, Mousewheel],
  loop: true,
  navigation: {
    nextEl: '.juri__button--next',
    prevEl: '.juri__button--prev',
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

