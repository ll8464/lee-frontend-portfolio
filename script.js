"use strict";
// When the user scrolls down 20px from the top of the document, slide down the navbar

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("nav").top = "10";
  } else {
    document.getElementById("nav").style.top = "0px";
  }
}
