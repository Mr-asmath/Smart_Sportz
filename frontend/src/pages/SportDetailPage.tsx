import { Trophy } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Page } from "../components/UI";
import { sports, tournaments } from "../data/platform";
import { InfoPanel, Metric, PageHero } from "./shared";

export function SportDetailPage() {
  const { slug } = useParams();
  const sport = sports.find((item) => item.slug === slug) ?? sports[0];
  const related = tournaments.filter((item) => item.sport.toLowerCase() === sport.name.toLowerCase());

  return (
    <Page>
      <PageHero title={`${sport.name} Operations`} text="Category detail page for discovery, rules, active tournaments, live scoring model, and registration routing." />
      <section className="detail-hero">
        <div className={`detail-visual visual-${sport.color}`}>
          <Trophy size={44} />
          <strong>{sport.name}</strong>
          <span>{sport.active} active tournaments</span>
        </div>
        <div>
          <span className={`status ${sport.color}`}>{sport.active} active tournaments</span>
          <h1>{sport.name}</h1>
          <p>Manage sport-specific categories, eligibility rules, scoring templates, registration fields, fixture formats, and public discovery pages.</p>
          <Link className="btn btn-primary" to="/tournaments">View tournaments</Link>
        </div>
      </section>
      <div className="detail-grid">
        <InfoPanel title="Supported Workflows" items={["Public category listing", "Sport-specific registration forms", "Live score template mapping", "Rules and document validation"]} to="/tournaments" />
        <InfoPanel title="Scoring Intelligence" items={["Timeline updates", "Statistics dashboard", "Officials control panel", "Audience live hub"]} to="/live" highlight />
        <section className="panel">
          <h3>Active Category Metrics</h3>
          <div className="mini-grid">
            <Metric label="Active" value={`${sport.active}`} />
            <Metric label="Related" value={`${related.length}`} />
            <Metric label="Templates" value="6" />
          </div>
        </section>
        <InfoPanel title="Admin Controls" items={["Enable category", "Configure fields", "Assign fixture rules", "Publish CMS content"]} to="/admin/tournaments" />
      </div>
    </Page>
  );
}
