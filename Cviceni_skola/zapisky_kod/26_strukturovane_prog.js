//příklad strukturovaného programování = ma strukturu, procházeme kódem, čteme ho odshora dolů
//kdokoli si může volat funkce, které jsou definované v kódu
//všechny funkce jsou definované na začátku, pak se volají v kódu, který je pod nimi

const pie = 3.14;

function add(a, b) {
    return a + b;
}

let result = add(pie, 3);
console.log(result); // 6.14