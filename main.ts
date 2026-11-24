// Fortune in a Pot — entry program.
// Writes one kind, funny fortune for the houseplant on the windowsill
// to /output/entry.txt. Deterministic: the same line on every run.

import { mkdirSync, writeFileSync } from "node:fs";

const FORTUNE =
  "This week brings your windowsill extra sun, a kind watering, and a new leaf that will strut in like it owns the place.";

if (FORTUNE.length > 120) {
  throw new Error(`Fortune is ${FORTUNE.length} characters, over the 120 limit.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORTUNE, "utf8");
