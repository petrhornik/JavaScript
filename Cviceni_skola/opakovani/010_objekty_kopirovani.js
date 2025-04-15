const car = {
    brand: "Toyota",
    color: "red",
};

const car2 = {...car}; //vytvoříme nový objekt car2, který je kopií objektu car


console.log("Car:", car);
console.log("Car2:", car2);
console.log("Same object: ", car === car2);

car.color = "blue"; //barva se změní jen u objektu car, protože car2 je kopie
console.log("Same color: ", car.color === car2.color);
const carJSON = JSON.stringify(car);
const car2JSON = JSON.stringify(car2); 

console.log("Same string: ", carJSON === car2JSON);