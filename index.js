let inquirer = require('inquirer');

console.log('HELLO! let\'s PLAY.');

function printBoard(board) {
  for(let i = 0; i < board.length; i++) {
    if(i === 3) {
      console.log("\n")
    }
    console.log(board[i]);
  }
}

function askForMove(callback) {
  var question =
   {
     name: 'playerMove',
     type: 'input',
     message: 'Enter the index of your your move (in the form of "[x, y]"): ',
     validate: function( value ) {
       if (value.length) {
         return true;
       } else {
         return 'Please enter a valid move.';
       }
     }
   };
 inquirer.prompt(question).then(callback);
}

// function round() {
//   let playerMove;
//   askForMove(function() {
//     playerMove = arguments;
//   })
//   return playerMove;
// }
function placeMove(moves, board, turn) {
  let newBoard = board.slice();
  if(turn % 2 === 0) {
    newBoard[moves[0]][moves[1]] = 'O';
  }
  else{
    newBoard[moves[0]][moves[1]] = 'X';
  }
  return newBoard;
}


function startGame() {
  console.log('GAME START!');
  let board = [[[],[],[]],[[],[],[]],[[],[],[]]];
  printBoard(board);
  let turn = 1;
  let playerMove;
  while(turn < 9) {
    askForMove(function(){
      playerMove = arguments;
    });
    board = placeMove(playerMove, board, turn);
    printBoard(board);
    turn++;
  }
}

startGame();
