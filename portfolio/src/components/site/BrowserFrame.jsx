/*
 * BrowserFrame — minimal browser chrome around a code-built UI specimen.
 * Honest framing: a thin top bar with traffic-light dots and a faux URL,
 * so a rendered screen reads as "product" without pretending to be a
 * screenshot. Purely presentational.
 */
export function BrowserFrame({ url = "operations.local", children, className = "" }) {
  return (
    <div className={`browser-frame${className ? ` ${className}` : ""}`}>
      <div className="browser-frame__bar">
        <span className="browser-frame__dots" aria-hidden="true">
          <i /><i /><i />
        </span>
        <span className="browser-frame__url">{url}</span>
      </div>
      <div className="browser-frame__body">{children}</div>
    </div>
  );
}
