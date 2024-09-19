// Default Styles
import './styles/fonts.css';
import './styles/style.css';

// Data
import { comments } from './db/comments.db.ts';

// Templates
import { useCommentsTemplate } from './templates/comments.template.ts';

// Elements
const commentsSwiper1Selector: HTMLDivElement =
    document.querySelector(
        '.comments-swiper-wrapper1',
    ) as HTMLDivElement;

const commentsSwiper2Selector: HTMLDivElement =
    document.querySelector(
        '.comments-swiper-wrapper2',
    ) as HTMLDivElement;

const commentsSwiper3Selector: HTMLDivElement =
    document.querySelector(
        '.comments-swiper-wrapper3',
    ) as HTMLDivElement;

const scrollTopBtnSelector = document.getElementById(
    'scroll-top',
) as HTMLButtonElement;

// SwiperJs
import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

// TypedJs
import Typed from 'typed.js';

// Events
window.addEventListener(`load`, () => {
    // SwiperJs
    new Swiper('.comments-swiper1', {
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
    });
    new Swiper('.comments-swiper2', {
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
    });
    new Swiper('.comments-swiper3', {
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
    });

    const commentsLength = comments.length;
    const each = Math.ceil(commentsLength / 3);

    comments.slice(0, each).forEach((el) => {
        commentsSwiper1Selector.insertAdjacentHTML(
            `beforeend`,
            `<div class="swiper-slide">
             ${useCommentsTemplate(
                 el.comment,
                 el.date,
                 el.name,
                 el?.img ||
                     '/public/images/users/default.webp',
             )}</div>`,
        );
    });
    comments.slice(each, each * 2).forEach((el) => {
        commentsSwiper2Selector.insertAdjacentHTML(
            `beforeend`,
            `<div class="swiper-slide">
             ${useCommentsTemplate(
                 el.comment,
                 el.date,
                 el.name,
                 el?.img ||
                     '/public/images/users/default.webp',
             )}</div>`,
        );
    });
    comments.slice(each * 2, each * 3).forEach((el) => {
        if (!el) return;

        commentsSwiper3Selector.insertAdjacentHTML(
            `beforeend`,
            `<div class="swiper-slide">
             ${useCommentsTemplate(
                 el.comment,
                 el.date,
                 el.name,
                 el?.img ||
                     '/public/images/users/default.webp',
             )}</div>`,
        );
    });

    // TypedJs
    new Typed('#hello', {
        strings: ['سلام...'],
        typeSpeed: 500,
        showCursor: true,
        cursorChar: '|',
    });
    new Typed('#introduction', {
        strings: [
            'محمد رضا رفیعی هستم، مشاور تحصیلی و فردی ;)',
        ],
        typeSpeed: 100,
        showCursor: true,
        cursorChar: '|',
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
