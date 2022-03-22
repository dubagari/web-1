const head = document.querySelector(".head");
const menu = document.getElementById("menu");
const navbar = document.querySelector(".navbar");

menu.addEventListener("click", function () {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active-nav");
});
window.addEventListener("scroll", function () {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active-nav");

  let current = head.offsetTop;

  let win = window.scrollY;

  if (win > current) {
    head.classList.add("active-class");
  } else {
    head.classList.remove("active-class");
  }
});
