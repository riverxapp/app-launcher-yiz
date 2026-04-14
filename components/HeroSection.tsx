import Link from 'next/link';

export function HeroSection() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden px-6 pt-20 pb-16 sm:pt-28 sm:pb-24 lg:px-8"
    >
      {/* Decorative colorful blobs */}
      <div
        aria-hidden="true"
        className="absolute -top-24 left-1/2 -z-10 -translate-x-1/2 transform blur-3xl"
        style={{ width: '72rem', height: '36rem' }}
      >
        <div
          className="absolute inset-0 -translate-x-1/4 -translate-y-1/4 rounded-full opacity-30"
          style={{
            background:
              'radial-gradient(closest-side at 20% 20%, rgba(99,102,241,0.85), transparent 25%), radial-gradient(closest-side at 80% 80%, rgba(236,72,153,0.85), transparent 30%)',
          }}
        />
        <div
          className="absolute inset-0 translate-x-1/3 translate-y-1/3 rounded-full opacity-25"
          style={{
            background:
              'radial-gradient(closest-side at 30% 70%, rgba(14,165,233,0.8), transparent 25%), radial-gradient(closest-side at 70% 30%, rgba(168,85,247,0.7), transparent 30%)',
            mixBlendMode: 'screen',
          }}
        />
      </div>

      {/* Subtle grid SVG */}
      <svg
        aria-hidden="true"
        className="absolute right-0 top-0 -mr-24 -mt-24 -z-20 h-[48rem] w-[48rem] opacity-5"
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M10 0H0V10" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-3 text-sm font-medium tracking-wide text-primary/80">Senior Software Engineer</p>

        <h1 id="hero-heading" className="text-4xl font-extrabold tracking-tight sm:text-6xl">
          Hi, I’m{' '}
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Chirag Dodiya
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-7 text-muted-foreground">
          I build reliable, scalable web platforms and delightful developer experiences. I care about performance,
          accessibility, and craftsmanship across the stack.
        </p>

        <div className="mt-10 flex items-center justify-center gap-3">
          <Link
            href="#projects"
            className="inline-flex items-center rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:brightness-105 focus:outline-none focus:ring-4 focus:ring-indigo-300/40"
          >
            View Projects
          </Link>

          <Link
            href="#contact"
            className="inline-flex items-center rounded-full border border-foreground/20 px-5 py-2.5 text-sm font-medium text-foreground transition hover:bg-foreground/5 focus:outline-none focus:ring-4 focus:ring-indigo-100/40"
          >
            Get in touch
          </Link>
        </div>

        {/* Supportive micro copy */}
        <p className="mt-6 text-sm text-muted-foreground/90">
          Available for freelance and full-time roles — currently open to conversations.
        </p>

        {/* Inline illustrative element */}
        <div className="mt-10 flex justify-center">
          <div
            aria-hidden="true"
            className="flex h-20 w-72 items-center justify-center gap-3 rounded-2xl bg-white/5 px-4 py-2 backdrop-blur-sm"
          >
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="inline-block h-3 w-3 rounded-full bg-indigo-400 shadow-md" />
              <span className="inline-block h-3 w-3 rounded-full bg-pink-400 shadow-md" />
              <span className="inline-block h-3 w-3 rounded-full bg-cyan-400 shadow-md" />
              <span className="ml-2">TypeScript • React • Next.js • Tailwind</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;