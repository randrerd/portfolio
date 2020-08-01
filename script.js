"use strict";

const navbarSection = (() => {
  //DOM Cache
  let btn = document.getElementById("navButton");
  let navLinks = document.getElementById("navLinks");

  //Event listeners
  btn.onclick = function () {
    btn.classList.toggle("is-active");
    navLinks.classList.toggle("mobile");
  };
})();

const carouselSection = (() => {
  //DOM Cache
  let elem = document.querySelector(".main-carousel");

  var flkty = new Flickity(elem, {
    // options
    cellAlign: "left",
    contain: true,
    imagesLoaded: true,
    groupCells: true,
  });

  var flkty = new Flickity(".main-carousel", {});
})();

//AOS Library Handler

AOS.init({
  duration: 800,
});
