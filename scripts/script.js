"use strict";

window.addEventListener("DOMContentLoaded", start);

function start() {
  revealIntro();
  textAnimation();
  revealHeader();
}

function revealHeader() {
  gsap.to(".illustration", {
    opacity: 1,
    duration: 1.5,
    ease: "power2.out",
  });

  gsap.to(".header_text", {
    x: "0%",
    opacity: 1,
    duration: 1.5,
    ease: "power2.out",
  });
}

function revealIntro() {
  gsap.to(".text", {
    x: "0%",
    opacity: 1,
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#intro",
      start: "top 65%",
    },
  });

  gsap.to(".number_container", {
    x: "0%",
    opacity: 1,
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#intro",
      start: "top 65%",
    },
  });
}

function textAnimation() {
  gsap.to("#why", {
    opacity: 1,
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#why",
      start: "top 65%",
    },
  });

  gsap.to(".family_text", {
    opacity: 1,
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#family",
      start: "top 65%",
    },
  });

  gsap.to(".school_text", {
    opacity: 1,
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#school",
      start: "top 65%",
    },
  });
}
