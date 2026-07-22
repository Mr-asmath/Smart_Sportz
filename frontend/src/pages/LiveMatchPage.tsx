import { Send } from "lucide-react";
import { Page } from "../components/UI";
import { liveMatches, timeline } from "../data/platform";
import { Metric, StatBar } from "./shared";

export function LiveMatchPage() {
  const match = liveMatches[0];

  return (
    <Page className="live-page">
      <section className="scoreboard">
        <div>
          <span className="live-dot">Live</span>
          <h1>{match.tournament}</h1>
          <p>{match.sport} - {match.stage}</p>
        </div>
        <div className="score-teams">
          <strong>{match.home}</strong>
          <span>{match.score}</span>
          <em>vs</em>
          <span>{match.awayScore}</span>
          <strong>{match.away}</strong>
        </div>
      </section>
      <div className="score-layout">
        <section className="panel">
          <h2>Match statistics</h2>
          <StatBar label="Run Rate / Momentum" left="62%" right="38%" />
          <StatBar label="Possession / Control" left="54%" right="46%" />
          <div className="mini-grid">
            <Metric label="Boundaries" value="18" />
            <Metric label="Wickets" value="4" />
            <Metric label="Projected" value="188" />
          </div>
        </section>
        <section className="panel timeline">
          <h2>Live timeline</h2>
          {timeline.map((event) => (
            <div className="timeline-item" key={event.time}>
              <span>{event.time}</span>
              <b>{event.type}</b>
              <p>{event.text}</p>
              <small>{event.score}</small>
            </div>
          ))}
          <div className="comment-box">
            <input placeholder="Add commentary (admin only)..." />
            <button><Send size={18} /></button>
          </div>
        </section>
      </div>
    </Page>
  );
}
