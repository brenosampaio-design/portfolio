/*
 * MobileLog — the guided-logging screen, rendered as real UI in code.
 * Shows the "structured fields, not a free-text box" decision on a phone:
 * fast, constrained, consistent. Goes inside a PhoneFrame.
 */
const fields = [
  { key: "Category", value: "Guest request" },
  { key: "Room", value: "412" },
  { key: "Area", value: "Reception" },
  { key: "Priority", value: "Urgent", urgent: true },
];

export function MobileLog() {
  return (
    <div className="mlog">
      <div className="mlog__bar">
        <span className="mlog__back" aria-hidden="true">←</span>
        <span className="mlog__barTitle">New incident</span>
      </div>
      <div className="mlog__body">
        <span className="mlog__eyebrow">Guided log</span>
        <div className="mlog__fields">
          {fields.map((f) => (
            <div className="mlog-field" key={f.key}>
              <span className="mlog-field__key">{f.key}</span>
              <span className={`mlog-field__chip${f.urgent ? " mlog-field__chip--urgent" : ""}`}>
                {f.value}
              </span>
            </div>
          ))}
        </div>
        <div className="mlog__note">
          <span className="mlog-field__key">Description</span>
          <p className="mlog__noteText">Guest asked for late checkout until 14:00 — confirm with housekeeping.</p>
        </div>
        <span className="mlog__save">Log incident</span>
      </div>
    </div>
  );
}
