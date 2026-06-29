/*
 * PhoneFrame — minimal phone chrome around a code-built mobile specimen.
 * A rounded device shell with a small status notch. Presentational only.
 */
export function PhoneFrame({ children, className = "" }) {
  return (
    <div className={`phone-frame${className ? ` ${className}` : ""}`}>
      <span className="phone-frame__notch" aria-hidden="true" />
      <div className="phone-frame__body">{children}</div>
    </div>
  );
}
