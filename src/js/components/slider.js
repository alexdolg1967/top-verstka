const slides = document.querySelectorAll(".main-slide");

const slideObj = []; //массив объектов с данными из слайдов

slides?.forEach(function (el, i) {
    slideObj.push({
        num: i,
        title: el.querySelector(".title").innerText,
        anons: el.querySelector(".anons").innerText,
    });
});

const thimb = new Swiper(".thimbSwiper", {
    // loop: true,
    spaceBetween: 12,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});

const swiper = new Swiper(".main-slider", {
    observer: true,
    observeParents: true,
    slidesPerView: "auto",
    preloadImages: true,
    lazy: true,
    spaceBetween: 0,
    mousewheel: true,
    mousewheelControl: true,
    speed: 1500,
    parallax: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: thimb,
    },
});

const thumbSlide = document.querySelectorAll(".thimb-slide");
const slideTitle = document.querySelectorAll(".content-slide__title");

thumbSlide?.forEach(function (tSlide, i) {
    tSlide.insertAdjacentHTML("beforeend", slideTitle[i].innerHTML);
});
