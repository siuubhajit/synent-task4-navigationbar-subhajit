var hamburger = document.getElementById("hamburger");
var navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", function () {
  var isOpen = navMenu.classList.toggle("active");
  hamburger.classList.toggle("open", isOpen);
});




var currentPage = window.location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".nav-menu a[data-page]").forEach(function (link) {
  var linkPage = link.getAttribute("href");
  if (linkPage === currentPage)
    
    
    {
    link.classList.add("active");
  }
});
