function MatchCard({ number, teams, date, venue, prices, onBook }) {
  return (
    <div className="match-card">
      <span className="match-number">Match {number}</span>
      <h3>{teams}</h3>
      <p>{date}</p>
      <p>{venue}</p>

      <ul className="price-list">
        <li>General: ₹{prices.General}</li>
        <li>Premium: ₹{prices.Premium}</li>
        <li>VIP: ₹{prices.VIP}</li>
      </ul>

      <button className="book-btn" onClick={() => onBook(teams)}>
        Book
      </button>
    </div>
  );
}

export default MatchCard;
