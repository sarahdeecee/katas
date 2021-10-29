function generateBoard(whiteQueen, blackQueen) {
  //Make line of array
  const boardSize = 8;
  let boardLine = [0, 0, 0, 0, 0, 0, 0, 0];
  let board = [];
  for (let i = 0; i < boardSize; i++) {
    //Add whiteQueen
    let whiteX = whiteQueen[0];
    let whiteY = whiteQueen[1];
    if (i === whiteX) {
      boardLine[whiteY] = 1;
    }

    //Add blackQueen
    let blackX = blackQueen[0];
    let blackY = blackQueen[1];
    if (i === blackX) {
      boardLine[blackY] = 1;
    }
    
    board[i]= boardLine; //Duplicate lines
    boardLine = [0, 0, 0, 0, 0, 0, 0, 0]; //Reset boardLine
  }
  return board;
}

function queenThreat(board) {
  //Find queens
  let whiteX;
  let whiteY = board.length + 1;
  let blackX;
  let blackY = board.length + 1;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++)
    {
      if (board[i][j] === 1) {
        if (blackY === board.length + 1) {
          whiteX = i;
          whiteY = j;
          blackY = 0;
          j++;
        } else {
          blackX = i;
          blackY = j;
          j++;
        }
      }
    }
  }

  //Calculate threat
  for (let pos = 1; pos < board.length; pos++) {
    if ((blackX === whiteX + pos) && (blackY === whiteY + pos)) { //Down-right
      return true;
    } else if ((blackX === whiteX + pos) && (blackY === whiteY - pos)) { //Down-left
      return true;
    } else if ((blackX === whiteX - pos) && (blackY === whiteY + pos)) { //Up-right
      return true;
    } else if ((blackX === whiteX - pos) && (blackY === whiteY - pos)) { //Up-left
      return true;
    } else if (blackY === whiteY) { //Up or down
      return true;
    } else if (blackX === whiteX) { //Left or Right
      return true;
    }
  }
  if (pos = board.length - 1) { //No match
    return false;
  }
}

/*let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));*/

let whiteQueen = [0, 0];
let blackQueen = [5, 7];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));