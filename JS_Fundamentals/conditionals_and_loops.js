// Conditionals and Loops in JavaScript — Guide with Examples

// === Truthy / Falsy ===
// Falsy values: false, 0, -0, 0n, "", null, undefined, NaN
// Everything else is truthy
function isTruthy(value) { return !!value; }

// === if / else if / else ===
const score = 75;
if (score >= 90) {
  // console.log("A");
} else if (score >= 80) {
  // console.log("B");
} else if (score >= 70) {
  // console.log("C");
} else {
  // console.log("D or below");
}

// === switch ===
const day = 2;
switch (day) {
  case 1:
    // console.log("Mon");
    break;
  case 2:
    // console.log("Tue");
    break;
  case 3:
    // console.log("Wed");
    break;
  default:
    // console.log("Other");
}

// Grouped cases
const letter = 'a';
switch (letter) {
  case 'a':
  case 'e':
  case 'i':
  case 'o':
  case 'u':
    // console.log("vowel");
    break;
  default:
    // console.log("consonant");
}

// === Ternary operator ===
const age = 18;
const statusMsg = age >= 18 ? "adult" : "minor"; // short conditional

// === Nullish coalescing and optional chaining in conditionals ===
const cfg = { limits: { max: 10 } };
const max = cfg.limits?.max ?? 5; // 10 if present, else 5

// === while loop ===
let n = 3;
while (n > 0) {
  // console.log(n);
  n--;
}

// === do...while loop ===
let m = 0;
do {
  // console.log("runs at least once", m);
  m++;
} while (m < 1);

// === for loop ===
for (let i = 0; i < 3; i++) {
  // console.log(i);
}

// Early exit with break/continue
for (let i = 0; i < 5; i++) {
  if (i === 2) continue; // skip 2
  if (i === 4) break;    // stop at 4
  // console.log(i);
}

// === for...of (iterables: arrays, strings, maps, sets) ===
const nums = [10, 20, 30];
for (const value of nums) {
  // console.log(value);
}

// Iterate Map/Set
const map = new Map([["a", 1], ["b", 2]]);
for (const [k, v] of map) {
  // console.log(k, v);
}
const set = new Set([1, 2, 3]);
for (const v of set) {
  // console.log(v);
}

// Strings are iterable
for (const ch of "hi") {
  // console.log(ch);
}

// === for...in (enumerable keys) ===
// Use for objects; iterates keys (own + inherited). Prefer Object.keys/entries in most cases.
const obj = { x: 1, y: 2 };
for (const key in obj) {
  if (Object.prototype.hasOwnProperty.call(obj, key)) {
    // console.log(key, obj[key]);
  }
}

// === Array iteration helpers (not loops but common) ===
// forEach, map, filter, reduce, some, every
const arr = [1, 2, 3, 4];
arr.forEach(v => { /* side-effects */ });
const squares = arr.map(v => v * v);
const evens = arr.filter(v => v % 2 === 0);
const hasBig = arr.some(v => v > 3);      // true
const allSmall = arr.every(v => v < 5);   // true
const total = arr.reduce((acc, v) => acc + v, 0);

// === Labeled statements (rare) ===
// Allows breaking out of nested loops
outer:
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) break outer;
    // console.log(i, j);
  }
}

// Tips:
// - Prefer for...of for arrays/iterables; avoid for...in on arrays
// - Use strict equality in conditions (===) to avoid coercion
// - Keep loops small and consider array helpers for readability


