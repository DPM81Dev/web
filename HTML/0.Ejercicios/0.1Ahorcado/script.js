const word = 'ARBOL';
const maxWrongGuesses = 6;
let incorrectGuesses = 0;
let guessedLetters = new Set();

const wordContainer = document.getElementById('word-container');
const incorrectGuessesContainer = document.getElementById('incorrect-guesses-container');
const hangmanContainer = document.getElementById('hangman-container');
const hangman = document.getElementById('hangman');
const newGameButton = document.getElementById('new-game-button');

function initializeWord() {
    wordContainer.innerHTML = '';
    guessedLetters.clear();
    incorrectGuesses = 0;

    for (let i = 0; i < word.length; i++) {
        const letterContainer = document.createElement('span');
        letterContainer.classList.add('letter-container');
        wordContainer.appendChild(letterContainer);

        const letterSpan = document.createElement('span');
        letterSpan.classList.add('letter');
        letterSpan.textContent = '_';
        letterContainer.appendChild(letterSpan);
    }
}

function updateIncorrectGuesses() {
    incorrectGuessesContainer.innerHTML = '';

    for (let i = 0; i < incorrectGuesses; i++) {
        const guessSpan = document.createElement('span');
        guessSpan.textContent = '✖';
        incorrectGuessesContainer.appendChild(guessSpan);
    }
}

function updateHangman() {
    hangman.style.backgroundPosition = `0 -${25 * incorrectGuesses}px`;
}

function processGuess(letter) {
    if (incorrectGuesses >= maxWrongGuesses) {
        return;
    }

    if (guessedLetters.has(letter)) {
        return;
    }

    guessedLetters.add(letter);

    let correctGuess = false;

    for (let i = 0; i < word.length; i++) {
        if (word[i] === letter) {
            const letterContainer = wordContainer.children[i];
            const letterSpan = letterContainer.children[0];
            letterSpan.textContent = letter;
            correctGuess = true;
        }
    }

    if (!correctGuess) {
        incorrectGuesses++;
        updateIncorrectGuesses();
        updateHangman();
    }

    if (!hasLost() && !hasWon()) {
        setTimeout(() => {
            const letters = Array.from(document.getElementsByClassName('letter'));
            const remainingLetters = letters.filter(letter => letter.textContent === '_');
            if (remainingLetters.length === 0) {
                hasWon();
            }
        }, 100);
    }
}

function hasLost() {
    return incorrectGuesses === maxWrongGuesses;
}

function hasWon() {
    for (let i = 0; i < word.length; i++) {
        if (wordContainer.children[i].children[0].textContent === '_') {
            return false;
        }
    }
    return true;
}

function newGame() {
    initializeWord();
    updateIncorrectGuesses();
    updateHangman();
}

newGameButton.addEventListener('click', newGame);

initializeWord();