
// Lets declare some global variables:
const starWords = ["Jabba The Hutt", "Mos Eisely Cantina", "Harrison Ford", "Carrie Fisher",
 "Skywalker", "Sith Lord", "Jedi Master", "Shii Cho", "Makashi", "Soresu", "Ataru", "Niman",
  "Juyo", "Yoda", "Millennium Falcon", "X Wing Starfighter", "Galactic Republic", 
  "Corellian Run", "Coruscant", "Exar Kun", "Trade Federation"];

let score = 0;
let loss = false;
let correctGuess = false;
let rightLetters = 0;
let guesses = 5;
let word = starWords[Math.floor(Math.random() * starWords.length)];
word = word.toLowerCase();

// Function to log out what the letters of the word are
function report(str){
    console.log(str);
}

//Function that readies for a new game if the user wins or loses
function ready(){
    word = starWords[Math.floor(Math.random() * starWords.length)];
    guesses = 5;
    loss = false;
    rightLetters = 0;
    for(let i = 0; i < word.length; i++){
        if(word[i] === " "){
            rightLetters++;
        }
    }
}

//The game itself
document.onkeyup = function(event){
    if(event.key === "Enter"){
        ready();
        console.log("------------------------");
        console.log("New game!");
        console.log("The word is: " + word.length + " long. It has: " + rightLetters + " spaces.");
    }
    else if(event.key === " "){
        console.log("I've already given you spaces!  Don't be greedy!");
    }
    else if(loss !== true || rightLetters !== word.length){
        const userGuess = event.key;
        console.log("You guessed: " + userGuess);
        for(let i = 0; i < word.length; i++){
            if(userGuess === word[i]){
                rightLetters++;
                correctGuess = true
                word = word.replace(userGuess, " ");
                console.log("You got one! You have guessed: " + rightLetters + " of the letters."); 
            }
        }
    
        if(correctGuess !== true){
            guesses--;
            console.log("Oh no you only have: " + guesses + " guesses left!");
        }
    
        if(guesses === 0){
            loss = true;
            console.log("I'm sorry you have lost this round!");
        }

        if(rightLetters === word.length){
            console.log("Congratulations you won!");
            score++;
        }
        correctGuess = false;
    }

}