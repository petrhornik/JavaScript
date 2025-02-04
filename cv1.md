1)

>console.log("Hello world!");
 Hello world!
  undefined

2)
>console.log(myName)
 undefined   /*obsah proměnné*/
 undefined


3)

>notName = "KUMULA";        
>console.log(notMyName)     
 KUMULA                     
>notMyName = "PEPEK";       
>console.log(notMyName)     
 PEPEK                      

4)

> const pie = 3.14
undefined
> console.log(pie);
3.14
undefined
> pie = 5;
Uncaught TypeError: Assignment to constant variable.

5)

> const felisNavidad;
const felisNavidad;
      ^^^^^^^^^^^^

Uncaught SyntaxError: Missing initializer in const declaration

6)

>
 //script execution

 let outer = "outer";
 console.log(outer);

 {
   let inner = "test";
   console.log(outer);
   console.log(inner);
 }

 console.log(outer);
 console.log(inner); //error as innerTest is not available

- nastane chba v řádku 55 jelikož proměnná inner je vložena do bloku a proto "není dostupná"

