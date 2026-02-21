import { isValidPositionOnTable } from "../utils/isValidPositionOnTable.js";
import { Position, ToyRobot } from "../utils/model.js";
import { parsePlaceCommand } from "../utils/parsePlaceCommand.js";

export function placeToyRobot(commandParts) {
  const parsedObject = parsePlaceCommand(commandParts);

  if (!parsedObject) return;

  const { x, y, direction } = parsedObject;

  const newPosition = new Position(x, y);
  if (isValidPositionOnTable(newPosition)) {
    return new ToyRobot(direction, newPosition);
  }
}
