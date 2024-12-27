// Select the .airplane-banner and #airplane elements
const airplaneBanner = document.querySelector('.airplane-banner');
const airplane = document.querySelector('#airplane');

// Create the IntersectionObserver
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      airplaneBanner.classList.add('visible');  // Add visible class to banner
      airplane.classList.add('visible');        // Add visible class to airplane
      observer.unobserve(entry.target);         // Stop observing once animation starts
    }
  });
}, { threshold: 0.05 }); 

// Start observing the .airplane-banner
observer.observe(airplaneBanner);
