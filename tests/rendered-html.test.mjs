import assert from "node:assert/strict";
import test from "node:test";

const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
const { default: worker } = await import(workerUrl.href);

function request(path = "/") {
  return worker.fetch(
    new Request(`http://localhost${path}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("renders a beginner-first production homepage", async () => {
  const response = await request();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  assert.equal(response.headers.get("x-content-type-options"), "nosniff");
  assert.equal(response.headers.get("x-frame-options"), "SAMEORIGIN");

  const html = await response.text();
  assert.match(html, /Build your first/);
  assert.match(html, /Start the step-by-step guide/);
  assert.match(html, /Use the ROLL station/);
  assert.match(html, /PLACE CAR/);
  assert.match(html, /Avoid new-player mistakes/);
  assert.match(html, /Questions beginners ask first/);
  assert.match(html, /rel="canonical"[^>]+mytollfarmgame\.wiki\/?"/i);
  assert.match(html, /og:image/i);
  assert.match(html, /application\/ld\+json/i);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/i);
});

test("renders every public guide route", async () => {
  const expected = new Map([
    ["/beginner-guide", "Your first toll loop"],
    ["/gameplay", "How the toll loop turns into progress"],
    ["/progression", "Improve the bottleneck you can see"],
    ["/mistakes", "Six detours you can avoid"],
    ["/faq", "Direct answers, with clear limits"],
    ["/sources", "What we checked"],
  ]);

  for (const [path, copy] of expected) {
    const response = await request(path);
    assert.equal(response.status, 200, path);
    const html = await response.text();
    assert.match(html, new RegExp(copy, "i"), path);
    assert.match(
      html,
      new RegExp(`property="og:url"[^>]+mytollfarmgame\\.wiki${path}`, "i"),
      `${path} has route-specific social metadata`,
    );
    assert.match(html, new RegExp(`canonical[^>]+mytollfarmgame\\.wiki${path}`, "i"), path);
  }
});

test("publishes crawlable robots and a complete sitemap", async () => {
  const [robotsResponse, sitemapResponse] = await Promise.all([
    request("/robots.txt"),
    request("/sitemap.xml"),
  ]);

  assert.equal(robotsResponse.status, 200);
  const robots = await robotsResponse.text();
  assert.match(robots, /Allow: \//);
  assert.match(robots, /https:\/\/mytollfarmgame\.wiki\/sitemap\.xml/);

  assert.equal(sitemapResponse.status, 200);
  const sitemap = await sitemapResponse.text();
  for (const path of [
    "",
    "/beginner-guide",
    "/gameplay",
    "/progression",
    "/mistakes",
    "/faq",
    "/sources",
  ]) {
    assert.match(sitemap, new RegExp(`https://mytollfarmgame\\.wiki${path.replace("/", "\\/")}`));
  }
});
