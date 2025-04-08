// Exercise: Computer Parts Shop Menu using Map in JavaScript

// Step 1: Create a new Map to store computer parts and their prices

let computerPrarts = new Map();
// Step 2: Add a computer part and its price to the Map (CPU: 250)

computerPrarts.set('CPU', 250);
// Step 3: Add another computer part and its price to the Map (GPU: 500)

computerPrarts.set('GPU', 500);
// Step 4: Add another computer part and its price to the Map (Motherboard: 150)

computerPrarts.set('Motherboard', 150);
// Step 5: Add another computer part and its price to the Map (RAM: 80)

computerPrarts.set('RAM', 80);
// Step 6: Add another computer part and its price to the Map (SSD: 100)

computerPrarts.set('SSD', 100);
// Step 7: Add another computer part and its price to the Map (HDD: 60)

computerPrarts.set('HDD', 60);
// Step 8: Add another computer part and its price to the Map (Power Supply: 70)

computerPrarts.set('Power Supply', 70);
// Step 9: Add another computer part and its price to the Map (Case: 90)

computerPrarts.set('Case', 90);
// Step 10: Add another computer part and its price to the Map (Cooling Fan: 20)

computerPrarts.set('Cooling fan', 20);
// Step 11: Log all computer parts and their prices to the console

console.log(computerPrarts);
// Step 12: Check if a specific computer part is in the Map (e.g., "GPU")

let komponenta = 'GPU';
console.log('Dostupnost produktu na skladě:',computerPrarts.has(komponenta));
if (computerPrarts.get(komponenta) !== undefined) {
    console.log('Cena produktu je:', computerPrarts.get(komponenta));
}
// Step 13: Check if a specific computer part is in the Map (e.g., "Monitor")

komponenta = 'Monitor';
console.log('Dostupnost produktu na skladě:',computerPrarts.has(komponenta));
if (computerPrarts.get(komponenta) !== undefined) {
    console.log('Cena produktu je:', computerPrarts.get(komponenta));
}
// Step 14: Check if a specific computer part is in the Map (e.g., "RAM")

komponenta = 'RAM';
console.log('Dostupnost produktu na skladě:',computerPrarts.has(komponenta));
if (computerPrarts.get(komponenta) !== undefined) {
    console.log('Cena produktu je:', computerPrarts.get(komponenta));
}
// Step 15: Check if a specific computer part is in the Map (e.g., "Keyboard")

komponenta = 'Keyboard';
console.log('Dostupnost produktu na skladě:',computerPrarts.has(komponenta));
if (computerPrarts.get(komponenta) !== undefined) {
    console.log('Cena produktu je:', computerPrarts.get(komponenta));
}
// Step 16: Check if a specific computer part is in the Map (e.g., "Mouse")

komponenta = 'Mouse';
console.log('Dostupnost produktu na skladě:',computerPrarts.has(komponenta));
if (computerPrarts.get(komponenta) !== undefined) {
    console.log('Cena produktu je:', computerPrarts.get(komponenta));
}
// Step 17: Log the number of items in the Map to the console

console.log(computerPrarts.size);
// Step 18: Remove a specific computer part from the Map (e.g., "HDD")

computerPrarts.delete('HDD');
// Step 19: Remove another specific computer part from the Map (e.g., "Cooling Fan")

computerPrarts.delete('Cooling fan');
// Step 20: Log the updated Map to the console

console.log(computerPrarts);