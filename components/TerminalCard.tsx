"use client";

export function TerminalCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`retro-hover border-4 border-foreground bg-white p-6 ${className}`}
    >
      {children}
    </div>
  );
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-8 font-mono text-3xl font-bold tracking-wider text-foreground">
      {children}
    </h2>
  );
}

export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block border-2 border-accent bg-accent px-4 py-2 font-mono text-sm font-bold text-accent-foreground">
      {children}
    </span>
  );
}

export function TerminalButton({
  children,
  onClick,
  variant = "primary",
  className = "",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
}) {
  const variantClasses =
    variant === "primary"
      ? "border-primary bg-primary text-primary-foreground hover:opacity-90"
      : "border-secondary bg-secondary text-secondary-foreground hover:opacity-90";

  return (
    <button
      onClick={onClick}
      className={`retro-button-hover cursor-pointer border-4 px-6 py-3 font-mono text-base font-bold ${variantClasses} ${className}`}
    >
      {children}
    </button>
  );
}
