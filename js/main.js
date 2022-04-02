const winCon = [
  [0, 1, 2],
  [0, 3, 6],
  [6, 7, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [0, 4, 8],
  [3 ,4 ,5]
];


let squareBelongsTo = {
  '1': 'x',
  '-1': 'o',
  'null': ''
};
let board;
let playerTurn;
let winner;

const boxes = document.querySelectorAll('.box');
const turnMsg = document.querySelector('h2');

document.getElementById('board').addEventListener('click', handleClick);
document.getElementById('play-again-btn').addEventListener('click', init);

init();

function init() {
  board = new Array(9).fill(null);
  playerTurn = Math.random() < 0.5 ? 1 : -1;
  winner = null;
  turnMsg.innerText = `turn: ${squareBelongsTo[playerTurn]}`
  render();
};

function render() {
  board.forEach(function(box, i) {
    boxes[i].innerHTML = squareBelongsTo[box];
  });
  
  // getWinner();
  // if (winner === 1) {
  //   winMsg.innerText = `${squareBelongsTo[winner]}'s WIN!`
  // } else if (winner === -1) {
  //   winMsg.innerText = `${squareBelongsTo[winner]}'s WIN!`
  // } 
};

function handleClick(evt) {
  const isOccupied = evt.target.id.replace('b', '');
  console.log(evt.target);
  if(board[isOccupied]) return;
  board[isOccupied] = playerTurn;
  turnMsg.innerText = `turn: ${squareBelongsTo[playerTurn * -1]}`
  render();
  playerTurn *= -1;
};

// function getWinner() {
//   if(Math.abs(board[0] + board[1] + board[2]) === 3) {
//     winner = playerTurn;
//     return winner;
//   }
// };