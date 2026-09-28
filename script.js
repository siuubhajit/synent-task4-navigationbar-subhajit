var hamburger = document.getElementById("hamburger");
var navMenu = document.getElementById("navMenu");

function openMenu() {
  navMenu.classList.add("active");
  hamburger.classList.add("open");
}

function closeMenu() {
  navMenu.classList.remove("active");
  hamburger.classList.remove("open");
}

hamburger.addEventListener("click", function () {
  if (navMenu.classList.contains("active")) {
    closeMenu();
  } else {
    openMenu();
  }
});

// tapping a link closes the menu instead of leaving it open behind the new page
navMenu.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", closeMenu);
});

// clicking anywhere outside the nav closes it too
document.addEventListener("click", function (e) {
  var clickedInsideNav = e.target.closest(".navbar");
  if (!clickedInsideNav) {
    closeMenu();
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeMenu();
  }
});




var currentPage = window.location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".nav-menu a[data-page]").forEach(function (link) {
  var linkPage = link.getAttribute("href");
  if (linkPage === currentPage)
    
    
    {
    link.classList.add("active");
  }
});
