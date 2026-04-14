import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative isolate px-6 pt-20 pb-16 sm:pt-28 sm:pb-24 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-3 text-sm font-medium tracking-wide text-primary/80">Senior Software Engineer</p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Hi, I’m <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Chirag Dodiya</span>
        </h1>
        <p className="mt-6 text-lg leading-7 text-muted-foreground">
          I build reliable, scalable web platforms and delightful developer experiences. I care about performance,
          accessibility, and craftsmanship across the stack.
        </p>
        <div className="mt-10 flex items-center justify-center gap-3">
          <Link href="#projects" className="inline-flex items-center rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background transition hover:opacity-90">
            View Projects
          </Link>
          <Link href="#contact" className="inline-flex items-center rounded-md border border-foreground/20 px-5 py-2.5 text-sm font-medium text-foreground transition hover:bg-foreground/5">
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  );
}