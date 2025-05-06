*tip* - stackoverflow.com - dotazy a odpovědi od vývojářů(vývojářské fórum)
      - nikdy nepouštět scripty kterým nerozumíme!!!!!!!


**HTML** - stará se o obsah
**CSS** - stará se o vzhled
**JavaScript** - stará se o živost webu
    - např.: přihlašovací okna, cookies, reklamy, videa na YT
    - interaguje s uživatelem
        - reaguje na to co dělá uživatel(např.: vizuálně)
    - pro vývoj webů je velmi podstatný
    
**JAVASCRIPT POZNAMKY**
------------------------

*compilovaný jazyk* - pokud ho chceme spustit, tak se musí program převést do vinárního formátu
*interpretovaný jazyk* - není potřeba převádět, začne se vykonávat hned

- JS je interpretovaný scriptovací jazyk
        - ale používá tzv. intime compilation - kvůli rychlosti(složitější části si převede do bin)

typechecking = kontrola chyb a syntaxe

2 typy: weakly type = typ se může v průběhu měnit, ale moc nekontroluje chyby
        strongly type = musíme definovat a typ zůstane jen danným typem

- JS je weakly type

duck typing = duck test, informace o tom jak jsou udělané datové typy v JS

- JS je rychlejší, ale můžeme dostat něco jiného než chceme protože objekty se stejnými vlastnostmi jsou "to samé"

- JS si pamatuje co jsme zadali dříve proto můžeme definovat proměnné v jednou příkazu a volat ji vo druhém atd.

**Spuštění kódu**

    Direct command exec
        1) v konzoli node - píšu přímo do konzole
        2) ve webu - v konzoli web prohlížeče v devtools
        3) ze souboru - spouštíme soubor pomocí node

    - scripty se spouští postupně dle toho jak jdou v HTML za sebou

- s JS si jde "hrát" v tzv. playground prostředích odkazy v githubu *spselit-javascript
/01-CodeExecution.md*

- příkazy JS se do konzole vkládají řádek po řádku!!!!!!!

- v JS se v terminálu dá jen vypisovat

*tip* - po předání fin. verze zákazníkovi smazat logy(leak citlivých dat, ...)



**Příkazy a syntaxe**

console = interakce s JS konzolí

    console.log("TEXT"); = vypisuje text do konzole

    console.error() = slouží specificky pro výpis chyb

    console.warn() = podobné jako error

// = komentář
/*TEXT*/  = - | | - , můžeme ho psát i na více řádků

- na konci každého příkazu je ; (prý není povinný[díky fci automatického ;] - JÁ BUDU PSÁT ; !!!!!!!!!!!!!)

- můžeme psát více stringů do jednoho logu a oddělovat je , console.log("TEXT", "TEXT");


**Proměnné**

let {NAZEV_PROMENE}; = vytvoří proměnnou která nic neobsahuje

{NAZEV_PROMENE} = "NEAKY_STRING";

console.log(NAZEV_PROMENE); - vypise proměnnou

---JMENA PROMĚNNÝCH---

- pro jména proměnných lze použít 1) velka a mala pismena
                                    2) cisla
                                    3) _
- NEPOUZIVAT DIAKRITIKU
- jmena prom. jsou case sensitive - pokud napíšeme např.: špatně velka a mala pismena nazvu proměnné a dáme TAB tak se to samo opraví
- vyplatí se používat zápis typu cammel case = psaní velkých písmen jen na začátku slov v názvech prom. jinak malá písmena
- proměnné by se měly jmenovat deskryptivně = aby i po roce bylo všem jasné na co proměnná je/k čemu slouží
    (pro krátké proměnné (např.: jen na 5 řádků), tak je OK použít proměnné: a, b, x, y, z, ...)

---TYPY PROMĚNNÝCH---

let = proměnnou kterou definuji může být přepsaná, mohou do ní být vložena data, může se použít na více místech, mohou se v ní měnit data i později

cv1 3)

const = data definované prom. nemůžou být přepsána, obsah/data konstanty(konst. proměnné) se musí definovat hned na začátku

cv1 4)  5)

var = starší verze pro starší prohlížeče(IE), dnes už nepoužívat pokud to není nutné

---PROMENNE SCOPES---

- kód se může "rozdělit" do jednotlivých částí(bloků/scopů), buď se nachází v "globálním" kódu nebo je uzavřen do {} či nějaké funkce
- např.: vhodné pro oddělování proměnných

- druhy: script, class, function, block {}

cv1 6)

**DATOVÉ TYPY**

*string*
 = obyčejný text různmé délky zapsán pomocí "" nebo '' - u kódu se určí jaký typ uvozovek se použije a POUŽIJE SE JEN TEN

 např.: let myName = "TOTO JE STRING";

*number*
= čísla
- používá se 64-bit floating point (numerická reprezentace reálných čísel v PC)
- des. čísla se oddělují . (např.: 3.18694456; 5.6; ...)

- např.:    let age = 29;
            const pie = 3.1415;

pokud máme číslo jako string můžeme ho převést na číslo pomocí Number()

    let ten = Number("10"); <- tato proměnná je číselná 10

*boolean*
= má jen 2 možné hodnoty true a false, pro rozhodování

např.:      const feelingHungry = true;
            let finishedWithWork = false;

*undefined*
= při použití v proměnné = proměnná nic neobsahuje

např.:      let t = undefined;
            let t; <- toto zadání prom. se bude také prezentovat jako undefined(proměnná existuj, ale nic neobsahuje(není definovaná))

*object*
= pro komplexní data, jsou vestavěné(build-in) nebo ručně zadané(uživatelsky)
- typy vestavěných: objects, arrays, dates, maps, sets, promises

