// Functions in JavaScript — Comprehensive Guide with Examples

// 1) Function Declarations vs Function Expressions
// Declaration: hoisted (you can call before its definition)
function add(a, b) {
  return a + b;
}

// Expression: not hoisted the same way (use after assignment)
const multiply = function (a, b) {
  return a * b;
};

// Arrow function expression: concise, lexical `this`
const subtract = (a, b) => a - b;

// 2) Parameters and Return
// Default parameters
function greet(name = "world") {
  return `Hello, ${name}!`;
}

// Rest parameters (collects remaining args)
function sumAll(...nums) {
  return nums.reduce((acc, n) => acc + n, 0);
}

// Returning objects
function makeUser(id, name) {
  return { id, name };
}

// 3) Arguments object (array-like, not in arrow functions)
function firstArg() {
  return arguments[0]; // discouraged in new code; prefer rest parameters
}

// 4) `this` Binding
// - In regular functions, `this` depends on call site
// - In arrow functions, `this` is lexical (taken from surrounding scope)
const counter = {
  value: 0,
  incRegular: function () { this.value++; },
  incArrow: () => { /* `this` is NOT the object here */ },
};
// Prefer regular methods when you need object `this`.

// 5) call, apply, bind — controlling `this` and arguments
function show(prefix, suffix) {
  return `${prefix}${this.label}${suffix}`;
}
const ctx = { label: "X" };
const viaCall = show.call(ctx, "<", ">");   // "<X>"
const viaApply = show.apply(ctx, ["[", "]"]); // "[X]"
const bound = show.bind(ctx, "(");
const viaBind = bound(")");                  // "(X)"

// 6) Closures — functions remember their lexical scope
function makeCounter(start = 0) {
  let value = start;
  return function () {
    value += 1; // captured from outer scope
    return value;
  };
}
const next = makeCounter(5); // next() -> 6, then 7, 8...

// 7) IIFE (Immediately Invoked Function Expression)
const moduleLike = (function () {
  const secret = 42; // private
  return {
    getSecret() { return secret; },
  };
})();

// 8) Higher-Order Functions (functions that take/return functions)
function map(array, fn) {
  const out = [];
  for (const item of array) out.push(fn(item));
  return out;
}
const doubled = map([1, 2, 3], n => n * 2);

// 9) Pure vs Impure Functions
// Pure: same input -> same output, no side-effects
function pureAdd(a, b) { return a + b; }
// Impure: depends on or modifies external state
let external = 0;
function impureInc() { external++; return external; }

// 10) Recursion
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

// 11) Currying & Partial Application
const addN = a => b => a + b;        // curry
const add10 = addN(10);
function partial(fn, ...preset) {
  return (...rest) => fn(...preset, ...rest);
}
const join = (a, b, c) => `${a}-${b}-${c}`;
const joinHello = partial(join, "hello"); // joinHello("js", "dev") -> "hello-js-dev"

// 12) Destructured Parameters and Defaults
function printUser({ id, name = "unknown" }) {
  return `#${id}: ${name}`;
}
const textUser = printUser({ id: 1, name: "Ada" });

// 13) Generators (lazy sequences)
function* range(start, end, step = 1) {
  for (let i = start; i < end; i += step) yield i;
}
// for (const n of range(0, 3)) { /* 0,1,2 */ }

// 14) Async Functions (Promises with async/await)
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function fetchData() {
  await delay(10);
  return { ok: true };
}
async function run() {
  try {
    const res = await fetchData();
    return res.ok;
  } catch (err) {
    return false;
  }
}

// 15) Error Handling
function mustBePositive(n) {
  if (n <= 0) throw new Error("n must be positive");
  return n;
}
function safePositive(n, fallback = 1) {
  try {
    return mustBePositive(n);
  } catch (e) {
    return fallback;
  }
}

// 16) Function Overloads via Options Object (common JS pattern)
function createBox({ width = 100, height = 100, color = "black" } = {}) {
  return { width, height, color };
}
const box = createBox({ height: 50 }); // { width:100, height:50, color:"black" }

// 17) Composition Helpers
const compose = (...fns) => input => fns.reduceRight((v, f) => f(v), input);
const pipe = (...fns) => input => fns.reduce((v, f) => f(v), input);
const double = x => x * 2;
const increment = x => x + 1;
const doubleThenInc = pipe(double, increment); // doubleThenInc(3) -> 7

// Tips:
// - Prefer arrow functions for short callbacks; use regular methods when you need `this`.
// - Use default/rest parameters instead of `arguments`.
// - Keep functions small, pure when possible, and single-purpose.
// - Return early for clarity; avoid deep nesting.


