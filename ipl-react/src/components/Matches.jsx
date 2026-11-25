import { useState } from "react";
import MatchCard from "./MatchCard";

function Matches({ matches, teams, onBook, notify }) {
  const [team, setTeam] = useState("all");
  const [view, setView] = useState("grid");

  const visibleMatches =
    team === "all"
      ? matches
      : matches.filter((m) => m.teamCodes.includes(team));

  const handleFilter = (e) => {
    const value = e.target.value;
    setTeam(value);
    const label = value === "all" ? "All Teams" : teams.find((t) => t.code === value).name;
    notify("Showing matches for: " + label);
  };

  const changeView = (newView) => {
    setView(newView);
    notify(newView === "grid" ? "Grid view enabled" : "List view enabled");
  };

  return (
    <section id="matches">
      <h2>IPL Match Schedule</h2>

      <div className="match-controls">
        <div>
          <label htmlFor="teamFilter">Filter by Team:</label>
          <select id="teamFilter" value={team} onChange={handleFilter}>
            <option value="all">All Teams</option>
            {teams.map((t) => (
              <option key={t.code} value={t.code}>
                {t.name}
              </option>
            ))}
          </select>
        </div>

        <div className="view-toggle">
          <button
            className={view === "grid" ? "active" : ""}
            onClick={() => changeView("grid")}
          >
            Grid View
          </button>
          <button
            className={view === "list" ? "active" : ""}
            onClick={() => changeView("list")}
          >
            List View
          </button>
        </div>
      </div>

      <div className={view === "list" ? "match-grid list-view" : "match-grid"}>
        {visibleMatches.map((match) => (
          <MatchCard
            key={match.id}
            number={match.id}
            teams={match.teams}
            date={match.date}
            venue={match.venue}
            prices={match.prices}
            onBook={onBook}
          />
        ))}
      </div>
    </section>
  );
}

export default Matches;
