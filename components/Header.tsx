"use client";

import { useState } from "react";

export function Header() {
  const [activeNav, setActiveNav] = useState("profile");
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "profile", label: "Profile" },
    { id: "testing", label: "Testing" },
    { id: "automation", label: "Automation" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = (id: string) => {
    setActiveNav(id);
    setIsOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 border-b-4 border-accent bg-foreground text-white">
      <nav className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="font-mono text-xl font-bold tracking-wider md:text-2xl">
            Welcome_
          </div>

          <div className="hidden gap-2 md:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`retro-button-hover border-2 px-4 py-2 font-mono transition-all ${
                  activeNav === item.id
                    ? "border-accent bg-accent text-foreground"
                    : "border-white hover:border-accent hover:text-accent"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            className="retro-button-hover border-2 border-white px-3 py-2 font-mono md:hidden"
            onClick={() => setIsOpen((value) => !value)}
            aria-label="Toggle navigation"
          >
            MENU
          </button>
        </div>

        {isOpen && (
          <div className="mt-4 grid gap-2 md:hidden">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="retro-button-hover border-2 border-white px-4 py-2 text-left font-mono hover:border-accent hover:text-accent"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
