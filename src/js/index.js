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
    { y: 10, opacity: 0 },
    {
      y: 0,
      duration: 0.5,
      opacity: 1,
      ease: "circ.in",
      scrollTrigger: {
        fastScrollEnd: true,
        preventOverlaps: true,
        trigger: el,
        start: "top 98%",
        end: "top 70%",
      },
    }
  );
});

const buttons = document.querySelectorAll(".vibrate");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if ("vibrate" in window.navigator) {
      window.navigator.vibrate(8); // Vibrate for 6ms
    }
  });
});

function limitExcerptCharacters() {
  const excerptElements = document.getElementsByClassName("excerpt");
  Array.from(excerptElements).forEach(function (element) {
    const excerptText = element.textContent;
    const maxCharacters = 120;
    const limitedText = truncateText(excerptText, maxCharacters);
    element.textContent = limitedText;
  });
}

function truncateText(text, maxLength) {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  } else {
    return text;
  }
}

// Call the function when the page loads
window.onload = limitExcerptCharacters;
