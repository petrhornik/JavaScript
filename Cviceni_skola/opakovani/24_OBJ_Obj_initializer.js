const person = { // objekt typu object initializer
    firstName: "John",
    lastName: "Smith",
    age: 30,
    introduceYourself: function () {    //funkce je součástí objektu a manipuluje s jeho vlastnostmi(hodnotami)
        console.log("It is me Ma...", "Ehm I am " + this.firstName + " " + this.lastName);
    },
};

console.log(person); // vypíše se obsah objektu person(propertyName i propertyValue)
console.log(person.firstName); // vypíše se pouze hodnota firstName z objektu person
person.introduceYourself(); //provede se funkce introduceYourself obsažená v objektu