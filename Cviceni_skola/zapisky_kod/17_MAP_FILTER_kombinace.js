// script execution

// function which will return bool on condition string is shorter or equal to 6 characters
function hasShortName(string) {
    return string.length <= 6;
}

function toUpperCase(string) {
    return string.toUpperCase();
}

const euCountriesArray = [
    "Germany",
    "France",
    "Italy",
    "Spain",
    "Poland",
    "Netherlands",
    "Belgium",
    "Greece",
];
console.log(euCountriesArray);

//1
const euCountriesWithShortNames = euCountriesArray.filter(hasShortName);        // ukázka filtru, který vyfiltruje z arraye euCountriesArray jen ty položky, které mají méně nebo rovno 6 znaků
console.log(euCountriesWithShortNames);

const euCountriesWithUpperCase = euCountriesWithShortNames.map(toUpperCase); // ukázka mapy, která převede všechny položky z arraye euCountriesWithShortNames na uppercase
console.log(euCountriesWithUpperCase);

//2
/*const euCountriesWithUpperCaseANDshortNames = euCountriesArray
    .map(toUpperCase)
    .filter(hasShortName);

console.log(euCountriesWithUpperCaseANDshortNames);
*/