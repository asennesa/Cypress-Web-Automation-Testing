// Classes and Methods in JavaScript — Practical Guide

// 1) Class Declaration
class Person {
  // Public instance fields (stage 3+ syntax, widely supported)
  firstName;
  lastName;

  // Private instance field (accessible only inside the class)
  #id;

  // Static field (belongs to the class, not instances)
  static species = "Homo sapiens";

  // Constructor runs on new Person(...)
  constructor(firstName, lastName, id) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.#id = id;
  }

  // Instance method (on the prototype)
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  // Getter/Setter — look like properties from the outside
  get id() {
    return this.#id;
  }
  set id(value) {
    if (typeof value !== "number") throw new Error("id must be a number");
    this.#id = value;
  }

  // Static method — called on the class: Person.isPerson(obj)
  static isPerson(obj) {
    return obj instanceof Person;
  }
}

const p1 = new Person("Ada", "Lovelace", 1);
// p1.fullName();         // "Ada Lovelace"
// Person.species;        // "Homo sapiens"
// Person.isPerson(p1);   // true

// 2) Class Expression (assign a class to a variable)
const Rectangle = class {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  area() { return this.width * this.height; }
};
const r = new Rectangle(4, 5);
// r.area(); // 20

// 3) Fields and Arrow Methods as Class Fields
class Counter {
  value = 0;          // instance field
  step = 1;
  // Arrow keeps lexical `this` (handy for callbacks)
  inc = () => { this.value += this.step; };
}
const c = new Counter();
// setTimeout(c.inc, 0); // still works; `this` stays bound to the instance

// 4) Inheritance (extends) and super
class Animal {
  constructor(name) { this.name = name; }
  speak() { return `${this.name} makes a noise.`; }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);        // call parent constructor
    this.breed = breed;
  }
  // Method override
  speak() { return `${this.name} barks.`; }
}

const d = new Dog("Rex", "Labrador");
// d.speak(); // "Rex barks."
// d instanceof Dog;     // true
// d instanceof Animal;  // true

// 5) Static initialization blocks (for complex static setup)
class Registry {
  static items = new Map();
  static {
    // runs once when the class is evaluated
    Registry.items.set("default", { active: true });
  }
  static add(key, value) { this.items.set(key, value); }
}

// 6) toString / valueOf customization (common pattern)
class Money {
  constructor(amount, currency) { this.amount = amount; this.currency = currency; }
  toString() { return `${this.amount} ${this.currency}`; }
  valueOf() { return this.amount; } // enables numeric comparisons
}
const price = new Money(10, "USD");
// String(price); // "10 USD"
// price > 5     // true (uses valueOf)

// 7) Mixins (compose behaviors without deep inheritance)
const Timestamped = Base => class extends Base {
  constructor(...args) { super(...args); this.createdAt = new Date(); }
};
class NoteBase { constructor(text) { this.text = text; } }
class Note extends Timestamped(NoteBase) {
  summary() { return `${this.text.slice(0, 10)}...`; }
}

// 8) Private methods and accessors
class SecureBox {
  #secret = "shh";
  #readSecret() { return this.#secret; }
  getSecret() { return this.#readSecret(); }
}

// 9) Common pitfalls / tips
// - Methods defined with regular syntax go on the prototype (shared across instances)
// - Arrow methods as fields create a new function per instance (use only when you need bound `this`)
// - Prefer composition/mixins when inheritance chains get deep
// - Use getters/setters sparingly; keep classes small and focused


