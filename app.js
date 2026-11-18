// ==========================================
// IPL Ticket Booking - JavaScript
// Activity 5: JavaScript Basics and User Interaction
// ==========================================


// Reusable function to display toast notifications
function showToast(message) {
    const toast = document.createElement("div");

    toast.textContent = message;

    toast.style.position = "fixed";
    toast.style.bottom = "30px";
    toast.style.right = "30px";
    toast.style.backgroundColor = "#0a4420";
    toast.style.color = "white";
    toast.style.padding = "15px 25px";
    toast.style.borderRadius = "5px";
    toast.style.fontSize = "16px";
    toast.style.zIndex = "1000";
    toast.style.boxShadow = "0 3px 10px rgba(0,0,0,0.3)";

    document.body.appendChild(toast);

    // Remove toast after 3 seconds
    setTimeout(function () {
        toast.remove();
    }, 3000);
}


// Smooth scrolling for Book buttons
const bookButtons = document.querySelectorAll('a[href="#booking"]');

bookButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {

        // Prevent normal jump to the section
        event.preventDefault();

        // Find the booking section
        const bookingSection = document.getElementById("booking");

        // Smoothly scroll to booking section
        bookingSection.scrollIntoView({
            behavior: "smooth"
        });

        // Display confirmation toast
        showToast("Redirecting to the ticket booking form...");
    });
});


// Confirmation toast when booking form is submitted
const bookingForm = document.querySelector("#booking form");

if (bookingForm) {
    bookingForm.addEventListener("submit", function (event) {
        event.preventDefault();

        showToast("Ticket booking submitted successfully!");

        // Optional: reset the form
        bookingForm.reset();
    });
}