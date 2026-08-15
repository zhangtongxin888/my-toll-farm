import type { Metadata } from "next";
import Link from "next/link";
import {
  ArticleNav,
  JsonLd,
  PageHero,
  Tip,
  VerificationNote,
} from "../components/GuideElements";
import { quickStart, SITE_URL, VERIFIED_DATE_ISO } from "../content";
import { pageMetadata } from "../metadata";

export const metadata: Metadata = pageMetadata({
  title: "Beginner Guide",
  description:
    "Start My Toll Farm in the right order: roll a car, place it, build toll income, expand capacity, choose upgrades, and approach Rebirth safely.",
  path: "/beginner-guide",
});

export default function BeginnerGuidePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "My Toll Farm Beginner Guide",
          dateModified: VERIFIED_DATE_ISO,
          mainEntityOfPage: `${SITE_URL}/beginner-guide`,
          author: { "@type": "Organization", name: "My Toll Farm Guide" },
        }}
      />
      <PageHero
        eyebrow="BEGINNER GUIDE"
        title="Your first toll loop, step by step"
        intro="Follow the verified first-session actions, understand why each one matters, and reach Rebirth without relying on made-up prices or promises."
        crumbs={[{ href: "/", label: "Home" }, { label: "Beginner Guide" }]}
      >
        <div className="page-hero-actions">
          <a className="button" href="#step-1">
            Begin with Step 1 ↓
          </a>
          <Link className="text-link" href="/sources">
            Review the sources
          </Link>
        </div>
      </PageHero>

      <div className="article-shell container">
        <aside className="toc">
          <strong>ON THIS PAGE</strong>
          <a href="#before-you-roll">Before you roll</a>
          <a href="#step-1">1. Roll a car</a>
          <a href="#step-2">2. Place the car</a>
          <a href="#step-3">3. Earn and reinvest</a>
          <a href="#capacity">Placement capacity</a>
          <a href="#rebirth">Rebirth checkpoint</a>
        </aside>
        <article className="guide-article">
          <section id="before-you-roll">
            <p className="eyebrow">BEFORE YOU ROLL</p>
            <h2>Read what the live screen tells you</h2>
            <p>
              My Toll Farm! was still being updated on the verification date. That
              makes the names of core controls useful, but exact costs and balance
              targets fragile. Use this guide for the sequence of decisions and use
              your session for current prices.
            </p>
            <Tip label="Good to know">
              The official Roblox description says your progress saves automatically.
            </Tip>
          </section>

          {quickStart.map((step, index) => (
            <section className="article-step" id={`step-${index + 1}`} key={step.number}>
              <span className="article-step-number">STEP {step.number}</span>
              <h2>{step.title}</h2>
              <p>{step.body}</p>
              {index === 0 && (
                <>
                  <h3>What to look for</h3>
                  <p>
                    Find the area labeled <strong>ROLL</strong>. The interaction uses
                    in-game cash and shows a vehicle purchase result. Read the cost
                    displayed in your current server rather than relying on an old
                    screenshot.
                  </p>
                </>
              )}
              {index === 1 && (
                <>
                  <h3>What confirms success</h3>
                  <p>
                    At your plot, enter the <strong>PLACE CAR</strong> area, choose a
                    vehicle, and select an open slot. Public gameplay shows a success
                    confirmation after placement.
                  </p>
                </>
              )}
              {index === 2 && (
                <>
                  <h3>What the loop does</h3>
                  <p>
                    During active gameplay, placed vehicles join the toll-road loop
                    and the cash balance rises while traffic operates. Reinvest that
                    cash in vehicles, capacity, and the named upgrades.
                  </p>
                </>
              )}
              <Tip tone="priority" label="Priority">
                {step.tip}
              </Tip>
              {index < quickStart.length - 1 && (
                <a className="next-step-link" href={`#step-${index + 2}`}>
                  Next: {quickStart[index + 1].title} ↓
                </a>
              )}
            </section>
          ))}

          <section id="capacity">
            <p className="eyebrow">WHEN THE PLOT IS FULL</p>
            <h2>Expand placement capacity before rolling again</h2>
            <p>
              The game can stop another placement when your current capacity is full.
              In the verified footage, the message tells players to unlock more line
              capacity to place more cars.
            </p>
            <ol className="numbered-list">
              <li>Check whether an open car slot remains.</li>
              <li>If full, look for the current line or capacity unlock.</li>
              <li>Unlock space, then return to PLACE CAR.</li>
            </ol>
            <Tip tone="avoid" label="Avoid this">
              Do not keep rolling just to solve a placement-space problem. Capacity
              and collection size are separate decisions.
            </Tip>
          </section>

          <section id="rebirth">
            <p className="eyebrow">RESET CHECKPOINT</p>
            <h2>Rebirth only after reading the warning</h2>
            <p>
              The observed Rebirth panel explicitly says it resets <strong>Money</strong>
              and increases the multiplier. The evidence does not confirm every other
              item that is kept or reset, so do not build a plan around assumptions.
            </p>
            <div className="checkpoint-card">
              <span>Before you confirm</span>
              <ul>
                <li>Read the requirement shown in your live session.</li>
                <li>Accept that the current Money balance will reset.</li>
                <li>Do not assume the fate of cars, upgrades, or lanes.</li>
              </ul>
            </div>
          </section>

          <VerificationNote>
            The labels ROLL, PLACE CAR, Unequip, Delete, the capacity warning, named
            upgrades, and the Rebirth Money warning were checked in public gameplay.
            Automatic saving comes from the official Roblox description.
          </VerificationNote>

          <ArticleNav next={{ href: "/gameplay", label: "Core Gameplay Loop" }} />
        </article>
      </div>
    </>
  );
}
