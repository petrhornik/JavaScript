function modifyArgument(x) { // funkce změní hodnotu jakékoliv proměnné na 5
    x = 5;

    console.log("X inside:", x); // 5
}

let x = 0; //měnitelná proměnná x

console.log("X before:", x); // vypíše 0, protože ještě neproběhla funkce

modifyArgument(x); // volání funkce, a x se změní na 5 jen v rámci funkce

console.log("X after:", x); // vypíše 0, protože se x změnilo pouze v rámci funkce

modifyArgument(68); // vypíše 5, protože se x změnilo na 5 v rámci funkce