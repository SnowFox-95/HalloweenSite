import Swiper from "swiper";


let swiper = new Swiper(".selling-content", {
  spaceBetween: 20,
  centeredSlides: false,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    280: { slidesPerView: 1, spaceBetween: 10 },
    280: { slidesPerView: 2, spaceBetween: 10 },
    750: { slidesPerView: 3, spaceBetween: 15 },
    900: { slidesPerView: 4, spaceBetween: 20 },
  },
});
