var swiper = new Swiper(".about-slider", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
  loop: true,
  autoplay: true,
});
var swiper2 = new Swiper(".about-slide", {
  loop: true,
  autoplay: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});