*null*
= speciální typ pro objekty definující že objekt je "nic"(nic nenastaveno), objekt není proměnnou nebo na něj není nastaven pointer(odkaz)

-není identifikátor vlastnosti globálního objektu, jako může být undefined. Namísto toho null vyjadřuje nedostatek identifikace, což znamená, že proměnná neukazuje na žádný objekt.

např.:  let car = null;
        let bestObjectEver = null;

-- Změna typu dat v runtime(za běhu) --

let pie = 3.1415; <- proměnný let(můžeme měnit), zde se jedná o číselnou prom
pie = "Yumy!" <- zde se číslo změní na string

- po použítí console.log(pie) se míslo čísla bude vypisovat string

- změny tohoto typu mohou vést ke ZBYTEČNÝM KOMPLIKACÍM, proto to nebudeme používat

-- Kontrola typu dat --

typeoff = vypíše co proměnná obsahuje za druh data/hodnot

např.: 

let pie = 3.1415;
console.log(typeof pie); <- vystup bude number(data jsou číselného typu)

let myName = "Erik";
console.log(typeof myName); <- vystup bude string(data jsou typu string(prostý text))

-- Pokud proměnná neexistuje --

= pokud odkazovaná proměnná neexistuje tak JS vypíše ReferenceError

např.: 

> console.log(neexistujici_promenna);
Uncaught ReferenceError:

**Aritmetické operátory**

1) binární

    + součet
    - odečet
    * násobení
    / dělení
    % zbytkové dělení(modulus)

    např.:  40 + 2; vysledek 42
            21 * 2; vysledek 42
            5 % 2; zbytek po deleni 1
            atd.
    
2) unární

    ++ inkrementace(+ 1)
    -- dekrementace(- 1)

    např.:  let x = 42;
            x++; vysledek 43
            x--; vysledek 42
    
-- Zkratky aritmetických operátorů --

= znaménko napíšeme před =
- použijeme např. u přičítání k proměnné tak, aby se proměnná rovnala výsledku

např.:  let x = 40;
        x += 2; x je 42

POZOR! - v JS platí stejná pravidla jako v matice (násobení a dělení má přednost atd. - pro předjost + nebo - použijeme závorky)

POZOR! #2 - v JS lze kombinovat číslo a číslo ve stringu, ale ne vždy to funguje tak jak chci

        let five = 5;
        let one = "1";
        let four = five - one; zde vyjde 4
        let wrong = five + one; zde se to spojí do stringu

**Porovnávací operátory**

1) rovnost
    
    === je rovno (stejné datové typy)
    == je rovno (různé datové typy)
    
    !== není rovno (stejné datové typy)
    != není rovno (různé datové typy)

např.:  1 === 1; rovno
        1 === 5; nerovno
        1 == "42"; nerovno
        1 == "1"; rovno


2) odlišnost
    
    > větší
    >= větší či rovno
    < menší
    <= menší či rovno

    např.: 53 > 10; pravda
            156 <= 54; nepravda

**Manipulace se stringem**

*ustanovení stringu(declaring)*

    string = prosty text psanů do "" nebo ''

1) concatenation (spojování (i guess))

    = pomocí + můžeme spojit více stringů do sebe

    např.: 
    > const str1 = "Ahoj jak je, "
    > const str2 = "ja se mám dobře :d."
    > let spoj = str1 + str2;
    > console.log(spoj)
    Ahoj jak je, ja se mám dobře :d.

2) string template (předlopha)

    = v JS definujeme template string pomocí `` (back tick), dovoluje nám definovat string obsahující uvnitř sebe '' či "" (devoluje vypsat uvozovky) a další symboly např nový řádek

    např.:  > let pirate = `He's a pirate! And his name is "Jack Sparrow"!`;
            > console.log(pirate);
            He's a pirate! And his name is "Jack Sparrow"! <- text obsahuje uvozovky

3) string interpolation

    = umožňuje vložit proměnné nebo datové hodnoty(a pracovat s nimi) přímo do stringu bez přídavného spojování
    - realizace pomocí ${}

    např.: console.log(`2 + 2 = ${2 + 2}`) výstup je 2 + 2 = 4 <- to co je v {} se provádí jako práce s proměnnými a následně se např.: vysledek počítání vypíše na původní místo ${}

4) new line (nový řádek)

    = pokud chceme aby měl string více řádků umístíme do textu \n

    např.:  > let text = "Ahoj\njak je?";
            Ahoj
            jak je?

5) funkce stringu
        
        5.1) délka

            =můžeme zjistit délku strungu pomocí přidání .length

            např.:  > const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                    > console.log(alphabet.length); výstup bude 26 jelikož string obsahuje právě 26 znaků
        
        5.2) index

            = znaky ve stringu jsou indexovány(číslovány) = můžeme si z textu vytáhnou jakýkoli znak pomocí jemuž přiřazenému pořadovému čísli (počítámo od 0 protože PROGRAMIN)

            např.:  >const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                    > console.log(alphabet[0]); vypíše se A, protože je 1. v pořadí, proto jeho pořad. číslo je 0, indexové číslo se píše vždy za název proměnné příslušného stringu do []

                    > console.log(alphabet[alphabet.length - 1]); - pro vstup od konce mužeme použít .length, jelikož pořet znaků = 26 a počítáme od 0 proto - 1 a vypíše se Z s pořad. číslem 25 (poslední)

        5.3) includes

            = pro zjištění jestli příslušný string obsahuje urč. string/charakter použijeme .includes()
            - tate fce. vždy vrací hodnotu boolean

            např.:  > const sentence = "The quick brown fox jumps over the lazy dog.";
                    > const lookupWord = "lazy";
                    > console.log(`Obsahuje tato věta "${sentence}" slovo "${lookupWord}"? Odpověď je: "${sentence.includes(lookupWord)}" `); vypíše se true jelikož "zkoumaná" věta obrahuje hledané slovo
        
        5.4) substring

            = pokud chceme vypsat jen urč. část stringu použijeme .slice()
            - tato fce. akceptuje 2 proměnné počáteční a koncový index (pořadí indexů je pevné)

            např.:  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                    console.log(alphabet.slice(3, 8)); výpis: DEFGH
                    console.log(alphabet.slice(5)); výpis: FGHIJKLMNOPQRSTUVWXYZ
                    console.log(alphabet.slice(8, 3)); nelze z důvodu neplatného zadání
                    console.log(alphabet.slice(30)); nelze z důvodu neplatného zadání
        
        5.5) case manipulation (formátování textu)

            = pokud chceme znaky ve stringu přenastavit "velikostně" použijeme .toLowerCase či .toUpperCase

            např.:  const brokenSentence = "IT wOulD NOt kILl YOu tO lIstEn tO ME fOR a bIt...";
                    console.log(brokenSentence.toLowerCase());
                    výstup: it would not kill you to listen to me for a bit...
                    console.log(brokenSentence.toUpperCase());
                    výstup: IT WOULD NOT KILL YOU TO LISTEN TO ME FOR A BIT...


