export function ContactSection() {
  const contactLinks = [
    {
      label: "Email",
      value: "faishaltsq@gmail.com",
      href: "mailto:faishaltsq@gmail.com",
    },
    {
      label: "GitHub",
      value: "github.com/faishaltsq",
      href: "https://github.com/faishaltsq",
    },
    {
      label: "LinkedIn",
      value: "Muhammad Faishal Tsaqief",
      href: "https://www.linkedin.com/in/muhammad-faishal-tsaqief-7775b3248/",
    },
    { label: "Location", value: "Yogyakarta, Indonesia" },
  ];

  return (
    <section
      id="contact"
      className="border-t-4 border-primary bg-foreground px-6 py-20 text-white"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-mono text-4xl font-bold tracking-wider text-background md:text-5xl">
            Let&apos;s Build Reliable Products_
          </h2>
        </div>

        <div className="mb-12 grid gap-8 md:grid-cols-2">
          {contactLinks.map((link, index) => {
            const isPrimary = index % 2 === 0;

            return (
              <div
                key={link.label}
                className={`retro-hover border-4 p-6 ${
                  isPrimary
                    ? "border-primary bg-primary"
                    : "border-secondary bg-secondary"
                }`}
              >
                <div className="mb-2 font-mono text-sm font-bold text-background">
                  {link.label}
                </div>
                {link.href ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="break-all font-mono text-lg font-bold text-background transition-all hover:tracking-wide hover:underline"
                  >
                    {link.value}
                  </a>
                ) : (
                  <p className="font-mono text-lg font-bold text-background">
                    {link.value}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <div className="border-t-4 border-primary pt-8 text-center">
          <p className="font-mono text-sm text-background">
            © 2026 Muhammad Faishal Tsaqief. Built with focus on quality.
          </p>
        </div>
      </div>
    </section>
  );
}
