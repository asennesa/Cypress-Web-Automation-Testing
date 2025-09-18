// JavaScript Objects — A Practical Guide with Examples

// 1) Creating objects
// Literal syntax (most common)
const user = {
  id: 1,
  firstName: "John",
  lastName: "Doe",
  isActive: true,
  // method (function property)
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

// Using shorthand method syntax
const account = {
  balance: 100,
  deposit(amount) {
    this.balance += amount;
  },
};

// Using constructor function (older style)
function Point(x, y) {
  this.x = x;
  this.y = y;
}
const p = new Point(3, 4);

// Using Object.create to set a prototype
const proto = { greet() { return `Hello, ${this.name}`; } };
const person = Object.create(proto);
person.name = "Alice";

// 2) Property access
// Dot notation
const first = user.firstName; // "John"
// Bracket notation (for dynamic keys or keys with spaces/invalid identifiers)
const key = "lastName";
const last = user[key]; // "Doe"
// Computed property name when creating
const dynamic = "role";
const staff = { [dynamic]: "admin" }; // { role: "admin" }

// 3) Adding/updating/removing properties
user.age = 28; // add
user.firstName = "Johnny"; // update
delete user.isActive; // remove

// 4) Checking for properties
// Own property presence (does not look up the prototype chain)
const hasAge = Object.prototype.hasOwnProperty.call(user, "age");
// In-operator (checks own + prototype)
const hasToString = "toString" in user; // true via Object.prototype

// 5) Methods and `this`
// Regular functions get `this` from the call site; arrow functions do NOT bind `this` (they close over lexical `this`)
const cart = {
  items: ["apple", "banana"],
  // Good: regular function uses cart as `this`
  count() { return this.items.length; },
  // Not suitable for methods that need `this`:
  badCount: () => 0,
};
// cart.count() -> 2; cart.badCount() -> 0

// 6) Iterating over object properties
const book = { title: "JS", pages: 300 };
// a) for...in iterates enumerable keys (own + inherited)
for (const prop in book) {
  if (Object.prototype.hasOwnProperty.call(book, prop)) {
    // console.log(prop, book[prop]);
  }
}
// b) Object.keys/values/entries (own enumerable only)
Object.keys(book);   // ["title", "pages"]
Object.values(book); // ["JS", 300]
Object.entries(book);// [["title","JS"],["pages",300]]
// c) Loop entries with destructuring
for (const [k, v] of Object.entries(book)) {
  // console.log(k, v);
}

// 7) Cloning and merging
const original = { a: 1, nested: { n: 1 } };
// Shallow clone — copies top-level only
const copy1 = { ...original };
const copy2 = Object.assign({}, original);
// Deep clone — copies nested objects too (structuredClone is available in modern runtimes)
// Fallback: JSON methods (loses functions, Dates, undefined, etc.)
// Prefer structuredClone when available
const deepCopy = typeof structuredClone === "function"
  ? structuredClone(original)
  : JSON.parse(JSON.stringify(original));

// Merging objects (later keys overwrite earlier ones)
const defaults = { theme: "light", compact: false };
const overrides = { compact: true };
const settings = { ...defaults, ...overrides }; // { theme: "light", compact: true }

// 8) Destructuring
const movie = { title: "Matrix", year: 1999, rating: 8.7 };
const { title: movieTitle, year, rating = 0 } = movie; // alias + default
// Nested destructuring
const nestedObj = { a: { b: { c: 3 } } };
const { a: { b: { c } } } = nestedObj; // c = 3
// Rest properties
const { title: t, ...rest } = movie; // rest = { year: 1999, rating: 8.7 }

// 9) Optional chaining and nullish coalescing
const api = { user: { address: { city: "Sofia" } } };
const city = api.user?.address?.city; // "Sofia" or undefined if any part is missing
const zip = api.user?.address?.zip ?? "0000"; // default only if null/undefined

// 10) JSON serialization
const payload = { ok: true, data: [1, 2, 3] };
const json = JSON.stringify(payload); // "{\"ok\":true,\"data\":[1,2,3]}"
const parsed = JSON.parse(json); // back to object

// 11) Getters and setters
const rectangle = {
  width: 4,
  height: 5,
  get area() { return this.width * this.height; },
  set size([w, h]) { this.width = w; this.height = h; },
};
// rectangle.area -> 20; rectangle.size = [2, 10]; rectangle.area -> 20

// 12) Prototypes (brief)
// Objects delegate to a prototype for shared behavior
const animal = { speak() { return "..."; } };
const dog = Object.create(animal);
dog.speak = function () { return "woof"; };
// dog.__proto__ === animal (conceptually). Use Object.getPrototypeOf(dog)
const protoOfDog = Object.getPrototypeOf(dog);

// Class syntax (sugar over prototypes)
class Person {
  constructor(name) { this.name = name; }
  greet() { return `Hi, I'm ${this.name}`; }
  static species() { return "Homo sapiens"; }
}
const bob = new Person("Bob");
// bob.greet(); Person.species();

// 13) Immutability helpers
const profile = { name: "Mia", level: 1 };
// Prevent structural changes
const frozen = Object.freeze({ ...profile }); // cannot add/remove/replace properties (values still mutable if objects)
const sealed = Object.seal({ ...profile });  // cannot add/remove; can change existing values
Object.isFrozen(frozen); // true
Object.isSealed(sealed); // true

// 14) Utility patterns
// Safe read with defaults
function get(obj, path, defaultValue) {
  return path.split(".").reduce((acc, key) => acc?.[key], obj) ?? defaultValue;
}
// get({ a:{ b:2 } }, "a.b", 0) -> 2; get({}, "a.b", 0) -> 0

// Mapping object values
function mapValues(object, mapper) {
  return Object.fromEntries(
    Object.entries(object).map(([k, v]) => [k, mapper(v, k)])
  );
}
// mapValues({ a:1, b:2 }, x => x*2) -> { a:2, b:4 }

// 15) Common pitfalls
// - Objects are reference types: assignment copies the reference, not the data
const a1 = { x: 1 };
const a2 = a1; // both point to the same object
a2.x = 99; // a1.x is now 99
// - Shallow copies do not clone nested structures
// - Avoid using arrow functions for methods that rely on `this`

// Demo logs (uncomment to try)
// console.log(user.fullName());
// console.log(account.balance, (account.deposit(50), account.balance));
// console.log(person.greet());
// console.log(first, last, user.age, hasAge, hasToString);
// console.log(Object.keys(book), Object.values(book), Object.entries(book));
// console.log(copy1, deepCopy);
// console.log(movieTitle, year, rating, rest);
// console.log(city, zip);
// console.log(json, parsed);
// console.log(rectangle.area);
// console.log(bob.greet(), Person.species());
// console.log(Object.isFrozen(frozen), Object.isSealed(sealed));

