import Swiper from 'swiper';
import {Navigation, Pagination, Mousewheel} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/mousewheel';

Swiper.use ([Navigation, Pagination]);

const reviewsSwiper = new Swiper('.reviews__swiper', {
  modules: [Navigation, Mousewheel],
  navigation: {
    nextEl: '.reviews__button--next',
    prevEl: '.reviews__button--prev',
  },

  allowTouchMove: true,
  slidesPerView: 1,
  spaceBetween: 60,
  speed: 500,
});

reviewsSwiper.init();
