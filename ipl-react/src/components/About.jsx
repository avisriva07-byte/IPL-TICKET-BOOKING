function About({ teams, venues }) {
  return (
    <section id="about">
      <h2>About IPL 2026</h2>

      <p>
        The Indian Premier League (IPL) is one of the most exciting T20 cricket
        tournaments in the world. Experience the excitement of live cricket and
        support your favourite teams.
      </p>

      <p>
        IPL 2026 is an exciting T20 cricket tournament featuring top teams and
        players. Fans can watch thrilling matches and book tickets to
        experience the action live at the stadium.
      </p>

      <h3>Popular IPL Teams</h3>
      <ul>
        {teams.map((team) => (
          <li key={team.code}>
            {team.name} ({team.code})
          </li>
        ))}
      </ul>

      <h3>Major Match Venues</h3>
      <ul>
        {venues.map((venue) => (
          <li key={venue}>{venue}</li>
        ))}
      </ul>
    </section>
  );
}

export default About;
