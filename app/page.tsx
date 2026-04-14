import { Navbar } from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900">
      <style>{`
        .page-shell {
          min-height: 100vh;
          background:
            radial-gradient(circle at top, rgba(59, 130, 246, 0.12), transparent 34%),
            linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
        }

        .content-wrap {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 1.5rem;
        }

        .hero-card {
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(148, 163, 184, 0.22);
          background: rgba(255, 255, 255, 0.78);
          box-shadow: 0 20px 60px rgba(15, 23, 42, 0.08);
          backdrop-filter: blur(14px);
          border-radius: 1.5rem;
        }

        .hero-grid {
          display: grid;
          gap: 2rem;
          grid-template-columns: 1.2fr 0.8fr;
          align-items: center;
          padding: 2rem;
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          border-radius: 999px;
          padding: 0.5rem 0.9rem;
          background: rgba(37, 99, 235, 0.08);
          color: #1d4ed8;
          font-size: 0.875rem;
          font-weight: 600;
          letter-spacing: 0.02em;
        }

        .hero-title {
          margin: 1rem 0 0.75rem;
          font-size: clamp(2.25rem, 5vw, 4.5rem);
          line-height: 1.05;
          letter-spacing: -0.04em;
          color: #0f172a;
        }

        .hero-text {
          max-width: 42rem;
          color: #475569;
          font-size: clamp(1rem, 1.3vw, 1.125rem);
          line-height: 1.75;
        }

        .cta-group {
          display: flex;
          flex-wrap: wrap;
          gap: 0.875rem;
          margin-top: 1.75rem;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          padding: 0.95rem 1.3rem;
          font-weight: 600;
          text-decoration: none;
          transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
        }

        .btn-primary {
          background: linear-gradient(135deg, #2563eb, #1d4ed8);
          color: white;
          box-shadow: 0 12px 30px rgba(37, 99, 235, 0.25);
        }

        .btn-secondary {
          background: white;
          color: #0f172a;
          border: 1px solid rgba(148, 163, 184, 0.35);
        }

        .btn:hover {
          transform: translateY(-1px);
        }

        .resume-panel {
          border-radius: 1.25rem;
          padding: 1.5rem;
          background: linear-gradient(180deg, rgba(15, 23, 42, 0.96), rgba(30, 41, 59, 0.98));
          color: white;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08);
        }

        .resume-panel h2 {
          margin: 0 0 0.5rem;
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
          font-size: 1.35rem;
          margin-bottom: 0.25rem;
        }

        .stat span {
          color: rgba(226, 232, 240, 0.75);
          font-size: 0.95rem;
        }

        .section {
          margin-top: 1.5rem;
          padding: 1.5rem 0 0;
        }

        .section-grid {
          display: grid;
          gap: 1.25rem;
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .info-card {
          border-radius: 1.25rem;
          background: white;
          border: 1px solid rgba(148, 163, 184, 0.18);
          padding: 1.35rem;
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.04);
        }

        .info-card h3 {
          margin: 0 0 0.5rem;
          font-size: 1.05rem;
          color: #0f172a;
        }

        .info-card p {
          margin: 0;
          color: #475569;
          line-height: 1.7;
          font-size: 0.98rem;
        }

        @media (max-width: 900px) {
          .hero-grid,
          .section-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .content-wrap {
            padding: 1rem;
          }

          .hero-grid {
            padding: 1.25rem;
          }

          .cta-group {
            flex-direction: column;
          }

          .btn {
            width: 100%;
          }

          .stats {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="page-shell">
        <Navbar />
        <main className="content-wrap">
          <section className="hero-card" aria-labelledby="hero-title">
            <div className="hero-grid">
              <div>
                <span className="eyebrow">Professional Resume Website</span>
                <h1 id="hero-title" className="hero-title">
                  Hi, I&apos;m a dedicated professional building impactful digital experiences.
                </h1>
                <p className="hero-text">
                  I help teams and clients turn ideas into polished, user-friendly products with a strong
                  focus on clarity, quality, and measurable results. This resume website highlights my
                  background, strengths, and commitment to delivering excellent work.
                </p>

                <div className="cta-group">
                  <a className="btn btn-primary" href="#contact">
                    Contact Me
                  </a>
                  <a className="btn btn-secondary" href="#experience">
                    View Experience
                  </a>
                </div>
              </div>

              <aside className="resume-panel" aria-label="Resume summary">
                <h2>Resume Snapshot</h2>
                <p>
                  A concise overview of skills, achievements, and professional value for employers,
                  collaborators, and clients.
                </p>
                <div className="stats">
                  <div className="stat">
                    <strong>10+ Years</strong>
                    <span>Professional experience</span>
                  </div>
                  <div className="stat">
                    <strong>50+ Projects</strong>
                    <span>Delivered successfully</span>
                  </div>
                  <div className="stat">
                    <strong>Top Skills</strong>
                    <span>Leadership, strategy, execution</span>
                  </div>
                  <div className="stat">
                    <strong>Available</strong>
                    <span>Open to opportunities</span>
                  </div>
                </div>
              </aside>
            </div>
          </section>

          <section className="section" aria-label="Professional highlights">
            <div className="section-grid">
              <article className="info-card">
                <h3>About Me</h3>
                <p>
                  I bring a detail-oriented approach to every project, combining professional communication,
                  dependable execution, and a strong commitment to excellence.
                </p>
              </article>

              <article className="info-card" id="experience">
                <h3>Experience</h3>
                <p>
                  Skilled in contributing to fast-paced environments, collaborating across teams, and
                  transforming goals into thoughtful, high-quality outcomes.
                </p>
              </article>

              <article className="info-card" id="contact">
                <h3>Contact</h3>
                <p>
                  Ready to discuss opportunities, partnerships, or projects. Let&apos;s connect and build
                  something meaningful together.
                </p>
              </article>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}