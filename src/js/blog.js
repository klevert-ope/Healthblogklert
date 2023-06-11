import SplitType from "split-type";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

gsap.fromTo(
  ".blogtitle",
  { opacity: 0, y: -20 },
  { opacity: 1, y: 0, duration: 2, ease: "circ.in" }
);

// reveal content
gsap.fromTo(
  ".content",
  { x: -20, opacity: 0 },
  {
    x: 0,
    duration: 2.2,
    opacity: 1,
    ease: "circ.in",
  }
);

const buttons = document.querySelectorAll(".vibrate");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if ("vibrate" in window.navigator) {
      window.navigator.vibrate(8); // Vibrate for 6ms
    }
  });
});
