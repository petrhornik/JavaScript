const bedTime = 22;
let timeNow = 21; //only as number

let schoolHomeworks = 3;
let houseChoresLeft = 1;

if (schoolHomeworks > 0) {
  console.log("I have to do school homeworks first!");
} else if (houseChoresLeft > 0) {
  console.log("I still have house chores to do.");
} else if (bedTime > timeNow) {
  console.log("I should go to bed.");
} else {
  console.log("I can play games!");
}
