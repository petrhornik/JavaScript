function Person(firstName, lastName, age) { // fukce pro vygenerování objektu dle zadaných parametrů
    this.firstName = firstName;
    this.lastName = lastName;           //this se odkazuje na aktuální objekt, který je vytvářen pomocí konstrukční funkce
    this.age = age;
    this.introduceYourself = function () {
        console.log("It is me Ma...", "Ehm I am " + this.firstName + " " + this.lastName);
    };
}

const person2 = new Person("John", "Smith", 30); // vytvoření objektu person dle konstrukční fce. Person

console.log(person2);
person2.introduceYourself();
// expected output: "John Smith is 30 years old."
// expected output: "It is me Ma... Ehm I am John Smith"