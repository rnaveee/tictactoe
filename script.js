function Player(name, marker){
    this.name = name;
    this.marker = marker;
}

const grid = document.querySelector(".grid-container");
const form = document.getElementById("playerForm");
const playerOneInput = document.getElementById("playerOneName");
const playerTwoInput = document.getElementById("playerTwoName");

let currentMarker;
let playerState = Boolean(Math.floor(Math.random() * 2));
let winner = document.getElementById("winner");

let playerOneShow;
let playerTwoShow;
let playerOne;
let playerTwo;

let gameState = false;

let boxes = [];
let j = 0;
for(let i = 0; i < 3; i++){
    let boxRow = [];
    for(let k = 0; k < 3; k++){
        console.log(j);
        boxRow.push(grid.children[j])
        j++;
    }
    boxes.push(boxRow);
}
boxes.forEach(r => {
    r.forEach(c => {
        c.addEventListener('mouseover', () => {
            if(!c.classList.contains('clicked' && gameState)){
                c.style.backgroundColor = 'grey';
            }
        });
        c.addEventListener('mouseout', () => {
            if(!c.classList.contains('clicked' && gameState)){
                c.style.backgroundColor = 'white';
            }
        });
        c.addEventListener('click', () => {
            if(!c.classList.contains('clicked' && gameState)){
                c.classList.add('clicked');
                if(playerState){
                    currentMarker = 'X'
                    c.classList.add('X');
                    playerTwoShow.style.color = 'green';
                    playerOneShow.style.color = 'black';
                } else {
                    currentMarker = 'O';
                    c.classList.add('O');
                    playerOneShow.style.color = 'green';
                    playerTwoShow.style.color = 'black';
                }
                c.textContent = currentMarker;
                let check = checkWin(currentMarker);
                if(check === currentMarker) {

                    let win = document.getElementById("winner-container");
                    win.style.visibility = 'visible';
                    winner.style.fontWeight = 'bold';

                    if(playerState) winner.textContent = playerOne.name;
                    else winner.textContent = playerTwo.name;
                }
                playerState = !playerState;
            }
        });
    });
});

form.addEventListener('submit', (formFunc) => {
    formFunc.preventDefault();
    gameState = true;

    playerOne = new Player(playerOneInput.value, 'X');
    playerTwo = new Player(playerTwoInput.value, 'O');

    playerOneShow = document.getElementById("playerOneShow");
    playerTwoShow = document.getElementById("playerTwoShow");
    playerOneShow.textContent = playerOne.name;
    playerTwoShow.textContent = playerTwo.name;
    if(playerState){
        currentMarker = 'X';
        playerOneShow.style.color = 'green';
    } else {
        currentMarker = 'O';
        playerTwoShow.style.color = 'green';
    }
});

function checkWin(curr) {
    console.log(curr);
    let r= 0, c = 0;
    if (
        (boxes[r][c].classList.contains(curr) &&
        boxes[r+1][c+1].classList.contains(curr) &&
        boxes[r+2][c+2].classList.contains(curr)) ||

        (boxes[r][c+2].classList.contains(curr) &&
        boxes[r+1][c+1].classList.contains(curr) &&
        boxes[r+2][c].classList.contains(curr)) ||

        (boxes[r][c].classList.contains(curr) &&
        boxes[r][c+1].classList.contains(curr) &&
        boxes[r][c+2].classList.contains(curr)) ||

        (boxes[r+1][c].classList.contains(curr) &&
        boxes[r+1][c+1].classList.contains(curr) &&
        boxes[r+1][c+2].classList.contains(curr)) ||

        (boxes[r+2][c].classList.contains(curr) &&
        boxes[r+2][c+1].classList.contains(curr) &&
        boxes[r+2][c+2].classList.contains(curr)) ||

        (boxes[r][c].classList.contains(curr) &&
        boxes[r+1][c].classList.contains(curr) &&
        boxes[r+2][c].classList.contains(curr)) ||

        (boxes[r][c+1].classList.contains(curr) &&
        boxes[r+1][c+1].classList.contains(curr) &&
        boxes[r+2][c+1].classList.contains(curr)) ||

        (boxes[r][c+2].classList.contains(curr) &&
        boxes[r+1][c+2].classList.contains(curr) &&
        boxes[r+2][c+2].classList.contains(curr))
    ) {
        return curr;
    }
    return '';
}