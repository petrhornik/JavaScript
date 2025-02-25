// This file is for exercising what was tough in second school lecture. Covers 06 - 07 (first half).

//array
const browsers = ["Chrome", "Firefox", "Edge", "Safari", "Opera"];
console.log("Browsers:", browsers);

browsers.push("Brave");
console.log("Browsers after push:", browsers);

console.log("First browser:", browsers[0]);
console.log("Last browser:", browsers[browsers.length - 1]);
console.log("Browsers length:", browsers.length);

browsers.sort();
console.log("Browsers after sort:", browsers);

browsers.length = 4;
console.log("Browsers after length change:", browsers);

//map
const gamePlayHours = new Map();
gamePlayHours.set("Minecraft", 3000);
gamePlayHours.set("League of Legends", 2000);
gamePlayHours.set("Factorio", 880);
gamePlayHours.set("Beat Saber", 130);

console.log("Game play hours:", gamePlayHours);
console.log("Games played:", gamePlayHours.size);
console.log("Factorio hours:", gamePlayHours.get("Factorio"));
console.log(
  "Is Left for Dead in the list?",
  gamePlayHours.has("Left for Dead")
);

//set
const gameGenres = new Set();
gameGenres.add("Survival");
gameGenres.add("RPG");
gameGenres.add("FPS");
gameGenres.add("Rhythm");

console.log("Game genres:", gameGenres);

gameGenres.delete("Rhythm");

console.log("Game genres after deleting Rhythm:", gameGenres);

//if-else
const bedTime = 22;
let timeNow = 21; //only as number

let schoolHomeworks = 3;
let houseChoresLeft = 1;

if (schoolHomeworks > 0) {
  console.log("I have to do school homeworks first!");
} else if (houseChoresLeft > 0) {
  console.log("I still have house chores to do.");
} else if (timeNow > bedTime) {
  console.log("I should go to bed.");
} else {
  console.log("I can play games!");
}
