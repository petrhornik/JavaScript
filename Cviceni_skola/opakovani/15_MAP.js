// script execution

// function which will uppercase a string
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

const euCountriesUpper = euCountriesArray.map(toUpperCase);
console.log(euCountriesUpper);