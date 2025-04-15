function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const requiredPointsToSucceed = 90;

let points = 0;
let tries = 0;

while (points < requiredPointsToSucceed) {
    tries++;

    const points = getRandomInt(101);

    console.log(`Try ${tries}: ${points} points`);

    
}

console.log(`You passed after ${tries} tries congratulation!`);
