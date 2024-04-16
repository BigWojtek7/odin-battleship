import GameControl from "./game-control-class";

import "./style.css";

// import Gameboard from "./gameboard-class";

function screenHandler() {
  const game = new GameControl();

  // const playerTurnDiv = document.querySelector(".turn");
  const boardDiv = document.querySelector(".board");

  game.boardPlayer2.dropShip(3, 4, 4);
  game.boardPlayer2.dropShip(3, 5, 4);
  game.boardPlayer2.dropShip(3, 6, 4);
  game.boardPlayer2.dropShip(3, 7, 4);

  game.boardPlayer2.dropShip(5, 4, 3);
  game.boardPlayer2.dropShip(6, 4, 3);
  game.boardPlayer2.dropShip(7, 4, 3);

  const updateDisplay = () => {
    boardDiv.textContent = "";

    game.boardPlayer2.board.forEach((row, rowIndex) => {
      row.forEach((column, columnIndex) => {
        const cellButton = document.createElement("button");
        cellButton.classList.add("cell");

        cellButton.dataset.row = rowIndex;
        cellButton.dataset.column = columnIndex;
        boardDiv.appendChild(cellButton);
      });
    });
  };

  function clickHandlerBoard(e) {
    const buttonRow = e.target.dataset.row;
    const buttonColumn = e.target.dataset.column;

    if (!buttonRow) return;
    if (!buttonColumn) return;
    game.playRound(buttonRow, buttonColumn);
    updateDisplay();
  }

  boardDiv.addEventListener("click", clickHandlerBoard);

  updateDisplay();
  // return {updateDisplay}
}
screenHandler();
