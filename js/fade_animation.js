// activer une animation quand l'element est visible
let carousel = document.getElementById("carousel");
const textObserver2 = new IntersectionObserver(function (entries) {
  if (entries[0].isIntersecting === true) {
    carousel.classList.add("animation2");
  } else {
    carousel.classList.remove("animation2");
  }
})
textObserver2.observe(carousel);

// activer une animation quand l'element est visible
let text = document.getElementById("text");
const textObserver = new IntersectionObserver(function (entries) {
  if (entries[0].isIntersecting === true) {
    text.classList.add("animation");
  } else {
    text.classList.remove("animation");
  }
})
textObserver.observe(text);
