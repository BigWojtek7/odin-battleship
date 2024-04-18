import Player from "./player-class";
import Gameboard from "./gameboard-class";

export default class GameControl {
  constructor() {
    this.player1 = new Player();
    this.player2 = new Player();
    this.activePlayer = this.player1;

    this.boardPlayer1 = new Gameboard();
    this.boardPlayer2 = new Gameboard();
    this.activeBoard = this.boardPlayer2;
  }

  switchTurns() {
    this.activePlayer =
      this.activePlayer === this.player1 ? this.player2 : this.player1;

    this.activeBoard =
      this.activeBoard === this.boardPlayer2
        ? this.boardPlayer1
        : this.boardPlayer2;
  }

  playRound(row, column) {
    this.activePlayer.attack(this.activeBoard, row, column);
  }
}
