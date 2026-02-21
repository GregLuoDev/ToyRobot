import { isValidToyRobot } from "../isValidToyRobot";

describe("isValidToyRobot", () => {
  let consoleSpy;

  beforeEach(() => {
    // Spy on console.log
    consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test("returns true when toyRobot is valid", () => {
    const toyRobot = { position: { x: 0, y: 0 }, direction: "NORTH" };
    expect(isValidToyRobot(toyRobot)).toBe(true);
    expect(consoleSpy).not.toHaveBeenCalled();
  });

  test("returns false and logs message when toyRobot has no position", () => {
    const toyRobot = { direction: "NORTH" };

    expect(isValidToyRobot(toyRobot)).toBe(false);
    expect(consoleSpy).toHaveBeenCalledWith(
      "This command was ignored because the toy robot has not been placed.",
    );
  });

  test("returns false and logs message when toyRobot has no direction", () => {
    const toyRobot = { position: { x: 2, y: 2 } };

    expect(isValidToyRobot(toyRobot)).toBe(false);
    expect(consoleSpy).toHaveBeenCalledWith(
      "This command was ignored because the toy robot has not been placed.",
    );
  });

  test("returns false and logs message when toyRobot is null", () => {
    expect(isValidToyRobot(null)).toBe(false);
    expect(consoleSpy).toHaveBeenCalledWith(
      "This command was ignored because the toy robot has not been placed.",
    );
  });

  test("returns false and logs message when toyRobot is undefined", () => {
    expect(isValidToyRobot(undefined)).toBe(false);
    expect(consoleSpy).toHaveBeenCalledWith(
      "This command was ignored because the toy robot has not been placed.",
    );
  });

  test("returns false and logs message when toyRobot is falsy", () => {
    expect(isValidToyRobot(0)).toBe(false);
    expect(consoleSpy).toHaveBeenCalledWith(
      "This command was ignored because the toy robot has not been placed.",
    );
  });
});
