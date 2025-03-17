const myFunction = function () { // vytvoření funkce, která nemá žádný kód
    //code to execute
}

myFunction(); // volání funkce, output v tomto případě vrátí undefined, protože funkce nemá žádný kód, který by něco vypisoval
console.log(myFunction()); // vypíše undefined


//předělání fce. z deklarace na expression

    //deklarace

function justLog(string) {  // vytvoření funkce justLog, která má parametr string, je psána samostatně
    return console.log(string);
}

// seznam použítý jak pro ukázku deklarace, tak pro ukázku expression

const euCountriesArray = [ // vytvoření arraye euCountriesArray, který obsahuje několik zemí
    "Germany",
    "France",
    "Italy",
    "Spain",
    "Poland",
    "Netherlands",
    "Belgium",
    "Greece",
];

console.log(euCountriesArray); // vypíše array euCountriesArray

euCountriesArray.forEach(justLog); // ukázka forEach, který projde všechny položky z arraye euCountriesArray a vypíše je

    //expression

    console.log(euCountriesArray);

    euCountriesArray.forEach(function (value) { // vytvoření funkce, která projde všechny položky z arraye euCountriesArray a vypíše je, funkce je definována přímo v forEach
        console.log(value);
    });

// IIFE - Immediately Invoked Function Expression

(function () {
    console.log("\nIIFE");
})();