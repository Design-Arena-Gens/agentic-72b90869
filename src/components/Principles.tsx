import { guidingPrinciples } from "@/data/principles";

export function Principles() {
  return (
    <section className="section">
      <div className="section-header">
        <h2>Guiding Principles</h2>
        <p>
          These non-negotiable rules protect velocity, compound leverage, and
          keep the plan grounded in verifiable progress.
        </p>
      </div>
      <div className="principles-grid">
        {guidingPrinciples.map((principle) => (
          <article key={principle.title} className="principle-card">
            <h3>{principle.title}</h3>
            <p>{principle.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
