const menuIcon = document.getElementById("i");
const closeMenu = document.getElementById("ii");
const navMobile = document.getElementById("nav");
const navButtons = document.getElementById("navButtons");

window.addEventListener("scroll", function () {
  var header = document.getElementById("header");
  var headerTexts = header.getElementsByTagName("a");

  if (window.scrollY > 300) {
    header.style.backgroundColor = "#3B576F";
    menuIcon.style.color = "white";
    closeMenu.style.color = "white";
    for (var i = 0; i < headerTexts.length; i++) {
      headerTexts[i].style.color = "white";
    }
  } else {
    header.style.backgroundColor = "#cccccc";
    menuIcon.style.color = "black";
    closeMenu.style.color = "black";
    for (var i = 0; i < headerTexts.length; i++) {
      headerTexts[i].style.color = "";
    }
  }
});

navButtons.addEventListener("click", function () {
  navMobile.classList.remove("active");
  closeMenu.style.display = "none";
  menuIcon.style.display = "flex";
});

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
