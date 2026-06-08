import { SectionTitle } from "./TerminalCard";

export function SkillsSection() {
  const skillGroups = [
    {
      category: "Quality & Testing",
      skills: [
        "Manual Testing",
        "Exploratory Testing",
        "Regression Testing",
        "Smoke Testing",
        "Test Case Design",
        "Bug Reporting",
        "API Testing",
        "Postman",
        "Playwright",
      ],
    },
    {
      category: "Automation & DevOps",
      skills: ["Playwright", "Jenkins", "Docker", "GitHub"],
    },
    {
      category: "Languages & Frameworks",
      skills: ["JavaScript", "Python", "Vue.js", "Next.js", "React"],
    },
    {
      category: "Tools & Methodologies",
      skills: [
        "JIRA",
        "Confluence",
        "Git",
        "Microsoft Excel",
        "Agile/Scrum",
        "SDLC",
        "STLC",
      ],
    },
  ];

  return (
    <section className="border-y-4 border-foreground bg-white px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionTitle>Technical Skills_</SectionTitle>

        <div className="grid gap-8 md:grid-cols-2">
          {skillGroups.map((group, index) => {
            const isPrimary = index % 2 === 0;

            return (
              <div
                key={group.category}
                className={`retro-hover border-4 bg-white p-6 ${
                  isPrimary ? "border-primary" : "border-secondary"
                }`}
              >
                <h3
                  className={`mb-4 font-mono text-lg font-bold ${
                    isPrimary ? "text-primary" : "text-secondary"
                  }`}
                >
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`inline-block border-2 border-foreground px-3 py-1 font-mono text-xs font-bold text-white transition-transform duration-150 hover:-translate-y-1 ${
                        isPrimary ? "bg-primary" : "bg-secondary"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
