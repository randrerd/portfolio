let btn = document.getElementById("navButton");
let navLinks = document.getElementById("navLinks");

btn.onclick = function () {
  btn.classList.toggle("is-active");
  navLinks.classList.toggle("mobile");
};