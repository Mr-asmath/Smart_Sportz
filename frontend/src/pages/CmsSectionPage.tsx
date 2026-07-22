import { Link, useParams } from "react-router-dom";
import { Page, PortalShell } from "../components/UI";
import { cmsSections, sidebar } from "../data/platform";
import { InfoPanel } from "./shared";

export function CmsSectionPage() {
  const { section } = useParams();
  const title = cmsSections.find((item) => item.toLowerCase().replace(/\s+/g, "-") === section) ?? "Homepage Hero";

  return (
    <Page>
      <PortalShell title={`${title} CMS`} subtitle="Edit, preview, approve, and publish this public website section." sidebar={sidebar} action={<Link className="btn btn-primary" to="/admin/cms">All CMS</Link>}>
        <div className="detail-grid">
          <InfoPanel title="Editable Content" items={["Title and body copy", "Media assets", "CTA links", "Visibility and publish status"]} highlight />
          <InfoPanel title="Publishing Flow" items={["Save draft", "Preview page", "Approval check", "Publish and audit log"]} to="/admin/logs" />
          <InfoPanel title="Public Destination" items={["Homepage", "Sponsors", "Gallery", "Blog", "FAQ and contact pages"]} to={title === "Gallery" ? "/gallery" : title === "Sponsors" ? "/sponsors" : title === "Blogs" ? "/blog" : title === "FAQs" ? "/faq" : "/"} />
          <InfoPanel title="Security Controls" items={["RBAC permissions", "Audit trail", "Rollback support", "Media validation"]} to="/admin/reports" />
        </div>
      </PortalShell>
    </Page>
  );
}
