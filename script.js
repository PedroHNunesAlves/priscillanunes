const menuIcon = document.getElementById("i");
const closeMenu = document.getElementById("ii");
const navMobile = document.getElementById("nav");
const header = document.querySelector("header");

menuIcon.addEventListener("click", function () {
  navMobile.classList.toggle("active");
  menuIcon.style.display = "none";
  closeMenu.style.display = "flex";
});

closeMenu.addEventListener("click", function () {
  navMobile.classList.remove("active");
  closeMenu.style.display = "none";
  menuIcon.style.display = "flex";
});
