import { moveToyRobot } from "../moveToyRobot";
import { DIRECTION_ENUM } from "../../core/constants.js";
import * as positionUtils from "../../utils/isValidPosition.js";

describe("moveToyRobot", () => {
  let isValidPositionSpy;

  beforeEach(() => {
    // Spy on isValidPosition
    isValidPositionSpy = jest.spyOn(positionUtils, "isValidPosition");
  });

  afterEach(() => {
    isValidPositionSpy.mockRestore();
  });

  test("moves NORTH when valid", () => {
    const toyRobot = {
      position: { x: 1, y: 1 },
      direction: DIRECTION_ENUM.NORTH,
    };
    isValidPositionSpy.mockReturnValue(true);

    const result = moveToyRobot(toyRobot);
    expect(result.position).toEqual({ x: 1, y: 2 });
    expect(result.direction).toBe(DIRECTION_ENUM.NORTH);
  });

  test("moves EAST when valid", () => {
    const toyRobot = {
      position: { x: 1, y: 1 },
      direction: DIRECTION_ENUM.EAST,
    };
    isValidPositionSpy.mockReturnValue(true);

    const result = moveToyRobot(toyRobot);
    expect(result.position).toEqual({ x: 2, y: 1 });
    expect(result.direction).toBe(DIRECTION_ENUM.EAST);
  });

  test("moves SOUTH when valid", () => {
    const toyRobot = {
      position: { x: 1, y: 1 },
      direction: DIRECTION_ENUM.SOUTH,
    };
    isValidPositionSpy.mockReturnValue(true);

    const result = moveToyRobot(toyRobot);
    expect(result.position).toEqual({ x: 1, y: 0 });
    expect(result.direction).toBe(DIRECTION_ENUM.SOUTH);
  });

  test("moves WEST when valid", () => {
    const toyRobot = {
      position: { x: 1, y: 1 },
      direction: DIRECTION_ENUM.WEST,
    };
    isValidPositionSpy.mockReturnValue(true);

    const result = moveToyRobot(toyRobot);
    expect(result.position).toEqual({ x: 0, y: 1 });
    expect(result.direction).toBe(DIRECTION_ENUM.WEST);
  });

  test("does not move if new position is invalid", () => {
    const toyRobot = {
      position: { x: 0, y: 0 },
      direction: DIRECTION_ENUM.SOUTH,
    };
    isValidPositionSpy.mockReturnValue(false);

    const result = moveToyRobot(toyRobot);
    // Position stays the same
    expect(result.position).toEqual({ x: 0, y: 0 });
    expect(result.direction).toBe(DIRECTION_ENUM.SOUTH);
  });
});
