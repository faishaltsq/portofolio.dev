import { SectionTitle } from "./TerminalCard";

export function ProjectsSection() {
  const projects = [
    {
      name: "Dompet Bareng",
      description:
        "Family & group finance app with shared wallets, role-based access, real-time notifications, category budgeting, and an AI-powered otter mascot that tracks spending mood and parses expenses from chat.",
      tech: "Expo SDK 57, React Native, TypeScript, Supabase (PostgreSQL, Auth, RLS, Realtime, Storage), Gemini AI",
      href: "https://github.com/faishaltsq/dompet-bareng",
      demoHref: "https://dompet-bareng.vercel.app/",
      status: "In Progress",
    },
    {
      name: "WebWeave",
      description:
        "AI-powered web automation script generator that converts a target URL and natural language objective into runnable automation scripts.",
      tech: "Next.js 14, React, Playwright, OpenAI SDK, Gemini API, Anthropic SDK, CSS Modules",
      href: "https://github.com/faishaltsq/Web-Weave",
      demoHref: "https://web-weave-lake.vercel.app",
    },
    {
      name: "Web QA Automation",
      description:
        "Centralized dashboard to execute, manage, and monitor Playwright automation test scripts without direct terminal or CI/CD access.",
      tech: "Next.js, Playwright, Jenkins, Docker",
      href: "https://github.com/faishaltsq/Web-QA-Automation",
    },

  ];

  return (
    <section id="projects" className="bg-background px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionTitle>Projects & Tools_</SectionTitle>

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project, index) => {
            const isPrimary = index % 2 === 0;

            return (
              <div
                key={project.name}
                className={`retro-hover group border-4 bg-white p-6 ${
                  isPrimary ? "border-primary" : "border-secondary"
                }`}
              >
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="font-mono text-xl font-bold text-foreground">
                    {project.name}
                  </h3>
                  {project.status && (
                    <span className="border border-secondary bg-secondary/10 px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-secondary">
                      {project.status}
                    </span>
                  )}
                </div>
                <p className="mb-4 text-sm font-light leading-relaxed text-foreground md:text-base">
                  {project.description}
                </p>
                <div className="mb-4 flex gap-3">
                  {project.href && (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`retro-button-hover inline-block border-2 border-foreground px-4 py-2 font-mono text-xs font-bold text-white ${
                        isPrimary ? "bg-primary" : "bg-secondary"
                      }`}
                    >
                      View Repository
                    </a>
                  )}
                  {project.demoHref && (
                    <a
                      href={project.demoHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`retro-button-hover inline-block border-2 border-foreground px-4 py-2 font-mono text-xs font-bold text-white ${
                        isPrimary ? "bg-secondary" : "bg-primary"
                      }`}
                    >
                      Live Demo
                    </a>
                  )}
                </div>
                <div className="border-t-2 border-muted pt-4">
                  <div
                    className={`mb-2 font-mono text-xs font-bold ${
                      isPrimary ? "text-primary" : "text-secondary"
                    }`}
                  >
                    TECH STACK
                  </div>
                  <p className="text-xs font-light text-muted-foreground">
                    {project.tech}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
