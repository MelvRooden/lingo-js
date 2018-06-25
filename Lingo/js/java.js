//creating all inputs
var table = document.getElementsByTagName("table")[0];
for (var LO1 = 0; LO1 <= 4; LO1++) {
    var tr = document.createElement("TR");
    tr.setAttribute("id", "R" + LO1);
    for (var LO2 = 0; LO2 <= 4; LO2++) {
        var td = document.createElement("TD");
        var input = document.createElement("INPUT");
        input.setAttribute("id", 'R' + LO1 + 'L' + LO2);
        input.setAttribute("name", 'R' + LO1 + 'L' + LO2);
        input.setAttribute("type", "text");
        input.setAttribute("maxLength", "1");
        input.setAttribute("maxLength", "1");
        if (LO1 > 0) {
            input.setAttribute("disabled", "true");
        }
        td.appendChild(input);
        tr.appendChild(td);
    }
    table.appendChild(tr);
}

//all words
var words = [
    "appel",
    "aldus",
    "afwas",
    "aftel",
    "aarde",
    "armen",
    "actie",
    "apart",
    "adres",
    "avond",
    "aders",
    "alarm",
    "boten",
    "balen",
    "beter",
    "bomen",
    "boren",
    "boven",
    "boxen",
    "brood",
    "broek",
    "brand",
    "breed",
    "benen",
    "beeld",
    "brief",
    "beten",
    "basis",
    "blauw",
    "beren",
    "buren",
    "banen",
    "bloed",
    "broer",
    "blond",
    "boter",
    "beleg",
    "breng",
    "baken",
    "beker",
    "blind",
    "bezig",
    "baden",
    "bedel",
    "bazen",
    "bazin",
    "baren",
    "beden",
    "beken",
    "bezem",
    "baard",
    "bidet",
    "breuk",
    "conus",
    "cello",
    "creme",
    "cloud",
    "cacao",
    "cadet",
    "cavia",
    "ceder",
    "combi",
    "china",
    "clown",
    "draai",
    "deden",
    "dalen",
    "derde",
    "delen",
    "dwaas",
    "daden",
    "dader",
    "dames",
    "diner",
    "datum",
    "dozen",
    "dreun",
    "duits",
    "dagen",
    "deren",
    "dwerg",
    "dwaal",
    "dwing",
    "druil",
    "droog",
    "draad",
    "dweil",
    "drank",
    "duren",
    "dwars",
    "drugs",
    "daten",
    "daler",
    "doorn",
    "disco",
    "degen",
    "droom",
    "dient",
    "drone",
    "dadel",
    "duwen",
    "druif",
    "deken",
    "deler",
    "elven",
    "eigen",
    "enger",
    "engel",
    "elder",
    "enkel",
    "effen",
    "email",
    "egaal",
    "fiets",
    "friet",
    "files",
    "forel",
    "films",
    "feest",
    "fruit",
    "falen",
    "flora",
    "fauna",
    "feeen",
    "freak",
    "forum",
    "fusie",
    "geven",
    "gaven",
    "groen",
    "graai",
    "getal",
    "grens",
    "grond",
    "groef",
    "graal",
    "gewei",
    "games",
    "grote",
    "groet",
    "garen",
    "gebak",
    "graag",
    "genre",
    "glans",
    "geluk",
    "geeuw",
    "horen",
    "heren",
    "halen",
    "hagel",
    "haren",
    "helen",
    "harde",
    "hemel",
    "hoofd",
    "huren",
    "hamer",
    "haken",
    "heden",
    "hotel",
    "hobby",
    "heler",
    "hoger",
    "ieder",
    "index",
    "immer",
    "icoon",
    "inlog",
    "inzet",
    "innig",
    "jovel",
    "jaren",
    "jicht",
    "jabot",
    "jacht",
    "jaden",
    "jagen",
    "jager",
    "japon",
    "jarig",
    "jawel",
    "jeans",
    "jemig",
    "jeugd",
    "joint",
    "jonas",
    "joule",
    "koken",
    "kreet",
    "koker",
    "kerst",
    "kegel",
    "koude",
    "kader",
    "krent",
    "kamer",
    "kaars",
    "kaart",
    "kraan",
    "krant",
    "keren",
    "kruid",
    "kerel",
    "kubus",
    "kraal",
    "kleur",
    "kroon",
    "klein",
    "korst",
    "klopt",
    "kabel",
    "kunst",
    "kopje",
    "krans",
    "klimt",
    "kater",
    "klink",
    "kudde",
    "kruis",
    "lopen",
    "laten",
    "lepel",
    "links",
    "laden",
    "leven",
    "lezen",
    "lucht",
    "lenen",
    "laser",
    "lente",
    "licht",
    "lader",
    "leder",
    "lunch",
    "lijst",
    "leger",
    "leden",
    "legen",
    "lagen",
    "lezer",
    "lever",
    "lingo",
    "loper",
    "luier",
    "lager",
    "leeuw",
    "maand",
    "malen",
    "maken",
    "media",
    "meter",
    "motor",
    "maten",
    "markt",
    "mazen",
    "molen",
    "meest",
    "meren",
    "model",
    "meden",
    "maden",
    "macht",
    "meeuw",
    "mager",
    "magen",
    "maren",
    "manen",
    "noord",
    "nieuw",
    "negen",
    "namen",
    "neven",
    "nodig",
    "naden",
    "neder",
    "nemen",
    "onder",
    "optel",
    "ovaal",
    "ovale",
    "onwel",
    "optie",
    "orden",
    "oppas",
    "ouder",
    "ophef",
    "oases",
    "palen",
    "plein",
    "pegel",
    "paars",
    "prijs",
    "piano",
    "pixel",
    "paden",
    "pasta",
    "pizza",
    "poten",
    "paard",
    "puber",
    "pauze",
    "preek",
    "polis",
    "pater",
    "proef",
    "panda",
    "penis",
    "prins",
    "pluto",
    "polen",
    "plint",
    "quota",
    "quant",
    "quark",
    "queue",
    "quilt",
    "quote",
    "robot",
    "reken",
    "raden",
    "regen",
    "radio",
    "rente",
    "regio",
    "rugby",
    "reden",
    "roken",
    "ruzie",
    "ruist",
    "regel",
    "racen",
    "races",
    "riool",
    "ramen",
    "radar",
    "roman",
    "rokje",
    "razen",
    "roede",
    "staan",
    "staal",
    "speel",
    "steeg",
    "stoel",
    "stook",
    "steek",
    "schep",
    "spijs",
    "stoep",
    "shirt",
    "samen",
    "sites",
    "sport",
    "spalk",
    "sjaal",
    "storm",
    "staat",
    "steun",
    "strak",
    "serie",
    "shows",
    "schat",
    "snoep",
    "sfeer",
    "smeer",
    "speer",
    "scene",
    "speld",
    "smeed",
    "smaak",
    "super",
    "stand",
    "steer",
    "smelt",
    "sedan",
    "skier",
    "sluis",
    "sneer",
    "steel",
    "truck",
    "terug",
    "typen",
    "talen",
    "taboe",
    "tegel",
    "taart",
    "tafel",
    "trouw",
    "teken",
    "teren",
    "taken",
    "treur",
    "tenen",
    "titel",
    "thuis",
    "tiara",
    "teder",
    "toets",
    "tabak",
    "trein",
    "tarwe",
    "telen",
    "teler",
    "uiten",
    "uilig",
    "uitje",
    "uiver",
    "ultra",
    "uniek",
    "uppie",
    "uraan",
    "uiers",
    "velen",
    "vloer",
    "video",
    "varen",
    "vegen",
    "veren",
    "vader",
    "vaten",
    "vuren",
    "vrouw",
    "vlees",
    "vogel",
    "vroeg",
    "vezel",
    "veins",
    "vorst",
    "veder",
    "vanaf",
    "vieze",
    "veger",
    "villa",
    "veler",
    "vrede",
    "vries",
    "woord",
    "wagen",
    "wonen",
    "waren",
    "warme",
    "weten",
    "water",
    "weren",
    "wazig",
    "wegen",
    "weven",
    "wezen",
    "weken",
    "wraak",
    "wilde",
    "wreed",
    "wrede",
    "wenst",
    "woest",
    "xenon",
    "yacht",
    "yucca",
    "zwaar",
    "zware",
    "zesde",
    "zagen",
    "zalig",
    "zomer",
    "zeden",
    "zwart",
    "zeven",
    "zicht",
    "zadel",
    "zweet",
    "zenuw",
    "zweer",
    "zweef",
    "zaden",
    "zaken",
    "zeker",
    "zever",
    "zeeen"];
