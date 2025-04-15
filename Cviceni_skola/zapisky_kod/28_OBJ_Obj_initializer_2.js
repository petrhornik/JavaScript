const mujObjekt = {
    firstname: "Jan", //vlastnosti se skládájí z - jména proměnné a hodnoty proměnné, na vlasnost se odkazujeme pomocí jména proměnné
    lastname: "Novák",
    age: 30,

    //příklad metody, která je součástí objektu a manipuluje s jeho vlastnostmi(hodnotami)
    introduceYourself: function () {
        console.log("Ahoj, já jsem " + this.firstname + " " + this.lastname); //this se odkazuje na aktuální objekt
    },
};
console.log(mujObjekt); // vypíše se prázdný objekt
mujObjekt.introduceYourself(); //provede se funkce introduceYourself obsažená v objektu

mujObjekt.hasAdog = true; //přidání nové vlastnosti do objektu

console.log(mujObjekt.hasAdog); // vypíše se objekt s novou vlastností hasAdog

delete mujObjekt.hasAdog; //smazání vlastnosti hasAdog z objektu
console.log(mujObjekt.hasAdog); // vypíše se objekt bez vlastnosti hasAdog

// v JS se mohu odkazovat na neexistující vlastnosti objektu, jelikož pokud ona vlastnost není obsažena v objektu, tak se vždy vrátí undefined
if (mujObjekt.hasAcat) { //podmínka, která kontroluje zda objekt má vlastnost hasAdog
    console.log("Má kočku"); //pokud ano, vypíše se text "Má psa"
}