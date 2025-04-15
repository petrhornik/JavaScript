const car = {
    color: "red",
    topSpeed: 200,
    currentSpeed: 35,
};

console.log("Car:", car);

console.log("Car color:", car.color); // odkazujeme se na barvu auta pomocí dotnotation

car.color = "blue"; // změníme barvu auta na modrou
console.log("Car color:", car.color); // odkazujeme se na barvu auta pomocí dotnotation
console.log("Car color:", car["color"]); // odkazujeme se na barvu auta pomocí bracket notation

function logVehicleSpeedProperties(vehicle) {
    const { topSpeed, currentSpeed } = vehicle; // destrukturalizace objektu
    const speedPercentage = (currentSpeed / topSpeed) * 100; // výpočet procenta aktuální rychlosti vůči maximální rychlosti

    console.log("Current speed: ", currentSpeed);
    console.log("Top speed: ", topSpeed);
    console.log("Speed percentage: ", speedPercentage + "%");

}

logVehicleSpeedProperties(car); // zavoláme funkci a předáme jí auto jako argument