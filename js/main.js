const winCon = [
  [0, 1, 2],
  [0, 3, 6],
  [6, 7, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [0, 4, 8],
  [3 ,4 ,5]
]


let squareBelongsTo = {
  '1': 'x',
  '-1': 'o',
  'null': ''
}
let board;
let playerTurn;
let winner;

const boxes = document.querySelectorAll('.box');

document.getElementById('board').addEventListener('click', handleClick);
document.getElementById('play-again-btn').addEventListener('click', init);

init();

function init() {
  board = new Array(9).fill(null);
  playerTurn = Math.random() < 0.5 ? 1 : -1;
  winner = null;
  render();
};

function render() {
  board.forEach(function(box, i) {
    boxes[i].innerHTML = squareBelongsTo[box];
  })
};

function handleClick(evt) {
  const i = evt.target.id.replace('b', '');
  if(board[i]) return;
  board[i] = playerTurn;
  render();
  playerTurn *= -1;
};
