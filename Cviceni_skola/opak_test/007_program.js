console.log("Hello world!"); //funguje jako print v Pythonu
console.error("Chyba!"); //vypise chybu
console.warn("Varovani!"); //vypise varovani

//deklarace promenne

let cislo = 18; //let je promenna, ktera se da menit
const hubka = "HUBKOOOO"; //const je promenna, ktera se neda menit

console.log(cislo + " " + hubka);

cislo = 69;
// hubka = "SLUPKOOOO"; <- nelze menit hodnotu konstanty

console.log(cislo + " " + hubka);

//objekt Kubis
const Kubis = {
    jmeno: "Kubis",
    vek: 18,
    bydliste: "Brno",
};

console.log(Kubis);
console.log(Kubis.jmeno + " " + Kubis.vek + " " + Kubis.bydliste);

if (Kubis.vek >= 17){
    console.log("Je ti vice nez 17 let.");
}

// datove typy
// String, Number, Boolean, null, undefined, Symbol

let string = "string, slova vole";

let number = 69;
let number2 = Number("69"); //převede string na number

let boolean = true; //pravda nebo nepravda

let null_hodnota = null; //prazdna hodnota, nic neobsahuje/nic na ni neodkazuje

let undefined; //promenna, ktera nebyla definovana
let neco = undefined; //to samé jako ↑

let object = { //objekt, obsahuje více hodnot najednou
    jmeno: "Kubis",
    vek: 18,
    bydliste: "Brno",
};



let prom1;
let prom2 = null;
prom3 = 10;

console.log(prom1); //undefined
console.log(prom2); //null

prom1 = "Neco"; //změna obsahu prom1 za běhu
// prom2 = "Neco"; <- kdybychom tohle odkomentovali, tak by se prom2 zmenilo na "Neco", tím pádem by se už nevypisovalo null, ale "Neco"


console.log(prom1 + " " + prom2); //Neco

if (prom2 === null) {
    console.log("Promenna je null.");
}

else if (prom2 !== null) {
    console.log("Promenna neni null.");
}

console.log(typeof prom1); //string

const typ_prom_2 = typeof prom2; //vrati typ promenne a to mužeme později využít např.: ve fci.
console.log(typ_prom_2); //object

try {
    console.log(neexistujici_promenna);
}
catch(ReferenceError) {
    console.log("Promenna neexistuje."); //vypise se, pokud proměnná co voláme v try neexistuje
}

let cislo1 = 10;
let cislo2 = 20;

console.log(cislo1 + cislo2); //30
console.log(cislo1 - cislo2); //-10
console.log(cislo1 * cislo2); //200
console.log(cislo1 / cislo2); //0.5
console.log(cislo1 % cislo2); //10 <- zbytkove dělení modulo

let i = 0;
while (i < 10) {
    console.log(i);
    i++;            //inkrementace
}

//zkrácený zápis

let vysledek = 0;

vysledek += cislo2; //vysledek = vysledek + cislo2

console.log(vysledek); //20

console.log( 5 - "1"); //4
console.log( 5 + "1"); //51 <- cislo se převede na string a pak se spojí

let text = `Ahoj, jak "je"`

console.log(text);

console.log(`Ahoj, 
    5 + 5 je ${5 + 5}`); //narveme příkaz do stringu + mužeme dělat řádky bez \n

console.log(text.length); //délka stringu
console.log("3 znak v prom. text je: " + text[3]); //3 znak v prom. text je: j
console.log();

const numbers = Array(1, 2, 3, 4, 5);

numbers.length = 6;

console.log(numbers);

let seznam = ["jablko", "HRUSKA", "banan", "meloun"];

for(item in seznam) {
    if (seznam[item] === seznam[item].toUpperCase()) {
        console.log(seznam[item]);
    }
}

let carbrands = ["mercedes", "lambo", "ferrari", "bmw", "audi", "skoda", "tesla"];

carbrands.forEach(function(value) { //anonymous function
    value = value.toUpperCase();
    console.log(value);
});

carbrands.forEach((value) => { //arrow function
    value = value.toUpperCase();
    console.log(value);
});