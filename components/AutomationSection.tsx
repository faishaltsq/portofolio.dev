import { SectionTitle, TerminalCard } from "./TerminalCard";

export function AutomationSection() {
  const workflows = [
    "Playwright E2E",
    "API Checks",
    "Test Data Preparation",
    "Jenkins Integration",
    "Dockerized Test Runner",
    "GitHub-based Collaboration",
  ];

  return (
    <section id="automation" className="bg-background px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionTitle>Automation Workflow_</SectionTitle>

        <div className="mb-12 grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <TerminalCard>
              <p className="text-lg font-light leading-relaxed text-foreground">
                I build Playwright scripts for repeatable end-to-end checks,
                especially for internal HRIS flows that would be costly to verify
                manually every sprint.
              </p>
            </TerminalCard>
          </div>
        </div>

        <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {workflows.map((workflow, index) => {
            const isPrimary = index % 2 === 0;

            return (
              <div
                key={workflow}
                className={`retro-hover border-4 bg-white p-4 text-center ${
                  isPrimary ? "border-primary" : "border-secondary"
                }`}
              >
                <div
                  className={`font-mono text-sm font-bold ${
                    isPrimary ? "text-primary" : "text-secondary"
                  }`}
                >
                  {workflow}
                </div>
              </div>
            );
          })}
        </div>

        <TerminalCard>
          <div className="mb-6 font-mono text-lg font-bold tracking-wider text-foreground">
            Test Execution Dashboard
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <DashboardItem
              title="Test Run History"
              rows={[
                ["Latest Run", "PASSED"],
                ["Duration", "2m 45s"],
                ["Timestamp", "2026-06-08 14:30 UTC"],
              ]}
            />
            <DashboardItem
              title="Pass / Fail Statistics"
              rows={[
                ["Passed", "24 / 25"],
                ["Failed", "1 / 25"],
                ["Pass Rate", "96%"],
              ]}
            />
            <DashboardItem
              title="Exportable Reports"
              rows={[
                ["HTML", "Ready"],
                ["JUnit XML", "Ready"],
                ["Coverage", "Tracked"],
              ]}
            />
            <DashboardItem
              title="Regression Status"
              rows={[
                ["Suite", "HRIS Module"],
                ["Status", "READY"],
              ]}
            />
          </div>
        </TerminalCard>
      </div>
    </section>
  );
}

function DashboardItem({
  title,
  rows,
}: {
  title: string;
  rows: [string, string][];
}) {
  return (
    <div className="retro-hover border-2 border-muted bg-muted/10 p-4">
      <div className="mb-4 font-mono text-sm font-bold text-primary">
        {title}
      </div>
      <div className="space-y-2 text-sm font-light text-foreground">
        {rows.map(([label, value]) => (
          <div key={label} className="flex justify-between gap-4">
            <span>{label}:</span>
            <span className="text-right font-bold text-foreground">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
