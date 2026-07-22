import { LiveMatchCard, Page } from "../components/UI";
import { liveMatches } from "../data/platform";
import { PageHero } from "./shared";

export function LiveHubPage() {
  return (
    <Page>
      <PageHero title="Live Tournaments Hub" text="Follow running tournaments, live match states, scoreboards, and match intelligence." />
      <div className="live-grid">{liveMatches.map((match) => <LiveMatchCard key={match.id} match={match} />)}</div>
    </Page>
  );
}
