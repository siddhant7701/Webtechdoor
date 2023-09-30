// Function to scroll back to the top of the page smoothly
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show or hide the "Back to Top" button based on scroll position
window.addEventListener('scroll', function() {
    var backToTopButton = document.getElementById('backToTopBtn');
    if (window.scrollY >= 500) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Attach click event to the "Back to Top" button
document.getElementById('backToTopBtn').addEventListener('click', scrollToTop);

// let testimonialIndex = 1;
// const testimonials = document.getElementsByClassName("testimonial");
// const dots = document.getElementsByClassName("dot");

// function showTestimonials(n) {
//     if (n > testimonials.length) testimonialIndex = 1;
//     if (n < 1) testimonialIndex = testimonials.length;

//     for (let i = 0; i < testimonials.length; i++) {
//         testimonials[i].style.display = "none";
//     }

//     for (let i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }

//     testimonials[testimonialIndex - 1].style.display = "block";
//     dots[testimonialIndex - 1].className += " active";
// }

// function plusTestimonials(n) {
//     showTestimonials((testimonialIndex += n));
// }

// function currentTestimonial(n) {
//     showTestimonials((testimonialIndex = n));
// }

// // Initial setup
// showTestimonials(testimonialIndex);

// // Automatically change testimonials every few seconds
// let intervalId; // Variable to hold the interval ID

// function startTestimonialSlider() {
//     intervalId = setInterval(function() {
//         plusTestimonials(1); // Change to the next testimonial
//     }, 2000); // Change every 5 seconds (adjust as needed)
// }

// // Start the testimonial slider when the page loads
// window.addEventListener('load', startTestimonialSlider);

// // Pause the testimonial slider when the user interacts with the testimonials
// for (let i = 0; i < testimonials.length; i++) {
//     testimonials[i].addEventListener('mouseover', pauseTestimonialSlider);
//     testimonials[i].addEventListener('mouseout', startTestimonialSlider);
// }

// function pauseTestimonialSlider() {
//     clearInterval(intervalId); // Clear the interval to pause the slider
// }
// script.js
const maxBubbles = 20; // Adjust the maximum number of bubbles

function createBubble() {
    const bubbleContainer = document.querySelector(".bubble-container");
    if (bubbleContainer.children.length < maxBubbles) {
        const bubble = document.createElement("div");
        bubble.className = "bubble";
        const size = Math.random() * 20 + 10; // Adjust bubble size as needed
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${Math.random() * 100}%`;
        bubbleContainer.appendChild(bubble);

        // Remove the bubble element after a delay
        setTimeout(() => {
            bubble.remove();
        }, 10000); // Adjust the delay as needed
    }
}

// Generate bubbles at intervals (adjust the interval as needed)
setInterval(createBubble, 2000); // Adjust the interval as needed
function showThankYouMessage(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Display the thank you message div
    const thankYouDiv = document.getElementById("thank-you");
    thankYouDiv.style.display = "block";

    // Hide the form
    const contactForm = document.getElementById("contact-form");
    contactForm.style.display = "none";

    // Reload the page after 3 seconds (adjust the delay as needed)
    setTimeout(() => {
        location.reload();
    }, 3000); // 3 seconds delay before reloading
}

// Attach the form submission handler
// const contactForm = document.getElementById("contact-form");
// contactForm.addEventListener("submit", showThankYouMessage);