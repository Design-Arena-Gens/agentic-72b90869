import { cadence } from "@/data/habits";

export function Cadence() {
  return (
    <section className="section">
      <div className="section-header">
        <h2>Execution Cadence</h2>
        <p>
          Routines that maintain accountability, surface opportunities, and
          safeguard energy while scaling.
        </p>
      </div>
      <div className="cadence-grid">
        {cadence.map((item) => (
          <article key={item.frequency} className="cadence-card">
            <h3>{item.frequency}</h3>
            <ul>
              {item.actions.map((action) => (
                <li key={action}>{action}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
