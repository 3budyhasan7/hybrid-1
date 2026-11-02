// Page: #concept
// Markup and class names match the approved design. All text lives in messages/<locale>.json under "conceptPage".
import { useTranslations } from "next-intl";

export function ConceptPage() {
  const t = useTranslations("conceptPage");
  return (
    <section className="page" data-page="concept">
      <div className="hero" style={{background:"var(--paper)", color:"var(--ink)", minHeight:"min(860px,100svh)"} as React.CSSProperties}>
        <div className="bg" style={{left:"auto", width:"min(46%,640px)", backgroundImage:"url(/img/c-hero.jpg)", backgroundPosition:"62% 40%", clipPath:"polygon(38% 0,100% 0,100% 100%,0 100%)"}} />
        {" "}
        <div className="wrap">
          <div className="lbl k fade">{t.rich("the_concept", { t1: (c) => <i>{c}</i>, t2: (c) => <i>{c}</i>, t3: (c) => <i>{c}</i>, t0: (c) => <span className="speed" style={{color:"var(--ink)"} as React.CSSProperties}>{c}</span> })}</div>
          {" "}
          <h1 className="disp" style={{fontSize:"clamp(80px,14vw,200px)", marginTop:"26px"}}>{t.rich("more_than_a_race", { t1: (c) => <span>{c}</span>, t0: (c) => <span className="rise">{c}</span>, t3: (c) => <span>{c}</span>, t2: (c) => <span className="rise">{c}</span>, t5: (c) => <span>{c}</span>, t4: (c) => <span className="rise">{c}</span> })}</h1>
          {" "}
          <div className="k fade" style={{display:"flex", gap:"28px", flexWrap:"wrap", marginTop:"40px"}}>{t.rich("the_challenge_the_moments_the", { t0: (c) => <span>{c}</span>, t1: (c) => <span>{c}</span>, t2: (c) => <span>{c}</span> })}</div>
        </div>
      </div>
      {" "}
      <div className="pillar" data-par="">
        <div className="bg" style={{backgroundImage:"url(/img/c-challenge.jpg)", backgroundPosition:"50% 35%"}} />
        <div className="shade" />
        {" "}
        <div className="wrap">
          <div className="txt rv">
            <span className="disp out num">{t("n01")}</span>
            <div className="lbl k" style={{color:"#bbb", margin:"26px 0 18px"}}>{t.rich("the_challenge", { t1: (c) => <i>{c}</i>, t2: (c) => <i>{c}</i>, t3: (c) => <i>{c}</i>, t0: (c) => <span className="speed" style={{color:"#fff"}}>{c}</span> })}</div>
            <h2 className="disp h-m">{t("never_the_same_feeling_twice")}</h2>
            <p className="lead">{t("new_venue_new_workout_new")}</p>
          </div>
        </div>
      </div>
      {" "}
      <div className="pillar r" data-par="">
        <div className="bg" style={{backgroundImage:"url(/img/c-moments.jpg)", backgroundPosition:"50% 30%"}} />
        <div className="shade" />
        {" "}
        <div className="wrap">
          <div className="txt rv">
            <span className="disp out num">{t("n02")}</span>
            <div className="lbl k" style={{color:"#bbb", margin:"26px 0 18px"}}>{t("the_moments")}</div>
            <h2 className="disp h-m">{t("built_for_the_finish_line")}</h2>
            <p className="lead">{t("the_scream_the_exhaustion_the")}</p>
          </div>
        </div>
      </div>
      {" "}
      <div className="pillar" data-par="">
        <div className="bg" style={{backgroundImage:"url(/img/c-crowd.jpg)", backgroundPosition:"50% 40%"}} />
        <div className="shade" />
        {" "}
        <div className="wrap">
          <div className="txt rv">
            <span className="disp out num">{t("n03")}</span>
            <div className="lbl k" style={{color:"#bbb", margin:"26px 0 18px"}}>{t.rich("the_crowd", { t1: (c) => <i>{c}</i>, t2: (c) => <i>{c}</i>, t3: (c) => <i>{c}</i>, t0: (c) => <span className="speed" style={{color:"#fff"}}>{c}</span> })}</div>
            <h2 className="disp h-m">{t("athletes_race_everyone_wins")}</h2>
            <p className="lead">{t("friends_families_and_fans_are")}</p>
          </div>
        </div>
      </div>
      {" "}
      <div className="band light" style={{textAlign:"center"}}>
        <div className="wrap rv">
          <div className="k">{t("see_where_we_ve_raced")}</div>
          <h2 className="disp h-l" style={{margin:"24px 0 40px"}}>{t("come_back_it_won_t")}</h2>
          <a className="btn k2" href="#events" data-go="events">{t.rich("see_our_events", { t0: (c) => <span className="arrow">{c}</span> })}</a>
        </div>
      </div>
    </section>
  );
}
