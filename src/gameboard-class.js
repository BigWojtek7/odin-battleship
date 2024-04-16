import Ship from "./ship-class";

export default class Gameboard {
  constructor() {
    this.board = [];
    this.newBoard = this.getBoard();
  }

  getBoard() {
    const rows = 10;
    const columns = 10;
    for (let i = 0; i < rows; i += 1) {
      this.board[i] = [];
      for (let j = 0; j < columns; j += 1) {
        this.board[i].push(null);
      }
    }
    return this.board;
  }

  dropShip(row, column, shipLength) {
    if (this.board[row][column] === null)
      this.board[row][column] = new Ship(shipLength);
  }

  receiveAttack(row, column) {
    if (this.board[row][column] !== null && this.board[row][column] !== 0) {
      this.board[row][column].hit();
      return true;
    }

    this.board[row][column] = 0;
    return false;
  }

  isAllSunk() {
    const array = this.board
      .map((row) => row.filter((cell) => cell))
      .filter((subArray) => subArray.length > 0)
      .map((row) => row[0]);

    console.log("arr0", array);
    for (let i = 0; i < array.length; i += 1) {
      // console.log("arr", array[i]);
      if (!array[i].isSunk()) return false
    }

    return true;
  }
}
const gameboard = new Gameboard();

gameboard.dropShip(3, 4, 4);
gameboard.dropShip(5, 4, 3);
gameboard.receiveAttack(2, 1);

// const array = gameboard.board
//   .map((row) => row.filter((cell) => cell))
//   .filter((subArray) => subArray.length > 0);
// console.log(1, array);

// for (const obj in array){
//   if (!obj.isSunk()) return false
// }

// array.forEach((object) => {
//   if (object.isSunk()) {
//     return true;
//   }
// });
