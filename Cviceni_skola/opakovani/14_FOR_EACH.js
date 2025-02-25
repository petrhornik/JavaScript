// script execution

// function will log provided variable
function justLog(string) {
    return console.log(string);
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

euCountriesArray.forEach(justLog);