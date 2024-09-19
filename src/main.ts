// Default Styles
import './styles/fonts.css';
import './styles/style.css';

// Data
import { comments } from './db/comments.db.ts';

// Templates
import { useCommentsTemplate } from './templates/comments.template.ts';

// Elements
const commentsSwiper1Selector: HTMLDivElement =
    document.querySelector('.comments-swiper-wrapper1')!;
const commentsSwiper2Selector: HTMLDivElement =
    document.querySelector('.comments-swiper-wrapper2')!;
const commentsSwiper3Selector: HTMLDivElement =
    document.querySelector('.comments-swiper-wrapper3')!;

// SwiperJs
import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

// Events
window.addEventListener(`load`, () => {
    new Swiper('.comments-swiper1', {
        loop: true,
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
});
