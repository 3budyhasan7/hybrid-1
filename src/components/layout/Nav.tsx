// Top navigation bar.
// Markup and class names match the approved design. All text lives in messages/<locale>.json under "nav".
import { useTranslations } from "next-intl";
import { LangSwitch } from "@/components/LangSwitch";

export function Nav() {
  const t = useTranslations("nav");
  return (
    <header className="nav" id="nav">
      <div className="in">
        <a href="#home" data-go="home" aria-label={t("hybrid_one_home")}>
          <img className="mark" src="/img/mark.svg" alt={t("h1")} />
        </a>
        {" "}
        <nav className="links" aria-label={t("main")}>{t.rich("concept_season_1_events_partners", { t0: (c) => <a href="#concept" data-go="concept">{c}</a>, t1: (c) => <a href="#season" data-go="season">{c}</a>, t2: (c) => <a href="#events" data-go="events">{c}</a>, t3: (c) => <a href="#partners" data-go="partners">{c}</a>, t4: (c) => <a href="#faq" data-go="faq">{c}</a> })}</nav>
        {" "}
        <LangSwitch className="k lang" style={{marginLeft:"auto", color:"inherit", opacity:".6"}} />
        {" "}
        <a className="btn w cta" href="#join" data-go="join" style={{marginLeft:"0"}}>{t("join_waitlist")}</a>
        {" "}
        <button className="burger" id="burger" aria-expanded="false" aria-label={t("open_menu")}>
          <i />
          <i />
          <i />
        </button>
      </div>
    </header>
  );
}
