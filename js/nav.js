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

// quand on clique sur un lien du menu, le menu se ferme
menu.addEventListener("click", function (e) {
  if (e.target.tagName === "A") {
    burger.classList.remove("open");
    menu.classList.remove("open");
  }
}
);


// on cache le logo et le h1 quand on scroll
let logo = document.getElementById("logo");
let h1 = document.getElementById("h1");
let header = document.getElementById("header2");
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    logo.style.display = "none";
    h1.style.display = "none";
    header.style.height = "40px";
  } else if (window.scrollY <= 100) {
    logo.style.display = "block";
    h1.style.display = "block";
    header.style.height = "auto";
  }
}
);
