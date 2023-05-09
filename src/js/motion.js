import SplitType from 'split-type'
import { gsap } from "gsap";
import { ExpoScaleEase, RoughEase, SlowMo } from "gsap/EasePack";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";


gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, ExpoScaleEase, RoughEase, SlowMo);

//header motion
gsap.from(".logo", {opacity: 0, x: -10, duration: 4, ease: 'power2'});
gsap.from(".navigation1", {opacity: 0, x: -10, duration: 4.5, ease: 'power2'});
gsap.from(".navigation2", {opacity: 0, x: -10, duration: 5, ease: 'power2'});

//hero text motion
const text = new SplitType('#introhero')
gsap.from('.line', {
    y: -10,
    stagger: 0.5,
    ease: 'elastic.out(1, 0.5)',
    opacity: 0,   
})

gsap.from(".blogtitle", {opacity: 0, y: 10, duration: 5, ease: 'power2'});


// select elements to reveal
const elements = document.querySelectorAll('.reveal');

// set initial y position below viewport
gsap.set(elements, { y: 10, opacity: 0});

// reveal elements when they come into view
elements.forEach(el => {
  gsap.to(el, {
    y: 0,
    duration: 4,
    opacity: 1,
    ease: 'power2',
    scrollTrigger: {
      trigger: el,
      start: 'top 90%',
    },
  });
});