var fullWord = words[Math.floor(Math.random()*words.length)];
console.log('fullWord = ' + fullWord);

var word1 = fullWord.split('');
console.log('word1 = ' + word1);
for (var LO3 = 0; LO3 <= 4; LO3++) {
    document.getElementById('R' + LO3 + 'L0').setAttribute("value", word1[0]);
}

//the variable row keeps count of which row the check function has to check
var row = 0;
var nextRow = 1;

function reload() {
    location.reload();
}

function check() {
    var word = fullWord.split('');
    console.log('word = ' + word);

    //makes a changeable word for checking
    var tempWord = word;
    console.log('fullWord = ' + fullWord);
    console.log('word = ' + word);
    console.log('tempWord = ' + tempWord);

    //appoints all input values to a variable
    var l0 = document.getElementById('R' + row + 'L0').value;
    var l1 = document.getElementById('R' + row + 'L1').value;
    var l2 = document.getElementById('R' + row + 'L2').value;
    var l3 = document.getElementById('R' + row + 'L3').value;
    var l4 = document.getElementById('R' + row + 'L4').value;

    //makes a guess out of the inputs
    var fullGuess = (l0 + l1 + l2 + l3 + l4);
    console.log('fullGuess = ' + fullGuess);
    var guess = fullGuess.split('');
    console.log('guess = ' + guess);

    if (fullGuess.length < 5) {
        alert('vul uw gok helemaal in!');

        //checks if the whole word is the as the whole guess
    } else if (fullGuess === fullWord) {
        for (var painter = 0; painter <= 4; painter++) {
            document.getElementById('R' + row + 'L' + painter).style.background = "orange";
            document.getElementById('R' + row + 'L' + painter).setAttribute("disabled", "true");
        }

        //changes the button to restart the page
        document.getElementById("result").innerHTML = fullWord;
        document.getElementById("result").style.background = "green";
        document.getElementById("answer").innerHTML = "Herstart";
        document.getElementById("answer").onclick = reload;
    } else {

        //checks if 1 letter of the word is the same as 1 letter of the guess
        for (var loop = 0; loop <= 4; loop++) {
            if (guess[loop] === tempWord[loop]) {
                document.getElementById('R' + row + 'L' + loop).style.background = "orange";
                tempWord[loop] = 'correct';
                guess[loop] = 'correct.';
                document.getElementById('R' + row + 'L' + loop).setAttribute("disabled", "true");
                if (nextRow <= 4) {
                    document.getElementById('R' + nextRow + 'L' + loop).removeAttribute("disabled");
                }
            }
        }
        console.log('tempWord = ' + tempWord);

        //checks if 1 letter of the word is the same as a letter of the guess
        for (var loop1 = 0; loop1 <= 4; loop1++) {
            document.getElementById('R' + row + 'L' + loop1).setAttribute("disabled", "true");
            if (nextRow <= 4) {
                document.getElementById('R' + nextRow + 'L' + loop1).removeAttribute("disabled");
            }
            for (var loop2 = 0; loop2 <= 4; loop2++) {
                if (guess[loop1] === tempWord[loop2]) {
                    console.log('guess = ' + guess);
                    document.getElementById('R' + row + 'L' + loop1).style.background = "yellow";
                    console.log('tempWord = ' + tempWord);
                    tempWord[loop2] = 'incorrect';
                    break;
                }
            }
            loop2 = 0;
        }
        row++;
        nextRow++;

        //changes the button to restart the page
        if (row === 5) {
            document.getElementById("result").innerHTML = fullWord;
            document.getElementById("result").style.background = "red";
            document.getElementById("answer").innerHTML = "Herstart";
            document.getElementById("answer").onclick = reload;
        }
    }
}