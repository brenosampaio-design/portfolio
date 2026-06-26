export function renderTitle(str) {
  const parts = str.split(/\*([^*]+)\*/);
  return parts.map((p, i) =>
    i % 2 === 0 ? p : <span key={i} className="accent">{p}</span>
  );
}
