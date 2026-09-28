var hamburger = document.getElementById("hamburger");
var navMenu = document.getElementById("navMenu");

function openMenu() {
  navMenu.classList.add("active");
  hamburger.classList.add("open");
  hamburger.setAttribute("aria-expanded", "true");
}

function closeMenu() {
  navMenu.classList.remove("active");
  hamburger.classList.remove("open");
  hamburger.setAttribute("aria-expanded", "false");
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

// highlight the matching nav link as the visitor scrolls past each
// in-page section (Home / Services / Contact all live on index.html)
if (currentPage === "index.html" || currentPage === "") {
  var spyLinks = {};

  document.querySelectorAll(".nav-menu a").forEach(function (link) {
    var href = link.getAttribute("href");
    if (href === "index.html") spyLinks.home = link;
    else if (href.charAt(0) === "#") spyLinks[href.slice(1)] = link;
  });

  var spyObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      var link = spyLinks[entry.target.id];
      if (!link) return;
      document.querySelectorAll(".nav-menu a").forEach(function (l) { l.classList.remove("active"); });
      link.classList.add("active");
    });
  }, { rootMargin: "-45% 0px -50% 0px" });

  document.querySelectorAll("main section[id]").forEach(function (section) {
    spyObserver.observe(section);
  });
}

// give the header a shadow once the page has scrolled a bit
var navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
  navbar.classList.toggle("scrolled", window.scrollY > 8);
});
