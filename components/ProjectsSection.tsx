import { SectionTitle } from "./TerminalCard";

export function ProjectsSection() {
  const projects = [
    {
      name: "WebWeave",
      description:
        "AI-powered web automation script generator that converts a target URL and natural language objective into runnable automation scripts.",
      tech: "Next.js 14, React, Playwright, OpenAI SDK, Gemini API, Anthropic SDK, CSS Modules",
      href: "https://github.com/faishaltsq/Web-Weave",
    },
    {
      name: "Web QA Automation",
      description:
        "Centralized dashboard to execute, manage, and monitor Playwright automation test scripts without direct terminal or CI/CD access.",
      tech: "Next.js, Playwright, Jenkins, Docker",
      href: "https://github.com/faishaltsq/Web-QA-Automation",
    },
    {
      name: "Research Consultant Website",
      description:
        "Professional website for a research consultancy firm with service pages, contact form handling, and content management capability.",
      tech: "Next.js",
    },
    {
      name: "IoT System 3D Model Control & Visualization",
      description:
        "Real-time ESP32-S3 and MPU-6050 sensor visualization system with MQTT and WebSocket latency comparison.",
      tech: "ESP32-S3, MQTT, WebSocket, MPU-6050",
    },
    {
      name: "Grocery Store POS Application",
      description:
        "Web-based point-of-sale system for small grocery retailers with transaction, inventory, and sales reporting features.",
      tech: "Next.js",
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
                <h3 className="mb-3 font-mono text-xl font-bold text-foreground">
                  {project.name}
                </h3>
                <p className="mb-4 text-sm font-light leading-relaxed text-foreground md:text-base">
                  {project.description}
                </p>
                {project.href && (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`retro-button-hover mb-4 inline-block border-2 border-foreground px-4 py-2 font-mono text-xs font-bold text-white ${
                      isPrimary ? "bg-primary" : "bg-secondary"
                    }`}
                  >
                    View Repository
                  </a>
                )}
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
