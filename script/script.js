// Function to handle the intersection callback
function handleIntersection(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        observer.unobserve(entry.target);
      }
    });
  
    // Existing code for adding class to header on scroll
    const header = document.querySelector('.navbar');
    var top = window.scrollY;
    if (top >= 100) {
      header.classList.add('navbarDark');
    } else {
      header.classList.remove('navbarDark');
    }
  }
  
  // Create an observer for all your sections
  const sections = document.querySelectorAll('.section');
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1, // Adjust this value as needed
  };
  
  const observer = new IntersectionObserver(handleIntersection, options);
  
  // Observe each section, including the one with the "hidden" class
  sections.forEach((section) => {
    observer.observe(section);
  });

 