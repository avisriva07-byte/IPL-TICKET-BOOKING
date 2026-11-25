function MyBookings({ bookings }) {
  return (
    <section id="mybookings">
      <h2>My Ticket Bookings</h2>

      <table border="1">
        <thead>
          <tr>
            <th>Booking ID</th>
            <th>Match</th>
            <th>Stand Category</th>
            <th>Number of Tickets</th>
            <th>Total Amount</th>
          </tr>
        </thead>

        <tbody>
          {bookings.map((b) => (
            <tr key={b.id}>
              <td>{b.id}</td>
              <td>{b.match}</td>
              <td>{b.category}</td>
              <td>{b.quantity}</td>
              <td>₹{b.total.toLocaleString("en-IN")}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {bookings.length === 0 && (
        <p className="empty-msg">No bookings available yet.</p>
      )}
    </section>
  );
}

export default MyBookings;
