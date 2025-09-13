

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
      breakpoints: {
        // mobil (0 - 575px)
        0: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        // tablet (≥576px)
        576: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        // küçük laptop (≥768px)
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        // normal laptop (≥992px)
        992: {
          slidesPerView: 4,
          spaceBetween: 25,
        },
        1200: {
          slidesPerView: 5,
          spaceBetween: 22,
        }
      }
    });


});