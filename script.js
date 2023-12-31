const menuIcon = document.getElementById("i");
const closeMenu = document.getElementById("ii");
const navMobile = document.getElementById("nav");
const navButtonsList = document.querySelectorAll("#navButtons");
const logoUp = document.getElementById("upwork");
const LogoMob = document.getElementById("workup");

window.addEventListener("scroll", function () {
  var header = document.getElementById("header");
  var headerTexts = header.getElementsByTagName("a");

  if (window.scrollY > 100) {
    header.style.backgroundColor = "#3B576F";
    menuIcon.style.color = "white";
    closeMenu.style.color = "white";
    logoUp.style.display = "none";
    LogoMob.style.display = "flex";
    for (var i = 0; i < headerTexts.length; i++) {
      headerTexts[i].style.color = "white";
    }
  } else {
    header.style.backgroundColor = "#d9dada";
    menuIcon.style.color = "black";
    closeMenu.style.color = "black";
    logoUp.style.display = "flex";
    LogoMob.style.display = "none";
    for (var i = 0; i < headerTexts.length; i++) {
      headerTexts[i].style.color = "";
    }
  }
});

navButtonsList.forEach((navButton) => {
  navButton.addEventListener("click", function () {
    navMobile.classList.remove("active");
    closeMenu.style.display = "none";
    menuIcon.style.display = "flex";
  });
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
