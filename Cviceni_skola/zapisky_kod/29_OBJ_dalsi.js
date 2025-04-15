// initializer
const person = { 
    firstName: "John",
    lastName: "Smith",
    age: 30,
    introduceYourself: function () {
        console.log("It is me Ma...", "Ehm I am " + this.firstName + " " + this.lastName);
    },
};

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
const person3 = new Person("John", "Smith", 30);

console.log(person2);
person2.introduceYourself();

// porovnání - při porovnánání objektů neporovnává jejich obsah, museli bychom provnávát všechny položky jednotlivě

console.log(person3 === person2);
