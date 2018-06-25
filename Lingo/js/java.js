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
        if (LO1 > 0) {
            input.setAttribute("disabled", "true");
        }
        td.appendChild(input);
        tr.appendChild(td);
    }
    table.appendChild(tr);
}

//all words
var words = ["lingo", "klaar", "appel", "taart", "draad", "actie", "avond", "brief", "groen", "paard", "puber"];
//picks a word out of the words list
var fullWord = words[Math.floor(Math.random()*words.length)];
console.log('fullWord = ' + fullWord);

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