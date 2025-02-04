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
-----------
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

---DATOVÉ TYPY---

**TOTO JE PROZATIM VŠE - došli jsme do Data Types v 03-VariablesAndDataTypes.md**