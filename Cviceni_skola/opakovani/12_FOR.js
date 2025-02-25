// script execution

// returns random integer between 0 and max (exclusive)
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// for loop
const testToGrade = 26;

for (let i = 0; i < testToGrade; i++) {
    console.log("Test graded, points:", getRandomInt(101));
}

console.log("All test have been graded!");