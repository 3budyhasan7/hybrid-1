// Page: #push
// Markup and class names match the approved design. All text lives in messages/<locale>.json under "pushEventPage".
import { useTranslations } from "next-intl";

export function PushEventPage() {
  const t = useTranslations("pushEventPage");
  return (
    <section className="page" data-page="push">
      <div className="hero">
        <div className="bg kb" style={{backgroundImage:"url(/img/push.jpg)", backgroundPosition:"50% 50%"}} />
        <div className="shade" />
        {" "}
        <div className="wrap">
          <a className="k fade" href="#events" data-go="events" style={{color:"#ccc"}}>{t("all_events")}</a>
          {" "}
          <div style={{display:"flex", alignItems:"center", gap:"22px", marginTop:"22px"}} className="fade">{t.rich("event_01_sold_out", { t0: (c) => <span className="disp" style={{fontSize:"22px", color:"#aaa"}}>{c}</span>, t1: (c) => <span className="stamp" style={{color:"#fff"}}>{c}</span> })}</div>
          {" "}
          <h1 className="disp h-xl" style={{marginTop:"20px"}}>{t.rich("race_simulation", { t1: (c) => <span>{c}</span>, t0: (c) => <span className="rise">{c}</span>, t3: (c) => <span>{c}</span>, t2: (c) => <span className="rise">{c}</span> })}</h1>
          {" "}
          <div className="facts fade">
            <div>
              <div className="k" style={{color:"#bbb"}}>{t("date")}</div>
              <div className="disp">{t("n3_jul_2026")}</div>
            </div>
            <div>
              <div className="k" style={{color:"#bbb"}}>{t("venue")}</div>
              <div className="disp">{t("push_club_jeddah")}</div>
            </div>
          </div>
        </div>
      </div>
      {" "}
      <div className="dark" style={{paddingBlock:"clamp(72px,9vw,100px) 80px"}}>
        <div style={{paddingLeft:"var(--g)", paddingRight:"var(--gr)"} as React.CSSProperties}>
          <div className="wrap shead rv">
            <div>
              <div className="lbl k">{t.rich("moments", { t1: (c) => <i>{c}</i>, t2: (c) => <i>{c}</i>, t3: (c) => <i>{c}</i>, t0: (c) => <span className="speed" style={{color:"#fff"}}>{c}</span> })}</div>
              <h2 className="disp h-m">{t("the_day")}</h2>
            </div>
          </div>
        </div>
        {" "}
        <div className="gal" data-galx="">
          <figure>
            <img src="/img/p1.jpg" loading="lazy" alt={t("assault_bike_station")} />
          </figure>
          <figure>
            <img src="/img/p2.jpg" loading="lazy" alt={t("sled_push_heat")} />
          </figure>
          <figure>
            <img src="/img/p4.jpg" loading="lazy" alt={t("sled_push_close_up")} />
          </figure>
          <figure>
            <img src="/img/p5.jpg" loading="lazy" alt={t("curved_treadmill_station")} />
          </figure>
          <figure>
            <img src="/img/p6.jpg" loading="lazy" alt={t("curved_treadmill_with_judges")} />
          </figure>
          <figure>
            <img src="/img/p9.jpg" loading="lazy" alt={t("skierg_station")} />
          </figure>
          <figure>
            <img src="/img/p10.jpg" loading="lazy" alt={t("rowing_station")} />
          </figure>
          <figure>
            <img src="/img/p11.jpg" loading="lazy" alt={t("rower_with_coach")} />
          </figure>
          <figure>
            <img src="/img/p12.jpg" loading="lazy" alt={t("athletes_resting_by_the_cage")} />
          </figure>
          <figure>
            <img src="/img/p13.jpg" loading="lazy" alt={t("athletes_resting_by_the_wall")} />
          </figure>
          <figure>
            <img src="/img/p14.jpg" loading="lazy" alt={t("friends_posing")} />
          </figure>
          <figure>
            <img src="/img/p15.jpg" loading="lazy" alt={t("group_thumbs_up")} />
          </figure>
          <figure>
            <img src="/img/p7.jpg" loading="lazy" alt={t("treadmill_heat")} />
          </figure>
          <figure>
            <img src="/img/p8.jpg" loading="lazy" alt={t("treadmill_and_crowd")} />
          </figure>
          <figure>
            <img src="/img/p3.jpg" loading="lazy" alt={t("sled_push_wide")} />
          </figure>
        </div>
        {" "}
        <div style={{paddingLeft:"var(--g)", paddingRight:"var(--gr)"} as React.CSSProperties}>
          <div className="wrap galbar">
            <div className="prog">
              <i />
            </div>
            <div className="arr">
              <button data-gal="-1" aria-label={t("previous_photos")}>{t("text")}</button>
              <button data-gal="1" aria-label={t("next_photos")}>{t("text_2")}</button>
            </div>
          </div>
        </div>
      </div>
      {" "}
      <div className="band light">
        <div className="wrap">
          <div className="shead rv">
            <div>
              <div className="lbl k">{t.rich("divisions", { t1: (c) => <i>{c}</i>, t2: (c) => <i>{c}</i>, t3: (c) => <i>{c}</i>, t0: (c) => <span className="speed" style={{color:"var(--ink)"} as React.CSSProperties}>{c}</span> })}</div>
              <h2 className="disp h-l">{t("doubles_only")}</h2>
            </div>
            <span className="k">{t("men_doubles_women_doubles")}</span>
          </div>
          {" "}
          <div className="linkbox" style={{marginTop:"0"}}>
            <a className="rv" href="#push">
              <div>
                <div className="k">{t("every_athlete_every_split")}</div>
                <div className="disp h-m" style={{fontSize:"clamp(36px,4vw,54px)", marginTop:"10px"}}>{t("full_results")}</div>
              </div>
              <span className="sq">{t("text_3")}</span>
            </a>
            <a className="rv" href="#push">
              <div>
                <div className="k">{t("find_yourself")}</div>
                <div className="disp" style={{fontSize:"clamp(36px,4vw,54px)", marginTop:"10px"}}>{t("all_photos")}</div>
              </div>
              <span className="sq">{t("text_3")}</span>
            </a>
          </div>
        </div>
      </div>
      {" "}
      <a className="band dark" href="#bahar" data-go="bahar" style={{display:"block", paddingBlock:"64px"}}>
        <div className="wrap" style={{display:"flex", flexWrap:"wrap", justifyContent:"space-between", alignItems:"center", gap:"20px"}}>
          <div>
            <div className="k">{t("next_event")}</div>
            <div className="disp h-m" style={{marginTop:"12px"}}>{t("hybrid_one_bahar")}</div>
          </div>
          <span className="stamp">{t("sold_out")}</span>
        </div>
      </a>
    </section>
  );
}
