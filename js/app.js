

$(document).ready(function() {

    //hero-slide
    var swiper = new Swiper(".hero-slider__wrapper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".hero-slider__pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".hero-slider__next-button",
        prevEl: ".hero-slider__prev-button",
      },
    });

    //filtered-vehicles__slider
    var swiper = new Swiper(".filtered-vehicles__slider", {
      slidesPerView: 5,
      spaceBetween: 22,
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 3000,
      },
      pagination: {
        el: ".filtered-vehicles__pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".filtered-vehicles__next-button",
        prevEl: ".filtered-vehicles__prev-button",
      },
    });


});