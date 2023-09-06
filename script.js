function init(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
}, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();
}
init();

gsap.to(".fleftelem",{
    ScrollTrigger: {
        trigger: ".fright",
        pin: true,
        start: "top top",
        end: "bottom bottom",
        endTrigger: "#fleftelem4",
        scrub: 1
    },
    y: "-300%",
    ease: power1,
})

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let sld = document.getElementById("slides");
  for (i = 0; i < sld.length; i++) {
    sld[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}