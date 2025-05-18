/**
 * Exercise: Buying a Computer
 *
 * Define the budget and computer price.
 * Check if the computer is within the budget.
 * If the computer price is less than or equal to the budget, print "You can buy the computer!".
 * Otherwise, print "You need more money to buy the computer.".
 
**/

let cenaPC = 10000;
let budget = 9000;

if(budget > cenaPC){
    console.log("You can buy the computer!")
}
else{
    console.log("You need more money to buy the computer.")
}

/**

 * Define the computer's RAM (in GB).
 * Check if the computer has enough RAM.
 * If the RAM is 32 GB or more, print "The computer has a lot of RAM.".
 * If the RAM is between 16 GB (inclusive) and 32 GB (exclusive), print "The computer has a decent amount of RAM.".
 * Otherwise, print "The computer has insufficient RAM.".
 **/

    let ramPC = 32;

    if(ramPC >= 32){
        console.log("The computer has a lot of RAM.")
    }
    else if(ramPC >= 16 && ramPC < 32){
        console.log("The computer has a decent amount of RAM.")
    }
    else{
        console.log("The computer has insufficient RAM.")
    }

/**
 * Define the computer's age.
 * Check if the computer is new or used.
 * If the computer age is 1 year or less, print "The computer is new.".
 * If the computer age is between 1 year (exclusive) and 5 years (inclusive), print "The computer is used.".
 * Otherwise, print "The computer is old.".
**/

let agePC = 4;
let usePC = true;

if(agePC <= 1 && usePC === false){
        console.log("The computer is new.")
    }
    else if(agePC > 1 && agePC < 5){
        console.log("The computer is used.")
    }
    else{
        console.log("The computer is old.")
    }

/**
 * Define the computer's brand.
 * Check if the computer is a preferred brand.
 * If the computer brand is "Apple" or "Dell", print "The computer is a preferred brand.".
 * If the computer brand is "HP" or "Lenovo", print "The computer is a popular brand.".
 * Otherwise, print "The computer is not a preferred brand.".
 */

let brandPC = "Lenovo";

    if(brandPC == "Apple" || brandPC == "Dell"){
        console.log("The computer is a preferred brand.")
    }
    else if(brandPC == "HP" || brandPC == "Lenovo"){
        console.log("The computer is a popular brand.")
    }
    else{
        console.log("The computer is not a preferred brand")
    }