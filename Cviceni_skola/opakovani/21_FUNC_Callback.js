function startCar() {
    console.log("Car started");
}

function func(callMeFunc) { // tato funkce bude volat jinou funkci
    if (!callMeFunc) { // pokud neni definovana funkce, tak vypíše Function was undefined
        console.error("Function was undefined");
        return;
    }

    if (typeof callMeFunc !== "function") { //pokud není zadaná věc v () funkce, tak vypíše Not a function
        console.error("Not a function");
        return;
    }

    callMeFunc();
}

func(); // vypíše Function was undefined
func(10); // vypíše Not a function
func(startCar); // vypíše Car started, jelikož startCar je existující funkce