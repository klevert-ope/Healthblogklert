import SplitType from "split-type";
import { gsap } from "gsap";
import { ExpoScaleEase, RoughEase, SlowMo } from "gsap/EasePack";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(
  ScrollTrigger,
  ScrollToPlugin,
  ExpoScaleEase,
  RoughEase,
  SlowMo
);

//header motion
gsap.fromTo(
  ".logo",
  { opacity: 0, x: -10 },
  { opacity: 1, x: 0, duration: 2, ease: "circ.in" }
);
gsap.fromTo(
  ".navigation1",
  { opacity: 0, x: -10 },
  { opacity: 1, x: 0, duration: 2.5, ease: "circ.in" }
);
gsap.fromTo(
  ".navigation2",
  { opacity: 0, x: -10 },
  { opacity: 1, x: 0, duration: 2.5, ease: "circ.in" }
);

//hero text motion
const text = new SplitType("#introhero");
gsap.fromTo("#introhero", { opacity: 0 }, { opacity: 1 });

gsap.fromTo(
  ".line",
  { opacity: 0, y: -10 },
  {
    y: 0,
    stagger: 0.5,
    ease: "circ.in",
    opacity: 1,
  }
);

gsap.fromTo(
  ".blogtitle",
  { opacity: 0, y: 10 },
  { opacity: 1, y: 0, duration: 3, ease: "circ.in" }
);

// select elements to reveal
const elements = document.querySelectorAll(".reveal");

// reveal elements when they come into view
elements.forEach((el) => {
  gsap.fromTo(
    el,
    { y: 50, opacity: 0 },
    {
      y: 0,
      duration: 1.5,
      opacity: 1,
      ease: "circ.in",
      scrollTrigger: {
        trigger: el,
        start: "top 95%",
      },
    }
  );
});
