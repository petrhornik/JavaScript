function callMyName(name) { // definice funkce callMyName, která má parametr name
    console.log("I am : " + name); //příkaz na vypsání textu I am : a hodnoty name
}

callMyName("Petr"); //vypíše I am : Petr

function callMyName2(name = "Petr") { // definice funkce callMyName2, která má parametr name, pokud není zadán, tak se nastaví na Petr
    console.log("I am : " + name); 
}

callMyName2() //vypíše I am : Petr pokud není zadán žádný parametr

function callMyName3() {