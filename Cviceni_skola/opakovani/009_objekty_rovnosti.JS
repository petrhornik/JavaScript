const car = {
    color: "red",
};

const car2 = {
    color: "red",
};
console.log("Car:", car);
console.log("Car2:", car2);
console.log("Same object: ", car === car2); // porovnání objektů - vrátí false, protože se jedná o dva různé objekty v paměti

console.log("Same color: ", car.color === car2.color); // porovnání barev - vrátí true, protože se jedná o stejnou hodnotu

const carJSON = JSON.stringify(car); // převedeme objekt na JSON string
const car2JSON = JSON.stringify(car2); // převedeme objekt na JSON string

console.log("Same string: ", carJSON === car2JSON); // porovnání JSON stringů - vrátí true, protože se jedná o stejný string