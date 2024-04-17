import GameControl from "./game-control-class"

describe("game controller", () => {
  const game = new GameControl
  test("switch turns", () => {
    expect(game.switchTurns())
  })
})