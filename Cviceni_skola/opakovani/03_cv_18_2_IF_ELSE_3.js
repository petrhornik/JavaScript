let myAge = 40;
let haveFireworksLicense = true;

let fireworksCategory;

if (haveFireworksLicense) {
    fireworksCategory = "F4";
} else if (myAge >= 21) {
    fireworksCategory = "F3";
} else if (myAge >= 18) {
    fireworksCategory = "F2";
} else if (myAge >= 15) {
    fireworksCategory = "F1";
} else {
    fireworksCategory = "None";
}

console.log("I can buy fireworks of category:", fireworksCategory);