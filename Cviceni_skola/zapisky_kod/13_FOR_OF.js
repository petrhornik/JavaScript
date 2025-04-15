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
    console.log(euCountriesArray[i].toUpperCase());     //vypíše položku z arraye euCountriesArray a převede ji na uppercase
                                                        //  (např.: Germany má pořadové číslo 1 proto pokud se i = 1, 
                                                        // tak euCountriesArray[1] = Germany -> budeme manipulovat s položkou Germany)
}


//for of
for (const country in euCountriesArray) {
    console.log(country.toUpperCase());     //cyklus se bude opakovat tolikrát, kolik je položek v arrayi euCountriesArray
                                            // proto zde country zastupuje pořadové číslo položky v arrayi
                                            // vlatsně se ptáme kolik položek obsahuje array euCountriesArray
}