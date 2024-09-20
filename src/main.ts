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

const videosWrapperSelector = document.getElementById(
    'videos-wrapper',
) as HTMLDivElement;

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

// PlyrJs
import Plyr from 'plyr';
import 'plyr/dist/plyr.css';
const plyrJsConfigs = {
    controls: [
        'play',
        'progress',
        'current-time',
        'mute',
        'volume',
        'fullscreen',
    ],
};

// AosCss
import AOS from 'aos';
import 'aos/dist/aos.css';
import { videos } from './db/videos.db';
import { insertVideo } from './templates/videos.template';

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

    // PlyrJs
    new Plyr('#audio-player', {
        controls: ['play', 'progress', 'current-time'],
    });
    const players: Plyr[] = [];
    videos.slice(0, 4).forEach((el, index) => {
        const justifyClass =
            index % 2
                ? 'justify-end-class'
                : 'justify-start-class';

        insertVideo(
            el,
            videosWrapperSelector,
            index,
            justifyClass,
        );

        const videoId = `video-${index}`;
        const player = new Plyr(
            `#${videoId}`,
            plyrJsConfigs,
        );

        players.push(player);

        player.on('play', () => {
            players.forEach((otherPlayer) => {
                if (otherPlayer !== player) {
                    otherPlayer.pause();
                }
            });
        });
    });

    // AosCss
    AOS.init({
        disable: false,
        startEvent: 'DOMContentLoaded',
        initClassName: 'aos-init',
        animatedClassName: 'aos-animate',
        useClassNames: false,
        disableMutationObserver: false,
        debounceDelay: 50,
        throttleDelay: 99,

        offset: 120,
        delay: 150,
        duration: 400,
        easing: 'ease',
        once: false,
        mirror: false,
        anchorPlacement: 'top-bottom',
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
