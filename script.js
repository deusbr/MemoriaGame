let cards = [];
let flippedCards = [];
let matchedPairs = 0;
let moves = 0;
let timer = 0;
let timerInterval;
let gameStarted = false;

const symbols = ['🍎', '🍌', '🍇', '🍊', '🍓', '🍒', '🍑', '🍍'];

const gameBoard = document.getElementById('game-board');
const movesDisplay = document.getElementById('moves');
const timerDisplay = document.getElementById('timer');
const restartBtn = document.getElementById('restart-btn');

function initGame() {
    cards = [];
    flippedCards = [];
    matchedPairs = 0;
    moves = 0;
    timer = 0;
    gameStarted = false;
    
    gameBoard.innerHTML = '';
    
    movesDisplay.textContent = moves;
    timerDisplay.textContent = timer;
    
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    
    let gameSymbols = [...symbols.slice(0, 8), ...symbols.slice(0, 8)];
    shuffleArray(gameSymbols);
    
    gameSymbols.forEach((symbol, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.index = index;
        card.dataset.symbol = symbol;
        
        const cardFront = document.createElement('div');
        cardFront.classList.add('card-front');
        cardFront.textContent = '?';
        
        const cardBack = document.createElement('div');
        cardBack.classList.add('card-back');
        cardBack.textContent = symbol;
        
        card.appendChild(cardFront);
        card.appendChild(cardBack);
        
        card.addEventListener('click', flipCard);
        gameBoard.appendChild(card);
        cards.push(card);
    });
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function flipCard() {
    if (
        this.classList.contains('flipped') || 
        this.classList.contains('matched') || 
        flippedCards.length === 2
    ) {
        return;
    }
    
    if (!gameStarted) {
        startTimer();
        gameStarted = true;
    }
    
    this.classList.add('flipped');
    flippedCards.push(this);
    
    if (flippedCards.length === 2) {
        moves++;
        movesDisplay.textContent = moves;
        
        setTimeout(checkMatch, 500);
    }
}

function checkMatch() {
    const [card1, card2] = flippedCards;
    const isMatch = card1.dataset.symbol === card2.dataset.symbol;
    
    if (isMatch) {
        card1.classList.add('matched');
        card2.classList.add('matched');
        matchedPairs++;
        
        if (matchedPairs === symbols.length) {
            endGame();
        }
    } else {
        card1.classList.remove('flipped');
        card2.classList.remove('flipped');
    }
    
    flippedCards = [];
}

function startTimer() {
    timerInterval = setInterval(() => {
        timer++;
        timerDisplay.textContent = timer;
    }, 1000);
}

function endGame() {
    clearInterval(timerInterval);
    setTimeout(() => {
        alert(`Parabéns! Você venceu em ${moves} movimentos e ${timer} segundos!`);
    }, 500);
}

restartBtn.addEventListener('click', initGame);

window.addEventListener('DOMContentLoaded', initGame);