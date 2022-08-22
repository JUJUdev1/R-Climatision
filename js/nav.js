// faire apparaitre le bouton contact au scroll
let btnContact = document.querySelector(".contact-button");
window.addEventListener("scroll", () => {
  if (window.scrollY > 1000) {
    btnContact.classList.add("show");
  } else if (window.scrollY <= 800) {
    btnContact.classList.remove("show");
  }
  btnContact.addEventListener("click", () => {
    window.scrollTo(0, 0);
  });
});

///////////////////////////////////////////// burger //////////////////////////////////////
let link = document.getElementById("link");
let burger = document.getElementById("burger");
let menu = document.getElementById("menu");

link.addEventListener("click", function (e) {
  e.preventDefault();
  burger.classList.toggle("open");
  menu.classList.toggle("open");
});

// si on scroll est que le menu est affiché, on le cache aprés 2sec
window.addEventListener("scroll", function () {
  if (menu.classList.contains("open")) {
    setTimeout(function () {
      menu.classList.remove("open");
      burger.classList.remove("open");
    }, 1000);
  }
});