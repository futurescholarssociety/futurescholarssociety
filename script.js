// Smooth scrolling for navigation
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// Contact Form Alert
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thanks for reaching out! We'll get back to you soon.");
});

