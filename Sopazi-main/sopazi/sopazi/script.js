
function performSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');

    const searchTerm = searchInput.value.trim();

    if (searchTerm === '') {
        alert('Please enter a search term.');
        return;
    }

    const apiUrl = `https://api.duckduckgo.com/?q=${searchTerm}&format=json&ia=web`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => displayResults(data))
        .catch(error => console.error('Error fetching data:', error));
}

function displayResults(data) {
    const searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = '';

    if (data.Abstract) {
        const resultContainer = document.createElement('div');
        resultContainer.classList.add('result');

        const resultTitle = document.createElement('h2');
        resultTitle.textContent = data.Heading;

        const resultText = document.createElement('p');
        resultText.innerHTML = data.AbstractText;

        const resultLink = document.createElement('a');
        resultLink.href = data.AbstractURL;
        resultLink.textContent = 'Read more';

        resultContainer.appendChild(resultTitle);
        resultContainer.appendChild(resultText);
        resultContainer.appendChild(resultLink);

        searchResults.appendChild(resultContainer);
    } else {
        searchResults.innerHTML = '<p>No results found.</p>';
    }
}


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
