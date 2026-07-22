import { Link } from "react-router-dom";
import { Page, PortalShell } from "../components/UI";
import { managementSidebar, userSidebar } from "../data/platform";
import { DashboardGrid, InfoPanel, MatchControlTable } from "./shared";

const userContent = {
  profile: ["Identity verification", "Captain and player details", "Emergency contact", "Document upload"],
  registrations: ["Approved tournaments", "Pending review", "Payment required", "Waitlisted entries"],
  payments: ["Receipts", "Invoices", "Refunds", "Webhook status"],
  certificates: ["Participation certificates", "Winner certificates", "MVP awards", "Download history"],
  settings: ["Theme preference", "Notification channels", "Password policy", "Session devices"],
};

const managementContent = {
  tournaments: ["Assigned tournament setup", "Fixture builder", "Venue allocation", "Official assignments"],
  registrations: ["Team approval queue", "Document review", "Payment checks", "Roster validation"],
  matches: ["Live score control", "Timeline events", "Score correction", "Match closure"],
  players: ["Roster management", "Eligibility status", "Player documents", "Captain updates"],
  reports: ["Revenue reports", "Registration funnel", "Live score audit", "Export center"],
};

export function UserSectionPage({ section }: { section: keyof typeof userContent }) {
  const title = section.replace("-", " ").replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <Page>
      <PortalShell title={title} subtitle="Participant portal detail page connected from the user dashboard and sidebar." sidebar={userSidebar} action={<Link className="btn btn-primary" to="/user/dashboard">Dashboard</Link>}>
        <DashboardGrid />
        <div className="detail-grid">
          <InfoPanel title={`${title} Workflow`} items={userContent[section]} highlight />
          <InfoPanel title="Related Actions" items={["Open tournament", "View live match", "Download document", "Contact organizer"]} to="/tournaments" />
        </div>
      </PortalShell>
    </Page>
  );
}

export function ManagementSectionPage({ section }: { section: keyof typeof managementContent }) {
  const title = section.replace("-", " ").replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <Page>
      <PortalShell title={title} subtitle="Management portal section for tournament-specific operations." sidebar={managementSidebar} action={<Link className="btn btn-primary" to="/management/dashboard">Dashboard</Link>}>
        {section === "matches" ? <MatchControlTable /> : <DashboardGrid />}
        <div className="detail-grid">
          <InfoPanel title={`${title} Controls`} items={managementContent[section]} highlight />
          <InfoPanel title="Operational Links" items={["Tournament detail", "Live match center", "Reports", "Audit trail"]} to="/admin/logs" />
        </div>
      </PortalShell>
    </Page>
  );
}
