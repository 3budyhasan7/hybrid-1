// Page: #home
// Markup and class names match the approved design. All text lives in messages/<locale>.json under "homePage".
import { useTranslations } from "next-intl";

export function HomePage() {
  const t = useTranslations("homePage");
  return (
    <section className="page" data-page="home">
      <div className="hero">
        <div className="bg kb" style={{backgroundImage:"url(/img/hero.jpg)", backgroundPosition:"50% 30%"}} />
        <div className="shade" />
        {" "}
        <div className="wrap">
          <div className="k fade" style={{color:"#ddd", letterSpacing:".42em", fontFamily:"var(--disp)", fontWeight:"600", fontStretch:"125%", fontSize:"clamp(13px,1.6vw,20px)"} as React.CSSProperties}>{t("hybrid_one")}</div>
          {" "}
          <h1 className="disp h-xl" style={{marginTop:"14px"}}>{t.rich("season_one_is_coming", { t1: (c) => <span>{c}</span>, t0: (c) => <span className="rise">{c}</span>, t3: (c) => <span className="out">{c}</span>, t2: (c) => <span className="rise">{c}</span> })}</h1>
          {" "}
          <div className="stats fade">
            <div>{t.rich("n7_races", { t0: (c) => <b className="disp">{c}</b>, t1: (c) => <span className="k" style={{color:"#ccc"}}>{c}</span> })}</div>
            {" "}
            <div>{t.rich("n4_cities", { t0: (c) => <b className="disp">{c}</b>, t1: (c) => <span className="k" style={{color:"#ccc"}}>{c}</span> })}</div>
            {" "}
            <div>{t.rich("n1_hybrid_one", { t0: (c) => <b className="disp">{c}</b>, t1: (c) => <span className="k" style={{color:"#ccc"}}>{c}</span> })}</div>
            {" "}
            <div className="k" style={{color:"#ccc", lineHeight:"1.7"}}>{t.rich("jeddah_riyadh_dammam_khobar", { br: () => <br /> })}</div>
            {" "}
            <div className="ctas">{t.rich("join_the_waitlist_read_more", { t1: (c) => <span className="arrow">{c}</span>, t0: (c) => <a className="btn w" href="#join" data-go="join">{c}</a>, t3: (c) => <span>{c}</span>, t2: (c) => <a className="btn ghost" href="#about" id="readmore">{c}</a> })}</div>
          </div>
        </div>
      </div>
      {" "}
      <div className="band light" id="about">
        <div className="wrap two" style={{display:"grid", gridTemplateColumns:"1fr 1.15fr", gap:"80px"}}>
          <div className="rv">
            <div className="lbl k">{t.rich("about_the_event", { t1: (c) => <i>{c}</i>, t2: (c) => <i>{c}</i>, t3: (c) => <i>{c}</i>, t0: (c) => <span className="speed" style={{color:"var(--ink)"} as React.CSSProperties}>{c}</span> })}</div>
            <h2 className="disp h-l" style={{marginTop:"22px"}}>{t("built_for_the_complete_athlete")}</h2>
          </div>
          {" "}
          <div className="rv" style={{paddingTop:"clamp(0px,3vw,44px)", display:"flex", flexDirection:"column", gap:"22px"}}>
            <p style={{fontSize:"clamp(21px,2.2vw,26px)", lineHeight:"1.35", fontWeight:"600", fontStretch:"92%", margin:"0"}}>{t("running_and_functional_stations_combined")}</p>
            {" "}
            <p className="lead">{t("every_hybrid_one_is_a")}</p>
            {" "}
            <div>{t.rich("read_more", { t1: (c) => <span className="arrow">{c}</span>, t0: (c) => <a className="btn k2" href="#concept" data-go="concept">{c}</a> })}</div>
          </div>
        </div>
      </div>
      {" "}
      <div className="dark" style={{paddingBlock:"clamp(72px,9vw,100px) 80px"}}>
        <div style={{paddingLeft:"var(--g)", paddingRight:"var(--gr)"} as React.CSSProperties}>
          <div className="wrap shead rv">
            <div>
              <div className="lbl k">{t.rich("gallery", { t1: (c) => <i>{c}</i>, t2: (c) => <i>{c}</i>, t3: (c) => <i>{c}</i>, t0: (c) => <span className="speed" style={{color:"#fff"}}>{c}</span> })}</div>
              <h2 className="disp h-m">{t("our_race_days")}</h2>
            </div>
          </div>
        </div>
        {" "}
        <div className="gal" id="gal">
          <figure>
            <img src="/img/g1.jpg" loading="lazy" alt={t("athletes_on_the_skierg_station")} />
          </figure>
          {" "}
          <figure>
            <img src="/img/g2.jpg" loading="lazy" alt={t("athlete_flexing_with_a_sandbag")} />
          </figure>
          {" "}
          <figure>
            <img src="/img/g3.jpg" loading="lazy" alt={t("fan_holding_a_cheer_sign")} />
          </figure>
          {" "}
          <figure>
            <img src="/img/g4.jpg" loading="lazy" alt={t("finishers_with_their_medals")} />
          </figure>
          {" "}
          <figure>
            <img src="/img/g5.jpg" loading="lazy" alt={t("athletes_cheering_at_the_start")} />
          </figure>
          {" "}
          <figure>
            <img src="/img/g6.jpg" loading="lazy" alt={t("athletes_celebrating_together")} />
          </figure>
          {" "}
          <figure>
            <img src="/img/g7.jpg" loading="lazy" alt={t("runners_leaving_the_start_gate")} />
          </figure>
          {" "}
          <figure>
            <img src="/img/g8.jpg" loading="lazy" alt={t("fans_with_a_number_1")} />
          </figure>
        </div>
        {" "}
        <div style={{paddingLeft:"var(--g)", paddingRight:"var(--gr)"} as React.CSSProperties}>
          <div className="wrap galbar">
            <div className="prog">
              <i id="galprog" />
            </div>
            <div className="arr">
              <button data-gal="-1" aria-label={t("previous_photos")}>{t("text")}</button>
              <button data-gal="1" aria-label={t("next_photos")}>{t("text_2")}</button>
            </div>
          </div>
        </div>
      </div>
      {" "}
      <div className="band dark" style={{borderTop:"1px solid var(--line)"} as React.CSSProperties}>
        <div className="wrap">
          <div className="shead rv">
            <div>
              <div className="lbl k">{t.rich("events", { t1: (c) => <i>{c}</i>, t2: (c) => <i>{c}</i>, t3: (c) => <i>{c}</i>, t0: (c) => <span className="speed" style={{color:"#fff"}}>{c}</span> })}</div>
              <h2 className="disp h-l">{t("the_story_so_far")}</h2>
            </div>
            <a className="btn ghost" href="#events" data-go="events">{t.rich("all_events", { t0: (c) => <span>{c}</span> })}</a>
          </div>
          {" "}
          <div className="evgrid">
            <a className="ev rv" href="#push" data-go="push">
              <div className="ph">
                <img src="/img/push.jpg" loading="lazy" alt={t("group_photo_at_push_club")} />
              </div>
              <div className="bd">
                <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>{t.rich("n01_sold_out", { t0: (c) => <span className="disp" style={{fontSize:"20px", color:"#777"}}>{c}</span>, t1: (c) => <span className="stamp">{c}</span> })}</div>
                <h3 className="disp">{t("race_simulation")}</h3>
                <div className="k" style={{marginBottom:"22px"}}>{t("push_club_jeddah")}</div>
                <div className="kv one">
                  <div>{t.rich("date_3_jul_2026", { t0: (c) => <span className="k">{c}</span>, t1: (c) => <b>{c}</b> })}</div>
                </div>
              </div>
            </a>
            {" "}
            <a className="ev rv" href="#bahar" data-go="bahar">
              <div className="ph">
                <img src="/img/bahar.jpg" loading="lazy" style={{objectPosition:"50% 35%"}} alt={t("two_bahar_runners_on_the")} />
              </div>
              <div className="bd">
                <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>{t.rich("n02_sold_out", { t0: (c) => <span className="disp" style={{fontSize:"20px", color:"#777"}}>{c}</span>, t1: (c) => <span className="stamp">{c}</span> })}</div>
                <h3 className="disp">{t("hybrid_one_bahar")}</h3>
                <div className="k" style={{marginBottom:"22px"}}>{t("rixos_obhur_jeddah")}</div>
                <div className="kv one">
                  <div>{t.rich("date_12_sep_2026", { t0: (c) => <span className="k">{c}</span>, t1: (c) => <b>{c}</b> })}</div>
                </div>
              </div>
            </a>
            {" "}
            <a className="ev next open rv" href="#jeddah" data-go="jeddah">
              <div className="ph">
                <img src="/img/jeddah.jpg" loading="lazy" style={{objectPosition:"50% 40%"}} alt={t("jeddah_corniche_mosque_by_the")} />
              </div>
              <div className="bd">
                <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>{t.rich("n03_registration_open", { t0: (c) => <span className="disp" style={{fontSize:"20px", color:"#999"}}>{c}</span>, t2: (c) => <i>{c}</i>, t1: (c) => <span className="pill" style={{background:"var(--ink)", color:"var(--paper)"} as React.CSSProperties}>{c}</span> })}</div>
                <h3 className="disp">{t("hybrid_one_jeddah")}</h3>
                <div className="k" style={{marginBottom:"22px"}}>{t("next_event_season_01_race")}</div>
                <span className="btn k2" style={{justifyContent:"center", marginTop:"auto"}}>{t.rich("register_early", { t0: (c) => <span className="arrow">{c}</span> })}</span>
              </div>
            </a>
          </div>
        </div>
      </div>
      {" "}
      <div className="band dark" id="ambassadors" hidden style={{borderTop:"1px solid var(--line)"} as React.CSSProperties}>
        <div className="wrap">
          <div className="shead rv">
            <div>
              <div className="lbl k">{t.rich("ambassadors", { t1: (c) => <i>{c}</i>, t2: (c) => <i>{c}</i>, t3: (c) => <i>{c}</i>, t0: (c) => <span className="speed" style={{color:"#fff"}}>{c}</span> })}</div>
              <h2 className="disp h-l">{t("the_faces_of_hybrid_one")}</h2>
            </div>
            <p className="lead" style={{maxWidth:"26em"}}>{t("athletes_from_every_sport_who")}</p>
          </div>
          {" "}
          <div className="egrid">
            <div className="ecard rv" style={{"--r":"-2deg"} as React.CSSProperties}>
              <div className="ph">
                <img src="/img/amb1.jpg" alt={t("faisal_ghorab_rowing")} />
                <img className="mk2" src="/img/mark.svg" alt="" />
                <span className="tag">{t("h1_001")}</span>
              </div>
              <div className="disp nm">{t("faisal_ghorab")}</div>
              <p className="bio">{t("saudi_national_rowing_champion_and")}</p>
              <div className="st">
                <div>{t.rich("sport_rowing", { t0: (c) => <span className="k">{c}</span>, t1: (c) => <b>{c}</b> })}</div>
                <span className="more">{t("view")}</span>
                <div>{t.rich("since_2026", { t0: (c) => <span className="k">{c}</span>, t1: (c) => <b>{c}</b> })}</div>
                <div className="ig">{t.rich("instagram_faisal_ghorab", { t0: (c) => <span className="k">{c}</span>, t1: (c) => <b>{c}</b> })}</div>
              </div>
            </div>
            <div className="ecard rv" style={{"--r":"1.5deg"} as React.CSSProperties}>
              <div className="ph">
                <img src="/img/amb2.jpg" alt={t("abdulmalik_sulimani_sprinting")} />
                <img className="mk2" src="/img/mark.svg" alt="" />
                <span className="tag">{t("h1_002")}</span>
              </div>
              <div className="disp nm">{t("abdulmalik_sulimani")}</div>
              <p className="bio">{t("sprinter_on_the_track_brings")}</p>
              <div className="st">
                <div>{t.rich("sport_track_field", { t0: (c) => <span className="k">{c}</span>, t1: (c) => <b>{c}</b> })}</div>
                <span className="more">{t("view")}</span>
                <div>{t.rich("since_2026", { t0: (c) => <span className="k">{c}</span>, t1: (c) => <b>{c}</b> })}</div>
                <div className="ig">{t.rich("instagram_mlk_sulimani", { t0: (c) => <span className="k">{c}</span>, t1: (c) => <b>{c}</b> })}</div>
              </div>
            </div>
            <div className="ecard rv" style={{"--r":"-1deg"} as React.CSSProperties}>
              <div className="ph">
                <img src="/img/amb3.jpg" alt={t("adnan_softa_rowing")} />
                <img className="mk2" src="/img/mark.svg" alt="" />
                <span className="tag">{t("h1_003")}</span>
              </div>
              <div className="disp nm">{t("adnan_softa")}</div>
              <p className="bio">{t("rower_with_jeddah_rowing_club")}</p>
              <div className="st">
                <div>{t.rich("sport_rowing", { t0: (c) => <span className="k">{c}</span>, t1: (c) => <b>{c}</b> })}</div>
                <span className="more">{t("view")}</span>
                <div>{t.rich("since_2026", { t0: (c) => <span className="k">{c}</span>, t1: (c) => <b>{c}</b> })}</div>
                <div className="ig">{t.rich("instagram", { t0: (c) => <span className="k">{c}</span>, t1: (c) => <b>{c}</b> })}</div>
              </div>
            </div>
            <div className="ecard rv" style={{"--r":"2deg"} as React.CSSProperties}>
              <div className="ph">
                <div className="ph0" style={{position:"absolute", inset:"0", display:"grid", placeItems:"center", background:"#ddd"}}>
                  <img src="/img/mark.svg" alt="" style={{width:"40%!important", height:"auto!important", filter:"invert(1)", opacity:".15"}} />
                </div>
                <img className="mk2" src="/img/mark.svg" alt="" />
                <span className="tag">{t("h1_004")}</span>
              </div>
              <div className="disp nm">{t("ambassador_name")}</div>
              <p className="bio">{t("short_bio_one_line_about")}</p>
              <div className="st">
                <div>{t.rich("sport", { t0: (c) => <span className="k">{c}</span>, t1: (c) => <b>{c}</b> })}</div>
                <span className="more">{t("view")}</span>
                <div>{t.rich("since_2026", { t0: (c) => <span className="k">{c}</span>, t1: (c) => <b>{c}</b> })}</div>
                <div className="ig">{t.rich("instagram", { t0: (c) => <span className="k">{c}</span>, t1: (c) => <b>{c}</b> })}</div>
              </div>
            </div>
            <div className="ecard rv" style={{"--r":"-2deg"} as React.CSSProperties}>
              <div className="ph">
                <div className="ph0" style={{position:"absolute", inset:"0", display:"grid", placeItems:"center", background:"#ddd"}}>
                  <img src="/img/mark.svg" alt="" style={{width:"40%!important", height:"auto!important", filter:"invert(1)", opacity:".15"}} />
                </div>
                <img className="mk2" src="/img/mark.svg" alt="" />
                <span className="tag">{t("h1_005")}</span>
              </div>
              <div className="disp nm">{t("ambassador_name")}</div>
              <p className="bio">{t("short_bio_one_line_about")}</p>
              <div className="st">
                <div>{t.rich("sport", { t0: (c) => <span className="k">{c}</span>, t1: (c) => <b>{c}</b> })}</div>
                <span className="more">{t("view")}</span>
                <div>{t.rich("since_2026", { t0: (c) => <span className="k">{c}</span>, t1: (c) => <b>{c}</b> })}</div>
                <div className="ig">{t.rich("instagram", { t0: (c) => <span className="k">{c}</span>, t1: (c) => <b>{c}</b> })}</div>
              </div>
            </div>
            <div className="ecard rv" style={{"--r":"1.5deg"} as React.CSSProperties}>
              <div className="ph">
                <div className="ph0" style={{position:"absolute", inset:"0", display:"grid", placeItems:"center", background:"#ddd"}}>
                  <img src="/img/mark.svg" alt="" style={{width:"40%!important", height:"auto!important", filter:"invert(1)", opacity:".15"}} />
                </div>
                <img className="mk2" src="/img/mark.svg" alt="" />
                <span className="tag">{t("h1_006")}</span>
              </div>
              <div className="disp nm">{t("ambassador_name")}</div>
              <p className="bio">{t("short_bio_one_line_about")}</p>
              <div className="st">
                <div>{t.rich("sport", { t0: (c) => <span className="k">{c}</span>, t1: (c) => <b>{c}</b> })}</div>
                <span className="more">{t("view")}</span>
                <div>{t.rich("since_2026", { t0: (c) => <span className="k">{c}</span>, t1: (c) => <b>{c}</b> })}</div>
                <div className="ig">{t.rich("instagram", { t0: (c) => <span className="k">{c}</span>, t1: (c) => <b>{c}</b> })}</div>
              </div>
            </div>
            <div className="ecard rv" style={{"--r":"-1deg"} as React.CSSProperties}>
              <div className="ph">
                <div className="ph0" style={{position:"absolute", inset:"0", display:"grid", placeItems:"center", background:"#ddd"}}>
                  <img src="/img/mark.svg" alt="" style={{width:"40%!important", height:"auto!important", filter:"invert(1)", opacity:".15"}} />
                </div>
                <img className="mk2" src="/img/mark.svg" alt="" />
                <span className="tag">{t("h1_007")}</span>
              </div>
              <div className="disp nm">{t("ambassador_name")}</div>
              <p className="bio">{t("short_bio_one_line_about")}</p>
              <div className="st">
                <div>{t.rich("sport", { t0: (c) => <span className="k">{c}</span>, t1: (c) => <b>{c}</b> })}</div>
                <span className="more">{t("view")}</span>
                <div>{t.rich("since_2026", { t0: (c) => <span className="k">{c}</span>, t1: (c) => <b>{c}</b> })}</div>
                <div className="ig">{t.rich("instagram", { t0: (c) => <span className="k">{c}</span>, t1: (c) => <b>{c}</b> })}</div>
              </div>
            </div>
            <div className="ecard rv" style={{"--r":"2deg"} as React.CSSProperties}>
              <div className="ph">
                <div className="ph0" style={{position:"absolute", inset:"0", display:"grid", placeItems:"center", background:"#ddd"}}>
                  <img src="/img/mark.svg" alt="" style={{width:"40%!important", height:"auto!important", filter:"invert(1)", opacity:".15"}} />
                </div>
                <img className="mk2" src="/img/mark.svg" alt="" />
                <span className="tag">{t("h1_008")}</span>
              </div>
              <div className="disp nm">{t("ambassador_name")}</div>
              <p className="bio">{t("short_bio_one_line_about")}</p>
              <div className="st">
                <div>{t.rich("sport", { t0: (c) => <span className="k">{c}</span>, t1: (c) => <b>{c}</b> })}</div>
                <span className="more">{t("view")}</span>
                <div>{t.rich("since_2026", { t0: (c) => <span className="k">{c}</span>, t1: (c) => <b>{c}</b> })}</div>
                <div className="ig">{t.rich("instagram", { t0: (c) => <span className="k">{c}</span>, t1: (c) => <b>{c}</b> })}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {" "}
      <div className="band dark" id="crews" hidden style={{borderTop:"1px solid var(--line)"} as React.CSSProperties}>
        <div className="wrap">
          <div className="shead rv">
            <div>
              <div className="lbl k">{t.rich("crew_clash", { t1: (c) => <i>{c}</i>, t2: (c) => <i>{c}</i>, t3: (c) => <i>{c}</i>, t0: (c) => <span className="speed" style={{color:"#fff"}}>{c}</span> })}</div>
              <h2 className="disp h-l">{t("the_crews")}</h2>
            </div>
            <p className="lead" style={{maxWidth:"26em"}}>{t("the_run_clubs_racing_crew")}</p>
          </div>
        </div>
        <div className="cw-marq">
          <div className="cw-track">
            <img src="/img/crew-mile.png" alt="" />
            <span className="vs">{t("vs")}</span>
            <img src="/img/crew-jrc.png" alt="" />
            <span className="vs">{t("vs")}</span>
            <img src="/img/crew-run.png" alt="" />
            <span className="vs">{t("vs")}</span>
            <img src="/img/crew-drs.png" alt="" />
            <span className="vs">{t("vs")}</span>
            <img src="/img/crew-mile.png" alt="" />
            <span className="vs">{t("vs")}</span>
            <img src="/img/crew-jrc.png" alt="" />
            <span className="vs">{t("vs")}</span>
            <img src="/img/crew-run.png" alt="" />
            <span className="vs">{t("vs")}</span>
            <img src="/img/crew-drs.png" alt="" />
            <span className="vs">{t("vs")}</span>
          </div>
        </div>
        <div className="wrap">
          <div className="cwgrid">
            <div className="cw">
              <div className="hd">{t.rich("crew_01_view", { t0: (c) => <span className="k">{c}</span>, t1: (c) => <span className="k">{c}</span> })}</div>
              <div className="lg">
                <img src="/img/crew-mile.png" alt={t("mile_logo")} />
              </div>
              <div className="ft">
                <span className="k">{t("represented_by")}</span>
                <div className="avs">
                  <div className="av">
                    <img src="/img/mark.svg" alt="" />
                  </div>
                  <div className="av">
                    <img src="/img/mark.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="cw">
              <div className="hd">{t.rich("crew_02_view", { t0: (c) => <span className="k">{c}</span>, t1: (c) => <span className="k">{c}</span> })}</div>
              <div className="lg">
                <img src="/img/crew-jrc.png" alt={t("jrc_logo")} />
              </div>
              <div className="ft">
                <span className="k">{t("represented_by")}</span>
                <div className="avs">
                  <div className="av">
                    <img src="/img/mark.svg" alt="" />
                  </div>
                  <div className="av">
                    <img src="/img/mark.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="cw">
              <div className="hd">{t.rich("crew_03_view", { t0: (c) => <span className="k">{c}</span>, t1: (c) => <span className="k">{c}</span> })}</div>
              <div className="lg">
                <img src="/img/crew-run.png" alt={t("run_logo")} />
              </div>
              <div className="ft">
                <span className="k">{t("represented_by")}</span>
                <div className="avs">
                  <div className="av">
                    <img src="/img/mark.svg" alt="" />
                  </div>
                  <div className="av">
                    <img src="/img/mark.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="cw">
              <div className="hd">{t.rich("crew_04_view", { t0: (c) => <span className="k">{c}</span>, t1: (c) => <span className="k">{c}</span> })}</div>
              <div className="lg">
                <img src="/img/crew-drs.png" alt={t("drs_paces_logo")} />
              </div>
              <div className="ft">
                <span className="k">{t("represented_by")}</span>
                <div className="avs">
                  <div className="av">
                    <img src="/img/mark.svg" alt="" />
                  </div>
                  <div className="av">
                    <img src="/img/mark.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {" "}
      {" "}
      <div className="band light" style={{paddingBlock:"64px"}}>
        <div className="wrap">
          <div className="k" style={{marginBottom:"22px"}}>{t("continue_to")}</div>
          {" "}
          <div className="cont">{t.rich("concept_more_than_a_race", { t1: (c) => <span className="k">{c}</span>, t2: (c) => <span className="disp">{c}</span>, t0: (c) => <a href="#concept" data-go="concept">{c}</a>, t4: (c) => <span className="k">{c}</span>, t5: (c) => <span className="disp">{c}</span>, t3: (c) => <a href="#season" data-go="season">{c}</a>, t7: (c) => <span className="k">{c}</span>, t8: (c) => <span className="disp">{c}</span>, t6: (c) => <a href="#jeddah" data-go="jeddah">{c}</a>, t10: (c) => <span className="k">{c}</span>, t11: (c) => <span className="disp">{c}</span>, t9: (c) => <a href="#join" data-go="join">{c}</a> })}</div>
        </div>
      </div>
    </section>
  );
}
