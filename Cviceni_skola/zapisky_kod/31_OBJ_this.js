//script execution

const person = {
    firstName: "John",
    lastName: "Smith",
    age: 30,
    introduceYourself: function () {
        console.log("It is me Ma...", "Ehm I am " + this.firstName + " " + this.lastName); //název objektu volajícího funkci se zamění za this
    },
};

function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;         
    this.age = age;
    this.introduceYourself = function () {
        console.log("It is me Ma...", "Ehm I am " + this.firstName + " " + this.lastName);
    };
    this.tellJoke = function () {
        console.log("I am so funny!");
    };
}

console.log(person);
person.introduceYourself();

const person2 = new Person("Jane", "Doe", 25); // vytvoříme nový objekt pomocí konstruktoru Person

person2.introduceYourself(); // zavoláme metodu introduceYourself na objektu person2
person2.tellJoke();