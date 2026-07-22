import { ShieldCheck } from "lucide-react";
import { Page } from "../components/UI";
import { PageHero } from "./shared";

export function SettingsPage({ darkMode, setDarkMode }: { darkMode: boolean; setDarkMode: (value: boolean) => void }) {
  return (
    <Page>
      <PageHero title="Settings" text="The platform uses white theme by default. Users can enable dark mode here when they prefer high-focus operation screens." />
      <div className="panel settings-panel">
        <ShieldCheck size={28} />
        <h2>Appearance</h2>
        <p>Default theme: White / Premium Light. Dark mode is optional and user-controlled.</p>
        <button className="btn btn-primary" onClick={() => setDarkMode(!darkMode)}>{darkMode ? "Switch to white theme" : "Enable dark mode"}</button>
      </div>
    </Page>
  );
}
