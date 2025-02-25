// script execution

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

for (let i = 0; i < euCountriesArray.length; i++) {
    console.log(euCountriesArray[i].toUpperCase());
}


//for of
for (const country in euCountriesArray) {
    console.log(country.toUpperCase());
}