import { Confidence } from "./Confidence";

/*
 * AnalysisPanel — the signature screen, built as real UI in code. A case opened
 * for review: the incoming message on the left, the AI's reading of it on the
 * right (language, intent, what triggered the urgency, what's still missing),
 * with confidence in plain view. Because the reviewer may not read the
 * customer's language, the drafted reply is shown in that language alongside a
 * back-translation — so the human verifies meaning and tone, not blind-trusts.
 * The primary action is Review, not Send: nothing leaves without a human.
 */
export function AnalysisPanel() {
  return (
    <div className="apanel">
      {/* Incoming message */}
      <div className="apanel__msg">
        <div className="apanel__msghead">
          <span className="apanel__from">Guest · WhatsApp</span>
          <span className="apanel__time">2 min ago</span>
        </div>
        <p className="apanel__text" lang="es">
          “No recibí el reembolso de mi reserva cancelada. ¿Pueden revisarlo hoy, por favor?”
        </p>
        <span className="apanel__lang">Detected language · Spanish (ES)</span>
      </div>

      {/* AI reading */}
      <div className="apanel__read">
        <div className="apanel__readhead">
          <span className="apanel__eyebrow">AI analysis</span>
          <Confidence level="low" />
        </div>

        <dl className="apanel__facts">
          <div className="apanel-fact">
            <dt>Intent</dt>
            <dd>Refund request</dd>
          </div>
          <div className="apanel-fact">
            <dt>Urgency</dt>
            <dd>
              High <span className="apanel-fact__why">— “reembolso” + cancelled booking</span>
            </dd>
          </div>
          <div className="apanel-fact">
            <dt>Missing info</dt>
            <dd className="apanel-fact__missing">Booking reference — needed before a reply can go out</dd>
          </div>
        </dl>

        {/* Drafted reply + back-translation — verify across the language */}
        <div className="apanel__reply">
          <span className="apanel__replylabel">Proposed reply · ES</span>
          <p className="apanel__replytext" lang="es">
            “Lamento lo ocurrido. Para localizar tu reembolso, ¿puedes compartir el número de reserva?”
          </p>
          <span className="apanel__replylabel apanel__replylabel--back">Back-translation · EN</span>
          <p className="apanel__replytext apanel__replytext--back">
            “Sorry about that. To locate your refund, could you share your booking reference?”
          </p>
        </div>

        {/* Action — review is primary, send is gated behind it */}
        <div className="apanel__actions">
          <span className="apanel__btn apanel__btn--primary">Review &amp; approve</span>
          <span className="apanel__btn apanel__btn--ghost">Correct</span>
          <span className="apanel__gate">Send is gated — nothing leaves unapproved</span>
        </div>
      </div>
    </div>
  );
}
