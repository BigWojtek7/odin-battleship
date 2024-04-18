import Ship from "./ship-class";

export default class Gameboard {
  constructor() {
    this.board = this.getBoard();
  }

  getBoard() {
    const rows = 10;
    const columns = 10;
    const board = []
    for (let i = 0; i < rows; i += 1) {
      board[i] = [];
      for (let j = 0; j < columns; j += 1) {
        board[i].push(null);
      }
    }
    this.board = board
    return this.board
  }

  dropShip(array, shipLength) {
    const newShip = new Ship(shipLength);
    array.forEach( el => {
      this.board[el[0]][el[1]] = newShip;
    });
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

    for (let i = 0; i < array.length; i += 1) {

      if (!array[i].isSunk()) return false;
    }

    return true;
  }
}
