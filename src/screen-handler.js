import GameControl from "./game-control-class";

import "./style.css";


function screenHandler() {
  const game = new GameControl();

  // const playerTurnDiv = document.querySelector(".turn");
  const boardDiv = document.querySelector(".board1");
  const boardDiv2 = document.querySelector(".board2");

  game.boardPlayer2.dropShip(3, 4, 4);
  game.boardPlayer2.dropShip(3, 5, 4);
  game.boardPlayer2.dropShip(3, 6, 4);
  game.boardPlayer2.dropShip(3, 7, 4);

  game.boardPlayer2.dropShip(5, 4, 3);
  game.boardPlayer2.dropShip(6, 4, 3);
  game.boardPlayer2.dropShip(7, 4, 3);

  game.boardPlayer1.dropShip(0, 0, 4);
  game.boardPlayer1.dropShip(0, 1, 4);
  game.boardPlayer1.dropShip(0, 2, 4);
  game.boardPlayer1.dropShip(0, 3, 4);

  game.boardPlayer1.dropShip(2, 4, 3);
  game.boardPlayer1.dropShip(3, 4, 3);
  game.boardPlayer1.dropShip(4, 4, 3);

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

    game.boardPlayer1.board.forEach((row, rowIndex) => {
      row.forEach((column, columnIndex) => {
        const cellButton = document.createElement("button");
        cellButton.classList.add("cell2");

        cellButton.dataset.row = rowIndex;
        cellButton.dataset.column = columnIndex;
        boardDiv2.appendChild(cellButton);
      });
    });
  };

  function clickHandlerBoard(e) {
    const buttonRow = e.target.dataset.row;
    const buttonColumn = e.target.dataset.column;

    if (!buttonRow) return;
    if (!buttonColumn) return;
    game.playRound(buttonRow, buttonColumn);

    if (game.activeBoard.board[buttonRow][buttonColumn] === 0) {
      e.target.style.background = "red";
    } else {
      e.target.style.background = "green";
    }

    game.switchTurns();
    game.activePlayer.computerAttack(game.activeBoard);
    console.log("6", game.activePlayer.computerUsedNumbers);
    game.activePlayer.computerUsedNumbers.forEach((arr) => {
      const cell = document.querySelector(
        `.cell2[data-row="${arr[0]}"][data-column="${arr[1]}"]`,
      );
      if (game.activeBoard.board[arr[0]][arr[1]] === 0) {
        cell.style.background = "red";
      } else {
        cell.style.background = "green";
      }
    });
    game.switchTurns();
  }

  boardDiv.addEventListener("click", clickHandlerBoard);

  updateDisplay();
}
screenHandler();
