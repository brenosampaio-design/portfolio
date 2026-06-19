/*
 * Frame — an honest empty placeholder for a screen that isn't designed yet.
 * Not a fake mockup: a labelled, dashed frame that names what will go here.
 * Used where the case content explicitly marks "— to add".
 */
export function Frame({ label, height }) {
  return (
    <div className="frame" style={height ? { minHeight: height } : undefined}>
      <span className="frame__label">{label}</span>
    </div>
  );
}
