import gsap from "gsap";

let els = gsap.utils.toArray(".anim-image__part");

const wrap = document.querySelector(".anim-image");

function playAnimation() {
  els.forEach((el, i) => {
    gsap.from(el, {
      scale: 0,
      opacity: 0,
      ease: "elastic.out(1, 0.7)",
      duration: 1,
      delay: (i + 1) * 0.4,
    });
    gsap.to(el, {
      scale: 1,
      ease: "power1.inOut",
      duration: 0.5,
    });
    gsap.to(el, {
      x: "random(-5,5)",
      y: "random(-5,5)",
      ease: "power1.inOut",
      duration: 1,
      repeat: -1,
      yoyo: true,
    });
  });
}

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        playAnimation();
        observer.unobserve(entry.target);
      }
    });
  },
  // {
  //   threshold: 0.5,
  // },
);

observer.observe(wrap);
