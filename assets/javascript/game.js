// Word Choices Array
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
  "partition"
];

// Correct Song (Word) and letters
var selectedSong = "";
var correctLetters = [];

// Count of blanks needed
var blanks = 0;

// Correctly guessed letters with blanks
var correctLettersGuessed = [];

// Incorrect guesses
var wrongLetters = [];

// Score
var wins = 0;
var losses = 0;
var guesses = 15;

function beginGame() {
  guesses = 15;

  // Randomly select a song from array
  selectedSong = songTitle[Math.floor(Math.random() * songTitle.length)];

  // Separate (split) the word into single letters
  correctLetters = selectedSong.split("");

  // Number of letters in the song
  blanks = correctLetters.length;

  console.log(selectedSong);

  // Reset the letters guessed
  correctLettersGuessed = [];
  wrongLetters = [];

  // Underscores for the letters in the song
  for (var i = 0; i < blanks; i++) {
    correctLettersGuessed.push("_");
  }
console.log(correctLettersGuessed);


  document.getElementById("guessesleft").innerHTML = guesses;

  document.getElementById("letters").innerHTML = correctLettersGuessed.join(" ");

  document.getElementById("wrongletters").innerHTML = wrongLetters.join(" ");
}

function confirmLetter(letter) {
  var neededLetter = false;

  for (var i = 0; i < blanks; i++) {
    if (selectedSong[i] === letter) {
      neededLetter = true;
    }
  }

  if (neededLetter) {

    for (var l = 0; l < blanks; l++) {


      if (neededLetter[l] === letter) {
        correctLettersGuessed[l] = letter;
      }
    }
    console.log(correctLettersGuessed);
  }
  else {
    wrongLetters.push(letter);
    guesses--;
  }
}

function nextSong() {

  document.getElementById("guessesleft").innerHTML = guesses;

  document.getElementById("letters").innerHTML = correctLettersGuessed.join(" ");

  document.getElementById("wrongletters").innerHTML = wrongLetters.join(" ");

  if (correctLetters.toString() === correctLettersGuessed.toString()) {

    wins++;
    alert("Of course you won, you're Flawless!");

    document.getElementById("wins").innerHTML = wins;
    beginGame();
  } else if (guesses === 0) {
    losses++;
    alert("You lose! Let me upgrade you!");

    document.getElementById("losses").innerHTML = losses;
    beginGame();

  }

}

beginGame();

document.onkeyup = function(event) {
  var lowercase = String.fromCharCode(event.which).toLowerCase();

  confirmLetter(lowercase);
  nextSong();
};
