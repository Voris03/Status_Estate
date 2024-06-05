"use strict";

var modal = document.getElementById("modal");

var close = document.getElementById("modal-close");
close.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

setTimeout(() => {
  modal.style.display = "block";
}, 10000);
