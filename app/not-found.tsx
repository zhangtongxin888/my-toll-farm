import Link from "next/link";

export default function NotFound() {
  return (
    <section data-adsterra-clean="" className="not-found">
      <div>
        <span>404 · WRONG TURN</span>
        <h1>This road does not reach a guide.</h1>
        <p>Return to the beginner route and pick up from a verified step.</p>
        <Link className="button" href="/beginner-guide">
          Start the Beginner Guide →
        </Link>
      </div>
    </section>
  );
}
