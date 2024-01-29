import Swiper, { Pagination, Autoplay } from "swiper";

const sliders = document.querySelectorAll(".swiper-slider");

sliders.forEach(s => {
  if (s) {
    const {delay} = s.dataset;
    const pageSlider = new Swiper(s, {
      modules: [Pagination, Autoplay],
      wrapperClass: "swiper-wrapper",
      slideClass: "swiper-slide",
      slidesPerView: 1,
      spaceBetween: 30,
      speed: 1200,
      autoplay: {
        delay,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      },
      pagination: {
        el: s.querySelector(".pagination"),
        clickable: true,
      },
    });
  }
});
