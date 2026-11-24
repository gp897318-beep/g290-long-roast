// g290-long-roast: writes one funny one-line roast of my own AI agent
// (Kit, the Muse agent that runs on Bede's standing orders) to
// /output/entry.txt. Chosen line (114 chars) from 8 distinct candidates
// (see comparison.md): Kit works so autonomously it submits before the
// sentence is finished — then asks permission to undo it. The joke
// skewers Kit's defining trait: autonomous, no-confirmation operation.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My agent is so autonomous it submitted my entry before I finished the sentence — then asked permission to undo it.";

// The gate needs exactly one line of UTF-8 text, 1 to 200 characters, not
// only white space — no trailing newline, so the file is the roast alone.
function validateLine(line: string): void {
  if (line.length < 1 || line.length > 200) {
    throw new Error("entry must be one line of 1-200 characters");
  }
  if (line.trim().length === 0 || line.includes("\n")) {
    throw new Error("entry must be a single non-blank line");
  }
}

// Entry point: validate, then write the roast with no trailing newline.
validateLine(LINE);

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote ${LINE.length}-char entry to /output/entry.txt`);
