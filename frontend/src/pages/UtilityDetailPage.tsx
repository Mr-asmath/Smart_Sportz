import { Link, useParams } from "react-router-dom";
import { Page, PortalShell } from "../components/UI";
import { sidebar } from "../data/platform";
import { InfoPanel, PageHero } from "./shared";

const utilityDetails = {
  payment: {
    title: "Registration Payment Receipt",
    text: "Receipt and payment status page for Razorpay order, invoice, refund, and webhook verification.",
    panels: ["Order created", "Payment captured", "Webhook verified", "Receipt generated"],
  },
  "admin-payments": {
    title: "Payment Operations Review",
    text: "Admin review page for payment events, refund checks, invoice states, and Razorpay webhook audit.",
    panels: ["Gateway event", "Signature validation", "Receipt status", "Refund review"],
  },
  "admin-reports": {
    title: "Reports Detail Review",
    text: "Admin report detail page for revenue, registration funnel, venue utilization, and live score audit.",
    panels: ["Filter report", "Validate numbers", "Export CSV/PDF", "Schedule email"],
  },
  "admin-logs": {
    title: "Audit Log Detail",
    text: "Security and software event log detail page for login events, score corrections, CMS publishing, and webhook activity.",
    panels: ["Actor", "Event type", "IP and device", "Before and after state"],
  },
};

export function UtilityDetailPage({ type }: { type: keyof typeof utilityDetails }) {
  const params = useParams();
  const detail = utilityDetails[type];
  const body = (
    <>
      <InfoPanel title="Workflow Status" items={detail.panels} highlight />
      <InfoPanel title="Connected Records" items={["Tournament", "Team", "User", "Audit log"]} to="/admin/logs" />
      <InfoPanel title="Security Checks" items={["RBAC verified", "Sensitive data masked", "Encrypted references", "Immutable event tracking"]} />
      <InfoPanel title="Next Actions" items={["Review", "Approve", "Export", "Notify user"]} to="/admin/reports" />
    </>
  );

  if (type === "payment") {
    return (
      <Page>
        <PageHero title={detail.title} text={`${detail.text} Reference: ${params.id ?? "registration-demo"}.`} />
        <div className="detail-grid">{body}</div>
        <div className="hero-actions">
          <Link className="btn btn-primary" to="/user/payments">Open user payments</Link>
          <Link className="btn btn-secondary" to="/tournaments">Back to tournaments</Link>
        </div>
      </Page>
    );
  }

  return (
    <Page>
      <PortalShell title={detail.title} subtitle={detail.text} sidebar={sidebar} action={<Link className="btn btn-primary" to="/admin/dashboard">Dashboard</Link>}>
        <div className="detail-grid">{body}</div>
      </PortalShell>
    </Page>
  );
}