**kolekce**

*2 způsoby*     - index based = array - 
                -key based = map, set

    kolekce = vestavěné objekty, mohou obsahovat i více datových typů

1) Array (pole)

    = list/pole hodnot(objektů) na které můžeme přistupovat pomocí indexu (počítáme od 0), každý objekt má své pořadové číslo

    1.1) konstrukce
        
        způsoby zápisu:

            const fruits = new Array("apple", "banana", "cherry"); <- objekty obsažené v poli
            const numbers = Array(1, 2, 3, 4, 5);
            const carManufacturers = ["Toyota", "Honda", "Ford", "Chevrolet"];
            const weather = Array.of("sunny", "rain", "apocalypse");

        - délku arraye lze určit pomocí .length (fruits.length)
        - můžeme vytvořit i prázdný array a jen definovat jeho délku

            způsoby zápisu: 
                const emptyArray1 = new Array(42);
                const emptyArray2 = Array(42);
        
                const emptyArray3 = [];
                emptyArray3.length = 42;

        - délku můžeme upravovat i později pomocí .length = {pocet_objektu}

                > numbers.length = 6;
                výstup: [ 1, 2, 3, 4, 5, <1 empty item> ]

    1.2) manipulace s elementy

        - položky můžeme i přenastavovat i když už jsou určené

                > numbers[0] = 42;  <- 1 přepíšeme na 42
                vystup: [ 42, 2, 3, 4, 5, <1 empty item> ]

        - pokud chci přidat něco na konec array tak mužu použít length

            > numbers[numbers.length] = 60 <- lenght počítá od 1, ale array se počítá od 0, proto když máme 10 objektů počítaných od nuly a numbers.length vypíše do [10] tak to zastupuje jakoby 11. pozici v array
            výstup: [ 42, 2, 3, 4, 5, <1 empty item>, 60 ]

    1.3) funkce pro array

        1.3.1) .concat()

            = spojí více arrayů do hromady
            - bere 1 až více parametrů

            např.: const newArray = weather.concat(carManufacturers)
                    výstup: [
                                'sunny',
                                'rain',
                                'apocalypse',
                                'Toyota',
                                'Honda',
                                'Ford',
                                'Chevrolet'
                            ]

        1.3.2) .push()

            = na konec arraye vloží prvek

                např.: carManufacturers.push("Tesla")
                        výstup: [ 'Toyota', 'Honda', 'Ford', 'Chevrolet', 'Tesla' ]
        
        1.3.3) .unshift()

            = přidá prvek na začátek arraye

            např.: carManufacturers.unshift("Tesla")
                        výstup: ['Tesla' , 'Toyota', 'Honda', 'Ford', 'Chevrolet']
        
        1.3.4) .pop()

            = z konce arraye prvek odstraní

                např.: carManufacturers.pop(); <- smaže Teslu
                        výstup: [ 'Toyota', 'Honda', 'Ford', 'Chevrolet' ]

                alternativní zápis .pop():

                    carManufactuers.length -= 1
                    výpis: smaže poslední položku jelikož se zmenší celková délka

        1.3.5) .shift()

            = odstraní 1. položku v arrayi

            např.: carManufacturers.unshift(); <- smaže Toyotu
                        výstup: [ 'Honda', 'Ford', 'Chevrolet', 'Tesla' ]

        1.3.6) .slice()

            = vypíše jen konkrétní část arraye dle počáteční a koncové index hodnoty(stačí když je uvedena alespoň počáteční)

            např:   const newArray = weather.concat(carManufacturers)
                    console.log(newArray.slice(2, 4))
                    výstup: [ 'apocalypse', 'Toyota' ]

        1.3.7) .reverse()
        
            = prvky v arrayi se vypíšou od konce(inverze)


        1.3.8) .sort()

            = roztřídí to dané pole (dle abecedy s důrazem na velká a malá písmena či čísla velikostně apod.)

            - pokud chceme třídit specificky tak si můžeme napsat i vlastní třídící funkce a následně název této funkce uvét do () u sort

