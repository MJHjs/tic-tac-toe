/*----- constants -----*/
/*----- app's state (variables) -----*/

let board = ['', '', '' , '' , '' , '' , '' , '', ''];
let currentPlayer = 'X';
let isGameActive = true;

const PLAYER1_WON = 'Player 1 Won!'
const PLAYER2_WON = 'Player 2 Won!'

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

/*----- cached element references -----*/
/*----- event listeners -----*/
// becasue of poisition it will be processed before any HTML in the page
/* The Array.from() method returns an array from any object with a length property.
*/
window.addEventListener('domContentLoaded', () => {
    const tiles = Array.from(document.querySelectorAll('.tile'));
    const playerDisplay = document.querySelector('.display-player');
    const resetButton = document.querySelector('#reset');

    resetButton.addEventListener('click, resetBoard');
})

// Reference to specific tile and index of it
tiles.forEach((tile, index) => {
    tile.addEventListener('click', () => userAction(tile, index));
});
/*----- functions -----*/
function handleResultsValidation() {
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        const a = board[winCondition[0]];
        const b = board[winCondition[1]];
        const c = board[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break;
        }
    }
}

if (roundWon) {
        announce(currentPlayer === 'X' ? PLAYER1_WON : PLAYER2_WON);
        isGameActive = false;
        return; 
}



if (!board.includes('')) 
    announce(TIE);







// announce end game state
const announce = (type) => {
    switch(type) {
        case PLAYER1_WON:
            announce,innerHTML = 'Player 1 Won';
            break;
        case PLAYER2_WON:
            announce.innerHTML = 'Player 2 Won';
            break;
            case TIE:
                announce.innerText = 'Tie';
    }
    announce.classlist.remove('hide');
};

const updateBoard = (index) => {
    board[index] = currentPlayer;
}



const changePlayer = () => {
    playerDisplay.classlist.remove(`player${currentPlayer}`);
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    playerDisplay.innerText = currentPlayer;
    playerDisplay.classlist.add(`player${currentPlayer}`);
}



const userAction = (tile, index) => {
    if(isValidAction(tile) && isGameActive) {
        tile.innerText = currentPlayer;
        tile.classlist.add(`player${currentPlayer}`);
        updateBoard(index);
        handleResultsValidation();
        changePlayer();
    }
}

