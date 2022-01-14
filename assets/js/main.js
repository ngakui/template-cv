// Add your javascript here
// Don't forget to add it into respective layouts where this js file is needed

// AOS initialisation.
$(document).ready(function() {
    AOS.init( {
      // uncomment below for on-scroll animations to played only once
      // once: true  
    }); // initialize animate on scroll library
});

// When the user scrolls down 20px from the top of the document, slide down the navbar
// When the user scrolls to the top of the page, slide up the navbar (50px out of the top view)
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
  
    // 20 is an arbitrary number here, just to make you think if you need the prevScrollpos variable:
    if (currentScrollPos > 200) {
      // I am using 'display' instead of 'top':
      document.getElementById("navbar").style.display = "none";
    } else {
      document.getElementById("navbar").style.display = "initial";
    }
  }

// Smooth scroll for links with hashes
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});