2) Map

    = list klíčových hodnot, nesmí být serializovaná (klíč a jeho hodnota)

    2.1) konstrukce

        - zakládáme pomocí new
            const pizzaMenu = new Map();


    2.2) funkce

        2.2.1) .set()

            = přidání hodnot do mapy

                pizzaMenu.set("Margherita", 200); <- název klíčové položky je margherita a klíčový prvek je 200
                pizzaMenu.set("Pepperoni", 250);
                pizzaMenu.set("Hawaiian", 280);

            > console.log("What is the price of Margherita?", pizzaMenu.get("Margherita"));
            výstup: What is the price of Margherita? 200

        
        2.2.2) .has()

            = kontrola existence klíčového prvky s názvem

        2.2.3) .size
            = vypíše počet položek obsažených v mapě

        2.2.4) .delete

            = smaže klíčovou hodnotu pro uvedený název

                > pizzaMenu.delete("Hawaiian");
                > console.log(pizzaMenu);
                výstup: Map(2) { 'Margherita' => 200, 'Pepperoni' => 250 } <- odstranili jsme položku hawaiian

        
        2.2.5) .clear()

            = smaže celý obsah mapy
                
                > pizzaMenu.clear();
                výstup: Map(0) {}

        2.2.6 .get()
            = vypíše klíčový prvek dle názvu klíč. položky

3) set

    = list unikátních hodnot(nemůže obsahuvat stejnou hodnotu vícekrát)

    3.1) konstrukce

        = manipuluje se pomocí funkcí
        - nový set vytvořím opět pomocí new
            
            const musicStyles = new Set();

    3.2) funkce

        3.2.1) .add()

            - podobné jako fce. set z mapy
            = přidává hodnoty do setu

            např:
                    musicStyles.add("Rock");
                    musicStyles.add("Pop");
                    musicStyles.add("Rap");
                    výstup: Set(3) { 'Rock', 'Pop', 'Rap' }

            - pokud se pokusím přidat hodnotu, která už v setu existuje tak se nic nestane, jelikož nemůžeme mít 2 stejné hodnoty (každá musí být unikátní)

        3.2.2) .has()

            = kontrola jestli set obsahuje daný objekt/hodnotu

            např.:
                > console.log("Does music styles contains Rap?", musicStyles.has("Rap"));
                výstup: Does music styles contains Rap? true

                > console.log("Does music styles contains Jazz?", musicStyles.has("Jazz"));
                výstup: Does music styles contains Jazz? false

        3.2.3) .size

            = pro kontrolu velikosti (počtu položek) setu

        3.2.4) .delete()


        3.2.5) .clear()

**Rozhodování**

= užitečné pro programování

1) If, Else

    = základní rozhodování pokud platí tak...., pokud neplatí tak......

    pokud informace v if (if(zde)) budou pravdivé(true), tak se provede if
    - v opačném případě se if neprovede a bude se pokračovat dál pomocí else či jiným if (nebo dál v kódu pokud další if ani else neexistuje)
    

    např.: let doIHaveEnoughMoney = true;

            if (doIHaveEnoughMoney) {
                console.log("I can buy this!");
            }

            console.log("Leaving shop");
            výstup: I can buy this!

            const legalDrinkingAge = 18;
            let myAge = 17;

            if (myAge > legalDrinkingAge) {
                console.log("Yes, I can!");
            } else {
            console.log("No, I can't!");
            }

            výstup: No, I can't!

            
            let myAge = 40;
            let haveFireworksLicense = true;

            let fireworksCategory;

            if (haveFireworksLicense) {
                fireworksCategory = "F4";
            } else if (myAge >= 21) {
                fireworksCategory = "F3";
            } else if (myAge >= 18) {
                fireworksCategory = "F2";
            } else if (myAge >= 15) {
                fireworksCategory = "F1";
            } else {
                fireworksCategory = "None";
            }

            console.log("I can buy fireworks of category:", fireworksCategory);
            výstup: I can buy fireworks of category: F4

    - else if = je obyčenný else který na sebe ihned navazuje ifem

2) AND, OR, NOT, SWITCH, Ternary Oper.

    2.1) AND
        = všechny podmínky musí být pravdivé jinak automaticky false
        - zapisuje se &&

        např.:

            const minAge = 12;
            const minHeight = 140;

            let height = 120;
            let age = 15;

            if (height >= minHeight && age >= minAge) {
           console.log("You can ride the rollercoaster!");
            } else {
                console.log("Sorry, you can't ride the rollercoaster");
            }

            výstup: Sorry, you can't ride the rollercoaster


    2.2) OR
        = alespoň jedna z podmínek musí být pravdivá, poté bude if true
        - zapisujeme jako || (2 pipy)

        např.: 

            let beerInsideFridge = true;
            let beerInsideCupboard = true;
            let beerInsideBasement = true;

            if (beerInsideFridge || beerInsideCupboard || beerInsideBasement) {
                console.log("We have some beer at home!");
            } else {
                console.log("Time to go shopping!");
            }

            výstup: 

    2.3) NOT

        = unární operátor, používá reverzní boolean hodnotu
        - zapisujeme jako !

        např.: let lightSwitchIsOn = false;

                console.log("Light is on: " + lightSwitchIsOn);

                //Toggle the light switch
                lightSwitchIsOn = !lightSwitchIsOn;

                console.log("Light is on: " + lightSwitchIsOn);

                //Toggle the light switch
                lightSwitchIsOn = !lightSwitchIsOn;

                console.log("Light is on: " + lightSwitchIsOn);
        
        - dá se využít i u IF statementu(pro zkracování)

            const haveToGoToWork = true;

            if (haveToGoToWork) {
                //wake up...
            } else {
                console.log("I can sleep longer!");
            }

    2.4) switch

    = je schopen obsahovat několik různých bloků(case) a dle urč proměnné vykoná právě ten case který má název jako ona proměnná
    - ukončujeme pomocí break
        - bez break by se kromě onoho urč. case provedou i ty pod ním
    - default = provede se tento case pokud se žádná jiná case neshoduje s názvem prom.
        - vždy se "schoda" testuje jako poslední, zapisujeme na konec
    např.: 
                //Asian grading scale
                let grade = "B";

                switch (grade) {
                    case "A":
                        console.log("Average");
                        break;
                    case "B":
                        console.log("Bellow Average");
                        break;
                    case "C":
                        console.log("Can't eat dinner");
                        break;
                    case "D":
                        console.log("Don't come home");
                        break;
                    case "F":
                        console.log("Find a new family");
                        break;
                    default:
                        console.log("Invalid grade");
                        break;
                }

    2.5) ternary operator

    = např.: určuje jestli se část webu bude renderovat či ne
    - obsahuje vždy 3 proměnné

    zápis: podmínka ? pokud_pravda_tak : pokud_nepravda_tak

        //How was lunch?
        let delicious = false;

        console.log("How was lunch?", delicious ? "Delicious!" : "Barely edible!");

