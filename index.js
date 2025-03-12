const MOVIES = [`Interstellar`, `Inception`,`Shrek`,`Gladiator`, `Scarface`]
const ANIMALS = [`Cat`, `Tiger`, `Dog`, `Bear`, `Elephant`,`Gorilla`]
const FRUITS = [`Lettuce`, `Potato`, `Carrot`] // hehe


const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

let currentWord = '';
let wordArray = [];
let guessedLetters = [];
// let wrongGuesses = 0;

const startButton = document.getElementById('startButton');

function selectCategory()
{

let array;
category = window.prompt("Which category would you like to pick?");

if (category.toUpperCase()  == "MOVIES") {
    array = MOVIES;
  } else if (category.toUpperCase()  == "ANIMALS") {
    array = ANIMALS;
  } else if (category.toUpperCase()  == "FRUITS") {
    array = FRUITS;
  } else {
    alert("You did not pick a correct category >:( Please select an availiable category thats listed");
    return; 
  }
 // console.log(array)


// sourced randomelement code from https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array
currentWord = array[Math.floor(Math.random() * array.length)];
wordArray = [...currentWord.toUpperCase()];

alert(`Game starting with Category: ${category.toUpperCase()}. It is ${currentWord.length} letters long`);
startGame()


}

function startGame ()
{
  const appDiv = document.getElementById('app');

const hangManBox = document.createElement('div');
hangManBox.className = 'hangman-box'
//hangManBox.style.display = 'flex'; 

for (let i = 0; i < wordArray.length; i++) {

    
    const lettersDiv = document.createElement('div');
    lettersDiv.className = 'letterBoxes';
    lettersDiv.id = `letter-${i}`;
    //lettersDiv.innerHTML = stringArray[i];

    hangManBox.appendChild(lettersDiv);
      
      
}

const guessedLettersDiv = document.createElement('div');
guessedLettersDiv.id = 'guessedLetters';
guessedLettersDiv.innerHTML = '<p>Guessed letters: </p>';
appDiv.appendChild(guessedLettersDiv);


appDiv.appendChild(hangManBox);

const guessButton = document.createElement('button');
  guessButton.textContent = 'Guess a Letter';
  guessButton.onclick = guessLetter;
  appDiv.appendChild(guessButton);

}



function guessLetter() {


  let guess = window.prompt("Guess a letter:").toUpperCase();

  if (!alphabet.includes(guess)) {
    alert("THATS NOT A LETTER!!!!! Enter a letter to guess >:( ");
    return;
  }
 
  if (guessedLetters.includes(guess)) {
    alert("You already guessed that letter!");
    return;
  }

  guessedLetters.push(guess);
  updateGuessedLettersDisplay();

  
  for (let i = 0; i < wordArray.length; i++) {
    if (wordArray[i] === guess) {
      const letterBox = document.getElementById(`letter-${i}`);
      letterBox.textContent = guess;
      //letterFound = true;
    }
  }

  const allLettersFound = wordArray.every(letter => 
    guessedLetters.includes(letter)
  );
  
  if (allLettersFound) {
    alert("Congratulations! You guessed the word!");
  }


  

}

function updateGuessedLettersDisplay() {
  const guessedLettersDiv = document.getElementById('guessedLetters');
  if (guessedLettersDiv) {
    guessedLettersDiv.innerHTML = `<p>Guessed letters: ${guessedLetters.join(', ')}</p>`;
  }
}