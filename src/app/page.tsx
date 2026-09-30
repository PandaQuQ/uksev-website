import { AboutUs } from "@/components/AboutUs";
import { CloseContact } from "@/components/CloseContact";
import { PortalHero } from "@/components/PortalHero";
import { ReleasesDeck } from "@/components/ReleasesDeck";
import { RosterList } from "@/components/RosterList";
import { StatementFold } from "@/components/StatementFold";
import { StockTable } from "@/components/StockTable";

export default function PortalPage() {
  return (
    <main>
      <PortalHero />
      <StatementFold />
      <ReleasesDeck />
      <RosterList />
      <StockTable />
      <AboutUs />
      <CloseContact />
    </main>
  );
}
