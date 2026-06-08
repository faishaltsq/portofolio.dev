"use client";

import { Badge, TerminalButton } from "./TerminalCard";

export function HeroSection() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-background px-6 py-20">
      <div className="w-full max-w-4xl">
        <div className="border-4 border-foreground bg-white p-8 md:p-12">
          <div className="mb-8 flex justify-center">
            <Badge>Product Quality / Test Automation</Badge>
          </div>

          <h1 className="mb-6 text-center font-mono text-5xl font-bold tracking-wider text-foreground md:text-7xl">
            QUALITY ENGINEER_
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-center text-lg font-light leading-relaxed text-foreground md:text-xl">
            Final-year Informatics student building release confidence through
            structured testing, Playwright automation, API validation, and sharp
            defect analysis.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <TerminalButton
              variant="primary"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View Projects
            </TerminalButton>
            <TerminalButton
              variant="secondary"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Contact Me
            </TerminalButton>
          </div>
        </div>
      </div>
    </section>
  );
}
