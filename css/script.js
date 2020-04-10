let page = document.querySelector(".wrapper");
let themeButton = document.querySelector(".theme-button");

themeButton.onclick = function () {
  page.classList.toggle("dark-theme");
  page.classList.toggle("light-theme");
};
