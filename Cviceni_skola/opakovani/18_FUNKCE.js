function MojeFunkce() {
    //nějaký kód
}

MojeFunkce(); // volání funkce, output v tomto případě vrátí undefined, protože funkce nemá žádný kód, který by něco vypisoval
console.log(MojeFunkce()); // vypíše undefined

//nezapomínat na return u každé funkce

function MojeFunkce2() {
    //code to execute

    return 0;   // z funkce se vrací hodnota 0
}

MojeFunkce2(); // volání funkce, output v tomto případě bude 0
console.log(MojeFunkce2()); // vypíše 0

function MojeFunkce3(JmenoPromene) {    // JmenoPromene je parametr funkce, který se předává do funkce
    //code to execute

    return JmenoPromene; // z funkce se vrací hodnota JmenoPromene
}

MojeFunkce3(50); // volání funkce, output v tomto případě bude 50
console.log(MojeFunkce3(50)); // vypíše 50

function MojeFunkce4(MojePromena = 50) { // variableName je parametr funkce, který se předává do funkce, pokud není zadán, tak se nastaví na 50
    //code to execute

    return MojePromena; // z funkce se vrací hodnota variableName
}

MojeFunkce4(); // volání funkce, output v tomto případě bude 50
console.log(MojeFunkce4()); // vypíše 50

function functionName(variableName, ...restOfVariables) { // variableName je parametr funkce, který se předává do funkce, ...restOfVariables je parametr funkce, který se předává do funkce a může obsahovat více hodnot
    //code to execute

    return variableName + "," + restOfVariables; // z funkce se vrací hodnota variableName a restOfVariables
}

functionName(20, 30, 40); // volání funkce, output v tomto případě bude 20, 30, 40
console.log(functionName(20, 30, 40)); // vypíše 20, 30, 40