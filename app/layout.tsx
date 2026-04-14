import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme-provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chirag Dodiya — Senior Software Engineer",
  description:
    "Senior Software Engineer specializing in building reliable, scalable web products. Explore my experience, projects, and ways to get in touch.",
  openGraph: {
    title: "Chirag Dodiya — Senior Software Engineer",
    description: "Portfolio, experience, and projects by Chirag Dodiya.",
    url: "/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chirag Dodiya — Senior Software Engineer",
    description: "Building reliable, scalable web platforms.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <style>{`
          /* Design tokens (light-mode by default) */
          :root {
            --bg: #ffffff;
            --surface: #f7fafc;
            --card: #ffffff;
            --muted: #6b7280;
            --text: #0f172a;
            --accent: #0ea5a8;
            --glass: rgba(255, 255, 255, 0.6);
            --shadow: 0 6px 20px rgba(16, 24, 40, 0.06);
            --radius: 12px;
            --max-width: 1100px;
            --container-pad: 24px;
          }

          /* Dark-mode overrides when a 'dark' class is present on html (ThemeProvider uses attribute="class") */
          .dark {
            --bg: #071124;
            --surface: #071025;
            --card: #081226;
            --muted: #9aa4b2;
            --text: #e6eef8;
            --accent: #6fead6;
            --glass: rgba(255, 255, 255, 0.03);
            --shadow: 0 8px 30px rgba(2,6,23,0.6);
          }

          /* Base reset & layout */
          html, body, #__next {
            height: 100%;
          }

          html, body {
            background: linear-gradient(180deg, var(--bg) 0%, color-mix(in srgb, var(--bg) 95%, #f0faff 5%));
            color: var(--text);
            margin: 0;
            padding: 0;
            font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            line-height: 1.45;
            -webkit-font-feature-settings: "ss01" on;
            transition: background-color 0.25s ease, color 0.25s ease;
          }

          a { color: inherit; text-decoration: none; }

          /* Skip link for accessibility */
          .skip-link {
            position: absolute;
            left: -9999px;
            top: auto;
            width: 1px;
            height: 1px;
            overflow: hidden;
          }
          .skip-link:focus {
            left: 1rem;
            top: 1rem;
            width: auto;
            height: auto;
            padding: 0.5rem 0.75rem;
            background: var(--card);
            color: var(--text);
            box-shadow: var(--shadow);
            border-radius: 6px;
            z-index: 1000;
          }

          /* App Shell */
          header.site-header {
            position: sticky;
            top: 0;
            z-index: 40;
            backdrop-filter: saturate(120%) blur(6px);
            background: linear-gradient(180deg, rgba(255,255,255,0.6), rgba(255,255,255,0.4));
            border-bottom: 1px solid rgba(15, 23, 42, 0.04);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 12px 16px;
            transition: background-color 0.2s ease, border-color 0.2s ease;
          }

          .dark header.site-header {
            background: linear-gradient(180deg, rgba(7,17,36,0.6), rgba(7,17,36,0.4));
            border-bottom: 1px solid rgba(255,255,255,0.03);
          }

          .nav-inner {
            width: 100%;
            max-width: var(--max-width);
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            padding: 0 var(--container-pad);
          }

          .brand {
            display: flex;
            align-items: center;
            gap: 12px;
            font-weight: 600;
            font-size: 1rem;
            letter-spacing: -0.02em;
          }

          .brand .logo {
            width: 44px;
            height: 44px;
            border-radius: 10px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, var(--accent), color-mix(in srgb, var(--accent) 65%, transparent));
            color: white;
            font-weight: 700;
            box-shadow: 0 6px 18px rgba(14, 165, 132, 0.12);
          }

          nav.site-nav {
            display: flex;
            gap: 18px;
            align-items: center;
            font-size: 0.95rem;
          }

          nav.site-nav a {
            color: var(--muted);
            padding: 8px 10px;
            border-radius: 8px;
            transition: color 0.15s ease, background-color 0.15s ease, transform 0.15s ease;
          }
          nav.site-nav a:hover {
            color: var(--text);
            background: var(--glass);
            transform: translateY(-2px);
          }

          /* Main container */
          main.site-main {
            width: 100%;
            max-width: var(--max-width);
            margin: 36px auto;
            padding: 0 var(--container-pad) 96px;
            box-sizing: border-box;
            min-height: calc(100vh - 140px);
          }

          .hero {
            display: flex;
            flex-direction: column;
            gap: 18px;
            align-items: flex-start;
            margin-bottom: 28px;
          }

          .hero h1 {
            margin: 0;
            font-size: clamp(1.6rem, 3.6vw, 2.6rem);
            line-height: 1.05;
            letter-spacing: -0.02em;
          }

          .hero p {
            margin: 0;
            color: var(--muted);
            max-width: 60ch;
            font-size: 1.05rem;
          }

          /* Card styles for children sections */
          .card {
            background: linear-gradient(180deg, var(--card), var(--surface));
            border-radius: var(--radius);
            padding: 20px;
            box-shadow: var(--shadow);
            border: 1px solid rgba(15, 23, 42, 0.04);
            margin-bottom: 20px;
          }
          .dark .card {
            border: 1px solid rgba(255,255,255,0.03);
          }

          /* Footer */
          footer.site-footer {
            border-top: 1px solid rgba(15, 23, 42, 0.04);
            background: transparent;
            padding: 28px 0;
            text-align: center;
            color: var(--muted);
          }
          .dark footer.site-footer {
            border-top: 1px solid rgba(255,255,255,0.03);
          }

          /* Responsive */
          @media (max-width: 720px) {
            .nav-inner { padding: 0 16px; }
            nav.site-nav { display: none; }
            .hero p { font-size: 1rem; }
            main.site-main { margin: 18px auto; padding-bottom: 64px; }
          }
        `}</style>
      </head>

      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <a className="skip-link" href="#content">
            Skip to content
          </a>

          <header className="site-header" role="banner">
            <div className="nav-inner">
              <a href="/" className="brand" aria-label="Home — Chirag Dodiya">
                <span className="logo" aria-hidden>
                  CD
                </span>
                <span>
                  Chirag Dodiya
                  <div style={{ fontSize: 12, color: "var(--muted)" }}>Senior Software Engineer</div>
                </span>
              </a>

              <nav className="site-nav" role="navigation" aria-label="Primary">
                <a href="#about">About</a>
                <a href="#work">Work</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
              </nav>
            </div>
          </header>

          <main id="content" className="site-main" role="main">
            {/* Hero area designed to be a lightweight, presentational wrapper —
                keep children intact so pages can populate full content. */}
            <section className="hero card" aria-hidden>
              <h1>Building reliable, scalable web products</h1>
              <p>
                I design and develop robust systems and developer-focused experiences that scale.
                Explore my portfolio, work, and contact options below.
              </p>
            </section>

            {/* Page content injected here */}
            <div>{children}</div>
          </main>

          <footer className="site-footer" role="contentinfo">
            <div style={{ maxWidth: "var(--max-width)", margin: "0 auto", padding: "0 var(--container-pad)" }}>
              <div style={{ marginBottom: 8 }}>
                © {new Date().getFullYear()} Chirag Dodiya — Built with care.
              </div>
              <div style={{ fontSize: 13, color: "var(--muted)" }}>
                Designed to be accessible, responsive, and friendly for both light and dark preferences.
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}