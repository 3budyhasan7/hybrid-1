// Page: #season
// Markup and class names match the approved design. All text lives in messages/<locale>.json under "seasonPage".
import { useTranslations } from "next-intl";

export function SeasonPage() {
  const t = useTranslations("seasonPage");
  return (
    <section className="page" data-page="season">
      <div className="s-open">
        <div className="wrap">
          <div className="lbl k fade" style={{marginBottom:"30px"}}>{t.rich("season_01", { t1: (c) => <i>{c}</i>, t2: (c) => <i>{c}</i>, t3: (c) => <i>{c}</i>, t0: (c) => <span className="speed" style={{color:"#fff"}}>{c}</span> })}</div>
          {" "}
          <h1 className="disp">
            <span className="rise">{t.rich("n7_races", { t0: (c) => <span>{c}</span> })}</span>
            <span className="rise l2">{t.rich("n4_cities", { t0: (c) => <span className="out">{c}</span> })}</span>
            <span className="rise l3">
              <span style={{display:"flex", alignItems:"center", gap:".22em"}}>
                {t("n1")}{" "}
                <img src="/img/mark.svg" alt={t("hybrid_one")} />
              </span>
            </span>
          </h1>
          {" "}
          <div className="k fade" style={{marginTop:"44px", color:"#bbb"}}>{t("jeddah_riyadh_dammam_khobar_scroll")}</div>
        </div>
      </div>
      {" "}
      <div className="city" data-par="">
        <div className="bg" style={{backgroundImage:"url(/img/jeddah.jpg)", backgroundPosition:"50% 48%"}} />
        <div className="shade" />
        {" "}
        <div className="top">
          <div className="wrap">{t.rich("open_registration_live_city_01", { t1: (c) => <span className="dot">{c}</span>, t0: (c) => <span className="lock open">{c}</span>, t2: (c) => <span className="k" style={{color:"#ddd"}}>{c}</span> })}</div>
        </div>
        {" "}
        <div className="wrap rv">
          <h2 className="disp">{t("jeddah")}</h2>
          <div>
            <div className="tag">{t("bride_of_the_red_sea")}</div>
            <a className="btn w" href="#jeddah" data-go="jeddah" style={{marginTop:"18px"}}>{t.rich("register_for_jeddah", { t0: (c) => <span className="arrow">{c}</span> })}</a>
          </div>
        </div>
      </div>
      {" "}
      <div className="band light jstory">
        <div className="wrap two" style={{display:"grid", gridTemplateColumns:"1fr 1.1fr", gap:"80px", alignItems:"start"}}>
          <div className="rv">
            <div className="lbl k">{t.rich("jeddah_2", { t1: (c) => <i>{c}</i>, t2: (c) => <i>{c}</i>, t3: (c) => <i>{c}</i>, t0: (c) => <span className="speed" style={{color:"var(--ink)"} as React.CSSProperties}>{c}</span> })}</div>
            {" "}
            <h3 className="disp h-m" style={{marginTop:"22px"}}>{t("where_the_sea_meets_the")}</h3>
          </div>
          {" "}
          <div className="rv" style={{display:"flex", flexDirection:"column", gap:"20px", paddingTop:"clamp(0px,3vw,40px)"}}>
            <p style={{fontSize:"clamp(21px,2.2vw,26px)", lineHeight:"1.38", fontWeight:"600", fontStretch:"92%", margin:"0"}}>{t("jeddah_has_always_been_the")}</p>
            {" "}
            <p className="lead">{t("it_s_a_city_that")}</p>
          </div>
        </div>
        {" "}
        <div className="wrap" style={{marginTop:"clamp(48px,6vw,72px)"}}>
          <div className="shead rv" style={{marginBottom:"24px"}}>
            <div className="k">{t("raced_in_jeddah")}</div>
            <span className="k">{t("n2_events_2_sold_out")}</span>
          </div>
          {" "}
          <div className="jev">
            <a className="jcard rv" href="#push" data-go="push">
              <div className="ph">
                <img src="/img/push.jpg" loading="lazy" alt={t("group_photo_at_push_club")} />
              </div>
              <div className="bd">
                <div className="k">{t("n01_3_jul_2026_push")}</div>
                <div className="disp">{t("race_simulation")}</div>
                <span className="stamp">{t("sold_out")}</span>
              </div>
            </a>
            {" "}
            <a className="jcard rv" href="#bahar" data-go="bahar">
              <div className="ph">
                <img src="/img/bahar.jpg" loading="lazy" style={{objectPosition:"50% 35%"}} alt={t("two_bahar_runners")} />
              </div>
              <div className="bd">
                <div className="k">{t("n02_12_sep_2026_rixos")}</div>
                <div className="disp">{t("hybrid_one_bahar")}</div>
                <span className="stamp">{t("sold_out")}</span>
              </div>
            </a>
            {" "}
            <a className="jcard next rv" href="#jeddah" data-go="jeddah">
              <div className="bd">
                <div className="k" style={{color:"#bbb"}}>{t("n03_next")}</div>
                <div className="disp">{t("hybrid_one_jeddah")}</div>
                <span className="pill">{t.rich("registration_open", { t0: (c) => <i>{c}</i> })}</span>
                <span className="btn w" style={{marginTop:"18px", alignSelf:"flex-start"}}>{t.rich("register", { t0: (c) => <span className="arrow">{c}</span> })}</span>
              </div>
            </a>
          </div>
        </div>
      </div>
      {" "}
      <div className="city" data-par="">
        <div className="bg" style={{backgroundImage:"url(/img/riyadh.jpg)"}} />
        <div className="shade" />
        {" "}
        <div className="top">
          <div className="wrap">
            <span className="lock">
              <svg viewBox="0 0 12 14">
                <rect x="1" y="6" width="10" height="8" fill="currentColor" />
                <path d="M3 6V4a3 3 0 0 1 6 0v2" stroke="currentColor" strokeWidth="1.6" fill="none" />
              </svg>
              {t("locked_date_tba")}
            </span>
            <span className="k" style={{color:"#ddd"}}>{t("city_02_04")}</span>
          </div>
        </div>
        {" "}
        <div className="wrap rv">
          <h2 className="disp">{t("riyadh")}</h2>
          <div>
            <div className="tag">{t("the_capital_is_next")}</div>
            <a className="k" href="#join" data-go="join" style={{display:"block", marginTop:"12px", color:"#bbb"}}>{t("notify_me_when_it_unlocks")}</a>
          </div>
        </div>
      </div>
      {" "}
      <div className="city" data-par="">
        <div className="bg" style={{backgroundImage:"url(/img/dammam.jpg)"}} />
        <div className="shade" />
        {" "}
        <div className="top">
          <div className="wrap">
            <span className="lock">
              <svg viewBox="0 0 12 14">
                <rect x="1" y="6" width="10" height="8" fill="currentColor" />
                <path d="M3 6V4a3 3 0 0 1 6 0v2" stroke="currentColor" strokeWidth="1.6" fill="none" />
              </svg>
              {t("locked_date_tba")}
            </span>
            <span className="k" style={{color:"#ddd"}}>{t("city_03_04")}</span>
          </div>
        </div>
        {" "}
        <div className="wrap rv">
          <h2 className="disp">{t("dammam")}</h2>
          <div>
            <div className="tag">{t("the_east_is_calling")}</div>
            <a className="k" href="#join" data-go="join" style={{display:"block", marginTop:"12px", color:"#bbb"}}>{t("notify_me_when_it_unlocks")}</a>
          </div>
        </div>
      </div>
      {" "}
      <div className="city" data-par="">
        <div className="bg" style={{backgroundImage:"url(/img/khobar.jpg)"}} />
        <div className="shade" />
        {" "}
        <div className="top">
          <div className="wrap">
            <span className="lock">
              <svg viewBox="0 0 12 14">
                <rect x="1" y="6" width="10" height="8" fill="currentColor" />
                <path d="M3 6V4a3 3 0 0 1 6 0v2" stroke="currentColor" strokeWidth="1.6" fill="none" />
              </svg>
              {t("locked_date_tba")}
            </span>
            <span className="k" style={{color:"#ddd"}}>{t("city_04_04")}</span>
          </div>
        </div>
        {" "}
        <div className="wrap rv">
          <h2 className="disp">{t("khobar")}</h2>
          <div>
            <div className="tag">{t("one_more_stop")}</div>
            <a className="k" href="#join" data-go="join" style={{display:"block", marginTop:"12px", color:"#bbb"}}>{t("notify_me_when_it_unlocks")}</a>
          </div>
        </div>
      </div>
      {" "}
      <div className="band light" style={{textAlign:"center"}}>
        <div className="wrap rv">
          <div className="k">{t("season_01_dates_unlocking_soon")}</div>
          <h2 className="disp" style={{fontSize:"clamp(70px,13vw,170px)", margin:"24px 0 40px"}}>{t("are_you_ready")}</h2>
          <a className="btn k2" href="#join" data-go="join">{t.rich("join_the_waitlist", { t0: (c) => <span className="arrow">{c}</span> })}</a>
        </div>
      </div>
    </section>
  );
}
