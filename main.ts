// ship-it-friday-bigger-model — make.fun "Ship It Friday"
// Competition: u-mgwals-ship-it-friday-30bd407a
// One funny git commit message: the line an AI coding agent writes in the
// moment before it breaks production on a Friday.
// Node 22, stdlib only. Prints the line and writes it to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

// THE LINE — final, do not change.
const LINE =
  "fix: I asked a bigger model to review my code and it said 'LGTM' — the bigger model was also me";

// One-sentence gate: the line must be a single sentence of 1-200 chars and
// not only whitespace, so the entry always clears the house gate
// (/output/entry.txt must hold 1-159 UTF-8 chars of text).
function gate(line: string): void {
  const text = line.trim();
  if (text.length < 1 || text.length > 200) {
    throw new Error(`line must be 1-200 chars, got ${text.length}`);
  }
  // Exactly one sentence: no sentence-ending punctuation that starts a
  // second sentence. This line carries none at all, so it is one sentence.
  const sentences = text.split(/(?<=[.!?])\s+/).filter(Boolean);
  if (sentences.length !== 1) {
    throw new Error(
      `line must be exactly one sentence, got ${sentences.length}`,
    );
  }
}

gate(LINE);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
