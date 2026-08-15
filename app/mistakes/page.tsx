import type { Metadata } from "next";
import { ArticleNav, PageHero, Tip } from "../components/GuideElements";
import { mistakes } from "../content";

export const metadata: Metadata = {
  title: "Common Beginner Mistakes",
  description:
    "Avoid six My Toll Farm beginner mistakes involving placement capacity, Rebirth, Delete, stale prices, offline income assumptions, and promo numbers.",
  alternates: { canonical: "/mistakes" },
};

export default function MistakesPage() {
  return (
    <>
      <PageHero
        eyebrow="COMMON MISTAKES"
        title="Six detours you can avoid"
        intro="Most early setbacks come from mixing up collection, placement, active income, and resets. Use the live UI and keep these evidence boundaries in view."
        crumbs={[{ href: "/", label: "Home" }, { label: "Mistakes" }]}
      />
      <div className="container single-article-shell">
        <article className="guide-article wide-article">
          <section>
            <div className="mistakes-list">
              {mistakes.map((mistake, index) => (
                <article key={mistake.title}>
                  <span>0{index + 1}</span>
                  <div>
                    <h2>{mistake.title}</h2>
                    <div className="mistake-detail">
                      <div>
                        <strong>Why it hurts</strong>
                        <p>{mistake.why}</p>
                      </div>
                      <div>
                        <strong>Better move</strong>
                        <p>{mistake.move}</p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
          <Tip tone="priority" label="The reliable fallback">
            When this guide and your screen differ, trust the live game label for
            current costs and requirements. Use this guide for the verified decision
            sequence and for claims that have clear source support.
          </Tip>
          <ArticleNav
            previous={{ href: "/progression", label: "Progression Plan" }}
            next={{ href: "/faq", label: "Beginner FAQ" }}
          />
        </article>
      </div>
    </>
  );
}
