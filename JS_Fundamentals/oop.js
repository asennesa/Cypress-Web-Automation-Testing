// Object-Oriented Programming (OOP) in JavaScript — Practical Guide

// JavaScript is prototype-based. "class" syntax is sugar over prototypes.
// Core OOP ideas: encapsulation, abstraction, inheritance, polymorphism, composition.

// 1) Prototypes — delegation mechanism
const proto = {
  greet() { return `Hello, ${this.name}`; },
};
const user = Object.create(proto); // user.__proto__ -> proto
user.name = "Alice";
// user.greet(); // "Hello, Alice"

// 2) Class syntax (sugar over prototypes)
class Person {
  #ssn; // private field (encapsulation)
  constructor(name, ssn) { this.name = name; this.#ssn = ssn; }
  describe() { return `${this.name}`; }
  get ssnMasked() { return `***-**-${String(this.#ssn).slice(-4)}`; }
}

// 3) Inheritance
class Employee extends Person {
  constructor(name, ssn, role) { super(name, ssn); this.role = role; }
  describe() { return `${super.describe()} (${this.role})`; } // polymorphism: override
}
const emp = new Employee("Bob", 123456789, "Dev");
// emp.describe(); // "Bob (Dev)"

// 4) Polymorphism — same method name, different behavior across types
class Animal { speak() { return "..."; } }
class Dog extends Animal { speak() { return "woof"; } }
class Cat extends Animal { speak() { return "meow"; } }
function talk(a) { return a.speak(); }
// talk(new Dog()); talk(new Cat());

// 5) Encapsulation — hide internals behind an API
class BankAccount {
  #balance = 0;
  deposit(amount) { if (amount > 0) this.#balance += amount; }
  withdraw(amount) { if (amount > 0 && amount <= this.#balance) this.#balance -= amount; }
  get balance() { return this.#balance; }
}

// 6) Composition over inheritance — build from smaller parts
const canLog = Base => class extends Base {
  log(msg) { /* console.log(msg); */ }
};
const canTimestamp = Base => class extends Base {
  timestamp() { return new Date().toISOString(); }
};
class Base {}
class Service extends canTimestamp(canLog(Base)) {
  doWork() { this.log(`work @ ${this.timestamp()}`); }
}

// 7) Interfaces (by convention) — duck typing
// In JS, behavior is determined by available methods, not declared interfaces
function printDescribable(obj) {
  if (typeof obj.describe === 'function') {
    return obj.describe();
  }
  return String(obj);
}

// 8) Static members
class IdGen {
  static #next = 1;
  static next() { return this.#next++; }
}
// IdGen.next(); // 1, then 2, ...

// 9) Getters/Setters for computed/validated properties
class Rectangle {
  constructor(w, h) { this.w = w; this.h = h; }
  get area() { return this.w * this.h; }
  set width(v) { if (v <= 0) throw new Error('width>0'); this.w = v; }
}

// 10) Object immutability (not OOP-specific but relevant)
const person = Object.freeze({ name: 'Eve' }); // cannot add/remove/replace
// person.name = 'X'; // no-op or error in strict mode

// 11) Pattern: Factory functions (OOP without classes)
function createCounter(start = 0) {
  let value = start;
  return {
    inc() { value++; },
    get value() { return value; },
  };
}
const cnt = createCounter();

// 12) Equality and identity
// Objects compare by reference; two identical-looking objects are not equal
const a = { x: 1 }, b = { x: 1 };
// a === b -> false; const c = a; a === c -> true

// Tips:
// - Prefer composition/mixins before deep inheritance trees.
// - Keep classes small; expose minimal public surface (encapsulation).
// - Favor immutability for predictability; avoid shared mutable state.
// - Rely on duck typing: write functions against behaviors, not specific classes.