**Cykly (Loops)**

= aby se kód zopakoval vícekrát než 1, na základě podmínek a jejich případné platnosti opakuje urč. část kódu

1) While

    = univerzální, cyklus který se bude opakovat dokud je pravdivá podmínka
    - cyklus se přeruší pomocí break nebo zrušení platnosti podmínky

    zápis:
        while (PODMINKA) {
        // code to run

        //update condition or break
    }

    např.:
        // returns random integer between 0 and max (exclusive)
        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
        }

        const requiredPointsToSucceed = 90;

        let passed = false;
        let tries = 0;

        while (!passed) {
           tries++;

            const points = getRandomInt(101);

            console.log(`Try ${tries}: ${points} points`);

            if (points >= requiredPointsToSucceed) {
                passed = true;
            }
        }

        console.log(`You passed after ${tries} tries congratulation!`);
    
    - můžeme zapsat i pomocí if statementu s break příkazewm

2) DO WHILE

    = kód je spuštěn min. 1 než bude zkontrolována platnost podmínky

3) FOR

    = je určeno kolikrát se zopakuje

    - zápis: for (initializer; condition; final-expression) {
                // code to run
             }
            initializer = definujeme to čím se bude určovat platnost cyklu
            condition = podmínka dle kderé se určuje jestli se bude cykl opakovat
            final-expression = kód co proběhne vždy po provedení cyklu

    např.: // script execution

            // returns random integer between 0 and max (exclusive)
            function getRandomInt(max) {
                return Math.floor(Math.random() * max);
            }

            // for loop
            const testToGrade = 26;

            for (let i = 0; i < testToGrade; i++) {
                console.log("Test graded, points:", getRandomInt(101));
            }

            console.log("All test have been graded!");

    tip: initializer lze definovat samostatně a condition se dá zapsat i do cyklu jako if a break

4) loopování mezi kolekcemi

    = používame dohromady kolekce(array) a cykly

    např.: const euCountriesArray = [
                "Germany",
                "France",
                "Italy",
                "Spain",
                "Poland",
                "Netherlands",
                "Belgium",
                "Greece",
            ];

            for (let i = 0; i < euCountriesArray.length; i++) {
                console.log(euCountriesArray[i].toUpperCase());
            }

            - pokud bude hodnota i menší než celkový počet položek v arrayi tak se bude cykl opakovat 
    4.1) for of

        = vrací variable z kolekce(array), můžeme pracovat s jednotlivými hodnotami v arrayi
        -např.: pokud array bude obsahovat 7 hodnot tak se for zopakuje 7 krát

        zápis: for (const variable of collection) {
                    // code to run
                }

        - DOPSAT!!!!

    4.2) forEach

        = použití funkce pro každého člena kolekce
        - funkce se vykoná pro každou položku kolekce

        zápis: collection.forEach(function);

    4.3) map

        - dostupné pouze pro arraye jejíchž proměnné se mohou měnit
        = se chopné udělat z arraye či z funkce ve které je nový array s použitím definovaných funkcí (původnímu arrayi se nic nestalo)
        - pro každý prvek či určité prvky kolekce se provede nějaká fce. a ony prvky se zařadí do nové kolekce(mapy)

        zápis: const newCollection = collection.map(function);

        cv17
        
    4.4) filter

        = z arraye schopen vytvořit nový array jen s těmi členy, kteří splňují předem definované podmínky

        zápis: const newCollection = collection.filter(function);

        cv17

    tip: filter a map můžeme chainovat za sebe(NA POŘADÍ ZÁLEŽÍ!!!)
    
**Funkce**

