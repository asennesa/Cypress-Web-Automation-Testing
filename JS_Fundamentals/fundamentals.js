
// let
// - Block-scoped: available only inside the nearest { } block
// - Reassignable: you can change its value later
// - Not hoisted for use before declaration (Temporal Dead Zone)
// Example:
// {
//   let x = 1;
//   if (true) {
//     let x = 2; // different x (block scope)
//     // console.log(x); // 2
//   }
//   // console.log(x); // 1
// }

// var
// - Function-scoped: ignores blocks; only respects function boundaries
// - Hoisted and initialized to undefined; can be used before declaration (not recommended)
// - Allows redeclaration in the same scope
// Example:
// if (true) {
//   var y = 10;
// }
// // console.log(y); // 10 (leaked out of the if-block)

// const
// - Block-scoped like let
// - Not reassignable: you cannot rebind the variable to a new value
// - For objects/arrays: the binding is constant, but contents can still mutate
// Example:
// const settings = { theme: "light" };
// settings.theme = "dark"; // OK (mutating object)
// // settings = {} // ❌ Error (cannot reassign)

let name = "John";
var age = 20;
const isStudent = true;

// === JavaScript Data Types ===
// Primitives (immutable values):
// 1) string      → e.g., "hello"            | typeof "hello" === "string"
// 2) number      → e.g., 42, 3.14, NaN      | typeof 42 === "number"
// 3) boolean     → true / false             | typeof true === "boolean"
// 4) null        → intentional empty value  | typeof null === "object"  // historical quirk
// 5) undefined   → missing value            | typeof undefined === "undefined"
// 6) symbol      → unique token keys        | typeof Symbol() === "symbol"
// 7) bigint      → integers of arbitrary size| typeof 10n === "bigint"

// Objects (reference types):
// - object       → plain objects, arrays, dates, regexps, etc. | typeof {} === "object"
// - function     → callable objects                            | typeof function(){} === "function"

// Examples:
const s = "text";            // string
const n = 123;                // number
const b = false;              // boolean
const u = undefined;          // undefined
const z = null;               // null (typeof null === "object")
const sym = Symbol("id");    // symbol
const big = 9007199254740993n;// bigint
const obj = { a: 1 };         // object
const arr = [1,2,3];          // object (array)
function fn() {}              // function

// === JavaScript Operator Types ===
// 1) Arithmetic
// +, -, *, /, %, ** (exponent), unary +/-, ++, --
const aNum = 10, bNum = 3;
const sumAB = aNum + bNum;      // 13
const diffAB = aNum - bNum;     // 7
const prodAB = aNum * bNum;     // 30
const divAB = aNum / bNum;      // 3.333...
const modAB = aNum % bNum;      // 1 (remainder)
const powAB = aNum ** bNum;     // 1000
let inc = 1; inc++;             // 2 (post-increment)
let dec = 1; --dec;             // 0 (pre-decrement)

// 2) Assignment
// =, +=, -=, *=, /=, %=, **=
let xAssign = 5; xAssign += 2;  // 7

// 3) Comparison
// == vs === (loose vs strict), != vs !==, <, <=, >, >=
// Prefer strict equality/inequality (=== / !==) to avoid type coercion surprises
1 == '1';   // true  (coerces string to number)
1 === '1';  // false (different types)
2 !== 3;    // true
3 > 2;      // true

// 4) Logical
// && (and), || (or), ! (not)
const isAdult = age >= 18 && isStudent === false;
const canEnter = isAdult || isStudent; // either condition
const notStudent = !isStudent;

// 5) Nullish coalescing and optional chaining
// ?? returns right-hand side only when left is null or undefined
const maybeValue = null;
const withDefault = maybeValue ?? 'default'; // 'default'
// Optional chaining ?. safely accesses nested properties/functions
const cityName = obj.address?.city; // undefined if address missing

// 6) Ternary (conditional)
// condition ? exprIfTrue : exprIfFalse
const access = age >= 18 ? 'adult' : 'minor';

// 7) Type, delete, in, instanceof
typeof 123;                 // 'number'
const tmpObj = { k: 1 };
delete tmpObj.k;            // removes property k
'toString' in tmpObj;       // true (via prototype)
[] instanceof Array;        // true

// 8) Bitwise (operate on 32-bit integers)
// &, |, ^, ~, <<, >>, >>>
5 & 3;   // 1  (0101 & 0011 = 0001)
5 | 3;   // 7  (0101 | 0011 = 0111)
5 ^ 3;   // 6  (0101 ^ 0011 = 0110)
~5;      // -6 (bitwise NOT)
1 << 3;  // 8  (shift left)
8 >> 1;  // 4  (arith shift right)
8 >>> 1; // 4  (zero-fill shift right)

// 9) Spread and Rest (syntax often called "operators")
// Spread ... expands iterables/objects
const arr1 = [1,2]; const arr2 = [3,4];
const merged = [...arr1, ...arr2]; // [1,2,3,4]
const userCopy = { ...obj, active: true };
// Rest ... collects remaining elements/properties
const [firstEl, ...restEls] = merged; // restEls -> [2,3,4]
const { a: aProp, ...restProps } = userCopy;

// 10) Comma operator (rare)
// Evaluates left to right, returns last value
let c1 = (1, 2, 3); // c1 = 3
