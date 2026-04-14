import React from "react";
import Link from "next/link";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="font-semibold tracking-tight">
            <span className="bg-gradient-to-r from-sky-400 via-fuchsia-400 to-emerald-400 bg-clip-text text-transparent">
              Chirag Dodiya
            </span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-white/80 underline-offset-8 decoration-2 decoration-fuchsia-400/60 hover:text-white hover:underline"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="ml-2 inline-flex items-center rounded-full bg-gradient-to-r from-sky-500 to-fuchsia-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-fuchsia-500/20 hover:from-sky-400 hover:to-fuchsia-400"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
      <div className="h-0.5 w-full bg-gradient-to-r from-sky-500 via-fuchsia-500 to-emerald-500" />
    </header>
  );
}

export default Navbar;
export { Navbar };