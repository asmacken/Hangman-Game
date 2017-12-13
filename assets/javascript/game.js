

var songTitle = ["superpower",
    "blue",
    "blow",
    "diva",
    "freedom",
    "ego",
    "listen",
    "irreplaceable",
    "mine",
    "formation",
    "flawless",
    "halo",
    "party",
    "hello",
    "rocket",
    "sorry",
    "partition"];

var random = Math.floor(Math.random() * songTitle.length);
console.log(songTitle);

var song = songTitle[random];

var correctLetters = [];

var wrongLetters = [];
console.log(song);

var playerGuess;

var wins = 0;
var losses = 0;
var guesses = 15;


// song underscores
for(var i = 0; i < song.length; i++) {
correctLetters.push("_");
console.log(correctLetters);
}

document.getElementById("letters").innerHTML = correctLetters.join(" ");



var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
var outputElement = document.getElementById('wrongletters');
var guessedLetters = []; // stores the letters the user guessed

document.addEventListener('keyup', function (event) {
var key = event.key.toLowerCase();
if (alphabet.indexOf(key) !== -1) {
  // the key is a letter in the alphabet
  if (guessedLetters.indexOf(key) === -1) {
    // the key has not been guessed
    guessedLetters.push(key);
    var string = guessedLetters.join(''); // join the letters together to one single string
    outputElement.textContent = string;
  }
}
});

// if (playerGuess(key >= 65 && key <= 90)) {
//   alert ("Only use letters a-z");
// }
//
// if (event.keyCode >= 65 && event.keyCode <= 90)
//     alert("input was a-z");

// function playerGuess(event) {
//   var playerGuess = event.keyCode;
//   return ((key >= 65 && key <= 90);
// }

document.onkeyup = function(event) {
correctLetters.push(playerGuess);
document.getElementById("letters").innerHTML = correctLetters;

var playerGuess = event.keypress;
if (playerGuess > 97 && playerGuess < 122) {
  alert ("Only use letters a-z");
  console.log(playerGuess)
}
}




// if (wrongLetters > 0) {
//   document.getElementById("#wrongletters");
//   wrongLetters.push("_");
// }




// document.onkeyup = function(event) {
// var wrongLetters = event.key;
// getElementById("wrongletters")

// function myFunction() {
//     var x = document.getElementById("wrongletters");
//     x.value = x.value.toUpperCase();
// }


// if (playerGuess)












 // ((playerGuess === "h") || (playerGuess === "a") || (playerGuess === "l") || (playerGuess === "o"))

 // var songHalo = "Halo"
