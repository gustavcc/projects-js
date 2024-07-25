const buttons = document.querySelectorAll('.button');
const player = document.getElementById('player');
const scroreXDiv = document.getElementById('scoreX');
const scroreODiv = document.getElementById('scoreO');

var currentPlayer = 'x';
var scroreX = 0;
var scroreO = 0;

function verifyResponse() {
    for (let i in buttons) {

        if (buttons[i]) {

        }
    }

    
}

function fillButton(button) {
    if (button.innerText === '') {
        button.innerText = currentPlayer;
        currentPlayer == 'x' ? currentPlayer = 'o' : currentPlayer = 'x';
        player.innerText = `Jogador ${currentPlayer}`
    } else if (button.innerText !== '') {
        alert('Espaço já preenchido')
    }

    verifyResponse();
}

function resetGame() {
    for (let i in buttons) {
        buttons[i].innerText = '';
    }
}