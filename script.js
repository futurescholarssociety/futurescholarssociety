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
// Generate Stars for Background
function createStars(numStars) {
    const starsContainer = document.createElement("div");
    starsContainer.classList.add("stars");

    for (let i = 0; i < numStars; i++) {
        let star = document.createElement("div");
        star.classList.add("star");
        let size = Math.random() * 3 + 1;
        star.style.width = size + "px";
        star.style.height = size + "px";
        star.style.top = Math.random() * 100 + "vh";
        star.style.left = Math.random() * 100 + "vw";
        star.style.animationDuration = Math.random() * 3 + 2 + "s";
        starsContainer.appendChild(star);
    }

    document.body.appendChild(starsContainer);
}

createStars(100); // Adds 100 stars
// Interactive Buttons - Change Text on Click
document.querySelectorAll(".interactive-btn").forEach(button => {
    button.addEventListener("click", function() {
        this.textContent = "Clicked!";
        this.style.background = "#ff6bcb";
        this.style.boxShadow = "0 0 20px #ff6bcb";
    });
});

