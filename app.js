/* ==========================================
   IPL 2026 - ACTIVITY 8
   JavaScript
========================================== */


/* ==========================================
   TOAST FUNCTION
========================================== */

function showToast(message) {

    const toast = document.getElementById("toast");
    const toastMessage = document.getElementById("toastMessage");

    toastMessage.textContent = message;

    toast.classList.add("show");

    setTimeout(function () {
        toast.classList.remove("show");
    }, 3000);
}



/* ==========================================
   SMOOTH SCROLLING
========================================== */

function scrollToBooking() {

    const bookingSection =
        document.getElementById("booking");

    bookingSection.scrollIntoView({
        behavior: "smooth"
    });
}



/* ==========================================
   BOOK NOW BUTTONS
========================================== */

const bookButtons =
    document.querySelectorAll(".book-btn");

bookButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const selectedMatch =
            this.dataset.match;

        const matchDropdown =
            document.getElementById("match");

        matchDropdown.value = selectedMatch;

        scrollToBooking();

        showToast(
            selectedMatch +
            " selected. Complete your booking."
        );

    });

});



/* ==========================================
   TEAM FILTER
========================================== */

const teamFilter =
    document.getElementById("teamFilter");

const matchCards =
    document.querySelectorAll(".match-card");


teamFilter.addEventListener("change", function () {

    const selectedTeam =
        this.value;

    matchCards.forEach(function (card) {

        const teams =
            card.dataset.teams;

        if (
            selectedTeam === "all" ||
            teams.includes(selectedTeam)
        ) {

            card.style.display = "";

        } else {

            card.style.display = "none";

        }

    });

    if (selectedTeam === "all") {

        showToast("Showing all matches.");

    } else {

        showToast(
            "Showing " +
            selectedTeam +
            " matches."
        );

    }

});



/* ==========================================
   GRID / LIST VIEW
========================================== */

const matchContainer =
    document.getElementById("matchContainer");

const gridViewBtn =
    document.getElementById("gridViewBtn");

const listViewBtn =
    document.getElementById("listViewBtn");



/* Grid View */

gridViewBtn.addEventListener("click", function () {

    matchContainer.classList.remove(
        "match-list"
    );

    matchContainer.classList.add(
        "match-grid"
    );

    showToast("Grid view enabled.");

});



/* List View */

listViewBtn.addEventListener("click", function () {

    matchContainer.classList.remove(
        "match-grid"
    );

    matchContainer.classList.add(
        "match-list"
    );

    showToast("List view enabled.");

});



/* ==========================================
   HAMBURGER MENU
========================================== */

const menuToggle =
    document.getElementById("menuToggle");

const navMenu =
    document.getElementById("navMenu");


menuToggle.addEventListener("click", function () {

    navMenu.classList.toggle("active");

});



/* ==========================================
   CLOSE MOBILE MENU AFTER CLICKING LINK
========================================== */

const navLinks =
    document.querySelectorAll("#navMenu a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

    });

});



/* ==========================================
   BOOKING SUMMARY
========================================== */

const matchSelect =
    document.getElementById("match");

const standSelect =
    document.getElementById("stand");

const quantityInput =
    document.getElementById("quantity");



function updateSummary() {

    const selectedMatch =
        matchSelect.value;

    const selectedStand =
        standSelect.value;

    const quantity =
        Number(quantityInput.value);


    let price = 0;


    /* Find selected stand price */

    if (standSelect.selectedIndex > 0) {

        const selectedOption =
            standSelect.options[
                standSelect.selectedIndex
            ];

        price =
            Number(
                selectedOption.dataset.price
            );

    }


    /* Calculate total */

    const total =
        price * quantity;


    /* Update HTML */

    document.getElementById(
        "summaryMatch"
    ).textContent =
        selectedMatch ||
        "Not Selected";


    document.getElementById(
        "summaryStand"
    ).textContent =
        selectedStand ||
        "Not Selected";


    document.getElementById(
        "summaryPrice"
    ).textContent =
        price;


    document.getElementById(
        "summaryQuantity"
    ).textContent =
        quantity;


    document.getElementById(
        "summaryTotal"
    ).textContent =
        total;

}



