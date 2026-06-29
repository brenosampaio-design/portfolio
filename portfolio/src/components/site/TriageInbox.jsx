import { Confidence } from "./Confidence";

/*
 * TriageInbox — the concept's core screen, rendered as real UI in code (not a
 * screenshot). Multilingual requests arrive unranked; the inbox structures them
 * and pulls anything the AI is unsure about to the top, flagged for a human.
 * The confidence signal is in plain view on every row — the opposite of a
 * confident black box. Built from the same tokens as the rest of the site.
 */
const queue = [
  {
    msg: "No recibí el reembolso de mi reserva cancelada.",
    channel: "WhatsApp",
    lang: "ES",
    intent: "Refund",
    conf: "low",
  },
  {
    msg: "Le radiateur ne chauffe pas dans la chambre 214.",
    channel: "Web form",
    lang: "FR",
    intent: "Maintenance",
    conf: "review",
  },
  {
    msg: "Pode confirmar o horário do check-in?",
    channel: "Email",
    lang: "PT",
    intent: "Booking question",
    conf: "high",
  },
  {
    msg: "Can I add an extra night to my stay?",
    channel: "Email",
    lang: "EN",
    intent: "Booking change",
    conf: "high",
  },
];

export function TriageInbox() {
  return (
    <div className="triage">
      <div className="triage__head">
        <div>
          <span className="triage__eyebrow">Triage · inbox</span>
          <span className="triage__title">12 in queue · sorted by what needs a human</span>
        </div>
        <span className="triage__flagcount">2 need review</span>
      </div>

      <ul className="triage__list">
        {queue.map((q, i) => (
          <li
            className={`triage-row${q.conf === "low" ? " triage-row--low" : ""}${
              q.conf === "review" ? " triage-row--review" : ""
            }`}
            key={i}
          >
            <span className="triage-row__rail" aria-hidden="true" />
            <div className="triage-row__main">
              <span className="triage-row__msg">{q.msg}</span>
              <span className="triage-row__meta">
                <span className="triage-row__lang">{q.lang}</span>
                <span className="triage-row__sep" aria-hidden="true">·</span>
                {q.channel}
                <span className="triage-row__sep" aria-hidden="true">·</span>
                {q.intent}
              </span>
            </div>
            <Confidence level={q.conf} />
          </li>
        ))}
      </ul>
    </div>
  );
}
