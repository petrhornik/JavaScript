// script execution

// function which will return bool on condition string is shorter or equal to 6 characters
function hasShortName(string) {
    return string.length <= 6;
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

const euCountriesWithShortNames = euCountriesArray.filter(hasShortName);
console.log(euCountriesWithShortNames);
