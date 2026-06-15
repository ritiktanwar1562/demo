const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector("nav ul");

menuBtn.onclick = function () {
    navMenu.classList.toggle("active");
};