/*
 * TriageStates — the states a real queue actually hits, not just the happy
 * path: empty, the AI still processing, a low-confidence item pulled up for a
 * human, and a case that can't be drafted yet because information is missing.
 * Each is a small labelled specimen from the same tokens as the product.
 * Reuses the shared .states / .state CSS, with a slate "needs review" variant.
 */
export function TriageStates() {
  return (
    <div className="states">
      <div className="state">
        <span className="state__label">Empty</span>
        <div className="state__box state__box--empty">
          <span className="state__line state__line--dashed" />
          <span className="state__caption">Queue clear. Nothing waiting on a human.</span>
        </div>
      </div>

      <div className="state">
        <span className="state__label">Processing</span>
        <div className="state__box">
          <span className="state__skeleton state__skeleton--w80" />
          <span className="state__skeleton state__skeleton--w60" />
          <span className="state__skeleton state__skeleton--w70" />
        </div>
      </div>

      <div className="state">
        <span className="state__label">Needs review</span>
        <div className="state__box state__box--review">
          <span className="state__dot state__dot--review" aria-hidden="true" />
          <span className="state__caption">Low confidence — pulled to the top for a human to verify.</span>
        </div>
      </div>

      <div className="state">
        <span className="state__label">Missing info</span>
        <div className="state__box state__box--empty">
          <span className="state__line state__line--dashed" />
          <span className="state__caption">Can&rsquo;t draft a reply yet — booking reference needed first.</span>
        </div>
      </div>
    </div>
  );
}
