/*
 * DashboardPreview — the "open now" operational view, rendered as real UI in
 * code (not a screenshot). It's the concept's core screen: at handover, what's
 * open, what's urgent, by area, with the next action. Built from the same
 * tokens as the rest of the site so it reads as a true design-system specimen.
 */
const stats = [
  { label: "Open", value: "6" },
  { label: "Urgent", value: "2", urgent: true },
  { label: "Resolved today", value: "9" },
];

const open = [
  { id: "INC-2041", title: "Late checkout requested — room note pending", area: "Reception", owner: "Night shift", urgent: true },
  { id: "INC-2038", title: "AC not cooling — guest waiting in 318", area: "Maintenance", owner: "Tech on call", urgent: true },
  { id: "INC-2035", title: "Extra towels & crib requested for 412", area: "Housekeeping", owner: "Floor 4" },
  { id: "INC-2030", title: "Charge to double-check on 207 folio", area: "Front desk", owner: "Morning shift" },
];

const areas = [
  { name: "Maintenance", load: 0.82 },
  { name: "Housekeeping", load: 0.54 },
  { name: "Front desk", load: 0.33 },
];

export function DashboardPreview() {
  return (
    <div className="dash">
      <div className="dash__head">
        <div>
          <span className="dash__eyebrow">Open now</span>
          <span className="dash__title">Shift handover · night → morning</span>
        </div>
        <span className="dash__clock">07:02</span>
      </div>

      <div className="dash__stats">
        {stats.map((s) => (
          <div className={`dash__stat${s.urgent ? " dash__stat--urgent" : ""}`} key={s.label}>
            <span className="dash__stat-value">{s.value}</span>
            <span className="dash__stat-label">{s.label}</span>
          </div>
        ))}
      </div>

      <div className="dash__body">
        <ul className="dash__list">
          {open.map((i) => (
            <li className={`dash-row${i.urgent ? " dash-row--urgent" : ""}`} key={i.id}>
              <span className="dash-row__dot" aria-hidden="true" />
              <div className="dash-row__main">
                <span className="dash-row__title">{i.title}</span>
                <span className="dash-row__meta">
                  <span className="dash-row__id">{i.id}</span>
                  <span className="dash-row__sep" aria-hidden="true">·</span>
                  {i.area}
                  <span className="dash-row__sep" aria-hidden="true">·</span>
                  {i.owner}
                </span>
              </div>
              <span className="dash-row__flag">{i.urgent ? "Urgent" : "Open"}</span>
            </li>
          ))}
        </ul>

        <aside className="dash__aside">
          <span className="dash__aside-label">Pending by area</span>
          <ul className="dash__areas">
            {areas.map((a) => (
              <li className="dash-area" key={a.name}>
                <span className="dash-area__name">{a.name}</span>
                <span className="dash-area__bar" aria-hidden="true">
                  <span className="dash-area__fill" style={{ width: `${Math.round(a.load * 100)}%` }} />
                </span>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
}
