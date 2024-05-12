const heroSlider = new Swiper(".heroSlider", {
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: true,
      translate: ["-20%", 0, -1],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  autoplay: {
    delay: 6000,
  },
  speed: 1000,

  navigation: {
    nextEl: ".hero-slide-next",
    prevEl: ".hero-slide-prev",
  },
  next: {
    translate: ["100rem"],
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

const aboutSlider = new Swiper(".about-slider", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
  loop: true,
  autoplay: true,
});
const aboutThumb = new Swiper(".about-slide", {
  loop: true,
  autoplay: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: aboutSlider,
  },
});

const portfolioSlider = new Swiper(".portfolio-slider", {
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 10,
  // loop: true,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    // 1220: {
    //   slidesPerView: 4,
    //   spaceBetween: 40,
    // },
  },
  // Navigation arrows
  navigation: {
    nextEl: ".portfolio-swiper-next",
    prevEl: ".portfolio-swiper-prev",
  },
});
