import { type Phase } from "@/data/phases";

type PhaseCardProps = {
  phase: Phase;
};

export function PhaseCard({ phase }: PhaseCardProps) {
  return (
    <article className="phase-card">
      <header>
        <div className="phase-meta">
          <span className="phase-id">Phase {phase.id}</span>
          <span className="phase-timeframe">{phase.timeframe}</span>
        </div>
        <h3>{phase.title}</h3>
        <p className="phase-narrative">{phase.narrative}</p>
        <ul className="phase-stats">
          <li>
            <strong>Milestone:</strong> {phase.milestone}
          </li>
          <li>
            <strong>Capital Target:</strong> {phase.capitalTarget}
          </li>
        </ul>
      </header>
      <section className="initiatives">
        <h4>Core Initiatives</h4>
        <div className="initiative-grid">
          {phase.initiatives.map((initiative) => (
            <div key={initiative.title} className="initiative-card">
              <h5>{initiative.title}</h5>
              <p className="initiative-objective">{initiative.objective}</p>
              <div>
                <span className="label">Key Actions</span>
                <ul>
                  {initiative.keyActions.map((action) => (
                    <li key={action}>{action}</li>
                  ))}
                </ul>
              </div>
              <div className="validation">
                <span className="label">Validation</span>
                <p>{initiative.validation}</p>
              </div>
              <div className="compounding">
                <span className="label">Compounding Effect</span>
                <p>{initiative.compounding}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="risk-controls">
        <h4>Risk Controls</h4>
        <ul>
          {phase.riskControls.map((risk) => (
            <li key={risk}>{risk}</li>
          ))}
        </ul>
      </section>
    </article>
  );
}
