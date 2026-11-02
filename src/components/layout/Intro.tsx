// Intro sequence: 7 races → 4 cities → logo (first visit only).
// Markup and class names match the approved design. All text lives in messages/<locale>.json under "intro".
import { useTranslations } from "next-intl";

export function Intro() {
  const t = useTranslations("intro");
  return (
    <div className="intro" id="intro" aria-hidden="true">
      <div className="f f1">{t.rich("n7_races", { t0: (c) => <span className="n" style={{backgroundImage:"url(/img/events-hero.jpg)", backgroundPosition:"58% 35%"}}>{c}</span>, t1: (c) => <span className="disp w">{c}</span> })}</div>
      {" "}
      <div className="f f2">{t.rich("n4_4_4_4_cities", { t1: (c) => <span className="n" style={{backgroundImage:"url(/img/jeddah.jpg)"}}>{c}</span>, t2: (c) => <span className="n c c2" style={{backgroundImage:"url(/img/riyadh.jpg)"}}>{c}</span>, t3: (c) => <span className="n c c3" style={{backgroundImage:"url(/img/dammam.jpg)"}}>{c}</span>, t4: (c) => <span className="n c c4" style={{backgroundImage:"url(/img/khobar.jpg)"}}>{c}</span>, t0: (c) => <span className="nw">{c}</span>, t6: (c) => <span className="disp w" style={{display:"block"}}>{c}</span>, t8: (c) => <span className="k">{c}</span>, t9: (c) => <span className="k c c2">{c}</span>, t10: (c) => <span className="k c c3">{c}</span>, t11: (c) => <span className="k c c4">{c}</span>, t7: (c) => <span className="cn">{c}</span>, t5: (c) => <span>{c}</span> })}</div>
      {" "}
      <div className="f f3">
        <img className="biglogo" src="/img/logo.svg" alt={t("hybrid_one")} />
      </div>
      {" "}
      <button className="k skip" id="skip" style={{color:"#bbb"}}>{t("skip")}</button>
    </div>
  );
}
