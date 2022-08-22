// activer une animation au moment ou on scroll sur l'element
let text = document.getElementById("text");
window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    text.classList.add("animation");
  } else {
    text.classList.remove("animation");
  }
});
