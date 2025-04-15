// 1. způsob zápisu arrow funkce

const myFunction = () => {  // vytvoření funkce, která nemá žádný kód
    //code to execute
};

myFunction();

// 2. způsob zápisu arrow funkce

const myFunction2 = a => a * a;

        console.log(myFunction2(7));

// předělání fce. z deklarace na arrow fci.

    //deklarace

    function justLog(string) {
        return console.log(string);
    }

    // seznam použítý jak pro ukázku deklarace, tak pro ukázku arrow fce.

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

    //arrow fce.

    console.log(euCountriesArray);

            euCountriesArray.forEach((value) => { // vytvoření funkce, která projde všechny položky z arraye euCountriesArray a vypíše je, funkce je definována přímo v forEach
                console.log(value);
            }); 