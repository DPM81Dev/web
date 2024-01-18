const wordContainer = document.getElementById('wordContainer');
const startButton = document.getElementById('startButton');
const letrasUsadasElement = document.getElementById('letrasUsadas');

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
ctx.canvas.width  = 0;
ctx.canvas.height = 0;

// dibujo del ahorcado
const bodyParts = [
    [4,2,1,1],
    [4,3,1,2],
    [3,5,1,1],
    [5,5,1,1],
    [3,3,1,1],
    [5,3,1,1]
];

let palabraOculta;
let letrasUsadas;
let fallos;
let aciertos;

const addLetter = letras => {
    const letrasElement = document.createElement('span');
    letrasElement.innerHTML = letras.toUpperCase();
    letrasUsadasElement.appendChild(letrasElement);
}

const addBodyPart = bodyPart => {
    ctx.fillStyle = '#fff';
    ctx.fillRect(...bodyPart);
};

const letraErronea = () => {
    addBodyPart(bodyParts[fallos]);
    fallos++;
    if(fallos === bodyParts.length) endGame();
}

const endGame = () => {
    document.removeEventListener('keydown', letrasEvent);
    startButton.style.display = 'block';
}

const correctLetter = letras => {
    const { children } =  wordContainer;
    for(let i = 0; i < children.length; i++) {
        if(children[i].innerHTML === letras) {
            children[i].classList.toggle('hidden');
            aciertos++;
        }
    }
    if(aciertos === palabraOculta.length) endGame();
}

const letrasInput = letras => {
    if(palabraOculta.includes(letras)) {
        correctLetter(letras);
    } else {
        letraErronea();
    }
    addLetter(letras);
    letrasUsadas.push(letras);
};

const letrasEvent = event => {
    let nuevaLetra = event.key.toUpperCase();
    if(nuevaLetra.match(/^[a-zñ]$/i) && !letrasUsadas.includes(nuevaLetra)) {
        letrasInput(nuevaLetra);
    };
};

const drawWord = () => {
    palabraOculta.forEach(letras => {
        const letrasElement = document.createElement('span');
        letrasElement.innerHTML = letras.toUpperCase();
        letrasElement.classList.add('letras');
        letrasElement.classList.add('hidden');
        wordContainer.appendChild(letrasElement);
    });
};

const selectRandomWord = () => {
    let word = words[Math.floor((Math.random() * words.length))].toUpperCase();
    palabraOculta = word.split('');
};

const drawHangMan = () => {
    ctx.canvas.width  = 100;
    ctx.canvas.height = 140;
    ctx.scale(20, 20);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#d95d39';
    ctx.fillRect(0, 7, 4, 1);
    ctx.fillRect(1, 0, 1, 8);
    ctx.fillRect(2, 0, 3, 1);
    ctx.fillRect(4, 1, 1, 1);
};

const startGame = () => {
    letrasUsadas = [];
    fallos = 0;
    aciertos = 0;
    wordContainer.innerHTML = '';
    letrasUsadasElement.innerHTML = '';
    startButton.style.display = 'none';
    drawHangMan();
    selectRandomWord();
    drawWord();
    document.addEventListener('keydown', letrasEvent);
};

startButton.addEventListener('click', startGame);
// Palabras posibles
var words = ['PERRO', 'GATO', 'CONEJO', 'TORTUGA', 'SERPIENTE'];
// Palabra seleccionada al azar
var word = words[Math.floor(Math.random() * words.length)];
// Representación de la palabra a adivinar
var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}
// Número de intentos restantes
var remainingLetters = word.length;
var attempts = 5;

function guessLetter(letter) {
    if (attempts > 0) {
        var correctGuess = false;
        for (var j = 0; j < word.length; j++) {
            if (word[j] === letter && answerArray[j] === "_") {
                answerArray[j] = letter;
                remainingLetters--;
                correctGuess = true;
            }
        }
        if (!correctGuess) {
            attempts--;
        }
        document.getElementById('word').textContent = answerArray.join(' ');
        if (remainingLetters > 0) {
            document.getElementById('message').textContent = "Te quedan " + attempts + " intentos.";
        } else {
            document.getElementById('message').textContent = "¡Has ganado!";
        }
        if (attempts === 0 && remainingLetters > 0) {
            document.getElementById('message').textContent = "Has perdido. La palabra era '" + word + "'.";
        }
    }
}
