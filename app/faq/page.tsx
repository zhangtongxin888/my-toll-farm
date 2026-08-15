import type { Metadata } from "next";
import Link from "next/link";
import {
  ArticleNav,
  JsonLd,
  PageHero,
} from "../components/GuideElements";
import { faqs, SITE_URL } from "../content";

export const metadata: Metadata = {
  title: "Beginner FAQ",
  description:
    "Fact-checked My Toll Farm answers about saving, money, car placement, upgrades, Rebirth, removing cars, offline income, and codes.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          url: `${SITE_URL}/faq`,
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        }}
      />
      <PageHero
        eyebrow="BEGINNER FAQ"
        title="Direct answers, with clear limits"
        intro="Each answer says what the sources support. When a feature was not confirmed—such as offline income or a codes system—the guide says so plainly."
        crumbs={[{ href: "/", label: "Home" }, { label: "FAQ" }]}
      />
      <div className="container single-article-shell">
        <article className="guide-article wide-article">
          <section>
            <div className="faq-list full-faq-list">
              {faqs.map((faq) => (
                <details key={faq.question} id={faq.question.toLowerCase().replace(/[^a-z0-9]+/g, "-")}>
                  <summary>{faq.question}</summary>
                  <div>
                    <p>{faq.answer}</p>
                    <Link href={faq.href}>{faq.linkLabel} →</Link>
                  </div>
                </details>
              ))}
            </div>
          </section>
          <div className="faq-help-card">
            <div>
              <span>Need the complete route?</span>
              <h2>Return to the first-session checklist.</h2>
            </div>
            <Link className="button" href="/beginner-guide">
              Start the Beginner Guide →
            </Link>
          </div>
          <ArticleNav
            previous={{ href: "/mistakes", label: "Common Mistakes" }}
            next={{ href: "/sources", label: "Sources & Verification" }}
          />
        </article>
      </div>
    </>
  );
}
