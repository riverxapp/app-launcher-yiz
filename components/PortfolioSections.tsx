export function AboutSection() {
  return (
    <section id="about" className="px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">About</h2>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          I’m a Senior Software Engineer focused on shipping pragmatic, resilient systems. My work spans modern
          TypeScript/React frontends, API design, and platform tooling that elevates team velocity.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-foreground/10 p-4">
            <p className="text-sm font-medium">Primary Stack</p>
            <p className="mt-2 text-sm text-muted-foreground">TypeScript, React/Next.js, Node.js, GraphQL/REST</p>
          </div>
          <div className="rounded-lg border border-foreground/10 p-4">
            <p className="text-sm font-medium">Focus Areas</p>
            <p className="mt-2 text-sm text-muted-foreground">Performance, DX, Accessibility, Observability</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ExperienceSection() {
  const roles = [
    {
      company: 'Acme Corp',
      title: 'Senior Software Engineer',
      period: '2023 — Present',
      detail: 'Led migration to Next.js App Router, introduced performance budgets, and improved Core Web Vitals.'
    },
    {
      company: 'Globex',
      title: 'Software Engineer',
      period: '2020 — 2023',
      detail: 'Built component libraries, API gateways, and CI workflows for faster, safer delivery.'
    },
    {
      company: 'Initech',
      title: 'Engineer',
      period: '2018 — 2020',
      detail: 'Shipped full‑stack features, optimized query performance, and improved observability.'
    }
  ];

  return (
    <section id="experience" className="px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Experience</h2>
        <ol className="mt-6 space-y-5">
          {roles.map((r) => (
            <li key={r.company + r.period} className="rounded-lg border border-foreground/10 p-4">
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-medium">{r.company}</p>
                <p className="text-xs text-muted-foreground">{r.period}</p>
              </div>
              <p className="mt-1 text-sm">{r.title}</p>
              <p className="mt-2 text-sm text-muted-foreground">{r.detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function ProjectsSection() {
  const projects = [
    {
      name: 'Performance Toolkit',
      blurb: 'A set of utilities and CI checks for measuring and enforcing performance budgets across web apps.',
      tech: ['Next.js', 'Lighthouse CI', 'Vitest']
    },
    {
      name: 'Design System',
      blurb: 'Composable, accessible React components with tokens and theming for rapid product delivery.',
      tech: ['TypeScript', 'Radix', 'Tailwind']
    },
    {
      name: 'Observability Starter',
      blurb: 'End-to-end tracing, structured logging, and metrics wiring for Node.js services.',
      tech: ['OpenTelemetry', 'Grafana', 'Node.js']
    }
  ];

  return (
    <section id="projects" className="px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Projects</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.name} className="flex flex-col rounded-lg border border-foreground/10 p-5">
              <h3 className="text-base font-semibold">{p.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.blurb}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="rounded-md border border-foreground/10 px-2 py-0.5 text-xs text-foreground/80">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Contact</h2>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Interested in working together or want to say hello?
        </p>
        <a
          href="mailto:hello@chiragdodiya.dev"
          className="mt-6 inline-flex items-center rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background transition hover:opacity-90"
        >
          Email me
        </a>
      </div>
    </section>
  );
}