import { useState, useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Matches from "./components/Matches";
import Booking from "./components/Booking";
import MyBookings from "./components/MyBookings";
import Guidelines from "./components/Guidelines";
import Footer from "./components/Footer";
import matches from "./data/matches";
import { teams, venues, categories, guidelines } from "./data/siteData";

function App() {
  // State shared between components
  const [selectedMatch, setSelectedMatch] = useState("");
  const [bookings, setBookings] = useState([]);
  const [toast, setToast] = useState("");
  const toastTimer = useRef(null);

  // React version of showToast()
  const notify = (message) => {
    setToast(message);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(""), 3000);
  };

  // Clicking "Book" on a card fills the booking form and scrolls to it
  const handleBookClick = (matchName) => {
    setSelectedMatch(matchName);
    notify("Opening the ticket booking form...");
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  const addBooking = (booking) => {
    setBookings((prev) => [
      ...prev,
      { id: "BK" + (1001 + prev.length), ...booking },
    ]);
  };

  return (
    <>
      <Navbar />

      <Hero
        title="Experience The Stadium Energy Live!"
        subtitle="Watch your favourite IPL teams compete live in the stadium."
      />

      <About teams={teams} venues={venues} />

      <Matches
        matches={matches}
        teams={teams}
        onBook={handleBookClick}
        notify={notify}
      />

      <Booking
        matches={matches}
        categories={categories}
        match={selectedMatch}
        onMatchChange={setSelectedMatch}
        onConfirm={addBooking}
        notify={notify}
      />

      <MyBookings bookings={bookings} />

      <Guidelines items={guidelines} />

      <Footer />

      {toast && <div className="toast">{toast}</div>}
    </>
  );
}

export default App;