= bloky/části kódu které můžeme opakovaně používat a pomocí "názvů funkce" si je můžeme volat
- slouží k lepší přehlednosti a čitelnosti kódu
*tip* - funkce pro opakované používání by měly být jednoduché

    1) spouštění

    - funkce spouštíme tzv. VOLÁNÍM
            - voláme pomocí zadání názvu fce. a přídáním závorek () např.: mojefunkce() <- do () můžeme zapsat např.: nějakou proměnnou pro fci.
            - pokud nepřidáme (), tak fce. nebude zavolána!! - místo toho se např. v prohlížečí vypíše kód co fce obsahuje
            - při volání neexistující fce. nám to vrátí error (errory se mohou vždy jmenovat jinak)

        např.:  console.log("Tady jsem!!"); <- funkce console.log + proměnná na zpracování Tady jsem!!

    2) Tvoření fcí.

    - 3 způsoby : deklarační, anonymní funkce, arrow funkce
    - pro funkci nemusí být definována proměnná, bude fungovat i tak s onou proměnnou jako undefined

        2.1) deklarace funkce
        
            = klasická funkce se specifickým jménem (také se jim říká pojmenované fce. (named function))
            - tyto funkce se mohou volat i před tím než jsou definováný (kódem psaným nad fcí.) díky tzv. zdvihu (hoisting)

            -syntaxe: function functionName() {
                        //code to execute
                      }

                      functionName();
        
            - fci. deklarujeme pomocí příkazu function, poté zadáme název naší fce. poté () do kterých můžeme psát proměnné, které ve fci. použijeme . Následně do {} píšeme příslušný kód pro onu funkci (jednotlivé příkazy musí být odděleny ;). Za {} se ; nepíše!!

            - aby nám fce. po jejím vykonání něco VRÁTILA tak musíme použít příkaz return např.: return 0; = vypíše 0 NEBO return vysledek; = vypíše proměnnou vysledek

            - např.:    function functionName() {
                            //code to execute

                            return 0;
                        }

                        functionName();

            - fukce může u jména v () obsahovat parametry/proměnné se kterými se ve fci. manipuluje, parametrů může být více než 1, 

            - např.:    function functionName(variableName) {
                            //code to execute

                            return variableName;
                        }

                        functionName(0);

            *tip* - pokud zavoláme fci. a nevyplníme požadované proměnné, tak se funkce provede s hodnotami proměnných undefined :D

            - hodnoty proměnných můžeme definovat dopředu hodnoty argumentů, pokud by náhodou nebyly hodnoty uvedeny u volání fce.
                - nevznikne hodnota undefined!!!

            - např.:     function functionName(variableName = 0) {
                            //code to execute

                            return 0;
                        }

                        functionName();

        parametrová rest syntaxe

            = další zp. jak zadat parametry do fce.
                - fce. muže používat nedefinovaný počet argumentů/prom. a přistupovat k nim jako k listu(arrayi)
                - jen 1 tato syntaxe může být použíta jako definice, ale může být kombinována s jinnými parametry
        
            - např.: function functionName(variableName, ...restOfVariables) {
                        //code to execute

                        return 0;
                    }

                    functionName(20, 30, 40);

        2.2) function expression (anonymní fce.)

            = použijeme pokud nechceme či nepotřebujeme použít fci. pro celkový rozsah
            - funkce bude dostupná jen v našem scriptu a nikdo s ní nebude moci manipulovat

        - syntaxe:  const myFunction = function () {
                        //code to execute

                    }

                    myFunction();

        - na rozdíl od deklarace zde tvoříme fci. jakožto konstatní proměnnou
        - nemůže být zavolána, jednoduše fci. narveme ke konkrétní části kódu a nepíšeme ji samostatně
        - dobrá pomůcka pro zkracování kódu
        - tyto fce. mohou být pojmenovány

        - např.: Předěláme fci. z deklarační do expression formy logováním každého člena kolekce/listu
        
                    function justLog(string) {
                        return console.log(string);
                    }

                    const euCountriesArray = [
                        "Germany",
                        "France",
                        "Italy",
                        "Spain",
                        "Poland",
                        "Netherlands",
                        "Belgium",
                        "Greece",
                    ];
                    console.log(euCountriesArray);

                    euCountriesArray.forEach(justLog);

                        |           |           |
                        V           V           V
                    
                    // script execution

                    const euCountriesArray = [
                        "Germany",
                        "France",
                        "Italy",
                        "Spain",
                        "Poland",
                        "Netherlands",
                        "Belgium",
                        "Greece",
                    ];
                    console.log(euCountriesArray);

                    euCountriesArray.forEach(function (value) {  <- v tomto případě nemusí fce. obsahovat return
                        console.log(value);
                    });

        - IIFE (immediately invoked function expression)

            = speciální typ function expression, který je ihned vyvoláván
            - používáno dříve, dnes už moc ne

            např.: //script execution

                    (function () {
                        console.log("IIFE");
                    })();

    2.3) arrow funkce

        = syntaxe zápisu podobná jako expression, ALE nelze zaměňovat

        - syntaxe:  const myFunction = () => {
                        //code to execute
                    };

                    myFunction();
        
        - zapisujeme definováním proměnné funkce, následně () + můžeme do nich dopsat parametry, poté => (šipka), do {} píšeme kód fce.
        - pro vracení hodnot musí fce. tak jako všechny ostatní obsahovat return jinak undefined = velký špatný!!

        - další zp. zápisu: 

            const myFunction2 = a => a * a;

            console.log(myFunction2(7));

        - fce. i přes chybějící závorky funguje (syntaxe je stejná jako kdyby tam ty závorky byly a není potřeba return)

        - změna deklarace na arrow

            function justLog(string) {
                return console.log(string);
            }

            const euCountriesArray = [
                "Germany",
                "France",
                "Italy",
                "Spain",
                "Poland",
                "Netherlands",
                "Belgium",
                "Greece",
            ];
            console.log(euCountriesArray);

            euCountriesArray.forEach(justLog);

                |           |           |
                V           V           V

            const euCountriesArray = [
                "Germany",
                "France",
                "Italy",
                "Spain",
                "Poland",
                "Netherlands",
                "Belgium",
                "Greece",
            ];
            console.log(euCountriesArray);

            euCountriesArray.forEach((value) => {
                console.log(value);
            }); 
    
    parametry vs argumenty

        = to samé, jen se tomu jinak říká
            - parametr - název pro deklarovanou proměnnou u funkce
            - argument - proměnná co se zadává do funkce při volání
        
    Funkce vs Metody

        - funkce = prostě basic funkce moréé!
        - metoda = funkce definovaná uvnitř objektu

    3) zpětné volání funkcí (Func. callback)

        = fukce očekává že dostane jinou funkci, funguje podobně jako map, filter, array

        tip - pro jistotu aby nevznikla chyba při spuštění se musíme ujistit že to co do fce. voláme je oravdu funkce

        např.: 

                function func(callMeFunc) {
                    if (!callMeFunc) {
                        console.error("Function was undefined");
                        return;
                    }

                    if (typeof callMeFunc !== "function") {
                        console.error("Not a function");
                        return;
                    }

                    callMeFunc();
                }

                func();
                func(10);
                func(startCar); //this is function defined above

        tip - Ve výše uvedeném příkladu nejprve kontrolujeme, zda zadaná hodnota není nedefinovaná. Tato konstrukce se často používá i při kontrole jiných funkcí, protože je univerzální a pracuje na principu rovnosti, kdy se nedefinovaná rovná false (specifické pro Javascript). Další kontrola je, zda je zadaná proměnná funkcí, abychom nevykonali něco, co není funkcí.

    4) Předávání argumentů

        = je rozdíl ve vkládání argumentů do fcí. a co se s nimi stane. rozdíl je v tom jestli je argument typu object či nikoli

        4.1) pass by value (dle hodnoty)

            = argumenty NEJSOU objekty, hodnoty argumentů budou zkopírovány do fce. a změny této hodnoty se NEBUDOU šířit ven mimo fci.

            např.:

                // function which tries to modify provided value
                function modifyArgument(x) {
                    x = 5;

                    console.log("X inside:", x); // 5
                }

                let x = 0;

                console.log("X before:", x); // 0

                modifyArgument(x);

                console.log("X after:", x); // 0

        4.2) pass by sharing (průchod sdílením)

            = argumenty JSOU objekty, ODKAZ na objekt se zkopíruje do funkce, objekt může být modifikován a tato modifikace bude k dispozici i po skonšení fukce, přiřazení hodnoty samotnému argumentu se nepřenese mimo fci.

            např.: viz 23_ARG_Pass_by_sharing.js

            - úprava(modifikace) objektu se přenese mimo fci.
            - kompletní změna objektu zůstane jen uvnitř fce. z důvodu vytvoření nového objektu(bude obsahovat jen hodnoty obsažené v OBJ uvnitř fce. a to původní už ne) se stejným jménem POUZE V RÁMCI TÉ FUNCKE

        4.3) Pass by reference (průchod pomocí odkazu)

            - JS NEPODPORUJE!!!!!!!!!
            = přiřazení hodnotu argumentu probíhá mimo fci.

