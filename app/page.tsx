import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900">
      <style>{`
        :root {
          --brand: #2563eb;
          --brand-dark: #1d4ed8;
          --accent: #06b6d4;
          --text: #0f172a;
          --muted: #475569;
          --card: #ffffff;
          --border: rgba(148, 163, 184, 0.22);
          --shadow: 0 20px 60px rgba(15, 23, 42, 0.08);
        }

        .page-shell {
          min-height: 100vh;
          background:
            radial-gradient(circle at top left, rgba(37,99,235,0.06), transparent 18%),
            radial-gradient(circle at bottom right, rgba(6,182,212,0.04), transparent 20%),
            linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
        }

        .content-wrap {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 1.5rem;
        }

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
          background: #0f172a;
          color: #fff;
          border-radius: 0.5rem;
          z-index: 9999;
        }

        /* HERO — Revamped modern, accessible, responsive */
        .hero-card {
          position: relative;
          overflow: visible;
          border: none;
          background: linear-gradient(180deg, rgba(255,255,255,0.95), rgba(250,250,255,0.9));
          box-shadow: 0 18px 60px rgba(15, 23, 42, 0.06);
          border-radius: 1.5rem;
          padding: 2rem;
          margin-bottom: 1.25rem;
        }

        .hero-grid {
          display: grid;
          gap: 2rem;
          grid-template-columns: 1fr 480px;
          align-items: center;
        }

        /* Left content */
        .hero-left {
          padding-right: 0.5rem;
          z-index: 5;
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          border-radius: 999px;
          padding: 0.35rem 0.75rem;
          background: rgba(37, 99, 235, 0.09);
          color: #1d4ed8;
          font-size: 0.875rem;
          font-weight: 700;
          letter-spacing: 0.02em;
          text-transform: uppercase;
        }

        .hero-title {
          margin: 0.8rem 0 0.4rem;
          font-size: clamp(1.9rem, 5.2vw, 3.4rem);
          line-height: 1.02;
          letter-spacing: -0.02em;
          color: var(--text);
          font-weight: 800;
        }

        /* Gradient highlight inside title */
        .hero-highlight {
          background: linear-gradient(90deg, var(--brand), var(--accent));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          display: inline-block;
          padding: 0 0.15rem;
          border-radius: 0.25rem;
        }

        .hero-lead {
          margin: 0.6rem 0 0;
          color: var(--muted);
          font-size: 1.05rem;
          max-width: 56ch;
        }

        .hero-description {
          margin-top: 1rem;
          color: var(--muted);
          font-size: 1rem;
          line-height: 1.65;
          max-width: 66ch;
        }

        .hero-ctas {
          display: flex;
          gap: 0.875rem;
          margin-top: 1.25rem;
          flex-wrap: wrap;
        }

        /* Reuse .btn, .btn-primary etc. defined lower in stylesheet (kept) */
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          border-radius: 0.9rem;
          padding: 0.85rem 1.25rem;
          font-weight: 700;
          text-decoration: none;
          transition: transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease, color 0.18s ease, border-color 0.18s ease;
          border: 1px solid transparent;
          font-size: 0.98rem;
          cursor: pointer;
        }

        .btn-primary {
          background: linear-gradient(135deg, var(--brand), var(--brand-dark));
          color: white;
          box-shadow: 0 12px 30px rgba(37, 99, 235, 0.18);
        }

        .btn-secondary {
          background: white;
          color: var(--text);
          border: 1px solid rgba(148, 163, 184, 0.18);
        }

        .btn-ghost {
          background: transparent;
          color: var(--brand);
          border-color: rgba(37, 99, 235, 0.12);
        }

        .btn:focus {
          outline: 3px solid rgba(37, 99, 235, 0.15);
          outline-offset: 2px;
        }

        .btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 18px 36px rgba(2,6,23,0.08);
        }

        /* small metrics under CTAs */
        .hero-metrics {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
          flex-wrap: wrap;
        }
        .metric {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          padding: 0.45rem 0.7rem;
          border-radius: 0.65rem;
          background: rgba(15,23,42,0.03);
          width: auto;
          min-width: 88px;
        }
        .metric .value {
          font-weight: 800;
          color: var(--text);
          font-size: 1.05rem;
        }
        .metric .label {
          font-size: 0.86rem;
          color: var(--muted);
        }

        .trusted-logos {
          display: flex;
          gap: 0.75rem;
          align-items: center;
          margin-top: 1.15rem;
          flex-wrap: wrap;
        }
        .trusted-logos .logo {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.35rem 0.6rem;
          border-radius: 0.5rem;
          background: rgba(15,23,42,0.03);
          font-weight: 700;
          color: var(--muted);
          font-size: 0.85rem;
          border: 1px solid rgba(148,163,184,0.05);
        }

        /* Right visual preview */
        .hero-right {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .visual-card {
          width: 100%;
          max-width: 440px;
          border-radius: 1rem;
          padding: 1.1rem;
          background: linear-gradient(180deg, rgba(255,255,255,0.85), rgba(250,250,255,0.65));
          border: 1px solid rgba(148,163,184,0.12);
          box-shadow: 0 22px 48px rgba(15,23,42,0.06);
          position: relative;
          overflow: visible;
        }

        .device-mock {
          background: linear-gradient(180deg, #f1f5ff 0%, #ffffff 100%);
          border-radius: 0.75rem;
          border: 1px solid rgba(148,163,184,0.08);
          height: 300px;
          display: grid;
          place-items: center;
          position: relative;
          overflow: hidden;
          box-shadow: inset 0 -8px 30px rgba(37,99,235,0.02);
        }

        .screenshot {
          width: 92%;
          height: 82%;
          border-radius: 0.6rem;
          background: linear-gradient(90deg, rgba(37,99,235,0.06), rgba(6,182,212,0.03));
          display: grid;
          place-items: center;
          color: var(--brand-dark);
          font-weight: 700;
          letter-spacing: 0.02em;
          font-size: 0.95rem;
        }

        /* Overlapping cards for depth */
        .overlay-card {
          position: absolute;
          right: -18px;
          top: -18px;
          width: 140px;
          height: 96px;
          border-radius: 0.75rem;
          background: linear-gradient(135deg, rgba(37,99,235,0.12), rgba(6,182,212,0.06));
          box-shadow: 0 12px 30px rgba(37,99,235,0.08);
          display: none;
        }

        .overlay-btm {
          position: absolute;
          left: -18px;
          bottom: -18px;
          width: 160px;
          height: 84px;
          border-radius: 0.75rem;
          background: linear-gradient(135deg, rgba(6,182,212,0.06), rgba(139,92,246,0.04));
          box-shadow: 0 12px 30px rgba(6,182,212,0.06);
          display: none;
        }

        /* Decorative subtle blobs */
        .hero-shape {
          position: absolute;
          border-radius: 50%;
          filter: blur(24px);
          pointer-events: none;
          opacity: 0.9;
        }
        .hero-shape.shape-a {
          width: 220px;
          height: 220px;
          right: -40px;
          top: -30px;
          background: radial-gradient(circle at 30% 30%, rgba(37,99,235,0.08), transparent 20%),
                      radial-gradient(circle at 70% 70%, rgba(6,182,212,0.05), transparent 25%);
        }
        .hero-shape.shape-b {
          width: 160px;
          height: 160px;
          left: -60px;
          bottom: -40px;
          background: radial-gradient(circle at 40% 40%, rgba(139,92,246,0.06), transparent 20%);
        }

        /* Accessibility tweaks */
        .hero-card:focus-within {
          outline: 3px solid rgba(37,99,235,0.08);
          outline-offset: 6px;
        }

        /* Keep the resume panel, rest of page styles as-is (unchanged) */
        .resume-panel {
          border-radius: 1.25rem;
          padding: 1.5rem;
          background: linear-gradient(180deg, rgba(15, 23, 42, 0.96), rgba(30, 41, 59, 0.98));
          color: white;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08);
        }

        .resume-panel h2 {
          margin: 0 0 0.25rem;
          font-size: 1.25rem;
        }

        .resume-panel p {
          margin: 0 0 1.25rem;
          color: rgba(226, 232, 240, 0.82);
          line-height: 1.65;
        }

        .stats {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0.75rem;
        }

        .stat {
          border-radius: 1rem;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .stat strong {
          display: block;
          font-size: 1.2rem;
          margin-bottom: 0.2rem;
        }

        .stat span {
          color: rgba(226, 232, 240, 0.75);
          font-size: 0.95rem;
        }

        .section {
          margin-top: 1.75rem;
          padding: 1.5rem 0 0;
        }

        .section-header {
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 1rem;
          margin-bottom: 1rem;
        }
        .section-title {
          margin: 0;
          font-size: clamp(1.5rem, 2.8vw, 2.2rem);
          color: var(--text);
          letter-spacing: -0.02em;
        }
        .section-subtitle {
          margin: 0.25rem 0 0;
          color: var(--muted);
          font-size: 1rem;
        }

        .section-grid {
          display: grid;
          gap: 1.25rem;
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .info-card {
          border-radius: 1.25rem;
          background: var(--card);
          border: 1px solid rgba(148, 163, 184, 0.18);
          padding: 1.35rem;
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.04);
        }

        .info-card h3 {
          margin: 0 0 0.5rem;
          font-size: 1.05rem;
          color: var(--text);
        }

        .info-card p {
          margin: 0;
          color: var(--muted);
          line-height: 1.7;
          font-size: 0.98rem;
        }

        /* Skills */
        .skill-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0,1fr));
          gap: 1.25rem;
        }
        .skill-card {
          border-radius: 1rem;
          background: var(--card);
          border: 1px solid rgba(148, 163, 184, 0.18);
          padding: 1.1rem 1.1rem 1.2rem;
          box-shadow: 0 8px 24px rgba(15, 23, 42, 0.04);
        }
        .skill-card header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.65rem;
        }
        .skill-name {
          font-weight: 700;
          color: var(--text);
        }
        .skill-level {
          color: var(--muted);
          font-size: 0.9rem;
        }
        .progress {
          position: relative;
          height: 8px;
          background: #e2e8f0;
          border-radius: 999px;
          overflow: hidden;
        }
        .progress > span {
          display: block;
          height: 100%;
          background: linear-gradient(90deg, var(--brand), var(--brand-dark));
          border-radius: inherit;
          box-shadow: inset 0 0 8px rgba(255,255,255,0.4);
        }
        .chips {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: 0.75rem;
        }
        .chip {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          border-radius: 999px;
          padding: 0.4rem 0.7rem;
          background: rgba(37, 99, 235, 0.06);
          color: #1e3a8a;
          border: 1px solid rgba(37, 99, 235, 0.14);
          font-size: 0.85rem;
          font-weight: 600;
        }

        /* Timeline */
        .timeline {
          position: relative;
          margin: 0;
          padding-left: 1.25rem;
          list-style: none;
        }
        .timeline::before {
          content: "";
          position: absolute;
          left: 0.45rem;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(180deg, rgba(30,58,138,0.2), rgba(37,99,235,0.25));
        }
        .timeline-item {
          position: relative;
          margin-bottom: 1rem;
          background: var(--card);
          border: 1px solid rgba(148, 163, 184, 0.2);
          border-radius: 1rem;
          padding: 1rem 1rem 1rem 1rem;
          box-shadow: 0 10px 26px rgba(15, 23, 42, 0.04);
        }
        .timeline-item::before {
          content: "";
          position: absolute;
          left: -0.74rem;
          top: 1.2rem;
          width: 10px;
          height: 10px;
          border-radius: 999px;
          background: var(--brand);
          box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.15);
        }
        .timeline-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem 1rem;
          color: var(--muted);
          font-size: 0.95rem;
          margin-bottom: 0.5rem;
        }
        .timeline-role {
          margin: 0 0 0.25rem;
          color: var(--text);
          font-weight: 700;
          font-size: 1.05rem;
        }
        .timeline-points {
          margin: 0.5rem 0 0 1rem;
          padding: 0;
          color: var(--muted);
          line-height: 1.65;
        }

        /* Projects */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1.25rem;
        }
        .project-card {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          border-radius: 1.1rem;
          background: var(--card);
          border: 1px solid rgba(148, 163, 184, 0.18);
          padding: 1.1rem;
          box-shadow: 0 12px 26px rgba(15, 23, 42, 0.05);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .project-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 18px 40px rgba(15, 23, 42, 0.08);
        }
        .project-title {
          margin: 0;
          font-size: 1.05rem;
          color: var(--text);
        }
        .project-desc {
          margin: 0;
          color: var(--muted);
          line-height: 1.65;
          font-size: 0.97rem;
        }
        .project-actions {
          margin-top: 0.35rem;
        }

        /* Testimonials */
        .testimonials {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1.25rem;
        }
        .testimonial {
          border-radius: 1.1rem;
          background: var(--card);
          border: 1px solid rgba(148,163,184,0.18);
          padding: 1.1rem;
          box-shadow: 0 10px 26px rgba(15,23,42,0.04);
        }
        .quote {
          font-style: italic;
          color: var(--text);
          margin: 0 0 0.6rem 0;
        }
        .cite {
          color: var(--muted);
          font-size: 0.95rem;
        }

        /* Education */
        .edu-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1.25rem;
        }
        .edu-card {
          border-radius: 1.1rem;
          background: var(--card);
          border: 1px solid rgba(148,163,184,0.18);
          padding: 1.1rem;
          box-shadow: 0 10px 26px rgba(15,23,42,0.04);
        }
        .edu-card h4 {
          margin: 0 0 0.35rem;
          color: var(--text);
          font-size: 1rem;
        }
        .edu-meta {
          color: var(--muted);
          font-size: 0.95rem;
          margin-bottom: 0.35rem;
        }

        /* Contact */
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
        }
        .contact-card, .contact-form {
          border-radius: 1.1rem;
          background: var(--card);
          border: 1px solid rgba(148,163,184,0.18);
          padding: 1.1rem;
          box-shadow: 0 10px 26px rgba(15,23,42,0.04);
        }
        .contact-list {
          margin: 0.25rem 0 0;
          padding: 0;
          list-style: none;
          display: grid;
          gap: 0.5rem;
        }
        .contact-list a {
          color: var(--brand);
          text-decoration: none;
        }
        .contact-list a:hover {
          text-decoration: underline;
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
        }
        .form-field {
          display: grid;
          gap: 0.35rem;
        }
        .form-field label {
          font-weight: 600;
          color: var(--text);
          font-size: 0.95rem;
        }
        .form-field input,
        .form-field textarea {
          width: 100%;
          border: 1px solid rgba(148,163,184,0.35);
          border-radius: 0.75rem;
          padding: 0.75rem 0.9rem;
          font-size: 1rem;
          color: var(--text);
          outline: none;
          background: #fff;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .form-field input:focus,
        .form-field textarea:focus {
          border-color: rgba(37, 99, 235, 0.6);
          box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.15);
        }
        .form-actions {
          margin-top: 0.35rem;
          display: flex;
          gap: 0.75rem;
          align-items: center;
        }

        /* Footer */
        footer.site-footer {
          margin-top: 2rem;
          padding: 1.5rem 0 2rem;
          color: var(--muted);
        }
        .footer-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          border-top: 1px solid rgba(148,163,184,0.25);
          padding-top: 1.25rem;
        }
        .footer-nav {
          display: flex;
          gap: 0.9rem;
          flex-wrap: wrap;
        }
        .footer-nav a {
          color: var(--muted);
          text-decoration: none;
          font-weight: 600;
        }
        .footer-nav a:hover {
          color: var(--brand);
          text-decoration: underline;
        }

        /* Responsive */
        @media (max-width: 1100px) {
          .projects-grid,
          .testimonials {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr;
            padding: 1.25rem;
          }
          .hero-right {
            order: -1;
            margin-bottom: 0.25rem;
          }
          .visual-card {
            max-width: 100%;
          }
          .overlay-card,
          .overlay-btm {
            display: none;
          }
          .section-grid {
            grid-template-columns: 1fr;
          }
          .skill-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
          .projects-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
          .edu-grid {
            grid-template-columns: 1fr;
          }
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .content-wrap {
            padding: 1rem;
          }

          .hero-grid {
            padding: 0.65rem;
          }

          .hero-ctas {
            flex-direction: column;
          }

          .btn {
            width: 100%;
          }

          .stats {
            grid-template-columns: 1fr;
          }
          .skill-grid,
          .projects-grid,
          .testimonials {
            grid-template-columns: 1fr;
          }
          .form-row {
            grid-template-columns: 1fr;
          }

          .overlay-card,
          .overlay-btm {
            display: none;
          }

          .device-mock {
            height: 220px;
          }
        }
      `}</style>

      <div className="page-shell">
        <a href="#main" className="skip-link">Skip to content</a>
        <Navbar />
        <main id="main" className="relative min-h-screen bg-slate-950 text-white">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_50%_at_20%_20%,rgba(56,189,248,0.12),transparent_60%),radial-gradient(50%_50%_at_80%_0%,rgba(217,70,239,0.12),transparent_60%),radial-gradient(50%_50%_at_100%_80%,rgba(16,185,129,0.12),transparent_60%)]"
            aria-hidden="true"
          />
          <div className="content-wrap">
            <HeroSection />

            <section className="hero-card" aria-labelledby="hero-title">
              <div className="hero-shape shape-a" aria-hidden="true" />
              <div className="hero-grid">
                <div className="hero-left">
                  <span className="eyebrow" aria-label="Site type">Professional Resume Website</span>

                  <h1 id="hero-title" className="hero-title">
                    Hi, I&apos;m a product-minded engineer building
                    <span className="hero-highlight"> delightful, reliable products</span>
                  </h1>

                  <p className="hero-lead">
                    I blend design sensibility with pragmatic engineering to ship useful software that scales.
                  </p>

                  <p className="hero-description">
                    From discovery to launch, I partner with teams to define clear goals, deliver robust systems,
                    and measure impact. I specialize in modern web platforms, UX-driven features, and developer
                    experience.
                  </p>

                  <div className="hero-ctas" role="group" aria-label="Primary actions">
                    <a className="btn btn-primary" href="#contact" aria-label="Contact me">
                      Contact Me
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </a>

                    <a className="btn btn-secondary" href="#experience" aria-label="View experience">
                      View Experience
                    </a>

                    <a className="btn btn-ghost" href="/resume.pdf" target="_blank" rel="noopener noreferrer" download aria-label="Download resume">
                      Download Resume
                    </a>
                  </div>

                  <div className="hero-metrics" aria-hidden="false">
                    <div className="metric" role="img" aria-label="Years experience">
                      <div className="value">10+</div>
                      <div className="label">Years Experience</div>
                    </div>
                    <div className="metric" role="img" aria-label="Projects shipped">
                      <div className="value">50+</div>
                      <div className="label">Projects Shipped</div>
                    </div>
                    <div className="metric" role="img" aria-label="Teams worked with">
                      <div className="value">20+</div>
                      <div className="label">Teams & Clients</div>
                    </div>
                  </div>

                  <div className="trusted-logos" aria-hidden="true">
                    <div className="logo">TechCorp</div>
                    <div className="logo">Startup Studio</div>
                    <div className="logo">Acme</div>
                  </div>
                </div>

                <aside className="hero-right" aria-label="Visual preview">
                  <div className="visual-card" role="img" aria-label="Project preview mockup">
                    <div className="overlay-card" aria-hidden="true" />
                    <div className="overlay-btm" aria-hidden="true" />
                    <div className="device-mock" aria-hidden="true">
                      <div className="screenshot">Project Preview</div>
                    </div>

                    <div style={{position: 'absolute', left: 12, bottom: 12, display: 'flex', gap: '0.5rem', alignItems: 'center'}}>
                      <div style={{background: 'linear-gradient(90deg,var(--brand),var(--accent))', color: '#fff', padding: '0.35rem 0.6rem', borderRadius: '999px', fontWeight: 700, fontSize: '0.85rem'}}>Featured</div>
                      <div style={{background: 'rgba(255,255,255,0.9)', padding: '0.35rem 0.6rem', borderRadius: '0.6rem', fontWeight: 700, fontSize: '0.85rem'}}>Case study</div>
                    </div>
                  </div>
                </aside>
              </div>
              <div className="hero-shape shape-b" aria-hidden="true" />
            </section>

            <section className="section" aria-label="Professional highlights">
              <header className="section-header">
                <div>
                  <h2 className="section-title">Highlights</h2>
                  <p className="section-subtitle">A quick overview of what I do and how I can help.</p>
                </div>
              </header>
              <div className="section-grid">
                <article className="info-card" aria-labelledby="about-title">
                  <h3 id="about-title">About Me</h3>
                  <p>
                    I bring a detail-oriented approach to every project, combining professional communication,
                    dependable execution, and a strong commitment to excellence.
                  </p>
                </article>

                <article className="info-card" id="experience" aria-labelledby="exp-title">
                  <h3 id="exp-title">Experience</h3>
                  <p>
                    Skilled in contributing to fast-paced environments, collaborating across teams, and
                    transforming goals into thoughtful, high-quality outcomes.
                  </p>
                </article>

                <article className="info-card" id="contact-intro" aria-labelledby="contact-title">
                  <h3 id="contact-title">Contact</h3>
                  <p>
                    Ready to discuss opportunities, partnerships, or projects. Let&apos;s connect and build
                    something meaningful together.
                  </p>
                </article>
              </div>
            </section>

            <section className="section" id="skills" aria-labelledby="skills-title">
              <header className="section-header">
                <div>
                  <h2 className="section-title" id="skills-title">Core Skills</h2>
                  <p className="section-subtitle">Technical proficiencies and strengths</p>
                </div>
                <div className="chips" aria-label="Key tags">
                  <span className="chip">Frontend</span>
                  <span className="chip">Backend</span>
                  <span className="chip">Product</span>
                </div>
              </header>
              <div className="skill-grid">
                <article className="skill-card" aria-label="JavaScript skill">
                  <header>
                    <span className="skill-name">JavaScript / TypeScript</span>
                    <span className="skill-level">Expert</span>
                  </header>
                  <div className="progress" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={95}>
                    <span style={{ width: "95%" }} />
                  </div>
                  <div className="chips">
                    <span className="chip">ESNext</span>
                    <span className="chip">Node.js</span>
                    <span className="chip">Tooling</span>
                  </div>
                </article>

                <article className="skill-card" aria-label="React skill">
                  <header>
                    <span className="skill-name">React & Modern UI</span>
                    <span className="skill-level">Advanced</span>
                  </header>
                  <div className="progress" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={90}>
                    <span style={{ width: "90%" }} />
                  </div>
                  <div className="chips">
                    <span className="chip">Next.js</span>
                    <span className="chip">Design Systems</span>
                    <span className="chip">Accessibility</span>
                  </div>
                </article>

                <article className="skill-card" aria-label="Cloud skill">
                  <header>
                    <span className="skill-name">Cloud & DevOps</span>
                    <span className="skill-level">Advanced</span>
                  </header>
                  <div className="progress" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={80}>
                    <span style={{ width: "80%" }} />
                  </div>
                  <div className="chips">
                    <span className="chip">AWS</span>
                    <span className="chip">CI/CD</span>
                    <span className="chip">Observability</span>
                  </div>
                </article>
              </div>
            </section>

            <section className="section" aria-labelledby="experience-title">
              <header className="section-header">
                <div>
                  <h2 className="section-title" id="experience-title">Experience</h2>
                  <p className="section-subtitle">Roles that shaped my approach and impact</p>
                </div>
              </header>
              <ol className="timeline" aria-label="Work timeline">
                <li className="timeline-item">
                  <div className="timeline-meta">
                    <span>Staff Software Engineer</span>
                    <span>•</span>
                    <span>TechCorp</span>
                    <span>•</span>
                    <time dateTime="2021-01">2021</time>–Present
                  </div>
                  <h3 className="timeline-role">Leading platform initiatives for scalable, secure web apps</h3>
                  <ul className="timeline-points">
                    <li>Drove architecture for multi-tenant platform serving 1M+ users.</li>
                    <li>Mentored engineers; established code quality and testing standards.</li>
                    <li>Partnered with product to increase retention by 12% YoY.</li>
                  </ul>
                </li>
                <li className="timeline-item">
                  <div className="timeline-meta">
                    <span>Senior Frontend Engineer</span>
                    <span>•</span>
                    <span>Acme Inc.</span>
                    <span>•</span>
                    <time dateTime="2018-03">2018</time>–2020
                  </div>
                  <h3 className="timeline-role">Built design system and modernized web stack</h3>
                  <ul className="timeline-points">
                    <li>Created component library adopted across 6 product teams.</li>
                    <li>Improved performance (TTI -35%) with code-splitting and SSR.</li>
                    <li>Led accessibility initiative to AA compliance.</li>
                  </ul>
                </li>
                <li className="timeline-item">
                  <div className="timeline-meta">
                    <span>Software Engineer</span>
                    <span>•</span>
                    <span>Startup Studio</span>
                    <span>•</span>
                    <time dateTime="2015-06">2015</time>–2018
                  </div>
                  <h3 className="timeline-role">Shipped MVPs and iterated to product-market fit</h3>
                  <ul className="timeline-points">
                    <li>Delivered 10+ full-stack MVPs across e‑commerce and SaaS.</li>
                    <li>Implemented analytics loops to guide roadmap decisions.</li>
                  </ul>
                </li>
              </ol>
            </section>

            <section className="section" id="projects" aria-labelledby="projects-title">
              <header className="section-header">
                <div>
                  <h2 className="section-title" id="projects-title">Selected Projects</h2>
                  <p className="section-subtitle">A few examples of work and outcomes</p>
                </div>
              </header>
              <div className="projects-grid">
                <article className="project-card">
                  <h3 className="project-title">Analytics Dashboard</h3>
                  <p className="project-desc">
                    Real-time analytics with custom charting, role-based access, and export pipelines.
                  </p>
                  <div className="chips">
                    <span className="chip">Next.js</span>
                    <span className="chip">WebSockets</span>
                    <span className="chip">D3</span>
                  </div>
                  <div className="project-actions">
                    <a className="btn btn-secondary" href="#" aria-disabled="true">Case Study</a>
                  </div>
                </article>

                <article className="project-card">
                  <h3 className="project-title">Design System</h3>
                  <p className="project-desc">
                    Cross-platform component library with theming, tokens, and accessibility baked in.
                  </p>
                  <div className="chips">
                    <span className="chip">Storybook</span>
                    <span className="chip">Tokens</span>
                    <span className="chip">A11y</span>
                  </div>
                  <div className="project-actions">
                    <a className="btn btn-secondary" href="#" aria-disabled="true">Docs</a>
                  </div>
                </article>

                <article className="project-card">
                  <h3 className="project-title">Payments Platform</h3>
                  <p className="project-desc">
                    PCI-compliant checkout with subscription billing, dunning, and reporting.
                  </p>
                  <div className="chips">
                    <span className="chip">Node.js</span>
                    <span className="chip">Stripe</span>
                    <span className="chip">Postgres</span>
                  </div>
                  <div className="project-actions">
                    <a className="btn btn-secondary" href="#" aria-disabled="true">Overview</a>
                  </div>
                </article>
              </div>
            </section>

            <section className="section" id="testimonials" aria-labelledby="testimonials-title">
              <header className="section-header">
                <div>
                  <h2 className="section-title" id="testimonials-title">Testimonials</h2>
                  <p className="section-subtitle">What colleagues and clients say</p>
                </div>
              </header>
              <div className="testimonials">
                <figure className="testimonial">
                  <blockquote className="quote">A thoughtful leader who ships with quality and empathy for users.</blockquote>
                  <figcaption className="cite">— Product Manager, TechCorp</figcaption>
                </figure>
                <figure className="testimonial">
                  <blockquote className="quote">Turned our messy prototype into a reliable, scalable application.</blockquote>
                  <figcaption className="cite">— Founder, Startup Studio</figcaption>
                </figure>
                <figure className="testimonial">
                  <blockquote className="quote">Sets a high bar for code quality and cross-team collaboration.</blockquote>
                  <figcaption className="cite">— Engineering Manager, Acme Inc.</figcaption>
                </figure>
              </div>
            </section>

            <section className="section" id="education" aria-labelledby="education-title">
              <header className="section-header">
                <div>
                  <h2 className="section-title" id="education-title">Education & Certifications</h2>
                  <p className="section-subtitle">Foundations and ongoing learning</p>
                </div>
              </header>
              <div className="edu-grid">
                <article className="edu-card">
                  <h4>B.S. in Computer Science</h4>
                  <div className="edu-meta">State University • 2011–2015</div>
                  <p className="project-desc" style={{margin: 0}}>
                    Focus on software engineering, human-computer interaction, and systems.
                  </p>
                </article>
                <article className="edu-card">
                  <h4>Professional Certifications</h4>
                  <div className="edu-meta">AWS Certified • Scrum • Accessibility</div>
                  <p className="project-desc" style={{margin: 0}}>
                    Continuous learning across cloud, delivery, and inclusive design.
                  </p>
                </article>
              </div>
            </section>

            <section className="section" id="contact" aria-labelledby="contact-section-title">
              <header className="section-header">
                <div>
                  <h2 className="section-title" id="contact-section-title">Let&apos;s Connect</h2>
                  <p className="section-subtitle">Reach out for opportunities, projects, or collaboration</p>
                </div>
              </header>
              <div className="contact-grid">
                <aside className="contact-card" aria-label="Contact details">
                  <h3 style={{marginTop: 0}}>Contact Details</h3>
                  <ul className="contact-list">
                    <li>Email: <a href="mailto:hello@example.com">hello@example.com</a></li>
                    <li>LinkedIn: <a href="#" aria-disabled="true">linkedin.com/in/yourprofile</a></li>
                    <li>GitHub: <a href="#" aria-disabled="true">github.com/yourhandle</a></li>
                    <li>Location: Remote • Global</li>
                  </ul>
                  <div className="cta-group" style={{marginTop: '1rem'}}>
                    <a className="btn btn-primary" href="/resume.pdf" target="_blank" rel="noopener noreferrer" download>Download Resume</a>
                    <a className="btn btn-secondary" href="#projects">View Projects</a>
                  </div>
                </aside>

                <form className="contact-form" method="post" action="mailto:hello@example.com" encType="text/plain" aria-label="Contact form">
                  <div className="form-row">
                    <div className="form-field">
                      <label htmlFor="name">Name</label>
                      <input id="name" name="name" type="text" placeholder="Your name" required />
                    </div>
                    <div className="form-field">
                      <label htmlFor="email">Email</label>
                      <input id="email" name="email" type="email" placeholder="you@example.com" required />
                    </div>
                  </div>
                  <div className="form-field">
                    <label htmlFor="subject">Subject</label>
                    <input id="subject" name="subject" type="text" placeholder="How can I help?" />
                  </div>
                  <div className="form-field">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows={5} placeholder="Share a few details about your goals..." required />
                  </div>
                  <div className="form-actions">
                    <button className="btn btn-primary" type="submit">Send Message</button>
                    <a className="btn btn-ghost" href="mailto:hello@example.com">Open Email Client</a>
                  </div>
                </form>
              </div>
            </section>

            <footer className="site-footer" role="contentinfo">
              <div className="footer-inner">
                <small>© {new Date().getFullYear()} All rights reserved.</small>
                <nav className="footer-nav" aria-label="Footer">
                  <a href="#skills">Skills</a>
                  <a href="#experience">Experience</a>
                  <a href="#projects">Projects</a>
                  <a href="#education">Education</a>
                  <a href="#contact">Contact</a>
                </nav>
              </div>
            </footer>
          </div>
        </main>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'A. Engineer',
              jobTitle: 'Software Engineer',
              url: '/',
              sameAs: ['https://linkedin.com', 'https://github.com'],
            }),
          }}
        />
      </div>
    </div>
  );
}