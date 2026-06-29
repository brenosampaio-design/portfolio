/*
 * CorrectionFlow — the state almost no one designs: the AI got it wrong, and a
 * human caught it. The classification is shown being overridden — wrong reading
 * struck through, the human's correction in its place — because the recovery
 * path is what makes the tool trustworthy, not the happy path. Real UI in code.
 */
export function CorrectionFlow() {
  return (
    <div className="correction">
      <div className="correction__case">
        <span className="correction__id">REQ-4471 · FR</span>
        <p className="correction__msg" lang="fr">
          “C’est la troisième fois que je signale ce problème et personne ne répond.”
        </p>
      </div>

      <div className="correction__rows">
        <div className="correction-row">
          <span className="correction-row__key">AI read</span>
          <span className="correction-row__was">Intent · Maintenance question</span>
        </div>
        <span className="correction__arrow" aria-hidden="true">↓</span>
        <div className="correction-row">
          <span className="correction-row__key">Human corrected</span>
          <span className="correction-row__now">Intent · Complaint — repeated, escalate</span>
        </div>
      </div>

      <p className="correction__note">
        Caught before it reached the customer. The override is logged — and feeds back into how
        the signal is judged next time.
      </p>
    </div>
  );
}
