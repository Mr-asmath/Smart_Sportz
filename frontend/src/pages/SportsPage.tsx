import { sports } from "../data/platform";
import { CatalogPage } from "./shared";

export function SportsPage() {
  return <CatalogPage title="Sports Categories" items={sports.map((s) => ({ title: s.name, text: `${s.active} active tournaments`, icon: s.icon, path: `/sports/${s.slug}` }))} />;
}
