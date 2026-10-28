// test.ts
import { createSandbox, getSandbox, resetSandbox } from "./store.js";
import type { SandboxState } from "./types.js";

const seed: SandboxState = {
  issues: [{ number: 1, title: "Login crash", state: "open" }],
  nextIssueNumber: 2,
};

const a = createSandbox(seed);
const b = createSandbox(seed);

a.state.issues.push({ number: 2, title: "added by agent", state: "open" });
a.state.nextIssueNumber = 3;

console.log("A issues:", a.state.issues.length);   // 2
console.log("B issues:", b.state.issues.length);   // 1 (isolated)
console.log("seed issues:", seed.issues.length);   // 1 (untouched)

console.log("found A:", getSandbox(a.id) === a);   // true
console.log("found nothing:", getSandbox("nope")); // undefined

resetSandbox(a.id);
console.log("A after reset:", getSandbox(a.id)?.state.issues.length); // 1

a.state.issues.push({ number: 3, title: "second run", state: "open" });
console.log("A seed after 2nd mutation:", a.seed.issues.length);       // 1, baseline intact
console.log("reset missing id:", resetSandbox("nope"));                // false