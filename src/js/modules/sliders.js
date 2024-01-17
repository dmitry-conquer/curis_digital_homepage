import Swiper, { Pagination } from "swiper";

const sliders = document.querySelectorAll(".swiper-slider");

sliders.forEach(s => {
  if (s) {
    const pageSlider = new Swiper(s, {
      modules: [Pagination],
      wrapperClass: "swiper-wrapper",
      slideClass: "swiper-slide",
      slidesPerView: 1,
      spaceBetween: 30,
      speed: 1200,
      pagination: {
        el: s.querySelector(".pagination"),
        clickable: true,
      },
    });
  }
});
