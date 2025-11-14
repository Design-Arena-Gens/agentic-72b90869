import { PhaseCard } from "@/components/PhaseCard";
import { Cadence } from "@/components/Cadence";
import { Metrics } from "@/components/Metrics";
import { Principles } from "@/components/Principles";
import { phases } from "@/data/phases";

export default function Page() {
  return (
    <main className="container">
      <section className="hero">
        <div className="hero-content">
          <span className="tag">Million-Dollar Blueprint</span>
          <h1>From Zero to $1M: A Theoretically Foolproof Roadmap</h1>
          <p>
            A pragmatic, leverage-driven plan to reach one million dollars
            starting with no capital, no network, and no formal skills. Each
            phase compounds proof, audience, and assets while insulating against
            downside risk.
          </p>
        </div>
        <div className="hero-card">
          <h2>First Principles</h2>
          <ul>
            <li>Convert time into high-value outcomes using AI-assisted skills.</li>
            <li>Turn proof into systems, systems into products, and products into assets.</li>
            <li>Validate every leap with measurable wins before scaling.</li>
            <li>Reinvest profits into leverage, distribution, and protective moats.</li>
          </ul>
        </div>
      </section>

      <Principles />
      <Metrics />

      <section className="section">
        <div className="section-header">
          <h2>Four-Phase Execution Plan</h2>
          <p>
            Progress sequentially, but allow overlap where validation exists.
            Each phase compounds revenue, reputation, and leverage.
          </p>
        </div>
        <div className="phases-stack">
          {phases.map((phase) => (
            <PhaseCard key={phase.id} phase={phase} />
          ))}
        </div>
      </section>

      <Cadence />

      <section className="section">
        <div className="section-header">
          <h2>Risk Mitigation & Failsafes</h2>
          <p>
            The plan assumes setbacks. Apply these guardrails to ensure momentum
            even when experiments miss.
          </p>
        </div>
        <div className="failsafe-grid">
          <article>
            <h3>Financial Safeguards</h3>
            <ul>
              <li>Operate with a lean personal burn rate until $250k net saved.</li>
              <li>
                Split revenue into four vaults: operations (40%), taxes (25%),
                reinvestment (25%), personal runway (10%).
              </li>
              <li>
                Use rolling 13-week cash forecasts to anticipate shortfalls and
                adjust acquisition pushes early.
              </li>
            </ul>
          </article>
          <article>
            <h3>Operational Resilience</h3>
            <ul>
              <li>
                Maintain redundant contractors and a playbook library to avoid
                single-point failure.
              </li>
              <li>
                Conduct monthly post-mortems on losses, churn, or missed
                experiments; implement countermeasures within seven days.
              </li>
              <li>
                Adopt an &ldquo;experiment ledger&rdquo; logging hypotheses,
                results, and next steps for compounding insight.
              </li>
            </ul>
          </article>
          <article>
            <h3>Personal Sustainability</h3>
            <ul>
              <li>Default to 6-hour deep work blocks with protected recovery time.</li>
              <li>
                Quarterly health audits (sleep, nutrition, training) and stress
                management routines.
              </li>
              <li>
                Engage mentors or peer masterminds to pressure-test decisions
                and avoid tunnel vision.
              </li>
            </ul>
          </article>
        </div>
      </section>

      <footer className="footer">
        <p>
          Execution is sequential, but the leverage stack is cumulative. Protect
          momentum, iterate fast, and let validated wins fund every next move.
        </p>
      </footer>
    </main>
  );
}
