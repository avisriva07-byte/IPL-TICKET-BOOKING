// ==========================================
// IPL Ticket Booking - JavaScript
// Activity 5: JavaScript Basics and User Interaction
// Activity 7: Selector Forms and Live Interaction
// ==========================================


// Reusable function to display toast notifications
function showToast(message) {
    // Remove any existing toast so messages don't stack on top of each other
    const oldToast = document.querySelector(".toast-message");
    if (oldToast) {
        oldToast.remove();
    }

    const toast = document.createElement("div");
    toast.className = "toast-message";

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


// ==========================================
// Activity 7: Live Booking Summary
// ==========================================

// Ticket prices per match and stand (same as the schedule table)
const ticketPrices = {
    "CSK vs MI":  { General: 800,  Premium: 1500, VIP: 3000 },
    "RCB vs KKR": { General: 1000, Premium: 1800, VIP: 3500 },
    "MI vs KKR":  { General: 900,  Premium: 1400, VIP: 2800 },
    "SRH vs RR":  { General: 700,  Premium: 1600, VIP: 3200 }
};

// Select the form controls
const matchSelect = document.getElementById("match");
const standSelect = document.getElementById("stand");
const quantityInput = document.getElementById("quantity");

// Select the Booking Summary elements
const summaryMatch = document.getElementById("summaryMatch");
const summaryStand = document.getElementById("summaryStand");
const summaryPrice = document.getElementById("summaryPrice");
const summaryQuantity = document.getElementById("summaryQuantity");
const summaryTotal = document.getElementById("summaryTotal");


// Read the current choices, calculate the total, update the summary card
function updateSummary(showMessage) {
    const match = matchSelect.value;
    const stand = standSelect.value;

    // Keep quantity between 0 and 10
    let quantity = parseInt(quantityInput.value);
    if (isNaN(quantity) || quantity < 0) {
        quantity = 0;
    }
    if (quantity > 10) {
        quantity = 10;
        quantityInput.value = 10;
    }

    // Look up the price only if both match and stand are selected
    let price = 0;
    if (match !== "" && stand !== "") {
        price = ticketPrices[match][stand];
    }

    const total = price * quantity;

    // Display the details in the Booking Summary Card
    summaryMatch.textContent = match !== "" ? match : "Not Selected";
    summaryStand.textContent = stand !== "" ? stand : "Not Selected";
    summaryPrice.textContent = "₹" + price;
    summaryQuantity.textContent = quantity;
    summaryTotal.textContent = "₹" + total;

    if (showMessage) {
        showToast("Booking summary updated! Total: ₹" + total);
    }
}


// Update the summary live whenever the user changes a selection
matchSelect.addEventListener("change", function () {
    updateSummary(true);
});

standSelect.addEventListener("change", function () {
    updateSummary(true);
});

quantityInput.addEventListener("change", function () {
    updateSummary(true);
});

// Also update while typing / using the arrow buttons in the quantity box
quantityInput.addEventListener("input", function () {
    updateSummary(false);
});


// Confirmation toast when booking form is submitted
const bookingForm = document.querySelector("#booking form");

if (bookingForm) {
    bookingForm.addEventListener("submit", function (event) {
        event.preventDefault();

        showToast("Ticket booking submitted successfully!");

        // Reset the form and the summary card
        bookingForm.reset();
        updateSummary(false);
    });
}


// Set the summary to its starting state when the page loads
updateSummary(false);