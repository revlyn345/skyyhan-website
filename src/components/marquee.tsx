const items = ["Latex Balloons", "Printed Latex", "Bulk Orders", "Custom Packaging"];

export function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="marquee border-y-4 border-foreground bg-primary py-4 text-primary-foreground" aria-hidden="true">
      <div className="marquee-track font-display text-2xl uppercase md:text-4xl">
        {row.map((t, i) => (
          <span key={i} className="contents">
            <span>{t}</span>
            <i>✦</i>
          </span>
        ))}
      </div>
    </div>
  );
}
