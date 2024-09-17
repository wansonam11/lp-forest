// function toggleMenu() {
//     var menuText = document.getElementById("ham-menu-text");

//     if (menuText.innerHTML === "MENU") {
//         menuText.innerHTML = "CLOSE";
//     } else {
//         menuText.innerHTML = "MENU";
//     }
// }

// function toggleMenu() {
//   const menuText = document.querySelector('.menu');
//   const closeText = document.querySelector('.close');

//   if (menuText.style.display === "none") {
//       menuText.style.display = "block";
//       closeText.style.display = "none";
//   } else {
//       menuText.style.display = "none";
//       closeText.style.display = "block";
//   }
// }

function toggleMenu() {
  const navMenu = document.getElementsByClassName("forest__nav");

  // navMenu.classList.add('show');
  for (var i = 0; i < navMenu.length; ++i) navMenu[i].classList.toggle("show");
}

function hamburger() {
  const navBar = document.getElementById("forest__nav__toggle");
  if (!navBar) {
    return false;
  }
  navBar.addEventListener("click", () => {
    toggleMenu();
  });

  const navLinkList = document.querySelectorAll(".forest__nav__list");
  navLinkList.forEach((el) => el.addEventListener("click", toggleMenu));
}

hamburger();