tip - YAGNI(You aren't gonna need it) = princip co říká že by kód nemměl obsahovat cokoli co není nezbytně nutné
    - 

**Objekty**

    = kolekce souvisejících dat a funkcí, obvykle se skládá z vlastností(proměnných uvnitř objektů) a metod (např.: OBJ. osoba -> vlast.: jméno, věk, ...
                                                                                                                                -> metody: jíst, spát, ...)

    - 2 základní části  1) proměnná co na objekt odkazuje
                        2) {} do kterých se zapisuje obsah objektu

    1) Tvoření

        - základní způsoby: <- požíváme hl. 2 první
                - object initializer
                - constructor function (konstrukční fce.)
                - metoda Object.create() <- starší, dnes už se moc nepoužívá
                - ze třídy (class)
        
        1.1) object initializer

            = vytvoření objektu přiřazením {} do proměnné -> vznik prázdného objektu

            const myObj = {}; <- zatim docela EZ well.... <- const se použije z důvodu aby se nezměnil odkaz na objekt(i přes const jde obsah měnit :D)

            - do objektu přidáme hodnoty tak že nejdřív napíšeme propertyName(identifikátor něčeho co objekt obsahuje) a potom PropertyValue(nějaká hodnota/text co objekt obsahuje) následně položky obsažené v objektu musíme oddělovat ,

            const myObj = {
                jmeno: "Petr",
                vek: 17,
            }

            tip - objekty mohou obsahovat i další objekty jako jejich vlastnosti

            tip2 - , dávat i za poslední položku i přes to že tam už nic není, protože při pozdější úpravě(přidání dalších hodnot) by jsme na to mohli zapomenout = ZBYTEČNÁ CHYBA

            např.: viz. 24_OBJ_Obj_initializer.js
    
        1.2) konstrukční fce.

            = objekty jsou tvořeny pomocí fce. s předdefinovanýma hodnotama, kde do () napíšeme nějaké hodnoty a ty se přidají do objektu a hlavně musíme použít klíčové slovo new než použijeme fci a hodnoty později obsažené v objektu musí být zapisovány pomocí this. např.: this.jmeno = jmeno_zadana_promena

            tip - konstrukční fce. = konstruktor

            např.:  function Person(firstName, lastName, age) {
                        this.firstName = firstName;
                        this.lastName = lastName;
                        this.age = age;
                        this.introduceYourself = function () {
                            console.log("It is me Ma...", "Ehm I am " + this.firstName + " " + this.lastName);
                    };
                    }

                    const person = new Person("John", "Smith", 30); <- NEW!!!!!

                - definována fce. Person, fce. může mít definované parametry, které se budou předávat příslušným vlastnostem objektu, aby se vlastnosti správně přiřadily tak musí mít určeny správně klíčová slova, konstrukce objektu spočívá přidáním new před voláním fce.
        
        rozdíl mezi konstruktorem a initializerem je ten:
    	    initializer = pokuj vypíšeme pomocí console.log() tak se vypíší {} a obsah uvnitř
            konstruktor = -||- tak se vypíše NAZEV_FUNKCE{} a obsah uvnitř <- NAZEV_FUNKCE je náízefv konstrukční fce. které slouží jako template

    2) Přistupování k vlastnostem objektu

        2.1) DOT NOTATION
            = přistupujeme k vlastnostem pomocí . <- tip - tomuto zp. se říká DOT NATION(pomocí tečky vytahujeme položky z objektu a manipulujeme s nimi)
            tip - dokonce i příkazy jako např. console jsou objekty (console.log() <- voláme funkci log z objektu console)

            např.:
                console.log(person.firstName);
                person.introduceYourself();
        
        2.2)BRACKET NOTATION
            - můžeme zobrazit i pomocí "závorkování" tzv. BRACKET NATION

            např.: 
                console.log(person["firstName"]);
                person["introduceYourself"]();      <- well....WHY?!.....IDK
        
        2.3)DESTRUCTURING
            = rozbalování položek v objektu do jednotlivých samostatných proměnných
            - viz: 008_objekty.js

        -s objekty můžeme manipulovat i v průběhu kódu(upravovat, mazat, přidávat) 28_OBJ_Obj_initializer_2.js
        - u objektu NEEXISTUJÍ prázdné hodnoty, buď hodnota existuje a na všechno co v objektu není se vrací undefined
        -v JS se mohu odkazovat na neexistující vlastnosti objektu, jelikož pokud ona vlastnost není obsažena v objektu, tak se vždy vrátí undefined

    3) kopirovani

        = pokud chceme za nějaký objekt připojit obsah jiného tak musím použít ...NAZEV_JINY_OBJEKT
                -kopírování typu shallow copy = kopírovaní do 1. úrovně (např.: nemůžeme )

        - používáme metodu pass by sharing
        3.1)spread
            = vytvoříme nový objekt do kterého se zkopírují hodnoty z definovného objektu v {}
                const car2 = {...car1}

        3.2)JSON = způsob jednoduchého a lightweight zápisu dat pro přenos
            jSON.stringyfy - převede objekt na JSON zápis
            JSON.parse - převede JSON string zpět na objekt
                const newObject = JSON.parse(JSON.stringify(myObject));

    tip - mutable x imutalbe (změnitelný x nezměnitelný)
        - pokud funkce mění původní kód(objekt, prom.,...) = function side effect
        - pokud funkce nějak manipuluje s objektem, prom., atd. a následně upravené hodnoty vlaží do nové prom., objektu, atd. = není func. sideeffect

    4) rovnost objektů
        = objekty si nejsou rovny ani pokud mají stejný obsah jelikož jsou každý v jiném adres. bloku 
        - musíme porovnávat jen obsahy objektů ne objekty jako takové
        
        4.1)JSON.stringify()
            = převede celý obsah objektu na string
            - takto lze porovnávat obsahy objektů
            - PROBLM = vzniká nám template, oba ty stringy engine uvidí jako 2 různé templaty
                     - stringy se čtou zleva doprava postupně, proto musíme mít při porovnávání položky na stejných místech, jinak i přes rovnost obsahu bude výsledek false

        4.2) _.isequal()
            - z knihovny Lodash
            = porovnává obsahy objektu se zanořením
            PROBLM = náročnější na výkon

    5) this
        = klíčové "magické" slovo (kinda složité he said)
        - mi použijeme jen ve 2 zp. v a mimo objekt
        - vždy se za něj dosadí nějaký obsah

        5.1) this v objektu
            = dovoluje přistoupit na properties onoho objektu
            - pokud si objekt voluá funkci tak název onoho objektu se zamění za this
            - viz. 31_OBJ_this.js

    6) druhy objektů

        6.1) MAP
            - viz. kolekce
        6.2) SET
            - viz. kolekce
        6.3) ARRAY
            - viz. kolekce
        6.4)Date
            =prezentuje čas v ms od začátku epochy(stejné jako Linux)
            - reprezentuje datum a čas pomocí časových zón(time zones)
            - obsahuje metody pro manipulaci s časem a datumem
                
                const now = new Date(); <- vytvoříme novou prom zobrazující aktuální čas
                console.log(now.toString()); <- vypíšeme čas jako text
                console.log(now.toLocaleString("cs-CZ")); <- definujeme jak se časový zápis zobrazí dle standardů oné země
                console.log(now.toISOString()); <- všeobecný standard pro zápis času            
            - timezone a locale se nastavují samostatně

            6.5) Globální objekt

                = hlavní "všeobecný" objekt v node
                - zobrazíme si ho pomocí příkazu this v node
                - základní fce. pro chod JS
    

