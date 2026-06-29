/*
 * UIStates — the states a tired user actually hits, shown as small real
 * specimens: empty · loading · error · success. Not the happy path only.
 * Each is a labelled mini-card built from the same tokens as the product.
 */
export function UIStates() {
  return (
    <div className="states">
      <div className="state">
        <span className="state__label">Empty</span>
        <div className="state__box state__box--empty">
          <span className="state__line state__line--dashed" />
          <span className="state__caption">Nothing open in this area. Quiet shift.</span>
        </div>
      </div>

      <div className="state">
        <span className="state__label">Loading</span>
        <div className="state__box">
          <span className="state__skeleton state__skeleton--w80" />
          <span className="state__skeleton state__skeleton--w60" />
          <span className="state__skeleton state__skeleton--w70" />
        </div>
      </div>

      <div className="state">
        <span className="state__label">Error</span>
        <div className="state__box state__box--error">
          <span className="state__dot" aria-hidden="true" />
          <span className="state__caption">Couldn&rsquo;t save. Tap to retry — nothing was lost.</span>
        </div>
      </div>

      <div className="state">
        <span className="state__label">Success</span>
        <div className="state__box state__box--success">
          <span className="state__check" aria-hidden="true">✓</span>
          <span className="state__caption">Logged. Visible to the next shift now.</span>
        </div>
      </div>
    </div>
  );
}
