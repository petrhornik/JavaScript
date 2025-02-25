> fruits
[ 'apple', 'banana', 'cherry' ]
> const numbers = Array(1, 2, 3, 4, 5);
undefined
> numbers
[ 1, 2, 3, 4, 5 ]
> const carManufacturers = ["Toyota", "Honda", "Ford", "Chevrolet"];
undefined
> carManufacturers
[ 'Toyota', 'Honda', 'Ford', 'Chevrolet' ]
> const weather = Array.of("sunny", "rain", "apocalypse");
undefined
> weather
[ 'sunny', 'rain', 'apocalypse' ]
> fruits.length
3
> const emptyArray1 = new Array(42);
undefined
> emptyArray1
[ <42 empty items> ]
> const emptyArray2 = Array(42);
undefined
> emptyArray2
[ <42 empty items> ]
> numbers.length = 6
6
> numbers
[ 1, 2, 3, 4, 5, <1 empty item> ]
> numbers[0] = 42
42
> numbers
[ 42, 2, 3, 4, 5, <1 empty item> ]
> nubmers[numbers.length] = 60
Uncaught ReferenceError: nubmers is not defined
> numbers[numbers.length] = 60
60
> numbers
[ 42, 2, 3, 4, 5, <1 empty item>, 60 ]
> const newArray = weather.concat(carManufacturers)
undefined
> newArray
[
  'sunny',
  'rain',
  'apocalypse',
  'Toyota',
  'Honda',
  'Ford',
  'Chevrolet'
]
> carManufacturers.push("Tesla")
5
> carManufacturers
[ 'Toyota', 'Honda', 'Ford', 'Chevrolet', 'Tesla' ]
> carManufacturers.pop();
'Tesla'
> carManufacturers
[ 'Toyota', 'Honda', 'Ford', 'Chevrolet' ]
> console.log(newArray.slice(2, 4))
[ 'apocalypse', 'Toyota' ]
undefined
> const pizzaMenu = new Map();
undefined
> Map
Map

> Map
[Function: Map]
> pizzaMenu.set("Margherita", 200);
Map(1) { 'Margherita' => 200 }
> pizzaMenu.set("Pepperoni", 250);
Map(2) { 'Margherita' => 200, 'Pepperoni' => 250 }
> pizzaMenu.set("Hawaiian", 280);
Map(3) { 'Margherita' => 200, 'Pepperoni' => 250, 'Hawaiian' => 280 }
> console.log("What is the price of Margherita?", pizzaMenu.get("Margherita"));     
What is the price of Margherita? 200
undefined
> pizzaMenu.delete("Hawaiian");
true
> console.log(pizzaMenu);
Map(2) { 'Margherita' => 200, 'Pepperoni' => 250 }
undefined
> pizzaMenu.clear();
> pizzaMenu.clear();
undefined
> pizzaMenu
Map(0) {}
> const musicStyles = new Set();
undefined
> musicStyles.add("Rock");
Set(1) { 'Rock' }
> musicStyles.add("Pop");
Set(2) { 'Rock', 'Pop' }
> musicStyles.add("Rap");
Set(3) { 'Rock', 'Pop', 'Rap' }
> console.log("Does music styles contains Rap?", musicStyles.has("Rap"));
Does music styles contains Rap? true
undefined
> console.log("Does music styles contains Jazz?", musicStyles.has("Jazz"));
Does music styles contains Jazz? false
undefined