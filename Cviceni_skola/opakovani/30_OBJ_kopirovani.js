//constructor
function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;         
    this.age = age;
    this.introduceYourself = function () {
        console.log("It is me Ma...", "Ehm I am " + this.firstName + " " + this.lastName);
    };
}

const person2 = new Person("John", "Smith", 30); 
const person3 = {...person2}; // přiřazení reference na objekt person2 do proměnné person3
person2.hasAdog = "MAX";
console.log(person2 === person3); // true - porovnává se reference na objekt, ne jeho obsah

console.log(person2);
console.log(person3); // vypíše se stejný objekt, protože person3 je reference na person2