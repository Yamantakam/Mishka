"use strict";

var nav = document.querySelector(".nav"),
    navToggle = document.querySelector(".btn--nav");
    nav.classList.remove("nav--nojs");
navToggle.addEventListener("click", function(){
  if(nav.classList.contains("nav--closed")){
    nav.classList.remove("nav--closed");
    nav.classList.add("nav--opened");
  } else {
    nav.classList.remove("nav--opened");
    nav.classList.add("nav--closed");
  }
});
