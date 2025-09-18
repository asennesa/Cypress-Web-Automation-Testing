// JavaScript Data Structures — Practical Guide

// 1) Arrays (ordered, index-based, can hold mixed types)
const arr = [1, 2, 3, "four", { five: 5 }];
arr.push(6);           // add to end
const last = arr.pop(); // remove from end -> 6
arr.unshift(0);        // add to start
const first = arr.shift(); // remove from start -> 0
const slice = arr.slice(1, 3); // [2,3] (non-destructive)
arr.splice(1, 1, "two"); // replace at index 1 (destructive)
const mapped = arr.map(x => x); // transforms each element
const filtered = arr.filter(x => typeof x === "number");
const hasThree = arr.includes(3);
const found = arr.find(x => x === 3);
const sum = [1,2,3].reduce((a,b) => a + b, 0); // 6

// Iteration
for (const value of arr) { /* ... */ }
arr.forEach((value, index) => { /* ... */ });

// 2) Sets (unique values, fast membership checks)
const set = new Set([1, 2, 2, 3]); // {1,2,3}
set.add(4);
set.delete(2);
const has1 = set.has(1);
const setSize = set.size;
// Iterating a Set
for (const v of set) { /* ... */ }
// Convert between Set and Array
const uniqArray = [...new Set([1,1,2,3])]; // [1,2,3]
const setToArray = Array.from(set);

// 3) Maps (key-value pairs, keys can be any value)
const map = new Map();
map.set("name", "Alice");
map.set({ id: 1 }, "record"); // object key
const m1 = map.get("name");
const hasKey = map.has("name");
map.delete("name");
const mapSize = map.size;
// Iteration
for (const [k, v] of map) { /* ... */ }
for (const k of map.keys()) { /* ... */ }
for (const v of map.values()) { /* ... */ }
for (const e of map.entries()) { /* ... */ }

// 4) WeakSet and WeakMap (hold weak references to objects only)
// - Weak collections do not prevent garbage collection
// - Not iterable and no size property
const weakSet = new WeakSet();
const obj1 = {};
weakSet.add(obj1);
weakSet.has(obj1); // true
const weakMap = new WeakMap();
const keyObj = {};
weakMap.set(keyObj, { meta: 123 });
weakMap.get(keyObj);

// 5) Typed Arrays and ArrayBuffer (binary data)
// Useful for performance/working with binary protocols and Web APIs
const buffer = new ArrayBuffer(8); // 8 bytes
const view = new DataView(buffer);
view.setUint8(0, 255);
const uint8 = new Uint8Array(buffer); // typed view
uint8[1] = 128;

// 6) Stack and Queue using Arrays (usage only)
// Stack (LIFO): use push/pop
const stack = [];
stack.push(1);
stack.push(2); // top is 2
const top = stack.pop(); // 2
const peek = stack[stack.length - 1];

// Queue (FIFO): use push/shift
const queue = [];
queue.push("a");
queue.push("b");
const head = queue.shift(); // "a"

// 7) Deque (double-ended queue) using Array
// pushBack/popBack -> push/pop; pushFront/popFront -> unshift/shift
const deque = [];
deque.push("back");      // pushBack
deque.unshift("front");  // pushFront
const removedFront = deque.shift(); // popFront
const removedBack = deque.pop();    // popBack

// 8) Priority Queue
// No built-in. Common approaches: maintain a sorted array, or use a library heap.
// Example (simple, not optimal for large N):
const pq = [];
// enqueue: insert and keep sorted ascending
function pqEnqueue(x) { pq.push(x); pq.sort((a,b) => a - b); }
// dequeue: remove smallest
function pqDequeue() { return pq.shift(); }
pqEnqueue(3); pqEnqueue(1); pqEnqueue(2); // pq = [1,2,3]
const smallest = pqDequeue(); // 1

// 9) Linked List
// Not built-in. Use arrays in most JS apps; implement lists only for specific algorithms.

// 10) Graph
// No built-in. You can represent graphs with Maps-of-Sets:
const graph = new Map();
function addVertex(v) { if (!graph.has(v)) graph.set(v, new Set()); }
function addEdge(u, v) { addVertex(u); addVertex(v); graph.get(u).add(v); }
function neighbors(v) { return graph.get(v) ?? new Set(); }

// 11) Useful conversions and utilities
// Array <-> Map via entries
const entries = [["a", 1], ["b", 2]];
const m = new Map(entries);
const backToEntries = [...m.entries()];
// Object <-> Map
const fromObj = new Map(Object.entries({ x: 1, y: 2 }));
const toObj = Object.fromEntries(new Map([["k", 9]]));

// Notes:
// - Arrays and typed arrays are contiguous, good for numeric processing
// - Sets/Maps provide better semantics/performance than objects for membership/keyed data
// - Weak collections are for caching/metadata without preventing GC
// - Custom structures help with algorithmic problems (heaps, queues, linked lists)


