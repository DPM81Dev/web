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

let selectedWord;
let letrasUsadas;
let mistakes;
let hits;

const addLetter = letras => {
    const letrasElement = document.createElement('span');
    letrasElement.innerHTML = letras.toUpperCase();
    letrasUsadasElement.appendChild(letrasElement);
}

const addBodyPart = bodyPart => {
    ctx.fillStyle = '#fff';
    ctx.fillRect(...bodyPart);
};

const wrongLetter = () => {
    addBodyPart(bodyParts[mistakes]);
    mistakes++;
    if(mistakes === bodyParts.length) endGame();
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
            hits++;
        }
    }
    if(hits === selectedWord.length) endGame();
}

const letrasInput = letras => {
    if(selectedWord.includes(letras)) {
        correctLetter(letras);
    } else {
        wrongLetter();
    }
    addLetter(letras);
    letrasUsadas.push(letras);
};

const letrasEvent = event => {
    let newLetter = event.key.toUpperCase();
    if(newLetter.match(/^[a-zñ]$/i) && !letrasUsadas.includes(newLetter)) {
        letrasInput(newLetter);
    };
};

const drawWord = () => {
    selectedWord.forEach(letras => {
        const letrasElement = document.createElement('span');
        letrasElement.innerHTML = letras.toUpperCase();
        letrasElement.classList.add('letras');
        letrasElement.classList.add('hidden');
        wordContainer.appendChild(letrasElement);
    });
};

const selectRandomWord = () => {
    let word = words[Math.floor((Math.random() * words.length))].toUpperCase();
    selectedWord = word.split('');
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
    mistakes = 0;
    hits = 0;
    wordContainer.innerHTML = '';
    letrasUsadasElement.innerHTML = '';
    startButton.style.display = 'none';
    drawHangMan();
    selectRandomWord();
    drawWord();
    document.addEventListener('keydown', letrasEvent);
};

startButton.addEventListener('click', startGame);