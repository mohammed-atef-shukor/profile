// Add a "scroll to top" button
var scrollToTopBtn = document.querySelector(".scroll-to-top-btn");

window.addEventListener("scroll", function() {
  if (window.pageYOffset > 100) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
});

scrollToTopBtn.addEventListener("click", function() {
  window.scrollTo(0, 0);
});



