// returns random integer between 0 and max (exclusive)
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const requiredPointsToSucceed = 90;

let passed = false;
let tries = 0;

while (!passed) {
    tries++;

    const points = getRandomInt(101);

    console.log(`Try ${tries}: ${points} points`);

    if (points >= requiredPointsToSucceed) {
        passed = true;
    }
}

console.log(`You passed after ${tries} tries congratulation!`);
