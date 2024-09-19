// Default Styles
import './styles/fonts.css';
import './styles/style.css';

// Data
import { comments } from './db/comments.db';

// Templates
import { insertComments } from './templates/comments.template';

// Elements
const commentsSwiper1Selector = document.querySelector(
    '.comments-swiper-wrapper1',
) as HTMLDivElement;

const commentsSwiper2Selector = document.querySelector(
    '.comments-swiper-wrapper2',
) as HTMLDivElement;

const commentsSwiper3Selector = document.querySelector(
    '.comments-swiper-wrapper3',
) as HTMLDivElement;

const scrollTopBtnSelector = document.getElementById(
    'scroll-top',
) as HTMLButtonElement;

// SwiperJs
import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
const swiperJsOptions = {
    loop: true,
    allowTouchMove: false,
    slidesPerView: 1,
    spaceBetween: 20,

    modules: [Autoplay],
    autoplay: {
        delay: 3000,
    },
    breakpoints: {
        430: {
            slidesPerView: 1.2,
        },
        500: {
            slidesPerView: 1.4,
        },
        550: {
            slidesPerView: 1.5,
        },
        640: {
            slidesPerView: 1.8,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2.1,
        },
        1024: {
            slidesPerView: 2.8,
        },
        1280: {
            slidesPerView: 3.3,
        },
        1536: {
            slidesPerView: 3.5,
        },
    },
};

// TypedJs
import Typed from 'typed.js';

// Events
window.addEventListener(`load`, () => {
    // SwiperJs
    new Swiper('.comments-swiper1', swiperJsOptions);
    new Swiper('.comments-swiper2', swiperJsOptions);
    new Swiper('.comments-swiper3', swiperJsOptions);

    const commentsLength = comments.length;
    const each = Math.ceil(commentsLength / 3);

    comments.slice(0, each).forEach((el) => {
        insertComments(el, commentsSwiper1Selector);
    });
    comments.slice(each, each * 2).forEach((el) => {
        insertComments(el, commentsSwiper2Selector);
    });
    comments.slice(each * 2, each * 3).forEach((el) => {
        insertComments(el, commentsSwiper3Selector);
    });

    // TypedJs
    new Typed('#hello', {
        strings: ['سلام...'],
        typeSpeed: 500,
    });
    new Typed('#introduction', {
        strings: [
            'حمیدرضا رفیعی هستم، مشاور تحصیلی و فردی ;)',
        ],
        typeSpeed: 100,
    });
});

window.addEventListener('scroll', () => {
    if (window.scrollY)
        scrollTopBtnSelector.classList.remove('hidden');
    else scrollTopBtnSelector.classList.add('hidden');
});

scrollTopBtnSelector.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});
