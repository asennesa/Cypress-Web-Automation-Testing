console.log("Hello World");

let name = "John";
var age = 20;
const isStudent = true;

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
