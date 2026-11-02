// Page: #faq
// Markup and class names match the approved design. All text lives in messages/<locale>.json under "faqPage".
import { useTranslations } from "next-intl";

export function FaqPage() {
  const t = useTranslations("faqPage");
  return (
    <section className="page" data-page="faq">
      <div className="hero" style={{background:"var(--paper)", color:"var(--ink)", minHeight:"auto", paddingTop:"170px"} as React.CSSProperties}>
        <div className="wrap">
          <div className="lbl k fade">{t.rich("faq", { t1: (c) => <i>{c}</i>, t2: (c) => <i>{c}</i>, t3: (c) => <i>{c}</i>, t0: (c) => <span className="speed" style={{color:"var(--ink)"} as React.CSSProperties}>{c}</span> })}</div>
          <h1 className="disp" style={{fontSize:"clamp(70px,15vw,210px)", marginTop:"24px"}}>{t.rich("questions", { t1: (c) => <span>{c}</span>, t0: (c) => <span className="rise">{c}</span> })}</h1>
          <p className="lead fade" style={{marginTop:"22px"}}>{t("everything_you_need_to_know")}</p>
        </div>
      </div>
      {" "}
      <div className="band light" style={{paddingTop:"30px"}}>
        <div className="wrap faqgrid">
          <div className="cats" id="cats">
            <button className="on" data-cat="reg">{t.rich("registration_03", { t0: (c) => <span className="k">{c}</span> })}</button>
            <button data-cat="day">{t.rich("race_day_03", { t0: (c) => <span className="k">{c}</span> })}</button>
            <button data-cat="lvl">{t.rich("level_02", { t0: (c) => <span className="k">{c}</span> })}</button>
            <button data-cat="ref">{t.rich("refunds_01", { t0: (c) => <span className="k">{c}</span> })}</button>
          </div>
          {" "}
          <div id="faqs">
            <div data-c="reg">
              <h3 className="disp" style={{fontSize:"clamp(36px,4vw,54px)", margin:"0 0 16px"}}>{t("registration")}</h3>
              {" "}
              <div className="acc open">
                <button aria-expanded="true">{t.rich("how_do_i_register", { t0: (c) => <span className="pm">{c}</span> })}</button>
                <div className="ans">
                  <div>
                    <p>{t("join_the_waitlist_when_a")}</p>
                  </div>
                </div>
              </div>
              {" "}
              <div className="acc">
                <button aria-expanded="false">{t.rich("can_i_register_with_a", { t0: (c) => <span className="pm">{c}</span> })}</button>
                <div className="ans">
                  <div>
                    <p>{t("yes_pick_a_doubles_division")}</p>
                  </div>
                </div>
              </div>
              {" "}
              <div className="acc">
                <button aria-expanded="false">{t.rich("can_i_transfer_my_entry", { t0: (c) => <span className="pm">{c}</span> })}</button>
                <div className="ans">
                  <div>
                    <p>{t("transfer_rules_are_shared_on")}</p>
                  </div>
                </div>
              </div>
            </div>
            {" "}
            <div data-c="day" style={{marginTop:"56px"}}>
              <h3 className="disp" style={{fontSize:"clamp(36px,4vw,54px)", margin:"0 0 16px"}}>{t("race_day")}</h3>
              {" "}
              <div className="acc">
                <button aria-expanded="false">{t.rich("when_should_i_arrive", { t0: (c) => <span className="pm">{c}</span> })}</button>
                <div className="ans">
                  <div>
                    <p>{t("check_in_times_are_sent")}</p>
                  </div>
                </div>
              </div>
              {" "}
              <div className="acc">
                <button aria-expanded="false">{t.rich("what_should_i_bring", { t0: (c) => <span className="pm">{c}</span> })}</button>
                <div className="ans">
                  <div>
                    <p>{t("training_shoes_water_bottle_and")}</p>
                  </div>
                </div>
              </div>
              {" "}
              <div className="acc">
                <button aria-expanded="false">{t.rich("what_should_i_wear", { t0: (c) => <span className="pm">{c}</span> })}</button>
                <div className="ans">
                  <div>
                    <p>{t("comfortable_training_clothes_you_can")}</p>
                  </div>
                </div>
              </div>
            </div>
            {" "}
            <div data-c="lvl" style={{marginTop:"56px"}}>
              <h3 className="disp" style={{fontSize:"clamp(36px,4vw,54px)", margin:"0 0 16px"}}>{t("level")}</h3>
              {" "}
              <div className="acc">
                <button aria-expanded="false">{t.rich("is_it_for_beginners", { t0: (c) => <span className="pm">{c}</span> })}</button>
                <div className="ans">
                  <div>
                    <p>{t("yes_first_timers_and_elite")}</p>
                  </div>
                </div>
              </div>
              {" "}
              <div className="acc">
                <button aria-expanded="false">{t.rich("is_there_an_age_limit", { t0: (c) => <span className="pm">{c}</span> })}</button>
                <div className="ans">
                  <div>
                    <p>{t("age_requirements_are_listed_on")}</p>
                  </div>
                </div>
              </div>
            </div>
            {" "}
            <div data-c="ref" style={{marginTop:"56px"}}>
              <h3 className="disp" style={{fontSize:"clamp(36px,4vw,54px)", margin:"0 0 16px"}}>{t("refunds")}</h3>
              {" "}
              <div className="acc">
                <button aria-expanded="false">{t.rich("can_i_get_a_refund", { t0: (c) => <span className="pm">{c}</span> })}</button>
                <div className="ans">
                  <div>
                    <p>{t("the_refund_policy_is_shared")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {" "}
      <div className="band dark" style={{paddingBlock:"80px"}}>
        <div className="wrap" style={{display:"flex", flexWrap:"wrap", justifyContent:"space-between", alignItems:"center", gap:"24px"}}>
          <div>
            <div className="k">{t("still_have_questions")}</div>
            <div className="disp h-m" style={{marginTop:"14px"}}>{t("talk_to_us")}</div>
          </div>
          <div style={{display:"flex", gap:"14px", flexWrap:"wrap"}}>{t.rich("whatsapp_email", { t1: (c) => <span className="arrow">{c}</span>, t0: (c) => <span className="btn w">{c}</span>, t3: (c) => <span>{c}</span>, t2: (c) => <span className="btn ghost">{c}</span> })}</div>
        </div>
      </div>
    </section>
  );
}
