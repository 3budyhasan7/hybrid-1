// Site footer.
// Markup and class names match the approved design. All text lives in messages/<locale>.json under "footer".
import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("footer");
  return (
    <footer>
      <div className="wrap">
        <div className="fcols">
          <div>
            <img src="/img/logo.svg" style={{width:"150px"}} alt={t("hybrid_one")} />
            <p style={{color:"#888", margin:"22px 0 0", maxWidth:"320px", lineHeight:"1.55"}}>{t("n7_races_4_cities_1")}</p>
          </div>
          {" "}
          <div>
            <div className="k" style={{marginBottom:"18px"}}>{t("explore")}</div>
            <a href="#concept" data-go="concept">{t("concept")}</a>
            <a href="#season" data-go="season">{t("season_1")}</a>
            <a href="#events" data-go="events">{t("events")}</a>
          </div>
          {" "}
          <div>
            <div className="k" style={{marginBottom:"18px"}}>{t("more")}</div>
            <a href="#partners" data-go="partners">{t("partners")}</a>
            <a href="#faq" data-go="faq">{t("faq")}</a>
            <a href="#join" data-go="join">{t("join_waitlist")}</a>
          </div>
          {" "}
          <div>
            <div className="k" style={{marginBottom:"18px"}}>{t("follow")}</div>
            <a href="#home">{t("instagram")}</a>
            <a href="#home">{t("tiktok")}</a>
            <a href="#home">{t("x")}</a>
          </div>
        </div>
        {" "}
        <div className="disp fbig">{t("hybrid_one")}</div>
        {" "}
        <div className="fbot k">{t.rich("n2026_hybrid_one_made_in", { t0: (c) => <span>{c}</span>, t1: (c) => <span>{c}</span> })}</div>
      </div>
    </footer>
  );
}
