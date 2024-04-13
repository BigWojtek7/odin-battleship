import Ship from "./ship-class";

describe("ship class", () => {
  const object = new Ship(4);

  test("ship length", () => {
    expect(object.length).toBe(4);
  });
  test("ship numbers of hit", () => {
    expect(object.numberOfHits).toBe(0);
  });

  test("ship hit's function", () => {
    object.hit();
    expect(object.numberOfHits).toBe(1);
  });
  test("is ship sunk", () => {
    object.hit();
    expect(object.isSunk()).toBe(false);
    object.hit();
    object.hit();
    expect(object.isSunk()).toBe(true);
  });
});
