document.getElementById("hamburger").addEventListener("click", function () 




{
  document.getElementById("navMenu").classList.toggle("active");
});




var currentPage = window.location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".nav-menu a[data-page]").forEach(function (link) {
  var linkPage = link.getAttribute("href");
  if (linkPage === currentPage)
    
    
    {
    link.classList.add("active");
  }
});
