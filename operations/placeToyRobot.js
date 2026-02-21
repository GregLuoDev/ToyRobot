import { isValidPosition } from "../utils/isValidPosition.js";
import { Position, ToyRobot } from "../core/model.js";
import { parsePlaceCommand } from "../utils/parsePlaceCommand.js";

export function placeToyRobot(commandParts) {
  const parsedObject = parsePlaceCommand(commandParts);

  if (!parsedObject) return;

  const { x, y, direction } = parsedObject;

  const newPosition = new Position(x, y);
  if (isValidPosition(newPosition)) {
    return new ToyRobot(direction, newPosition);
  }
}
