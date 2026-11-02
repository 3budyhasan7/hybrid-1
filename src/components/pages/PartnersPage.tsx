// Page: #partners
// Markup and class names match the approved design. All text lives in messages/<locale>.json under "partnersPage".
import { useTranslations } from "next-intl";

export function PartnersPage() {
  const t = useTranslations("partnersPage");
  return (
    <section className="page" data-page="partners">
      <div className="hero" style={{minHeight:"min(860px,96svh)"}}>
        <div className="bg kb" style={{backgroundImage:"url(/img/g6.jpg)", backgroundPosition:"60% 30%"}} />
        {" "}
        <div className="shade" style={{background:"linear-gradient(90deg,rgba(0,0,0,.95) 30%,rgba(0,0,0,.3) 80%)"}} />
        {" "}
        <div className="wrap">
          <div className="lbl k fade">{t.rich("partners", { t1: (c) => <i>{c}</i>, t2: (c) => <i>{c}</i>, t3: (c) => <i>{c}</i>, t0: (c) => <span className="speed" style={{color:"#fff"}}>{c}</span> })}</div>
          <h1 className="disp" style={{fontSize:"clamp(84px,15vw,210px)", marginTop:"28px"}}>{t.rich("race_with_us", { t1: (c) => <span>{c}</span>, t0: (c) => <span className="rise">{c}</span>, t3: (c) => <span>{c}</span>, t2: (c) => <span className="rise">{c}</span> })}</h1>
        </div>
      </div>
      {" "}
      <div className="band light">
        <div className="wrap two" style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:"80px", alignItems:"end"}}>
          <div className="rv">
            <div className="lbl k">{t.rich("partnerships", { t1: (c) => <i>{c}</i>, t2: (c) => <i>{c}</i>, t3: (c) => <i>{c}</i>, t0: (c) => <span className="speed" style={{color:"var(--ink)"} as React.CSSProperties}>{c}</span> })}</div>
            <h2 className="disp h-l" style={{marginTop:"22px"}}>{t("let_s_talk")}</h2>
            <p className="lead" style={{marginTop:"24px"}}>{t("want_your_brand_on_the")}</p>
          </div>
          {" "}
          <div className="rv mailbox">
            <div className="k">{t("partnerships_email")}</div>
            <div className="mail" id="pmail">{t("info_hybrid_1_com")}</div>
            <div style={{display:"flex", gap:"12px", flexWrap:"wrap", marginTop:"24px"}} id="mailact">
              <button className="btn k2" type="button" id="copymail">{t.rich("copy_email", { t0: (c) => <span className="arrow">{c}</span> })}</button>
              <span className="k" id="copied" style={{alignSelf:"center"}} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
