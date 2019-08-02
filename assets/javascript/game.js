
// Lets declare some global variables:
const starWords = ["Jabba The Hutt", "Mos Eisely Cantina", "Harrison Ford", "Carrie Fisher",
    "Skywalker", "Sith Lord", "Jedi Master", "Shii Cho", "Makashi", "Soresu", "Ataru", "Niman",
    "Juyo", "Yoda", "Millennium Falcon", "X Wing Starfighter", "Galactic Republic",
    "Corellian Run", "Coruscant", "Exar Kun", "Trade Federation", "Admiral Ackbar"];

let score = 0;
let loss = false;
let correctGuess = false;
let rightLetters = 0;
let guesses = 5;
let word = starWords[Math.floor(Math.random() * starWords.length)];
word = word.toLowerCase();
let wordDisplayArray = [];
let readyCheck = false;
let userAlphabet = [];
const userScore = document.getElementById("userScore");
const userGuesses = document.getElementById("userGuessesLeft");
const userAlphabetDisplay = document.getElementById("userPreviousGuesses")
const endGameDiv = document.getElementById("endGame");
const starWordDiv = document.getElementById("starWord");
for (let i = 0; i < word.length; i++) {
    wordDisplayArray.push("_")
    starWordDiv.textContent = wordDisplayArray.join(" ");
    if (word[i] === " ") {
        rightLetters++;
    }
}
console.log(word);
// Function to log out what the letters of the word are
function report(str) {
    console.log(str);
}

//Function that readies for a new game if the user wins or loses
function ready() {
    userGuesses.textContent = "5";
    userAlphabet = [];
    userAlphabetDisplay.textContent = "None";
    endGameDiv.textContent = "";
    starWordDiv.textContent = "";
    word = starWords[Math.floor(Math.random() * starWords.length)];
    word = word.toLowerCase();
    console.log("The new word is: " + word);
    wordDisplayArray = [];
    readyCheck = true;
    guesses = 5;
    loss = false;
    rightLetters = 0;
    for (let i = 0; i < word.length; i++) {
        console.log("length of iteration: " + i);
        if (word[i] === " ") {
            rightLetters++;
   
        }
        wordDisplayArray.push("_")
        starWordDiv.textContent = wordDisplayArray.join(" ");
    }
    console.log(wordDisplayArray);
}

//The game itself
document.onkeyup = function (event) {
    if (event.key === "Enter") {
        ready();
        console.log("------------------------");
        console.log("New game!");
        console.log("The word is: " + word.length + " long. It has: " + rightLetters + " spaces.");
    }
    else if (event.key === " ") {
        console.log("I've already given you spaces!  Don't be greedy!");
    }
    else if (readyCheck) {
        if (loss !== true) {
            if (rightLetters !== word.length) {
                const userGuess = event.key;
                userAlphabet.push(userGuess);
                userAlphabetDisplay.textContent = userAlphabet;
                console.log("You guessed: " + userGuess);
                for (let i = 0; i < word.length; i++) {
                    if (userGuess === word[i]) {
                        if(i === 0){

                        }
                        wordDisplayArray[i] = word[i];
                        starWordDiv.textContent = wordDisplayArray.join(" ");
                        rightLetters++;
                        correctGuess = true;
                        word = word.replace(userGuess, " ");
                        console.log("You got one! You have guessed: " + rightLetters + " of the letters.");
                    }
                }

                if (correctGuess !== true) {
                    guesses--;
                    userGuesses.innerHTML = guesses;
                    console.log("Oh no you only have: " + guesses + " guesses left!");
                }

                if (guesses === 0) {
                    loss = true;
                    readyCheck = false;
                    console.log("I'm sorry you have lost this round!");
                    endGameDiv.textContent = "I'm sorry you have lost this round! Press Enter to continue playing.";
                    console.log(loss);
                    console.log("----------------------------------");
                }

                if (rightLetters === word.length) {
                    console.log("Congratulations you won!");
                    score++;
                    readyCheck = false;
                    userScore.textContent = score;
                    endGameDiv.textContent = "Congratulations you won! Press Enter to continue playing.";
                }
                correctGuess = false;
            }
        }
    }
}