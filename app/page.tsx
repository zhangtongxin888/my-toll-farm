import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { LearningPath, VerificationNote } from "./components/GuideElements";
import {
  coreLoop,
  faqs,
  mistakes,
  progressionStages,
  quickStart,
} from "./content";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="hero-road" aria-hidden="true" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="eyebrow-dot" /> NEW PLAYER START HERE
            </p>
            <h1>
              Build your first
              <span>toll loop with confidence.</span>
            </h1>
            <p className="hero-intro">
              A verified, step-by-step My Toll Farm! beginner guide: know what to
              roll, where to place it, how the loop earns, and what to improve next.
            </p>
            <div className="hero-actions">
              <Link className="button button-large" href="/beginner-guide">
                Start the step-by-step guide <span aria-hidden="true">→</span>
              </Link>
              <Link className="text-link" href="/gameplay">
                See the core gameplay loop <span aria-hidden="true">↘</span>
              </Link>
            </div>
            <ul className="hero-trust" aria-label="Guide benefits">
              <li>
                <span aria-hidden="true">✓</span> Quick start
              </li>
              <li>
                <span aria-hidden="true">✓</span> Clear next steps
              </li>
              <li>
                <span aria-hidden="true">✓</span> No invented facts
              </li>
            </ul>
          </div>
          <div className="hero-visual">
            <div className="thumbnail-frame">
              <Image
                src="/official-game-thumbnail.png"
                alt="Official My Toll Farm artwork showing a car at a toll barrier"
                width={767}
                height={432}
                priority
              />
              <span>Official game artwork</span>
            </div>
            <div className="checklist-card">
              <div className="checklist-head">
                <div>
                  <span>BEGINNER CHECKLIST</span>
                  <strong>Your first loop</strong>
                </div>
                <span className="route-badge" aria-hidden="true">
                  3
                </span>
              </div>
              <ol>
                <li>
                  <span>1</span>
                  <div>
                    <strong>Use the ROLL station</strong>
                    <small>Add a vehicle with in-game cash.</small>
                  </div>
                </li>
                <li>
                  <span>2</span>
                  <div>
                    <strong>Find PLACE CAR</strong>
                    <small>Choose an open slot on your plot.</small>
                  </div>
                </li>
                <li>
                  <span>3</span>
                  <div>
                    <strong>Reinvest toll income</strong>
                    <small>Expand capacity and upgrades.</small>
                  </div>
                </li>
              </ol>
              <Link href="/beginner-guide">Continue the guide →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section quick-start-section" id="quick-start">
        <div className="container">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">QUICK START</p>
              <h2>Get moving in 3 clear steps</h2>
            </div>
            <p>
              These are the first actions repeatedly shown in public gameplay.
              Follow them in order, then use the full guide for capacity and Rebirth.
            </p>
          </div>
          <div className="step-grid">
            {quickStart.map((step) => (
              <article className="step-card" key={step.number}>
                <div className="step-number">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
                <div className="why-line">
                  <span aria-hidden="true">↳</span>
                  <strong>{step.tip}</strong>
                </div>
              </article>
            ))}
          </div>
          <div className="section-action">
            <Link className="button" href="/beginner-guide">
              Open the complete beginner guide →
            </Link>
          </div>
        </div>
      </section>

      <section className="section loop-section" id="core-loop">
        <div className="container">
          <div className="section-heading centered">
            <p className="eyebrow">THE SYSTEM AT A GLANCE</p>
            <h2>Understand the core loop</h2>
            <p>
              My Toll Farm! is officially categorized as an incremental simulation.
              The verified loop connects four repeatable decisions.
            </p>
          </div>
          <div className="loop-grid">
            {coreLoop.map((item, index) => (
              <article className="loop-card" key={item.title}>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                {index < coreLoop.length - 1 && (
                  <b className="loop-arrow" aria-hidden="true">
                    →
                  </b>
                )}
              </article>
            ))}
          </div>
          <VerificationNote>
            Active-session earnings, named upgrades, placement limits, and the
            Rebirth Money reset were checked against public game footage. Exact
            prices are intentionally omitted because they can change.
          </VerificationNote>
          <div className="section-action">
            <Link className="button button-dark" href="/gameplay">
              Read the full gameplay guide →
            </Link>
          </div>
        </div>
      </section>

      <section className="section progression-preview" id="progression">
        <div className="container progression-layout">
          <div className="section-heading sticky-heading">
            <p className="eyebrow">A PRACTICAL ROUTE</p>
            <h2>Know what to work toward next</h2>
            <p>
              This route is editorial guidance based on verified controls. It is not
              presented as a mathematically proven best build.
            </p>
            <Link className="text-link" href="/progression">
              See the full progression plan →
            </Link>
          </div>
          <div className="timeline">
            {progressionStages.map((stage, index) => (
              <article className="timeline-item" key={stage.stage}>
                <span className="timeline-marker">{index + 1}</span>
                <div>
                  <p>{stage.eyebrow}</p>
                  <h3>{stage.stage}</h3>
                  <ul>
                    {stage.items.slice(0, 2).map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <small>{stage.readWhen}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section mistakes-preview" id="mistakes">
        <div className="container">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">SAVE THE DETOUR</p>
              <h2>Avoid new-player mistakes</h2>
            </div>
            <p>
              The fastest correction is often to read the live panel before you
              spend, place, delete, or reset.
            </p>
          </div>
          <div className="mistake-grid">
            {mistakes.slice(0, 3).map((mistake, index) => (
              <article className="mistake-card" key={mistake.title}>
                <span>0{index + 1}</span>
                <h3>{mistake.title}</h3>
                <p>{mistake.why}</p>
                <strong>Better move</strong>
                <p>{mistake.move}</p>
              </article>
            ))}
          </div>
          <div className="section-action">
            <Link className="button button-outline" href="/mistakes">
              See all 6 mistakes →
            </Link>
          </div>
        </div>
      </section>

      <section className="section faq-preview" id="faq">
        <div className="container faq-layout">
          <div className="section-heading sticky-heading">
            <p className="eyebrow">FAST ANSWERS</p>
            <h2>Questions beginners ask first</h2>
            <p>
              Short answers up front, with a clear link when a topic needs the full
              guide.
            </p>
            <Link className="button button-dark" href="/faq">
              Browse every FAQ →
            </Link>
          </div>
          <div className="faq-list">
            {faqs.slice(0, 5).map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <div>
                  <p>{faq.answer}</p>
                  <Link href={faq.href}>{faq.linkLabel} →</Link>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <LearningPath title="Pick up exactly where you need" />
    </>
  );
}
