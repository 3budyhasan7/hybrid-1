// Crew detail view (filled in by the site script).
// Markup and class names match the approved design. All text lives in messages/<locale>.json under "crewModal".
import { useTranslations } from "next-intl";

export function CrewModal() {
  const t = useTranslations("crewModal");
  return (
    <div className="amodal cmodal" id="cmodal" hidden>
      <div className="amback" data-cclose="" />
      <div className="ambox" role="dialog" aria-modal="true" aria-labelledby="cm-name">
        <button className="amx" data-cclose="" aria-label={t("close")}>{t("text")}</button>
        <div className="ambd">
          <div style={{display:"flex", gap:"16px", alignItems:"center"}}>
            <div className="crew" style={{all:"unset"}}>
              <div className="logo" id="cm-logo" style={{width:"72px", height:"72px", background:"var(--ink)", color:"var(--paper)", display:"grid", placeItems:"center", fontWeight:"900", fontStyle:"italic", fontStretch:"72%", fontSize:"26px", clipPath:"polygon(16% 0,100% 0,84% 100%,0 100%)"} as React.CSSProperties} />
            </div>
            <div>
              <div className="k" id="cm-meta" />
              <h3 className="disp" id="cm-name" />
            </div>
          </div>
          <div className="k" style={{marginTop:"10px"}}>{t("represented_by")}</div>
          <div className="cm-reps" id="cm-reps" />
          <div className="amst">
            <div>{t.rich("division_crew_clash", { t0: (c) => <span className="k">{c}</span>, t1: (c) => <b>{c}</b> })}</div>
            <div>{t.rich("instagram", { t0: (c) => <span className="k">{c}</span>, t1: (c) => <a id="cm-ig" target="_blank" rel="noopener">{c}</a> })}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
