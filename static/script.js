document.addEventListener("DOMContentLoaded", function () {
    var burger = document.querySelector(".burger");
    var menu = document.querySelector(".menu");
  
    burger.addEventListener("click", function () {
      menu.classList.toggle("show");
    });
  });