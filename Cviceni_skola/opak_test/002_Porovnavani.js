let myName; //pokud není prom. deklarována, tak je undefined a v připadě if se vyhodnotí jako false

if (myName) {
    console.log("I am" + myName);   //v tomto případě se nevypíše nic, protože myName je undefined
}
else {
    console.log("Name is not defined"); //vypíše se tato věta
}