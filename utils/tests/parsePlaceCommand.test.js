import { parsePlaceCommand } from "../parsePlaceCommand";

describe("parsePlaceCommand", () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test("returns correct object for a valid PLACE command", () => {
    const commandParts = ["PLACE", "1,2,NORTH"];
    const result = parsePlaceCommand(commandParts);

    expect(result).toEqual({ x: 1, y: 2, direction: "NORTH" });
    expect(consoleSpy).not.toHaveBeenCalled();
  });

  test("logs error when commandParts has length <= 1", () => {
    const commandParts = ["PLACE"];
    const result = parsePlaceCommand(commandParts);

    expect(result).toBeUndefined();
    expect(consoleSpy).toHaveBeenCalledWith(
      "The PLACE command (PLACE) is invalid. The format should be: PLACE X,Y,F.",
    );
  });

  test("logs error when parameters are not exactly 3", () => {
    const commandParts = ["PLACE", "1,2"];
    const result = parsePlaceCommand(commandParts);

    expect(result).toBeUndefined();
    expect(consoleSpy).toHaveBeenCalledWith(
      "The parameters of PLACE command(PLACE 1,2) is invalid. The parameters should be: X,Y,F.",
    );
  });

  test("logs error when x or y are not numbers", () => {
    const commandParts = ["PLACE", "a,2,NORTH"];
    const result = parsePlaceCommand(commandParts);

    expect(result).toBeUndefined();
    expect(consoleSpy).toHaveBeenCalledWith(
      "The position of the PLACE command (PLACE a,2,NORTH) is invalid. The position must be numbers: X, Y.",
    );

    const commandParts2 = ["PLACE", "1,b,SOUTH"];
    parsePlaceCommand(commandParts2);
    expect(consoleSpy).toHaveBeenCalledWith(
      "The position of the PLACE command (PLACE 1,b,SOUTH) is invalid. The position must be numbers: X, Y.",
    );
  });

  test("logs error when direction is invalid", () => {
    const commandParts = ["PLACE", "1,2,UP"];
    const result = parsePlaceCommand(commandParts);

    expect(result).toBeUndefined();
    expect(consoleSpy).toHaveBeenCalledWith(
      'The direction of the PLACE command (PLACE 1,2,UP) is invalid. The direction must be one of "NORTH", "EAST", "SOUTH", or "WEST".',
    );
  });

  test("works with spaces in commandParts", () => {
    const commandParts = ["PLACE", " 3 , 4 , EAST "];
    // removing spaces will be done in the function if needed
    const result = parsePlaceCommand(commandParts.map((part) => part.trim()));

    expect(result).toEqual({ x: 3, y: 4, direction: "EAST" });
  });
});
