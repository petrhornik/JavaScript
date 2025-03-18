// cvičení na rest syntaxi

/*
function join(separator, ...args) {
    return console.log(args.join(separator));
}

join("+", 1, 2, 3); // => "1+2+3"
*/

//tabule

function join(separator, ...args) {
    let result = "";
    for(const variable of rest){
        if (result === ""){
            result += variable;
        }
        else{
            result += separator + variable;
        }

        console.log(result);
    
    }

join("+", 1, 2, 3); // => "1+2+3"