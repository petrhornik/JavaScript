// Exercise: Manipulating JavaScript Sets - Car Manufacturers

// Step 1: Create a new Set called carManufacturers

let carManufacturers = new Set();
// Step 2: Add 'Toyota' to the set

carManufacturers.add('Toyota');
// Step 3: Add 'Honda' to the set

carManufacturers.add('Honda');
// Step 4: Add 'Ford' to the set

carManufacturers.add('Ford');
// Step 5: Add 'BMW' to the set

carManufacturers.add('BMW');
// Step 6: Add 'Mercedes' to the set

carManufacturers.add('Mercedes');
// Step 7: Log the set to the console

console.log(carManufacturers);
// Step 8: Check if 'Toyota' is in the set

auto = 'Toyota';
seznam = carManufacturers.has(auto);
if (seznam === true){
    console.log('Auto značky', auto, 'se na seznamu nachází!')
}
else{
    console.log('Auto značky', auto, 'se na seznamu nenachází!')
}
// Step 9: Check if 'Audi' is in the set
auto = 'Audi';
seznam = carManufacturers.has(auto);
if (seznam === true){
    console.log('Auto značky', auto, 'se na seznamu nachází!')
}
else{
    console.log('Auto značky', auto, 'se na seznamu nenachází!')
}
// Step 10: Remove 'Ford' from the set

carManufacturers.delete('Ford');
// Step 11: Check the size of the set

console.log(carManufacturers.size);
// Step 12: Log the set to the console

console.log(carManufacturers);
// Step 13: Add 'Audi' to the set

carManufacturers.add('Audi');
// Step 14: Add 'Volkswagen' to the set

carManufacturers.add('Volkswagen');
// Step 15: Check if 'Ford' is in the set

auto = 'Ford';
seznam = carManufacturers.has(auto);
if (seznam === true){
    console.log('Auto značky', auto, 'se na seznamu nachází!')
}
else{
    console.log('Auto značky', auto, 'se na seznamu nenachází!')
}
// Step 16: Add 'Ford' back to the set

carManufacturers.add('Ford');
// Step 16: Log the set to the console

console.log(carManufacturers);
// Step 17: Check if 'Tesla' is in the set

auto = 'Tesla';
seznam = carManufacturers.has(auto);
if (seznam === true){
    console.log('Auto značky', auto, 'se na seznamu nachází!')
}
else{
    console.log('Auto značky', auto, 'se na seznamu nenachází!')
}
// Step 18: Clear all elements from the set

carManufacturers.clear();
// Step 19: Check the size of the set after clearing

console.log(carManufacturers.size);
// Step 20: Log the final empty set

console.log(carManufacturers);