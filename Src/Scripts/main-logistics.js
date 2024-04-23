// Body
const body = document.querySelector("body");

// Root
const root = document.querySelector(".root");

// Cursor
const cursor = document.querySelector(".cursor");

// Header
const header = document.querySelector("header");
const headerCont = document.querySelector(".header-cont");
const redirectCont = document.querySelector(".redirect-home-cont a");

const theCursor = () => {
  const onMouseMove = (event) => {
    gsap.to(cursor, {
      top: event.clientY + "px",
      left: event.clientX + "px",
    });
  };

  const onMouseLeave = () => {
    gsap.to(cursor, {
      scale: 0,
    });
  };

  const onMouseEnter = () => {
    gsap.to(cursor, {
      scale: 1,
    });
  };

  const cursorOnRedirect = () => {
    gsap.to(cursor, {
      scale: 0.3,
    });
  };

  const cursorOffRedirect = () => {
    gsap.to(cursor, {
      scale: 1,
    });
  };

  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mouseover", onMouseEnter);
  document.addEventListener("mouseleave", onMouseLeave);
  redirectCont.addEventListener("mouseover", cursorOnRedirect);
  redirectCont.addEventListener("mouseleave", cursorOffRedirect);
};

const theHeader = () => {
  const mouseOver = () => {
    redirectCont.style.opacity = "1";
    redirectCont.classList.remove(
      "redirect-move-right",
      "redirect-move-left",
      "redirect-hide"
    );
    redirectCont.classList.add("redirect-move-center");
  };

  const mouseLeave = () => {
    redirectCont.classList.remove(
      "redirect-move-right",
      "redirect-move-center"
    );
    redirectCont.classList.add("redirect-move-left");
    setTimeout(() => {
      redirectCont.classList.add("redirect-hide");
    }, 100);
    setTimeout(() => {
      redirectCont.classList.remove("redirect-move-left");
    }, 300);
  };

  redirectCont.addEventListener("mouseover", mouseOver);
  redirectCont.addEventListener("mouseleave", mouseLeave);
};

// Main
const main = document.querySelector("main");
const hero = document.querySelector(".hero");
const [heroImageCont1, heroImageCont2, heroImageCont3] =
  document.querySelectorAll(".hero-image");
const [heroImage1, heroImage2, heroImage3] =
  document.querySelectorAll(".hero-image img");

const theMain = () => {
  gsap.to(heroImage1, {
    scale : 1,
    ease: "power3.in",
    objectPosition: "top",
    scrollTrigger: {
      scroll: body,
      trigger: heroImage1,
      start: "top center",
      end: "bottom center",
      scrub: 2,
    },
  });
  gsap.to(heroImage2, {
    scale : 1,
    ease: "power3.in",
    objectPosition: "center",
    scrollTrigger: {
      scroll: body,
      trigger: heroImage1,
      start: "top center",
      end: "bottom center",
      scrub: 2,
    },
  });
  gsap.to(heroImage3, {
    scale : 1,
    ease: "power3.in",
    objectPosition: "bottom",
    scrollTrigger: {
      scroll: body,
      trigger: heroImage1,
      start: "top center",
      end: "bottom center",
      scrub: 2,
    },
  });
};

const theExecutor = () => {
  theCursor();
  theHeader();
  theMain();
};

theExecutor();

// .to('.power4', time, {x: xgap, ease: Power4.easeIn}, `-=${time}`)