/* Update summary when match changes */

matchSelect.addEventListener(
    "change",
    updateSummary
);


/* Update summary when stand changes */

standSelect.addEventListener(
    "change",
    updateSummary
);


/* Update summary when quantity changes */

quantityInput.addEventListener(
    "input",
    updateSummary
);



/* ==========================================
   BOOKING FORM
========================================== */

const bookingForm =
    document.getElementById(
        "bookingForm"
    );


bookingForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        /* Get values */

        const name =
            document.getElementById(
                "name"
            ).value.trim();

        const email =
            document.getElementById(
                "email"
            ).value.trim();

        const phone =
            document.getElementById(
                "phone"
            ).value.trim();

        const match =
            matchSelect.value;

        const stand =
            standSelect.value;

        const quantity =
            Number(quantityInput.value);


        /* Get selected price */

        let price = 0;

        if (standSelect.selectedIndex > 0) {

            const selectedOption =
                standSelect.options[
                    standSelect.selectedIndex
                ];

            price =
                Number(
                    selectedOption.dataset.price
                );

        }


        const total =
            price * quantity;


        /* Basic validation */

        if (
            name === "" ||
            email === "" ||
            phone === "" ||
            match === "" ||
            stand === ""
        ) {

            showToast(
                "Please fill all details."
            );

            return;

        }


        if (phone.length !== 10) {

            showToast(
                "Enter a valid 10-digit phone number."
            );

            return;

        }


        /* Create booking */

        const booking = {

            name: name,

            email: email,

            phone: phone,

            match: match,

            stand: stand,

            quantity: quantity,

            total: total

        };


        /* Save booking */

        let bookings =
            JSON.parse(
                localStorage.getItem(
                    "iplBookings"
                )
            ) || [];


        bookings.push(booking);


        localStorage.setItem(
            "iplBookings",
            JSON.stringify(bookings)
        );


        /* Display booking */

        displayBookings();


        /* Success message */

        showToast(
            "Booking confirmed successfully!"
        );


        /* Reset */

        bookingForm.reset();

        updateSummary();


        /* Scroll to My Bookings */

        setTimeout(function () {

            document
                .getElementById("mybookings")
                .scrollIntoView({
                    behavior: "smooth"
                });

        }, 500);

    }
);



/* ==========================================
   DISPLAY BOOKINGS
========================================== */

function displayBookings() {

    const bookingsList =
        document.getElementById(
            "bookingsList"
        );


    let bookings =
        JSON.parse(
            localStorage.getItem(
                "iplBookings"
            )
        ) || [];


    /* No bookings */

    if (bookings.length === 0) {

        bookingsList.innerHTML = `
            <p class="empty-message">
                No bookings yet.
            </p>
        `;

        return;

    }


    /* Clear previous */

    bookingsList.innerHTML = "";


    /* Display each booking */

    bookings.forEach(function (
        booking,
        index
    ) {

        const bookingDiv =
            document.createElement(
                "div"
            );

        bookingDiv.classList.add(
            "booking-item"
        );


        bookingDiv.innerHTML = `

            <h3>
                Booking #${index + 1}
            </h3>

            <p>
                <strong>Name:</strong>
                ${booking.name}
            </p>

            <p>
                <strong>Match:</strong>
                ${booking.match}
            </p>

            <p>
                <strong>Stand:</strong>
                ${booking.stand}
            </p>

            <p>
                <strong>Tickets:</strong>
                ${booking.quantity}
            </p>

            <p>
                <strong>Total Amount:</strong>
                ₹${booking.total}
            </p>

            <p>
                <strong>Email:</strong>
                ${booking.email}
            </p>

        `;


        bookingsList.appendChild(
            bookingDiv
        );

    });

}



/* ==========================================
   LOAD BOOKINGS WHEN PAGE OPENS
========================================== */

displayBookings();


/* Update summary when page loads */

updateSummary();