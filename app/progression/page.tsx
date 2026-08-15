import type { Metadata } from "next";
import {
  ArticleNav,
  PageHero,
  Tip,
  VerificationNote,
} from "../components/GuideElements";
import { progressionStages } from "../content";

export const metadata: Metadata = {
  title: "Progression Guide",
  description:
    "A practical My Toll Farm progression route for placement capacity, toll lines, traffic, car speed, spawn speed, Roll Luck, Roll Size, and Rebirth.",
  alternates: { canonical: "/progression" },
};

export default function ProgressionPage() {
  return (
    <>
      <PageHero
        eyebrow="PROGRESSION GUIDE"
        title="Improve the bottleneck you can see"
        intro="This is a practical route built from verified controls—not a claim that one mathematically perfect upgrade order works for every balance update."
        crumbs={[{ href: "/", label: "Home" }, { label: "Progression" }]}
      />
      <div className="article-shell container">
        <aside className="toc">
          <strong>ON THIS PAGE</strong>
          <a href="#route">The 3-stage route</a>
          <a href="#choose">How to choose</a>
          <a href="#vehicles">Vehicle decisions</a>
          <a href="#rebirth-plan">Rebirth planning</a>
        </aside>
        <article className="guide-article">
          <section id="route">
            <p className="eyebrow">A SUGGESTED ROUTE</p>
            <h2>Move through three decision stages</h2>
            <div className="progression-stack">
              {progressionStages.map((stage, index) => (
                <article key={stage.stage}>
                  <span className="stage-number">0{index + 1}</span>
                  <div>
                    <p>{stage.eyebrow}</p>
                    <h3>{stage.stage}</h3>
                    <ul>
                      {stage.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <small>{stage.readWhen}</small>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="choose">
            <p className="eyebrow">DO NOT UPGRADE BLINDLY</p>
            <h2>Match the upgrade to the current limit</h2>
            <div className="decision-table" role="table" aria-label="Upgrade decision guide">
              <div className="decision-head" role="row">
                <span role="columnheader">If you notice…</span>
                <span role="columnheader">Inspect these verified controls</span>
              </div>
              <div role="row">
                <span role="cell">No room for another placed car</span>
                <strong role="cell">Traffic Lines and placement capacity</strong>
              </div>
              <div role="row">
                <span role="cell">You want the toll operation to move faster</span>
                <strong role="cell">Car Speed, Spawn Speed, Toll Line levels</strong>
              </div>
              <div role="row">
                <span role="cell">You are choosing how to improve future rolls</span>
                <strong role="cell">Roll Luck and Roll Size</strong>
              </div>
            </div>
            <Tip tone="priority" label="Editorial recommendation">
              Compare the current price and visible result of each upgrade in your
              server. The game was still changing when this guide was verified.
            </Tip>
          </section>

          <section id="vehicles">
            <p className="eyebrow">COLLECTION MANAGEMENT</p>
            <h2>Place what you own before collecting without a plan</h2>
            <p>
              Public gameplay shows different vehicle rarity labels and different
              displayed income values. It also shows separate <strong>Unequip</strong>
              and <strong>Delete</strong> actions in the vehicle panel.
            </p>
            <ol className="numbered-list">
              <li>Fill useful open slots with vehicles you already own.</li>
              <li>Use Unequip when you want to test a different placement.</li>
              <li>Do not assume Delete has a refund or undo; neither was verified.</li>
            </ol>
          </section>

          <section id="rebirth-plan">
            <p className="eyebrow">THE RESET DECISION</p>
            <h2>Plan for the one confirmed reset: Money</h2>
            <p>
              Rebirth increases the multiplier and explicitly resets Money. Use the
              requirement shown in your live panel, then decide whether you are ready
              to rebuild the cash portion of the loop.
            </p>
            <Tip tone="avoid" label="Do not overclaim">
              The available evidence does not establish which vehicles, upgrades, or
              lines persist. Read the current panel and update notes before acting.
            </Tip>
          </section>

          <VerificationNote>
            The upgrade names on this page were read directly from public gameplay.
            The route and bottleneck method are clearly labeled as practical advice,
            not an official or proven optimal build.
          </VerificationNote>
          <ArticleNav
            previous={{ href: "/gameplay", label: "Core Gameplay Loop" }}
            next={{ href: "/mistakes", label: "Common Mistakes" }}
          />
        </article>
      </div>
    </>
  );
}
