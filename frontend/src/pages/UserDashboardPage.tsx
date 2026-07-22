import { Page, PortalShell } from "../components/UI";
import { userSidebar } from "../data/platform";
import { DashboardGrid, InfoPanel } from "./shared";

export function UserDashboardPage() {
  return (
    <Page>
      <PortalShell title="Welcome back, Aryan" subtitle="Track registrations, performance, payments, and certificates." sidebar={userSidebar}>
        <DashboardGrid />
        <div className="dashboard-two">
          <InfoPanel title="Active Registrations" items={["Mumbai Premier Bash - Approved", "Regional Sprint - Payment Pending", "National Invitational - Waitlist"]} to="/user/registrations" />
          <InfoPanel title="Action Center" items={["Complete profile verification", "Download latest receipt", "Review upcoming fixture"]} to="/user/profile" />
        </div>
      </PortalShell>
    </Page>
  );
}
