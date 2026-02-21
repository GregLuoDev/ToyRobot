import { isValidPosition } from "../isValidPosition.js";
import { TABLE_WIDTH, TABLE_HEIGHT } from "../../core/constants.js";

describe("isValidPosition", () => {
  let consoleSpy;

  beforeEach(() => {
    // Spy on console.log
    consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test("returns true for valid positions inside the table", () => {
    const positions = [
      { x: 0, y: 0 },
      { x: TABLE_WIDTH - 1, y: TABLE_HEIGHT - 1 },
      { x: 2, y: 3 },
    ];

    positions.forEach((pos) => {
      expect(isValidPosition(pos)).toBe(true);
      expect(consoleSpy).not.toHaveBeenCalled();
    });
  });

  test("returns false and logs message for positions outside table boundaries", () => {
    const positions = [
      { x: -1, y: 0 },
      { x: 0, y: -1 },
      { x: TABLE_WIDTH, y: 0 },
      { x: 0, y: TABLE_HEIGHT },
      { x: TABLE_WIDTH, y: TABLE_HEIGHT },
    ];

    positions.forEach((pos) => {
      expect(isValidPosition(pos)).toBe(false);
      expect(consoleSpy).toHaveBeenCalledWith(
        `This command has been ignored since the position (x:${pos.x}, y:${pos.y}) is invalid.`,
      );
      consoleSpy.mockClear(); // clear calls for next iteration
    });
  });

  test("throws error if position object is missing x or y", () => {
    expect(isValidPosition({ x: 1 })).toBe(false);
    expect(isValidPosition({ y: 1 })).toBe(false);
    expect(isValidPosition({})).toBe(false);
  });
});
