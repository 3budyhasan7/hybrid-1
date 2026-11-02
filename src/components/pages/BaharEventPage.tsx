// Page: #bahar
// Markup and class names match the approved design. All text lives in messages/<locale>.json under "baharEventPage".
import { useTranslations } from "next-intl";

export function BaharEventPage() {
  const t = useTranslations("baharEventPage");
  return (
    <section className="page" data-page="bahar">
      <div className="hero">
        <div className="bg kb" style={{backgroundImage:"url(/img/bahar.jpg)", backgroundPosition:"50% 40%"}} />
        <div className="shade" />
        {" "}
        <div className="wrap">
          <a className="k fade" href="#events" data-go="events" style={{color:"#ccc"}}>{t("all_events")}</a>
          {" "}
          <div style={{display:"flex", alignItems:"center", gap:"22px", marginTop:"22px"}} className="fade">{t.rich("event_02_sold_out", { t0: (c) => <span className="disp" style={{fontSize:"22px", color:"#aaa"}}>{c}</span>, t1: (c) => <span className="stamp" style={{color:"#fff"}}>{c}</span> })}</div>
          {" "}
          <h1 className="disp h-xl" style={{marginTop:"20px"}}>{t.rich("hybrid_one_bahar", { t1: (c) => <span>{c}</span>, t0: (c) => <span className="rise">{c}</span>, t3: (c) => <span>{c}</span>, t2: (c) => <span className="rise">{c}</span> })}</h1>
          {" "}
          <div className="facts fade">
            <div>
              <div className="k" style={{color:"#bbb"}}>{t("date")}</div>
              <div className="disp">{t("n12_sep_2026")}</div>
            </div>
            <div>
              <div className="k" style={{color:"#bbb"}}>{t("venue")}</div>
              <div className="disp">{t("rixos_obhur_jeddah")}</div>
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
        <div className="gal" data-galx="" data-auto="" data-shuffle="">
          <figure data-fixed="">
            <img src="/img/bn1.jpg" loading="lazy" alt={t("runner_on_the_course")} />
          </figure>
          <figure data-fixed="">
            <img src="/img/bn2.jpg" loading="lazy" alt={t("burpee_broad_jump_with_judge")} />
          </figure>
          <figure data-fixed="">
            <img src="/img/bn3.jpg" loading="lazy" alt={t("finishers_celebrating_at_the_bahar")} />
          </figure>
          <figure>
            <img src="/img/bn4.jpg" loading="lazy" alt={t("skierg_under_the_pergola")} />
          </figure>
          <figure>
            <img src="/img/bn5.jpg" loading="lazy" alt={t("skierg_with_coach_watching")} />
          </figure>
          <figure>
            <img src="/img/bn6.jpg" loading="lazy" alt={t("skierg_row_of_athletes")} />
          </figure>
          <figure>
            <img src="/img/bn7.jpg" loading="lazy" alt={t("friends_celebrating_after_the_finish")} />
          </figure>
          <figure>
            <img src="/img/bn8.jpg" loading="lazy" alt={t("finishers_with_medals_at_night")} />
          </figure>
          <figure>
            <img src="/img/bn9.jpg" loading="lazy" alt={t("race_host_on_the_mic")} />
          </figure>
          <figure>
            <img src="/img/g7.jpg" loading="lazy" alt={t("runners_leave_the_start_gate")} />
          </figure>
          <figure>
            <img src="/img/hero.jpg" loading="lazy" alt={t("box_step_up")} />
          </figure>
          <figure>
            <img src="/img/b1.jpg" loading="lazy" alt={t("start_line")} />
          </figure>
          <figure>
            <img src="/img/g1.jpg" loading="lazy" alt={t("skierg")} />
          </figure>
          <figure>
            <img src="/img/b2.jpg" loading="lazy" alt={t("athlete_close_up")} />
          </figure>
          <figure>
            <img src="/img/g5.jpg" loading="lazy" alt={t("cheering_at_the_gate")} />
          </figure>
          <figure>
            <img src="/img/b4.jpg" loading="lazy" alt={t("finish_celebration")} />
          </figure>
          <figure>
            <img src="/img/g3.jpg" loading="lazy" alt={t("fan_sign")} />
          </figure>
          <figure>
            <img src="/img/c-moments.jpg" loading="lazy" alt={t("medals")} />
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
              <div className="lbl k">{t.rich("podiums", { t1: (c) => <i>{c}</i>, t2: (c) => <i>{c}</i>, t3: (c) => <i>{c}</i>, t0: (c) => <span className="speed" style={{color:"var(--ink)"} as React.CSSProperties}>{c}</span> })}</div>
              <h2 className="disp h-l">{t("the_winners")}</h2>
            </div>
            <span className="k">{t("every_division_top_3")}</span>
          </div>
          {" "}
          <div className="pods">
            <figure className="pod rv">
              <div className="ph">
                <img src="/img/pod-men-singles.jpg" loading="lazy" alt={t("men_singles_podium_at_hybrid")} />
              </div>
              <figcaption>{t.rich("men_singles_podium", { t0: (c) => <span className="disp">{c}</span>, t1: (c) => <span className="k">{c}</span> })}</figcaption>
            </figure>
            {" "}
            <figure className="pod rv">
              <div className="ph">
                <img src="/img/pod-women-singles.jpg" loading="lazy" alt={t("women_singles_podium_at_hybrid")} />
              </div>
              <figcaption>{t.rich("women_singles_podium", { t0: (c) => <span className="disp">{c}</span>, t1: (c) => <span className="k">{c}</span> })}</figcaption>
            </figure>
            {" "}
            <figure className="pod rv">
              <div className="ph">
                <img src="/img/pod-men-doubles.jpg" loading="lazy" alt={t("men_doubles_podium_at_hybrid")} />
              </div>
              <figcaption>{t.rich("men_doubles_podium", { t0: (c) => <span className="disp">{c}</span>, t1: (c) => <span className="k">{c}</span> })}</figcaption>
            </figure>
            {" "}
            <figure className="pod rv">
              <div className="ph">
                <img src="/img/pod-women-doubles.jpg" loading="lazy" alt={t("women_doubles_podium_at_hybrid")} />
              </div>
              <figcaption>{t.rich("women_doubles_podium", { t0: (c) => <span className="disp">{c}</span>, t1: (c) => <span className="k">{c}</span> })}</figcaption>
            </figure>
            {" "}
            <figure className="pod rv">
              <div className="ph">
                <img src="/img/pod-mixed-doubles.jpg" loading="lazy" alt={t("mixed_doubles_podium_at_hybrid")} />
              </div>
              <figcaption>{t.rich("mixed_doubles_podium", { t0: (c) => <span className="disp">{c}</span>, t1: (c) => <span className="k">{c}</span> })}</figcaption>
            </figure>
            {" "}
            <figure className="pod rv">
              <div className="ph">
                <img src="/img/pod-kids.jpg" loading="lazy" alt={t("kids_race_podium_at_hybrid")} />
              </div>
              <figcaption>{t.rich("kids_race_podium", { t0: (c) => <span className="disp">{c}</span>, t1: (c) => <span className="k">{c}</span> })}</figcaption>
            </figure>
          </div>
          {" "}
          <div className="linkbox">
            <a className="rv" href="#bahar">
              <div>
                <div className="k">{t("every_athlete_every_split")}</div>
                <div className="disp" style={{fontSize:"clamp(36px,4vw,54px)", marginTop:"10px"}}>{t("full_results")}</div>
              </div>
              <span className="sq">{t("text_3")}</span>
            </a>
            <a className="rv" href="#bahar">
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
      <a className="band dark" href="#jeddah" data-go="jeddah" style={{display:"block", paddingBlock:"64px"}}>
        <div className="wrap" style={{display:"flex", flexWrap:"wrap", justifyContent:"space-between", alignItems:"center", gap:"20px"}}>
          <div>
            <div className="k">{t("next_event")}</div>
            <div className="disp h-m" style={{marginTop:"12px"}}>{t("hybrid_one_jeddah")}</div>
          </div>
          <span className="pill">{t.rich("registration_open", { t0: (c) => <i>{c}</i> })}</span>
        </div>
      </a>
    </section>
  );
}
