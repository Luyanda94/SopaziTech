

function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  const menuToggle = document.querySelector(".menu-toggle");

  navLinks.classList.toggle("show");
  menuToggle.classList.toggle("show");
}

function requestDemo() {
  alert("Demo requested!");
}



  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
  });

  document.addEventListener('DOMContentLoaded', function () {
    var animatedEvents = document.querySelectorAll('.animated-event');
    animatedEvents.forEach(function (event) {
      event.classList.add('animated');
    });
  });
  document.getElementById('contactForm').addEventListener('submit', function() {
    alert('Form submitted successfully!');
});

document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', function () {
      navLinks.classList.toggle('show');
  });

  // Hide navLinks when a link is clicked
  navLinks.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
          navLinks.classList.remove('show');
      });
  });
});
