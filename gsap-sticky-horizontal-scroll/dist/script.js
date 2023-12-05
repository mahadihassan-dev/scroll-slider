gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".panel");

let scrollTween = gsap.to(sections, {
    xPercent: -100 * (sections.length - 2),
    ease: "none", // <-- IMPORTANT!
    scrollTrigger: {
      trigger: ".container",
      pin: true,
      markers: true,
      scrub: 0.1,
      //snap: directionalSnap(1 / (sections.length - 1)),
      end: "+=3000 bottom"
    }
  });

gsap.utils.toArray(".panel").forEach((panel) => {
  ScrollTrigger.create({
    trigger: panel,
    containerAnimation: scrollTween,
    markers: true,
    start: "left left",
    toggleClass: "stick"
  })
})