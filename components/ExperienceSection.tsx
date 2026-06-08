import { SectionTitle } from "./TerminalCard";

export function ExperienceSection() {
  const experiences = [
    {
      title: "QA Engineer Intern",
      company: "Deall Jobs",
      period: "March 2026 - June 2026",
      bullets: [
        "Conducted manual, exploratory, smoke, and regression testing across web and mobile platforms.",
        "Developed Playwright end-to-end automation scripts for internal HRIS workflows.",
        "Owned validation for OKR & KPI module including integration, boundary, and data accuracy checks.",
        "Maintained test cases, bug reports, and defect traceability in JIRA and Confluence.",
        "Collaborated in sprint planning, standups, bug triage, and retrospectives.",
      ],
    },
    {
      title: "Data Analyst Intern",
      company: "PT Valbury Asia Futures",
      period: "July 2025",
      bullets: [
        "Cleaned and processed daily operational data using Microsoft Excel.",
        "Produced executive summary reports from operational and market data.",
        "Tracked global futures market trends for internal strategy discussions.",
      ],
    },
    {
      title: "Frontend Developer",
      company: "Rakamin Academy",
      period: "2025",
      bullets: [
        "Built responsive Vue.js application with routing, state management, and REST API integration.",
        "Implemented JWT authentication, protected routes, and debugging before delivery.",
      ],
    },
  ];

  return (
    <section className="border-y-4 border-foreground bg-white px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionTitle>Experience_</SectionTitle>

        <div className="space-y-8">
          {experiences.map((experience, index) => {
            const isPrimary = index % 2 === 0;

            return (
              <div
                key={`${experience.title}-${experience.company}`}
                className={`retro-hover border-4 bg-white p-6 ${
                  isPrimary ? "border-primary" : "border-secondary"
                }`}
              >
                <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="font-mono text-xl font-bold text-foreground">
                      {experience.title}
                    </h3>
                    <p
                      className={`mt-1 font-mono font-bold ${
                        isPrimary ? "text-primary" : "text-secondary"
                      }`}
                    >
                      {experience.company}
                    </p>
                  </div>
                  <div className="whitespace-nowrap font-mono text-sm text-muted-foreground">
                    {experience.period}
                  </div>
                </div>

                <ul className="space-y-2 text-sm font-light text-foreground md:text-base">
                  {experience.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span
                        className={`mt-1 flex-shrink-0 font-bold ${
                          isPrimary ? "text-primary" : "text-secondary"
                        }`}
                      >
                        &gt;
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
