import { placeToyRobot } from "../placeToyRobot";
import { Position, ToyRobot } from "../../core/model";
import * as parseUtils from "../../utils/parsePlaceCommand";
import * as positionUtils from "../../utils/isValidPosition";

describe("placeToyRobot", () => {
  let parsePlaceCommandSpy;
  let isValidPositionSpy;

  beforeEach(() => {
    parsePlaceCommandSpy = jest.spyOn(parseUtils, "parsePlaceCommand");
    isValidPositionSpy = jest.spyOn(positionUtils, "isValidPosition");
  });

  afterEach(() => {
    parsePlaceCommandSpy.mockRestore();
    isValidPositionSpy.mockRestore();
  });

  test("returns a ToyRobot when command is valid and position is valid", () => {
    const commandParts = ["PLACE", "1,2,NORTH"];
    parsePlaceCommandSpy.mockReturnValue({ x: 1, y: 2, direction: "NORTH" });
    isValidPositionSpy.mockReturnValue(true);

    const result = placeToyRobot(commandParts);

    expect(result).toBeInstanceOf(ToyRobot);
    expect(result.direction).toBe("NORTH");
    expect(result.position).toBeInstanceOf(Position);
    expect(result.position.x).toBe(1);
    expect(result.position.y).toBe(2);
  });

  test("returns undefined if parsePlaceCommand returns undefined (invalid command)", () => {
    const commandParts = ["PLACE"];
    parsePlaceCommandSpy.mockReturnValue(undefined);

    const result = placeToyRobot(commandParts);
    expect(result).toBeUndefined();
  });

  test("returns undefined if position is invalid", () => {
    const commandParts = ["PLACE", "10,10,NORTH"];
    parsePlaceCommandSpy.mockReturnValue({ x: 10, y: 10, direction: "NORTH" });
    isValidPositionSpy.mockReturnValue(false);

    const result = placeToyRobot(commandParts);
    expect(result).toBeUndefined();
  });

  test("calls parsePlaceCommand and isValidPosition with correct arguments", () => {
    const commandParts = ["PLACE", "3,4,EAST"];
    parsePlaceCommandSpy.mockReturnValue({ x: 3, y: 4, direction: "EAST" });
    isValidPositionSpy.mockReturnValue(true);

    placeToyRobot(commandParts);

    expect(parsePlaceCommandSpy).toHaveBeenCalledWith(commandParts);
    expect(isValidPositionSpy).toHaveBeenCalledWith(
      expect.objectContaining({ x: 3, y: 4 }),
    );
  });
});
