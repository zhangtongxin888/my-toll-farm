import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, Tip } from "../components/GuideElements";
import { GAME_URL, VERIFIED_DATE } from "../content";
import { pageMetadata } from "../metadata";

export const metadata: Metadata = pageMetadata({
  title: "Sources & Verification",
  description:
    "See how My Toll Farm gameplay facts were checked against official Roblox data, approved artwork, and public gameplay, plus the claims this guide does not make.",
  path: "/sources",
});

const sources = [
  {
    id: "official-roblox",
    type: "Primary source",
    title: "Official Roblox experience page",
    href: GAME_URL,
    body: "Confirms the experience name, automatic saving statement, creator copyright notice, and the official game destination.",
  },
  {
    id: "official-api",
    type: "Primary source",
    title: "Roblox game details API",
    href: "https://games.roblox.com/v1/games?universeIds=10552540426",
    body: "Confirms Place ID 96425088123775, Universe ID 10552540426, verified creator JOFO Games, and the Simulation / Incremental Simulator category.",
  },
  {
    id: "official-media",
    type: "Primary source",
    title: "Roblox approved game media",
    href: "https://games.roblox.com/v2/games/10552540426/media",
    body: "Connects the approved official artwork to this universe. The artwork establishes the car-and-toll theme, not a guaranteed earnings number.",
  },
  {
    id: "gameplay",
    type: "Supporting evidence",
    title: "Public My Toll Farm gameplay recording",
    href: "https://www.youtube.com/watch?v=gGGfn8rGIdU",
    body: "A long public session used to visually verify ROLL, PLACE CAR, placement capacity, Unequip/Delete, named upgrades, active toll income, and the Rebirth Money warning. It is not an official developer video, so these mechanics are described without frozen prices.",
  },
] as const;

export default function SourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="SOURCES & VERIFICATION"
        title="What we checked—and what we leave unknown"
        intro={`The current guide was verified on ${VERIFIED_DATE}. Official Roblox sources support identity and metadata; public gameplay supports visible mechanics at a lower confidence level.`}
        crumbs={[{ href: "/", label: "Home" }, { label: "Sources" }]}
      />
      <div className="container single-article-shell">
        <article className="guide-article wide-article sources-article">
          <section>
            <p className="eyebrow">EVIDENCE LADDER</p>
            <h2>Official data first, visible gameplay second</h2>
            <p>
              Strong claims come from Roblox&apos;s own page and APIs. Interface and
              loop details are used only when public gameplay clearly matches the
              official name, visuals, and destination. Recommendations are labeled as
              recommendations.
            </p>
            <div className="source-list">
              {sources.map((source, index) => (
                <article id={source.id} key={source.href}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <p>{source.type}</p>
                    <h3>{source.title}</h3>
                    <p>{source.body}</p>
                    <a href={source.href} rel="noreferrer" target="_blank">
                      Open source ↗
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="limits">
            <p className="eyebrow">NOT CONFIRMED</p>
            <h2>Claims this guide intentionally avoids</h2>
            <ul className="boundary-list">
              <li>Working codes or a verified official code system.</li>
              <li>Offline income after leaving the active session.</li>
              <li>A mathematically fastest or universally best upgrade order.</li>
              <li>Fixed vehicle prices, upgrade prices, roll odds, or Rebirth costs.</li>
              <li>Everything retained or lost after Rebirth beyond the Money reset.</li>
              <li>A refund or undo after using Delete.</li>
              <li>Specific group reward contents or guaranteed premium-free access.</li>
            </ul>
            <Tip tone="priority" label="Why this matters">
              A shorter truthful answer keeps the guide useful after balance updates.
              If a live label changes, follow the current game screen.
            </Tip>
          </section>

          <div className="faq-help-card">
            <div>
              <span>Ready to use the research?</span>
              <h2>Start with the verified first-session steps.</h2>
            </div>
            <Link className="button" href="/beginner-guide">
              Open the Beginner Guide →
            </Link>
          </div>
        </article>
      </div>
    </>
  );
}
