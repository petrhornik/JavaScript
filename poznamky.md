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

    - scripty se spouští postupně dle toho jak jdou v HTML za sebou

- s JS si jde "hrát" v tzv. playground prostředích odkazy v githubu *spselit-javascript
/01-CodeExecution.md*

- příkazy JS se do konzole vkládají řádek po řádku!!!!!!!

- v JS se v terminálu dá jen vypisovat

*tip* - po předání fin. verze zákazníkovi smazat logy(leak citlivých dat, ...)



**Příkazy a syntaxe**

console = interakce s JS konzolí

    console.log("TEXT"); = vypisuje text do konzole

    console.error() = jen mění barvu

    console.warn()

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

- kód se může "rozdělit" do jednotlivých částí(bloků/scopů)
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

např.:  let car = null;
        let bestObjectEver = null;

-- Změna typu dat v runtime(za běhu) --

let pie = 3.1415; <- proměnný let(můžeme měnit), zde se jedná o číselnou prom
pie = "Yumy!" <- zde se číslo změní na string

- po použítí console.log(pie) se míslo čísla bude vypisovat string

- změny tohoto typu mohou vést ke ZBYTEČNÝM KOMPLIKACÍM, proto to nebudeme používat

-- Kontrola typu dat --

typeoff = vypíše co proměnná obsahuje za data

např.: 

let pie = 3.1415;
console.log(typeof pie); <- vystup bude number(data jsou číselného typu)

let myName = "Dice Sensei";
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

    = pokud chceme aby měl strig více řádků umístíme do textu \n

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

**konec 05-StringManipulation.md**





