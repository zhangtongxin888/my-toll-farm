export const SITE_URL = "https://mytollfarmgame.wiki";
export const GAME_URL =
  "https://www.roblox.com/games/96425088123775/My-Toll-Farm";
export const VERIFIED_DATE = "August 15, 2026";
export const VERIFIED_DATE_ISO = "2026-08-15";

export const navigation = [
  { href: "/beginner-guide", label: "Beginner Guide" },
  { href: "/gameplay", label: "Core Loop" },
  { href: "/progression", label: "Progression" },
  { href: "/mistakes", label: "Mistakes" },
  { href: "/faq", label: "FAQ" },
] as const;

export const quickStart = [
  {
    number: "01",
    title: "Roll your first car",
    body: "Walk to the ROLL station and use its on-screen prompt. Rolls use in-game cash and add vehicles to your collection.",
    tip: "Read the displayed cost before confirming.",
  },
  {
    number: "02",
    title: "Place it on your plot",
    body: "Go to the PLACE CAR area, choose a vehicle, and put it in an open slot. The game confirms a successful placement.",
    tip: "If every slot is full, unlock more capacity first.",
  },
  {
    number: "03",
    title: "Reinvest toll income",
    body: "Placed vehicles join the toll-road loop. Use the cash earned during active play for more vehicles, capacity, and upgrades.",
    tip: "Build the loop before chasing exact price targets.",
  },
] as const;

export const coreLoop = [
  {
    number: "1",
    title: "Roll",
    body: "Spend the displayed in-game cash at ROLL to add a vehicle.",
  },
  {
    number: "2",
    title: "Place",
    body: "Choose that vehicle at PLACE CAR and use an open plot slot.",
  },
  {
    number: "3",
    title: "Earn",
    body: "Your placed traffic runs through the toll loop during the session.",
  },
  {
    number: "4",
    title: "Expand",
    body: "Add capacity, improve the named upgrades, then rebuild after Rebirth.",
  },
] as const;

export const upgrades = [
  "Toll Line levels",
  "Traffic Lines",
  "Car Speed",
  "Spawn Speed",
  "Roll Luck",
  "Roll Size",
] as const;

export const progressionStages = [
  {
    stage: "Early priorities",
    eyebrow: "Get the loop running",
    items: [
      "Place vehicles you already own before spending more cash on rolls.",
      "Check for an open placement slot at your plot.",
      "Keep the current toll loop active while you plan the next purchase.",
    ],
    readWhen: "Use this when you have just joined or your cash balance is still small.",
  },
  {
    stage: "Build momentum",
    eyebrow: "Remove the current bottleneck",
    items: [
      "Unlock another line when the game says your placement capacity is full.",
      "Compare Toll Line, Traffic Lines, Car Speed, Spawn Speed, Roll Luck, and Roll Size before choosing an upgrade.",
      "Replace weaker vehicles gradually; use Unequip when you only want a temporary change.",
    ],
    readWhen: "Use this when you own more cars than you can place or progress feels uneven.",
  },
  {
    stage: "Rebirth planning",
    eyebrow: "Restart intentionally",
    items: [
      "Open the Rebirth panel and read the current requirement in your own session.",
      "Remember the confirmed warning: Rebirth resets Money and increases the multiplier.",
      "Do not assume what happens to cars or upgrades; the verified evidence does not confirm every retained item.",
    ],
    readWhen: "Use this before pressing Rebirth, not after.",
  },
] as const;

export const mistakes = [
  {
    title: "Rolling with no placement room",
    why: "A full plot prevents another car from being placed; the game tells you to unlock more line capacity.",
    move: "Check for an open slot before spending more cash on rolls.",
  },
  {
    title: "Rebirthing without reading the warning",
    why: "The Rebirth screen explicitly says Money will reset. The evidence does not confirm every other retained item.",
    move: "Read the live requirement and reset message before you confirm.",
  },
  {
    title: "Confusing Unequip with Delete",
    why: "The vehicle panel presents these as separate actions, and no verified refund or undo system was found.",
    move: "Use Unequip for a temporary change; treat Delete as a deliberate action.",
  },
  {
    title: "Following old prices exactly",
    why: "The experience was still being updated on the verification date, so costs and balance values can change quickly.",
    move: "Follow the live labels in your session and use this guide for decisions, not frozen prices.",
  },
  {
    title: "Assuming active income means offline income",
    why: "The research confirms cash growth during active play only. Offline income was not verified.",
    move: "Plan around the income you can see while the session is running.",
  },
  {
    title: "Treating promo numbers as a promise",
    why: "The official artwork includes a dramatic per-second figure, but promotional art does not establish normal beginner earnings.",
    move: "Judge progress by your live cash flow, capacity, and upgrade options.",
  },
] as const;

export const faqs = [
  {
    question: "Does My Toll Farm save progress automatically?",
    answer:
      "Yes. The official Roblox description says progress saves automatically.",
    href: "/sources#official-roblox",
    linkLabel: "See the official-source note",
  },
  {
    question: "How do I earn money?",
    answer:
      "Roll vehicles, place them in open slots on your plot, and let them run through the toll-road loop. In active gameplay, the cash balance rises while traffic operates.",
    href: "/gameplay",
    linkLabel: "See the full core loop",
  },
  {
    question: "Why can’t I place another car?",
    answer:
      "Your current placement capacity may be full. The game displays a message telling players to unlock another line when no more cars can be placed.",
    href: "/progression",
    linkLabel: "Plan your next expansion",
  },
  {
    question: "What can I upgrade?",
    answer:
      "Observed upgrades include Toll Line levels, Traffic Lines, Car Speed, Spawn Speed, Roll Luck, and Roll Size. Their costs may change, so read the live values in your session.",
    href: "/progression",
    linkLabel: "Compare progression priorities",
  },
  {
    question: "What happens when I Rebirth?",
    answer:
      "The Rebirth screen explicitly says it resets Money and increases the multiplier. The available evidence does not confirm every other item that is kept or reset.",
    href: "/beginner-guide#rebirth",
    linkLabel: "Read the Rebirth checkpoint",
  },
  {
    question: "Can I remove a car from my plot?",
    answer:
      "Yes. The vehicle panel includes Unequip and Delete options. A refund or undo system has not been verified.",
    href: "/mistakes",
    linkLabel: "Avoid the Delete mistake",
  },
  {
    question: "Does the game have offline income?",
    answer:
      "Offline income has not been verified. The public footage only confirms automatic earnings during an active session.",
    href: "/sources#limits",
    linkLabel: "See what was not confirmed",
  },
  {
    question: "Are there working codes?",
    answer:
      "No official code system or current working codes were found in the verified sources. This site will not invent a codes list.",
    href: "/sources#limits",
    linkLabel: "Read the verification policy",
  },
] as const;

export const learningPath = [
  {
    href: "/beginner-guide",
    eyebrow: "Start here",
    title: "Beginner Guide",
    body: "Follow the verified first-session steps in the right order.",
  },
  {
    href: "/gameplay",
    eyebrow: "Understand why",
    title: "Core Gameplay Loop",
    body: "See how rolling, placing, earning, and expanding connect.",
  },
  {
    href: "/progression",
    eyebrow: "Choose what is next",
    title: "Progression Plan",
    body: "Use a practical route without pretending there is one proven best build.",
  },
] as const;
