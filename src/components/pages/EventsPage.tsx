// Page: #events
// Markup and class names match the approved design. All text lives in messages/<locale>.json under "eventsPage".
import { useTranslations } from "next-intl";

export function EventsPage() {
  const t = useTranslations("eventsPage");
  return (
    <section className="page" data-page="events">
      <div className="hero" style={{minHeight:"min(760px,92svh)"}}>
        <div className="bg kb" style={{backgroundImage:"url(/img/events-hero.jpg)", backgroundPosition:"55% 35%"}} />
        {" "}
        <div className="shade" style={{background:"linear-gradient(90deg,rgba(0,0,0,.95) 25%,rgba(0,0,0,.2) 75%),linear-gradient(0deg,rgba(0,0,0,.7),transparent 40%)"}} />
        {" "}
        <div className="wrap">
          <div className="lbl k fade">{t.rich("events", { t1: (c) => <i>{c}</i>, t2: (c) => <i>{c}</i>, t3: (c) => <i>{c}</i>, t0: (c) => <span className="speed" style={{color:"#fff"}}>{c}</span> })}</div>
          <h1 className="disp h-xl" style={{margin:"22px 0 22px"}}>{t.rich("the_story_so_far", { t1: (c) => <span>{c}</span>, t0: (c) => <span className="rise">{c}</span>, t3: (c) => <span>{c}</span>, t2: (c) => <span className="rise">{c}</span> })}</h1>
          <p className="lead fade">{t("every_event_every_finish_line")}</p>
        </div>
      </div>
      {" "}
      <div className="band dark" style={{paddingBottom:"40px"}}>
        <div className="wrap">
          <div className="lbl k rv" style={{marginBottom:"26px"}}>{t.rich("next_up", { t1: (c) => <i>{c}</i>, t2: (c) => <i>{c}</i>, t3: (c) => <i>{c}</i>, t0: (c) => <span className="speed" style={{color:"#fff"}}>{c}</span> })}</div>
          {" "}
          <a className="nextbox rv" href="#jeddah" data-go="jeddah">
            <div style={{padding:"clamp(28px,4vw,48px)", display:"flex", flexDirection:"column", gap:"20px"}}>
              <span className="pill" style={{background:"var(--ink)", color:"var(--paper)", alignSelf:"flex-start"} as React.CSSProperties}>{t.rich("registration_open", { t0: (c) => <i>{c}</i> })}</span>
              {" "}
              <h3 className="disp h-m">{t("hybrid_one_jeddah")}</h3>
              {" "}
              <div className="k">{t("season_01_race_01_bride")}</div>
              {" "}
              <span className="btn k2" style={{alignSelf:"flex-start", marginTop:"auto"}}>{t.rich("register_early", { t0: (c) => <span className="arrow">{c}</span> })}</span>
            </div>
            {" "}
            <div className="ph">
              <img src="/img/jeddah.jpg" loading="lazy" style={{filter:"none", transform:"none", objectPosition:"50% 40%"}} alt={t("jeddah_corniche_mosque_by_the")} />
            </div>
          </a>
        </div>
      </div>
      {" "}
      <div className="band dark" style={{paddingTop:"40px"}}>
        <div className="wrap">
          <div className="lbl k rv" style={{marginBottom:"26px"}}>{t.rich("past_events", { t1: (c) => <i>{c}</i>, t2: (c) => <i>{c}</i>, t3: (c) => <i>{c}</i>, t0: (c) => <span className="speed" style={{color:"#fff"}}>{c}</span> })}</div>
          {" "}
          <a className="prow rv" href="#bahar" data-go="bahar">
            <div className="ph imgrv">
              <img src="/img/bahar.jpg" loading="lazy" style={{objectPosition:"50% 38%"}} alt={t("two_bahar_runners")} />
            </div>
            {" "}
            <div className="bd">
              <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>{t.rich("n02_sold_out", { t0: (c) => <span className="disp" style={{fontSize:"24px", color:"#777"}}>{c}</span>, t1: (c) => <span className="stamp">{c}</span> })}</div>
              <h3 className="disp h-m" style={{margin:"22px 0 10px"}}>{t("hybrid_one_bahar")}</h3>
              <div className="k" style={{marginBottom:"28px"}}>{t("rixos_obhur_jeddah")}</div>
              <div className="kv one">
                <div>{t.rich("date_12_sep_2026", { t0: (c) => <span className="k">{c}</span>, t1: (c) => <b>{c}</b> })}</div>
              </div>
              <span className="btn w" style={{alignSelf:"flex-start", marginTop:"24px"}}>{t.rich("view_event", { t0: (c) => <span className="arrow">{c}</span> })}</span>
            </div>
          </a>
          {" "}
          <a className="prow rv" href="#push" data-go="push">
            <div className="ph imgrv">
              <img src="/img/push.jpg" loading="lazy" alt={t("group_photo_at_push_club")} />
            </div>
            {" "}
            <div className="bd">
              <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>{t.rich("n01_sold_out", { t0: (c) => <span className="disp" style={{fontSize:"24px", color:"#777"}}>{c}</span>, t1: (c) => <span className="stamp">{c}</span> })}</div>
              <h3 className="disp h-m" style={{margin:"22px 0 10px"}}>{t("race_simulation")}</h3>
              <div className="k" style={{marginBottom:"28px"}}>{t("push_club_jeddah")}</div>
              <div className="kv one">
                <div>{t.rich("date_3_jul_2026", { t0: (c) => <span className="k">{c}</span>, t1: (c) => <b>{c}</b> })}</div>
              </div>
              <span className="btn w" style={{alignSelf:"flex-start", marginTop:"24px"}}>{t.rich("view_event", { t0: (c) => <span className="arrow">{c}</span> })}</span>
            </div>
          </a>
        </div>
      </div>
      {" "}
      <div className="band light" style={{textAlign:"center"}}>
        <div className="wrap rv">
          <div className="k">{t("jeddah_is_next")}</div>
          <h2 className="disp h-l" style={{margin:"24px 0 40px"}}>{t("don_t_miss_the_next")}</h2>
          <a className="btn k2" href="#jeddah" data-go="jeddah">{t.rich("register_early", { t0: (c) => <span className="arrow">{c}</span> })}</a>
        </div>
      </div>
    </section>
  );
}
