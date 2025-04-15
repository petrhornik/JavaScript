const car = {
    brand: "Toyota",
    color: "red",
};

function add(num1, num2){
    return num1 + num2; 
}

function modifyObject(car){
    car.year = 2020; // přidáme rok do objektu car
}

function createAndModify(car){
    const newCar = {...car, // vytvoříme nový objekt car2, který je kopií objektu car
    year: 2020,} // přidáme rok do objektu car2
    return newCar; // vrátíme nový objekt car2
}