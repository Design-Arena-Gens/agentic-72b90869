import { keyMetrics } from "@/data/metrics";

export function Metrics() {
  return (
    <section className="section">
      <div className="section-header">
        <h2>Scoreboard Targets</h2>
        <p>
          Track these metrics to ensure decisions align with the million-dollar
          objective and preserve optionality.
        </p>
      </div>
      <div className="metrics-grid">
        {keyMetrics.map((metric) => (
          <article key={metric.label} className="metric-card">
            <h3>{metric.label}</h3>
            <p className="metric-target">{metric.target}</p>
            <p>{metric.why}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