tip - druhy programování
        1) strukturované 26_strukturovane_prog.js
        2) objektové 27_OBJ_prog.js
        3) funkcionální = všechno jsou funkce které spojujeme(chainujeme) za sebe
    
**Integrace JS do Web. Stránky**

    - pro integraci JS potřebuji nějaký Engine pro spouštění JS 
        + existují hromada API které prohlížeč obsahuje(knihovny pro JS obsažené ve web. browseru)
            např.: Picture-in-Picture (např. video v obraze na YT), WebGL(2D a 3D render), Web Speech API(čtení webu pro slepé)
    - každý tab v prohlížečí je "virtuálně" oddělen, každý tab se ovládá samostatně
            - taby nemohou komunikovat mezi sebou či si vyměňovat informace
    
    1) Webová úložiště

        1.1) localStorage
            = nikdy se nevymaže
            

        1.2) sessionStorage
            = smaže se po zavření prohlížeče


        1.3) IndexDB
            = databázová paměť
            - hl. pro prohlížečovou cache

        prikazy pro 1.1 a 1.2

            .setItem - přidání položek do paměti
            .getItem - pro čtení položek v paměti
            .removeItem - smaže položku v paměti
            .clear - smaže celou paměť

    viz. Cviceni_skola\integrace_web\02_TEST1

    tip - na uložené info v prohlížeči se dá podívat přes devTools(F12) 
        - github je postaven na reactu
    
    2) Window
        = globální objekt pro web
        - obsashuje dokument pro konkrétní stránku a funkce pro manipulování web. stránky a prohlížeč jako takový
        - 

        2.1) location
            = URL adresa onoho webového okna
            - pod 1 doménou může být mnoho "oken"

            tip = # v url otevírá stránku u "Anchor tagu" - nějakého "většinou" nadpisu
        
        2.2) historie
            