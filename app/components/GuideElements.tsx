import Link from "next/link";
import type { ReactNode } from "react";
import { learningPath, VERIFIED_DATE } from "../content";

type Crumb = { href?: string; label: string };

export function PageHero({
  eyebrow,
  title,
  intro,
  crumbs,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  crumbs: Crumb[];
  children?: ReactNode;
}) {
  return (
    <section className="page-hero">
      <div className="container narrow">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          {crumbs.map((crumb, index) => (
            <span key={crumb.label}>
              {index > 0 && <span aria-hidden="true">/</span>}
              {crumb.href ? <Link href={crumb.href}>{crumb.label}</Link> : crumb.label}
            </span>
          ))}
        </nav>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="page-intro">{intro}</p>
        <div className="verified-line">
          <span aria-hidden="true">✓</span>
          Gameplay checked {VERIFIED_DATE} · 7 min read
        </div>
        {children}
      </div>
    </section>
  );
}

export function VerificationNote({ children }: { children: ReactNode }) {
  return (
    <aside className="verification-note">
      <span className="verification-icon" aria-hidden="true">
        ✓
      </span>
      <div>
        <strong>Verification note</strong>
        <p>{children}</p>
        <Link href="/sources">How this guide checks facts →</Link>
      </div>
    </aside>
  );
}

export function Tip({
  tone = "good",
  label,
  children,
}: {
  tone?: "good" | "priority" | "avoid";
  label: string;
  children: ReactNode;
}) {
  return (
    <aside className={`tip tip-${tone}`}>
      <strong>{label}</strong>
      <p>{children}</p>
    </aside>
  );
}

export function ArticleNav({
  previous,
  next,
}: {
  previous?: { href: string; label: string };
  next?: { href: string; label: string };
}) {
  return (
    <nav className="article-nav" aria-label="Guide pagination">
      {previous ? (
        <Link href={previous.href}>
          <span>Previous</span>
          <strong>← {previous.label}</strong>
        </Link>
      ) : (
        <span />
      )}
      {next && (
        <Link className="next" href={next.href}>
          <span>Next</span>
          <strong>{next.label} →</strong>
        </Link>
      )}
    </nav>
  );
}

export function LearningPath({
  title = "Keep learning",
}: {
  title?: string;
}) {
  return (
    <section className="learning-section">
      <div className="container">
        <div className="section-heading compact">
          <p className="eyebrow">YOUR NEXT STEP</p>
          <h2>{title}</h2>
        </div>
        <div className="learning-grid">
          {learningPath.map((item) => (
            <Link className="learning-card" href={item.href} key={item.href}>
              <span>{item.eyebrow}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <strong>Read guide →</strong>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
