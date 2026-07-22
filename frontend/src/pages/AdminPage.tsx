import { FileText } from "lucide-react";
import { DataTable, Page, PortalShell } from "../components/UI";
import { cmsSections, logRows, paymentRows, reports, sidebar, teams, tournaments } from "../data/platform";
import { AdminOverview, AthleteProfile, CatalogPage, DashboardGrid, ListPanel, TeamCard } from "./shared";

export function AdminPage({ section = "dashboard" }: { section?: string }) {
  const title = section === "dashboard" ? "Executive Dashboard" : section.replace("-", " ").replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <Page>
      <PortalShell title={title} subtitle="Platform-wide control for Smart Sportz operations." sidebar={sidebar} action={<span className="status emerald">System optimal</span>}>
        {section === "dashboard" && <><DashboardGrid /><AdminOverview /></>}
        {section === "tournaments" && (
          <DataTable
            columns={["Tournament", "Status", "Teams", "Prize"]}
            rows={tournaments.map((t) => [t.name, <span className={`status ${t.accent}`}>{t.status}</span>, `${t.teams}/${t.capacity}`, t.prize])}
          />
        )}
        {section === "teams" && <div className="team-grid">{teams.map((team) => <TeamCard key={team.name} team={team} />)}</div>}
        {section === "players" && <AthleteProfile />}
        {section === "payments" && <ListPanel title="Payment Operations" items={paymentRows} to="/admin/payments/operations" />}
        {section === "cms" && <CatalogPage embedded title="CMS Builder" items={cmsSections.map((title) => ({ title, text: "Editable CMS section", icon: FileText, path: `/admin/cms/${title.toLowerCase().replace(/\s+/g, "-")}` }))} />}
        {section === "reports" && <ListPanel title="Reports Center" items={reports} to="/admin/reports/detail" />}
        {section === "logs" && <ListPanel title="Audit and Event Logs" items={logRows} to="/admin/logs/detail" />}
      </PortalShell>
    </Page>
  );
}
