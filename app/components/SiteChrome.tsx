import Link from "next/link";
import { GAME_URL, navigation, VERIFIED_DATE } from "../content";

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="nav-shell">
        <Link className="brand" href="/" aria-label="My Toll Farm Guide home">
          <span className="brand-mark" aria-hidden="true">
            TF
          </span>
          <span>
            <strong>My Toll Farm!</strong>
            <small>Beginner Guide</small>
          </span>
        </Link>
        <nav className="primary-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link className="button button-small" href="/beginner-guide">
          Start Guide <span aria-hidden="true">→</span>
        </Link>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <span className="brand-mark" aria-hidden="true">
            TF
          </span>
          <div>
            <strong>My Toll Farm! Beginner Guide</strong>
            <p>A fact-checked, independent guide for clearer first sessions.</p>
          </div>
        </div>
        <div className="footer-links">
          <div>
            <strong>Learn</strong>
            <Link href="/beginner-guide">Beginner Guide</Link>
            <Link href="/gameplay">Core Loop</Link>
            <Link href="/progression">Progression</Link>
          </div>
          <div>
            <strong>Help</strong>
            <Link href="/mistakes">Common Mistakes</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/sources">Sources &amp; Verification</Link>
          </div>
        </div>
      </div>
      <div className="footer-legal">
        <p>
          Independent fan guide. Not affiliated with Roblox or JOFO Games.
          Facts last checked {VERIFIED_DATE}.
        </p>
        <a href={GAME_URL} rel="noreferrer" target="_blank">
          Official game page <span aria-hidden="true">↗</span>
        </a>
      </div>
    </footer>
  );
}
