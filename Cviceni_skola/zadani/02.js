// This file is for exercising what was tough in second school lecture. Covers 03 (second half) - 04.

let pie = 3.14; // number
let notMyName = "John"; // string
let worldIsBurning; // undefined
worldIsBurning = true; // boolean

console.log("Data type of pie is: ", typeof pie);

console.log(5 + 5); // 10
console.log(5 + "5"); // 55
console.log(5 - "5"); // 0

let x = 43;
console.log(--x);
const answerToLifeAsString = "42";

console.log(
  `Comparison of answerToLifeAsString and 42 as equality with data type consideration (===): ${
    answerToLifeAsString === 42
  }`
);
console.log(
  `Comparison of answerToLifeAsString and 42 as equality without data type consideration (==): ${
    answerToLifeAsString == 42
  }`
);

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const pieceOfAlphabet = alphabet.slice(4, 10);
console.log("Piece of alphabet:", pieceOfAlphabet);
console.log(
  "Last letter of piece of alphabet:",
  pieceOfAlphabet[pieceOfAlphabet.length - 1]
);

const t = "T";

console.log(
  "Does piece of alphabet includes '" + t + "'?",
  pieceOfAlphabet.includes(t)
);
