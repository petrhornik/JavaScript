const now = new Date(); // aktuální datum a čas v UTC
console.log(now.toString()); 
console.log(now.toLocaleString("cs-CZ")); // aktuální datum a čas v lokálním formátu
console.log(now.toLocaleString("en-US")); // aktuální datum a čas v anglickém formátu

console.log(now.toISOString()); // aktuální datum a čas v ISO formátu

//způsoby zápisu času
const cas = new Date("2023-10-01T12:00:00Z"); // UTC čas
const cas2 = new Date(2023, 9, 1, 12, 0, 0); // jednotlivé hodnoty, měsíc je od 0 do 11!!!!!!!!!!
const cas3 = new Date(4558975667578578); // čas v milisekundách od počátku epochy