// Page: #jeddah
// Markup and class names match the approved design. All text lives in messages/<locale>.json under "jeddahEventPage".
import { useTranslations } from "next-intl";

export function JeddahEventPage() {
  const t = useTranslations("jeddahEventPage");
  return (
    <section className="page" data-page="jeddah">
      <div className="hero" style={{minHeight:"min(820px,96svh)"}}>
        <div className="bg kb" style={{backgroundImage:"url(/img/jeddah.jpg)", backgroundPosition:"50% 40%"}} />
        {" "}
        <div className="shade" style={{background:"linear-gradient(0deg,rgba(0,0,0,.97) 12%,rgba(0,0,0,.45) 60%,rgba(0,0,0,.65))"}} />
        {" "}
        <div className="wrap" style={{display:"flex", flexWrap:"wrap", justifyContent:"space-between", alignItems:"flex-end", gap:"32px"}}>
          <div>
            <a className="k fade" href="#events" data-go="events" style={{color:"#ccc"}}>{t("all_events")}</a>
            <div className="fade" style={{marginTop:"24px"}}>{t.rich("next_event_registration_open", { t1: (c) => <i>{c}</i>, t0: (c) => <span className="pill">{c}</span> })}</div>
            {" "}
            <h1 className="disp h-xl" style={{margin:"24px 0 20px"}}>{t.rich("hybrid_one_jeddah", { t1: (c) => <span>{c}</span>, t0: (c) => <span className="rise">{c}</span>, t3: (c) => <span>{c}</span>, t2: (c) => <span className="rise">{c}</span> })}</h1>
            {" "}
            <div className="k fade" style={{color:"#ccc"}}>{t("season_01_race_01_date")}</div>
          </div>
          {" "}
          <div className="fade" style={{maxWidth:"360px"}}>
            <div className="disp" style={{fontSize:"clamp(32px,3.6vw,44px)", lineHeight:".95"}}>{t("register_your_name_now")}</div>
            <a className="btn w" href="#reg" id="toreg" style={{marginTop:"22px"}}>{t("register")}</a>
          </div>
        </div>
      </div>
      {" "}
      <div className="band light" id="reg">
        <div className="wrap two" style={{display:"grid", gridTemplateColumns:"1fr 1.25fr", gap:"90px", alignItems:"start"}}>
          <div className="rv">
            <div className="lbl k">{t.rich("early_registration", { t1: (c) => <i>{c}</i>, t2: (c) => <i>{c}</i>, t3: (c) => <i>{c}</i>, t0: (c) => <span className="speed" style={{color:"var(--ink)"} as React.CSSProperties}>{c}</span> })}</div>
            {" "}
            <h2 className="disp h-l" style={{margin:"24px 0 24px"}}>{t("jeddah_is_next")}</h2>
            {" "}
            <p className="lead">{t("register_your_name_now_you")}</p>
            {" "}
            <div className="crewcard">
              <span className="disp vs">{t("vs")}</span>
              <span className="pill" style={{fontSize:"11px"}}>{t("new_division")}</span>
              <div className="disp" style={{fontSize:"clamp(44px,5vw,58px)", margin:"18px 0 12px"}}>{t("crew_clash")}</div>
              <p style={{color:"#bbb", fontSize:"16px", lineHeight:"1.55", margin:"0", maxWidth:"400px"}}>{t("two_athletes_one_crew_your")}</p>
            </div>
          </div>
          {" "}
          <div className="regcard rv" id="regcard">
            <form className="form" id="regform" noValidate>
              <div className="k" style={{color:"#666"}}>{t("step_1_your_details")}</div>
              {" "}
              <div className="field">
                <label htmlFor="r-name">{t("full_name")}</label>
                <input id="r-name" name="name" autoComplete="name" required />
              </div>
              {" "}
              <div className="field">
                <label htmlFor="r-phone">{t("mobile_number")}</label>
                <div className="row">
                  <span>{t("n966")}</span>
                  <input id="r-phone" name="phone" inputMode="tel" autoComplete="tel-national" required placeholder={t("n5x_xxx_xxxx")} />
                </div>
              </div>
              {" "}
              <div className="field">
                <label htmlFor="r-email">{t("email")}</label>
                <input id="r-email" name="email" type="email" autoComplete="email" required />
              </div>
              {" "}
              <div className="k" style={{color:"#666", margin:"36px 0 14px"}}>{t.rich("step_2_divisions_you_re", { t0: (c) => <span style={{color:"#999"}}>{c}</span> })}</div>
              {" "}
              <div className="chips" id="chips">
                <button type="button" className="chip" aria-pressed="false" data-value="Men Singles">
                  <span className="bx" />
                  <span className="k" style={{color:"inherit", opacity:".7"}}>{t("singles")}</span>
                  <div className="disp">{t("men")}</div>
                </button>
                {" "}
                <button type="button" className="chip" aria-pressed="false" data-value="Women Singles">
                  <span className="bx" />
                  <span className="k" style={{color:"inherit", opacity:".7"}}>{t("singles")}</span>
                  <div className="disp">{t("women")}</div>
                </button>
                {" "}
                <button type="button" className="chip" aria-pressed="false" data-value="Men Doubles">
                  <span className="bx" />
                  <span className="k" style={{color:"inherit", opacity:".7"}}>{t("doubles")}</span>
                  <div className="disp">{t("men")}</div>
                </button>
                {" "}
                <button type="button" className="chip" aria-pressed="false" data-value="Women Doubles">
                  <span className="bx" />
                  <span className="k" style={{color:"inherit", opacity:".7"}}>{t("doubles")}</span>
                  <div className="disp">{t("women")}</div>
                </button>
                {" "}
                <button type="button" className="chip" aria-pressed="false" data-value="Mixed Doubles">
                  <span className="bx" />
                  <span className="k" style={{color:"inherit", opacity:".7"}}>{t("doubles")}</span>
                  <div className="disp">{t("mixed")}</div>
                </button>
                {" "}
                <button type="button" className="chip crew" aria-pressed="false" data-value="Crew Clash">
                  <span className="bx" />
                  <span className="k" style={{color:"inherit", opacity:".7"}}>{t("n2_per_crew")}</span>
                  <div className="disp">{t("crew_clash")}</div>
                </button>
              </div>
              {" "}
              <div className="err" id="regerr" role="alert" />
              {" "}
              <button className="btn k2" type="submit" style={{marginTop:"20px", width:"100%", justifyContent:"center"}}>{t.rich("register_early", { t0: (c) => <span className="arrow">{c}</span> })}</button>
              {" "}
              <div className="k" style={{color:"#999", marginTop:"16px", textAlign:"center"}}>{t("no_payment_now_we_ll")}</div>
            </form>
            {" "}
            <div className="done">
              <div className="check" style={{background:"var(--ink)", color:"var(--paper)"} as React.CSSProperties}>{t("text")}</div>
              <h3 className="disp h-m">{t("you_re_in")}</h3>
              <p className="lead">{t("we_ll_message_you_first")}</p>
              <button className="k" type="button" data-reset="" style={{color:"var(--ink)", textDecoration:"underline"} as React.CSSProperties}>{t("register_someone_else")}</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
