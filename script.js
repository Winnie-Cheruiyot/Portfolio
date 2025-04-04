document.addEventListener("DOMContentLoaded", function () {
    // Contact form submission
    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault();
        alert("The details have been well received.");
        this.reset();
    });

    // Rotating social media icons
    const socialIcons = document.querySelectorAll(".social-icons img");
    socialIcons.forEach(icon => {
        icon.addEventListener("mouseover", () => {
            icon.style.transform = "scale(1.2)";
            icon.style.transition = "transform 0.3s ease-in-out";
        });
        icon.addEventListener("mouseleave", () => {
            icon.style.transform = "scale(1)";
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: "smooth"
            });
        });
    });

    // Skill bar animation
    const skillBars = document.querySelectorAll(".skill-bar");
    skillBars.forEach(skill => {
        skill.style.width = "0%";
    });

    window.addEventListener("scroll", function () {
        const triggerBottom = window.innerHeight * 0.8;
        skillBars.forEach(skill => {
            const skillTop = skill.getBoundingClientRect().top;
            if (skillTop < triggerBottom) {
                skill.style.transition = "width 1.5s ease-in-out";
                skill.style.width = skill.parentElement.textContent.includes
                document.querySelectorAll('.social-icons a').forEach(icon => {
                    icon.addEventListener('click', function () {
                        alert('You clicked the ' + this.getAttribute('href') + ' icon!');
                    });
                });
 // Get the theme toggle button and body element
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check if a theme is saved in localStorage
if(localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-theme');
}

// Add an event listener to the button to toggle the theme
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');

    // Save the current theme preference in localStorage
    if (body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});
function toggleMenu() {
    let menu = document.getElementById("nav-menu");
    menu.classList.toggle("active");
}
// JavaScript for toggling the interests section
document.getElementById('toggle-button').addEventListener('click', function () {
    var interestsContainer = document.getElementById('interests-container');
    var buttonText = document.getElementById('toggle-button');

    // Check if the container is currently hidden or shown
    // JavaScript for toggling the interests section
document.getElementById('toggle-button').addEventListener('click', function () {
    var interestsContainer = document.getElementById('interests-container');
    var buttonText = document.getElementById('toggle-button');

    // JavaScript for toggling the interests section
document.getElementById('toggle-button').addEventListener('click', function () {
    var interestsContainer = document.getElementById('interests-container');
    var buttonText = document.getElementById('toggle-button');

    // Check if the container is currently hidden or shown
    if (interestsContainer.classList.contains('hidden')) {
        interestsContainer.classList.remove('hidden'); // Show interests container
        buttonText.textContent = 'Hide My Interests'; // Change button text
    } else {
        interestsContainer.classList.add('hidden'); // Hide interests container
        buttonText.textContent = 'Show My Interests'; // Change button text back
    }
});

    }
});


               

