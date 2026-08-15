import type { Metadata } from "next";
import Link from "next/link";
import {
  ArticleNav,
  PageHero,
  Tip,
  VerificationNote,
} from "../components/GuideElements";
import { coreLoop, upgrades } from "../content";
import { pageMetadata } from "../metadata";

export const metadata: Metadata = pageMetadata({
  title: "Core Gameplay Loop",
  description:
    "Understand the verified My Toll Farm gameplay loop: roll cars, place them, earn during active traffic, expand capacity, upgrade, and Rebirth.",
  path: "/gameplay",
});

export default function GameplayPage() {
  return (
    <>
      <PageHero
        eyebrow="CORE GAMEPLAY"
        title="How the toll loop turns into progress"
        intro="Every useful early decision fits into one loop: add a vehicle, place it, let active traffic earn, then expand the part that is holding you back."
        crumbs={[{ href: "/", label: "Home" }, { label: "Core Loop" }]}
      />
      <div className="article-shell container">
        <aside className="toc">
          <strong>ON THIS PAGE</strong>
          <a href="#loop">The 4-part loop</a>
          <a href="#income">Active toll income</a>
          <a href="#upgrades">Upgrade categories</a>
          <a href="#rebirth-loop">Rebirth and rebuild</a>
        </aside>
        <article className="guide-article">
          <section id="loop">
            <p className="eyebrow">THE REPEATABLE SYSTEM</p>
            <h2>Roll → place → earn → expand</h2>
            <div className="article-loop">
              {coreLoop.map((item) => (
                <div key={item.title}>
                  <span>{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              ))}
            </div>
            <Tip label="The useful mental model">
              Collection is not the same as production. A vehicle only joins the toll
              loop after you place it in available plot capacity.
            </Tip>
          </section>

          <section id="income">
            <p className="eyebrow">WHAT WAS VERIFIED</p>
            <h2>Income rises during an active session</h2>
            <p>
              Public gameplay repeatedly shows the cash balance increasing while
              placed traffic moves through the toll lanes, even while the player is
              standing still. That supports active automatic earnings.
            </p>
            <p>
              It does <strong>not</strong> prove offline income after leaving the game.
              This guide keeps those two claims separate.
            </p>
          </section>

          <section id="upgrades">
            <p className="eyebrow">THE CONTROLS YOU CAN COMPARE</p>
            <h2>Observed upgrade categories</h2>
            <div className="upgrade-grid">
              {upgrades.map((upgrade, index) => (
                <div key={upgrade}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{upgrade}</strong>
                </div>
              ))}
            </div>
            <p>
              The names are verified, but no source proves one universal best order.
              A practical choice is to inspect the live costs and improve the category
              that is currently limiting placement, traffic, or rolling.
            </p>
            <Link className="next-step-link" href="/progression">
              Turn the categories into a progression plan →
            </Link>
          </section>

          <section id="rebirth-loop">
            <p className="eyebrow">THE LONGER LOOP</p>
            <h2>Rebirth raises the multiplier, then the loop begins again</h2>
            <p>
              The observed panel shows the multiplier increasing after Rebirth and
              explicitly warns that Money resets. That makes Rebirth a deliberate
              restart, not a free upgrade on top of the current cash balance.
            </p>
            <Tip tone="avoid" label="Evidence boundary">
              Do not assume what happens to vehicles, lanes, or individual upgrades.
              The verified screen only makes the Money reset explicit.
            </Tip>
          </section>

          <VerificationNote>
            Roblox officially classifies My Toll Farm! as Simulation / Incremental
            Simulator. The mechanics on this page were confirmed against public
            gameplay that visually matches the official experience.
          </VerificationNote>
          <ArticleNav
            previous={{ href: "/beginner-guide", label: "Beginner Guide" }}
            next={{ href: "/progression", label: "Progression Plan" }}
          />
        </article>
      </div>
    </>
  );
}
