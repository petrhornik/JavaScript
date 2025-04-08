// fce. se pokusí upravit poskytnutý objekt - změní ho v rámci celého kódu, protože objekt je předán jako reference (odkaz na místo v paměti), ne jako hodnota	
function modifyObject(obj) {
    obj.name = "John";

    console.log("Object inside modify:", obj); // { name: "John" }
}

// funkce vyvoří úpně nový objekt se jménem volaného objektu a v rámci sama sebe a lze s ním pracovat jen v této funkci
function replaceObject(obj) {
    obj = {
        name: "Frank",
    };

    console.log("Object inside replace:", obj); // { name: "Frank" }
}

let person = {
    name: "Ema",
    age: 30,
};

console.log("Object before:", person); // { name: "Ema", age: 30 }

modifyObject(person);

console.log("Object after modify:", person); // { name: "John", age: 30 }

replaceObject(person);

console.log("Object after replace:", person); // { name: "John", age: 30 }