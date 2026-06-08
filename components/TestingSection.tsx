import { SectionTitle, TerminalCard } from "./TerminalCard";

export function TestingSection() {
  const skills = [
    "Manual Testing",
    "Exploratory Testing",
    "Regression Testing",
    "Smoke Testing",
    "API Testing",
    "Bug Reporting",
    "Test Case Design",
    "Defect Triage",
  ];

  return (
    <section
      id="testing"
      className="border-y-4 border-foreground bg-white px-6 py-20"
    >
      <div className="mx-auto max-w-6xl">
        <SectionTitle>Testing Practice_</SectionTitle>

        <div className="mb-12 grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <TerminalCard>
              <p className="text-lg font-light leading-relaxed text-foreground">
                I turn acceptance criteria into practical coverage: smoke,
                regression, exploratory, integration, boundary, API, and data
                accuracy checks for product-critical workflows.
              </p>
            </TerminalCard>
          </div>
        </div>

        <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => {
            const isPrimary = index % 2 === 0;

            return (
              <div
                key={skill}
                className={`retro-hover border-4 bg-white p-4 text-center ${
                  isPrimary ? "border-primary" : "border-secondary"
                }`}
              >
                <div
                  className={`font-mono text-sm font-bold ${
                    isPrimary ? "text-primary" : "text-secondary"
                  }`}
                >
                  {skill}
                </div>
              </div>
            );
          })}
        </div>

        <div className="retro-hover border-4 border-primary bg-white p-6">
          <div className="mb-4 font-mono text-lg font-bold tracking-wider text-foreground">
            Release Focus: HRIS OKR & KPI
          </div>
          <div className="space-y-4 text-foreground">
            <div>
              <div className="mb-2 font-mono text-sm font-bold text-primary">
                Coverage:
              </div>
              <ul className="ml-4 space-y-1 text-sm font-light">
                <li>[x] Functional end-to-end workflow</li>
                <li>[x] Role-based access and permissions</li>
                <li>[x] Boundary cases for performance targets</li>
                <li>[x] Data accuracy across employee records</li>
              </ul>
            </div>
            <div>
              <div className="mb-2 font-mono text-sm font-bold text-primary">
                Exit Signal:
              </div>
              <ul className="ml-4 space-y-1 text-sm font-light">
                <li>[x] Critical paths passed</li>
                <li>[x] Open defects triaged</li>
                <li>[x] Evidence attached in JIRA</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
