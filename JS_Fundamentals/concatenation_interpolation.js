// String Concatenation vs. Template Literal Interpolation

// Sample data
const firstName = "John";
const lastName = "Doe";
const age = 28;
const score = 7.5;

// --- Concatenation (using +) ---
// Joins strings (and coerces non-strings to string)
const fullNameConcat = firstName + " " + lastName; // "John Doe"
const infoConcat = "Name: " + fullNameConcat + ", Age: " + age; // "Name: John Doe, Age: 28"

// Beware: + can mean addition or concatenation; order affects results
const mathThenConcat = 10 + 20 + "px"; // 30 + "px" -> "30px"
const concatThenMath = "px" + 10 + 20; // "px10" + 20 -> "px1020"

// Explicit conversion to string can avoid ambiguity
const scoreConcat = "Score: " + String(score); // "Score: 7.5"

// --- Interpolation (Template Literals with backticks `) ---
// Inserts expressions inside ${...} and preserves formatting
const fullNameInterp = `${firstName} ${lastName}`; // "John Doe"
const infoInterp = `Name: ${fullNameInterp}, Age: ${age}`; // "Name: John Doe, Age: 28"

// Interpolation evaluates any JS expression inside ${}
const nextYear = `Next year age: ${age + 1}`; // "Next year age: 29"
const upperName = `Upper: ${fullNameInterp.toUpperCase()}`; // "Upper: JOHN DOE"

// Multiline strings are easy with template literals
const multiline = `
Hello, ${firstName}!
Your current score is ${score}.
`;

// Escaping backticks or ${}
const showBacktick = `Use a back\`tick and show \${likeThis}`; // contains ` and ${ literally

// Edge cases: null/undefined in concatenation vs interpolation
const maybeMiddle = null;
const concatEdge = "User: " + firstName + " " + (maybeMiddle || "") + lastName; // "User: John Doe"
const interpEdge = `User: ${firstName} ${maybeMiddle ?? ""}${lastName}`; // "User: John Doe"

// Prefer template literals for readability and fewer coercion surprises
console.log(fullNameConcat);
console.log(infoConcat);
console.log(mathThenConcat);
console.log(concatThenMath);
console.log(scoreConcat);
console.log(fullNameInterp);
console.log(infoInterp);
console.log(nextYear);
console.log(upperName);
console.log(multiline);
console.log(showBacktick);
console.log(concatEdge);
console.log(interpEdge);


