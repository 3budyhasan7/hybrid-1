// Full-screen mobile menu.
// Markup and class names match the approved design. All text lives in messages/<locale>.json under "mobileMenu".
import { useTranslations } from "next-intl";
import { LangSwitch } from "@/components/LangSwitch";

export function MobileMenu() {
  const t = useTranslations("mobileMenu");
  return (
    <div className="mm" id="mm">
      <a className="row" href="#concept" data-go="concept">{t.rich("concept_more_than_a_race", { t0: (c) => <span className="disp">{c}</span>, t1: (c) => <span className="k">{c}</span> })}</a>
      {" "}
      <a className="row" href="#season" data-go="season">{t.rich("season_1_7_races", { t0: (c) => <span className="disp">{c}</span>, t1: (c) => <span className="k">{c}</span> })}</a>
      {" "}
      <a className="row" href="#events" data-go="events">{t.rich("events_3", { t0: (c) => <span className="disp">{c}</span>, t1: (c) => <span className="k">{c}</span> })}</a>
      {" "}
      <a className="row" href="#partners" data-go="partners">{t.rich("partners_race_with_us", { t0: (c) => <span className="disp">{c}</span>, t1: (c) => <span className="k">{c}</span> })}</a>
      {" "}
      <a className="row" href="#faq" data-go="faq">{t.rich("faq_help", { t0: (c) => <span className="disp">{c}</span>, t1: (c) => <span className="k">{c}</span> })}</a>
      {" "}
      <div className="foot">
        <a className="btn w" href="#join" data-go="join" style={{justifyContent:"center"}}>{t.rich("join_the_waitlist", { t0: (c) => <span className="arrow">{c}</span> })}</a>
        <div style={{display:"flex", justifyContent:"space-between"}}>
          <span className="k">{t("instagram_tiktok_x")}</span>
          <LangSwitch className="k" style={{color:"#fff"}} />
        </div>
      </div>
    </div>
  );
}
