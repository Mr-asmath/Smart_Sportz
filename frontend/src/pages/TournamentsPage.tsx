import { Filter, Search } from "lucide-react";
import { Page, TournamentCard } from "../components/UI";
import { tournaments } from "../data/platform";
import { PageHero } from "./shared";

export function TournamentsPage() {
  return (
    <Page>
      <PageHero title="Find Your Next Tournament" text="Search, filter, register, and follow professional tournaments across cricket, football, basketball, volleyball, and more." />
      <div className="filter-bar">
        <Search size={18} />
        <span>Search tournaments...</span>
        <button><Filter size={16} /> Advanced filters</button>
      </div>
      <div className="card-grid">{tournaments.map((item) => <TournamentCard key={item.slug} item={item} />)}</div>
    </Page>
  );
}
