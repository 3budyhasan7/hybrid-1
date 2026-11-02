// Slanted page-transition wipe (23° from the H1 mark).
// Markup and class names match the approved design. All text lives in messages/<locale>.json under "wipe".

export function Wipe() {
  return (
    <div className="wipe" id="wipe" aria-hidden="true">
      <div className="pane p2" />
      <div className="pane p1" />
      <div className="lines">
        <span className="speed">
          <i />
          <i />
          <i />
        </span>
        <img src="/img/mark.svg" alt="" />
      </div>
    </div>
  );
}
