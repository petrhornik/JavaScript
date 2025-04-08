// Exercise: Grocery Shopping with Arrays

// Step 1: Create an empty array called 'groceryList'

let groceryList =  [];
// Step 2: Add 'Milk' to the groceryList

groceryList.push('Milk');
// Step 3: Add 'Bread' to the groceryList

groceryList.push('Bread');
// Step 4: Add 'Eggs' to the groceryList

groceryList.push('Eggs');
// Step 5: Add 'Butter' to the groceryList

groceryList.push('Butter');
// Step 6: Print the groceryList to the console

console.log(groceryList);
// Step 7: Remove the last item from the groceryList

groceryList.pop(groceryList.length - 1);
// Step 8: Print the groceryList to the console

console.log(groceryList)
// Step 9: Add 'Cheese' to the beginning of the groceryList

groceryList.unshift('Cheese');
// Step 10: Print the groceryList to the console

console.log(groceryList);
// Step 11: Remove the first item from the groceryList

groceryList.shift();
// Step 12: Print the groceryList to the console

console.log(groceryList);
// Step 13: Find the index of 'Bread' in the groceryList

const PoradiChleba = groceryList.indexOf('Bread');
// Step 14: Print the index of 'Bread' to the console

console.log('Indexové číslo chleba je:',PoradiChleba);
// Step 15: Replace 'Bread' with 'Whole Grain Bread' in the groceryList

groceryList[PoradiChleba] = 'Whole Grain Break';
// Step 16: Print the groceryList to the console

console.log(groceryList);
// Step 17: Add 'Apples', 'Bananas', and 'Oranges' to the groceryList

let groceryList2 = new Array('Apples', 'Bananas', 'Oranges');
groceryList = groceryList.concat(groceryList2);
// Step 18: Print the groceryList to the console

console.log(groceryList);
// Step 19: Sort the groceryList alphabetically

groceryList.sort();
// Step 20: Print the sorted groceryList to the console

console.log(groceryList);
// Step 21: Reverse the order of the groceryList

groceryList.reverse();
// Step 22: Print the reversed groceryList to the console
console.log(groceryList)
// Step 23: Create a new array called 'dairyProducts' with 'Milk', 'Cheese', and 'Butter'
let dairyProducts = new Array('Milk', 'Cheese', 'Butter')
// Step 24: Concatenate 'dairyProducts' with 'groceryList' and store the result in 'fullGroceryList'
let fullGroceryList = dairyProducts.concat(groceryList)
// Step 25: Print the fullGroceryList to the console

console.log(fullGroceryList)
// Step 26: Check if 'Eggs' is in the fullGroceryList

const vejceVarrayi = fullGroceryList.includes('Eggs');
// Step 27: Print the result of the check to the console

console.log(vejceVarrayi);
// Step 28: Add 'Yogurt' to the groceryList at the second position

fullGroceryList.splice(1 , 2, 'Yogurt');
// Step 29: Print the groceryList to the console

console.log(fullGroceryList);
// Step 30: Get index of 'Bananas' from the groceryList

let bananaIndex = fullGroceryList.indexOf('Bananas');
// Step 31: Print index of 'Bananas' from groceryList to the console

console.log(bananaIndex);
// Step 32: Create a new array called 'vegetables' with 'Carrots', 'Broccoli', and 'Spinach'

let vegetables = new Array('Carrots', 'Broccoli', 'Spinach');
// Step 33: Concatenate 'vegetables' with 'groceryList' and store the result in 'fullGroceryList'

fullGroceryList = vegetables.concat(groceryList);
// Step 34: Print the fullGroceryList to the console

console.log(fullGroceryList);
// Step 35: Create a new array called 'fruits' with 'Strawberries', 'Blueberries', and 'Raspberries'

let fruits = new Array('Strawberries', 'Blueberries', 'Raspberries');
// Step 36: Concatenate 'fruits' with 'fullGroceryList' and store the result in 'fullGroceryList'

fullGroceryList = fruits.concat(fullGroceryList);
// Step 37: Print the fullGroceryList to the console

console.log(fullGroceryList);
// Step 38: Find the index of 'Spinach' in the fullGroceryList

const spinachIndex = fullGroceryList.indexOf('Spinach');
// Step 39: Print the index of 'Spinach' to the console

console.log('Index špenátu v arrayi je:', spinachIndex);
// Step 40: Remove 'Spinach' from the fullGroceryList

fullGroceryList.splice(spinachIndex, 1); //.splice(pořadí elementu u kterého se začne provádět, kolikrát provést)
// Step 41: Print the fullGroceryList to the console

console.log(fullGroceryList);
// Step 42: Create a new array called 'bakeryItems' with 'Croissants', 'Bagels', and 'Muffins'

let bakeryItems = new Array('Croissants', 'Bagels', 'Muffins');
// Step 43: Concatenate 'bakeryItems' with 'fullGroceryList' and store the result in 'fullGroceryList'

fullGroceryList = bakeryItems.concat(fullGroceryList);
// Step 44: Print the fullGroceryList to the console

console.log(fullGroceryList);  
// Step 45: Sort the fullGroceryList alphabetically

fullGroceryList.sort();
// Step 46: Print the sorted fullGroceryList to the console

console.log(fullGroceryList);
// Step 47: Reverse the order of the fullGroceryList

fullGroceryList.reverse();
// Step 48: Print the reversed fullGroceryList to the console

console.log(fullGroceryList);
// Step 49: Join all items in the fullGroceryList into a single string separated by commas

let listNakup = fullGroceryList.join(', ')
// Step 50: Print the groceryString to the console

console.log(listNakup);
