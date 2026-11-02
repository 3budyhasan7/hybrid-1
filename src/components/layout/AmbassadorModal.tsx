// Ambassador detail view (filled in by the site script).
// Markup and class names match the approved design. All text lives in messages/<locale>.json under "ambassadorModal".
import { useTranslations } from "next-intl";

export function AmbassadorModal() {
  const t = useTranslations("ambassadorModal");
  return (
    <div className="amodal" id="amodal" hidden>
      <div className="amback" data-close="" />
      <div className="ambox" role="dialog" aria-modal="true" aria-labelledby="am-name">
        <button className="amx" data-close="" aria-label={t("close")}>{t("text")}</button>
        <div className="amph">
          <img id="am-img" alt="" />
          <span className="tag" id="am-tag" />
        </div>
        <div className="ambd">
          <div className="k" id="am-sport" />
          <h3 className="disp" id="am-name" />
          <p id="am-bio" />
          <div className="amst">
            <div>{t.rich("since", { t0: (c) => <span className="k">{c}</span>, t1: (c) => <b id="am-since">{c}</b> })}</div>
            <div>{t.rich("instagram", { t0: (c) => <span className="k">{c}</span>, t1: (c) => <a id="am-ig" target="_blank" rel="noopener">{c}</a> })}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
