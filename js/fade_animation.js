// activer une animation au moment ou on scroll sur l'element
let text = document.getElementById("text");
window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    text.classList.add("animation");
  } else {
    text.classList.remove("animation");
  }
});

// activer une animation au moment ou on scroll sur l'element
let carousel = document.getElementById("carousel");
window.addEventListener("scroll", function () {
  if (window.scrollY > 1100) {
    carousel.classList.add("animation2");
  } else {
    carousel.classList.remove("animation2");
  }
});
