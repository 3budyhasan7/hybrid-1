// Page: #join
// Markup and class names match the approved design. All text lives in messages/<locale>.json under "joinPage".
import { useTranslations } from "next-intl";

export function JoinPage() {
  const t = useTranslations("joinPage");
  return (
    <section className="page" data-page="join">
      <div className="hero" style={{background:"var(--ink)", minHeight:"min(980px,100svh)", alignItems:"center"} as React.CSSProperties}>
        <div className="bg" style={{left:"auto", width:"min(50%,720px)", backgroundImage:"url(/img/hero.jpg)", backgroundPosition:"50% 25%", clipPath:"polygon(42% 0,100% 0,100% 100%,0 100%)"}} />
        {" "}
        <div className="wrap" id="jcard" style={{maxWidth:"1360px"}}>
          <div style={{maxWidth:"600px"}}>
            <div className="lbl k fade">{t.rich("waitlist", { t1: (c) => <i>{c}</i>, t2: (c) => <i>{c}</i>, t3: (c) => <i>{c}</i>, t0: (c) => <span className="speed" style={{color:"#fff"}}>{c}</span> })}</div>
            {" "}
            <h1 className="disp" style={{fontSize:"clamp(64px,10vw,150px)", margin:"24px 0 26px"}}>{t.rich("be_first_on_the_line", { t1: (c) => <span>{c}</span>, t0: (c) => <span className="rise">{c}</span>, t3: (c) => <span>{c}</span>, t2: (c) => <span className="rise">{c}</span> })}</h1>
            {" "}
            <div className="fade" style={{display:"flex", alignItems:"center", gap:"18px", background:"var(--paper)", color:"var(--ink)", padding:"18px 22px"} as React.CSSProperties}>
              <span className="disp" style={{fontSize:"44px"}}>{t("text")}</span>
              <div>
                <div style={{fontWeight:"800", fontStretch:"105%", fontSize:"16px", textTransform:"uppercase", letterSpacing:".06em"}}>{t("exclusive_waitlist_discount")}</div>
                <div style={{fontSize:"15px", color:"#444", marginTop:"4px"}}>{t("join_the_waitlist_and_get")}</div>
              </div>
            </div>
            {" "}
            <form className="form fade" id="jform" noValidate style={{marginTop:"22px"}}>
              <div className="field">
                <label htmlFor="j-name">{t("full_name")}</label>
                <input id="j-name" autoComplete="name" required name="name" />
              </div>
              {" "}
              <div className="field">
                <label htmlFor="j-contact">{t("email_or_whatsapp")}</label>
                <input id="j-contact" autoComplete="email" required name="contact" />
              </div>
              {" "}
              <div className="k" style={{margin:"24px 0 12px"}}>{t("your_city")}</div>
              {" "}
              <div className="cchips" id="cchips">
                <button type="button" className="cchip" aria-pressed="true" data-value="Jeddah">{t("jeddah")}</button>
                <button type="button" className="cchip" aria-pressed="false" data-value="Riyadh">{t("riyadh")}</button>
                <button type="button" className="cchip" aria-pressed="false" data-value="Dammam">{t("dammam")}</button>
                <button type="button" className="cchip" aria-pressed="false" data-value="Khobar">{t("khobar")}</button>
              </div>
              {" "}
              <div className="err" id="jerr" role="alert" style={{color:"#ff8a8a"}} />
              {" "}
              <div>
                <button className="btn w" type="submit" style={{marginTop:"20px"}}>{t.rich("join_the_waitlist", { t0: (c) => <span className="arrow">{c}</span> })}</button>
              </div>
            </form>
            {" "}
            <div className="done">
              <div className="check" style={{background:"var(--paper)", color:"var(--ink)"} as React.CSSProperties}>{t("text_2")}</div>
              <h3 className="disp h-l">{t("you_re_in")}</h3>
              <p className="lead">{t("your_discount_will_be_sent")}</p>
              <a className="btn ghost" href="#home" data-go="home">{t.rich("back_home", { t0: (c) => <span>{c}</span> })}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
