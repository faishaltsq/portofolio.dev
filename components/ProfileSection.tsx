import { SectionTitle, TerminalCard } from "./TerminalCard";

export function ProfileSection() {
  const highlights = [
    {
      label: "Recent Experience",
      value:
        "Completed a QA Engineer Internship at Deall Jobs, supporting release quality across web and mobile platforms.",
    },
    {
      label: "Automation Edge",
      value:
        "Built Playwright end-to-end scripts for HRIS workflows to reduce repetitive regression checks.",
    },
    {
      label: "Product Coverage",
      value:
        "Validated OKR & KPI workflows with functional, integration, boundary, and data accuracy checks.",
    },
    {
      label: "Team Workflow",
      value:
        "Collaborated with developers and product managers through planning, standups, bug triage, and retrospectives.",
    },
  ];

  const infoCards = [
    {
      label: "Education",
      value: "Informatics, Universitas Teknologi Yogyakarta",
      detail: "Expected 2026",
    },
    { label: "Location", value: "Yogyakarta, Indonesia" },
    { label: "Languages", value: "Indonesian, English B1-B2" },
    { label: "Tools", value: "JIRA, Confluence, GitHub, Postman" },
  ];

  return (
    <section id="profile" className="bg-background px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionTitle>Profile & Background_</SectionTitle>

        <div className="mb-12 grid gap-8 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            <TerminalCard className="space-y-5">
              <div className="inline-block border-2 border-primary bg-primary px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider text-primary-foreground">
                Recent Signal
              </div>
              <h3 className="font-mono text-2xl font-bold leading-tight text-foreground md:text-3xl">
                Quality-minded Informatics student with hands-on release
                validation experience.
              </h3>
              <p className="text-base leading-relaxed text-foreground md:text-lg">
                I am Muhammad Faishal Tsaqief, a final-year Informatics student
                from Yogyakarta focused on software quality, automation, and
                practical defect analysis. During my QA Engineer Internship at
                Deall Jobs, I tested product-critical web and mobile workflows,
                documented findings in JIRA and Confluence, and helped teams make
                clearer release decisions.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                My background in Vue.js, Next.js, React, JavaScript, and Python
                gives me enough engineering context to read product behavior,
                discuss implementation details, and build automation that fits
                real team workflows.
              </p>
            </TerminalCard>

            <div className="grid gap-4 md:grid-cols-2">
              {highlights.map((item, index) => {
                const isPrimary = index % 2 === 0;

                return (
                  <div
                    key={item.label}
                    className={`retro-hover border-4 bg-white p-5 ${
                      isPrimary ? "border-primary" : "border-secondary"
                    }`}
                  >
                    <div
                      className={`mb-3 font-mono text-xs font-bold uppercase tracking-wider ${
                        isPrimary ? "text-primary" : "text-secondary"
                      }`}
                    >
                      {item.label}
                    </div>
                    <p className="text-sm leading-relaxed text-foreground md:text-base">
                      {item.value}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="space-y-4">
            {infoCards.map((card, index) => {
              const isPrimary = index % 2 === 0;

              return (
                <div
                  key={card.label}
                  className={`retro-hover border-4 bg-white p-4 ${
                    isPrimary ? "border-primary" : "border-secondary"
                  }`}
                >
                  <div
                    className={`mb-2 font-mono text-sm font-bold ${
                      isPrimary ? "text-primary" : "text-secondary"
                    }`}
                  >
                    {card.label}
                  </div>
                  <div className="text-sm font-light text-foreground">
                    {card.value}
                  </div>
                  {card.detail && (
                    <div className="mt-1 text-xs text-muted-foreground">
                      {card.detail}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
