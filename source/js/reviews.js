import Swiper from 'swiper';
import {Navigation, Pagination, Mousewheel} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/mousewheel';

Swiper.use ([Navigation, Pagination]);

new Swiper('.reviews__swiper', {
  modules: [Navigation, Mousewheel],
  loop: true,
  navigation: {
    nextEl: '.reviews__button--next',
    prevEl: '.reviews__button--prev',
  },
  allowTouchMove: true,
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 60,
  speed: 500,
});
