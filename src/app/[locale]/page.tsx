import { setRequestLocale } from "next-intl/server";
import { Intro } from "@/components/layout/Intro";
import { Wipe } from "@/components/layout/Wipe";
import { Nav } from "@/components/layout/Nav";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { AmbassadorModal } from "@/components/layout/AmbassadorModal";
import { CrewModal } from "@/components/layout/CrewModal";
import { Footer } from "@/components/layout/Footer";
import { HomePage } from "@/components/pages/HomePage";
import { ConceptPage } from "@/components/pages/ConceptPage";
import { SeasonPage } from "@/components/pages/SeasonPage";
import { EventsPage } from "@/components/pages/EventsPage";
import { PushEventPage } from "@/components/pages/PushEventPage";
import { BaharEventPage } from "@/components/pages/BaharEventPage";
import { JeddahEventPage } from "@/components/pages/JeddahEventPage";
import { PartnersPage } from "@/components/pages/PartnersPage";
import { FaqPage } from "@/components/pages/FaqPage";
import { JoinPage } from "@/components/pages/JoinPage";
import { SiteScript } from "@/components/SiteScript";

/**
 * The site is one document with hash routes (#home, #concept, #season, #events, #push,
 * #bahar, #jeddah, #partners, #faq, #join). Pages switch with the slanted wipe, exactly
 * like the approved design. English is served at "/" and Arabic at "/ar".
 */
export default async function Site({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Intro />
      <Wipe />
      <Nav />
      <MobileMenu />
      <AmbassadorModal />
      <CrewModal />
      <main id="main">
        <HomePage />
        <ConceptPage />
        <SeasonPage />
        <EventsPage />
        <PushEventPage />
        <BaharEventPage />
        <JeddahEventPage />
        <PartnersPage />
        <FaqPage />
        <JoinPage />
      </main>
      <Footer />
      <SiteScript />
    </>
  );
}
