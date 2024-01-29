gsap.registerPlugin(ScrollTrigger);

gsap.to(".topBurger, .tomato, .cheese, .patty, .bottomBurger", {
  scrollTrigger: {
    target: ".topBurger, .tomato, .cheese, .patty, .bottomBurger",
    start: "10% 10%",
    scrub: 1,
  },
  y: 700,
  x: -240,
  duration: 1,
    rotate: 360,
  ease: "power2"
});

gsap.fromTo(
  ".about-box",
  {
    scale: 0,
  },
  {
    scrollTrigger: {
      target: ".about-box",
          start: "10% 10%",
      toggleActions: "restart resume none none"
      },
      scale: 1,
      duration: 2,
      ease: "bounce"
  }
);




