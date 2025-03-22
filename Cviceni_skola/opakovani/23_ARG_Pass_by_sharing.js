// fce. se pokusí upravit poskytnutý objekt
function modifyObject(obj) {
    obj.name = "John";

    console.log("Object inside modify:", obj); // { name: "John" }
}

// funkce se pokusí nahradit(změnit) poskytnutý objekt
function replaceObject(obj) {
    obj = {
        name: "Frank",
    };

    console.log("Object inside replace:", obj); // { name: "Frank" }
}

let person = {
    name: "Ema",
};

console.log("Object before:", person); // { name: "Ema" }

modifyObject(person);

console.log("Object after modify:", person); // { name: "John" }

replaceObject(person);

console.log("Object after replace:", person); // { name: "John" }