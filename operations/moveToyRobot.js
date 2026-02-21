import { isValidPositionOnTable } from "../utils/isValidPositionOnTable.js";
import { DIRECTION } from "../utils/model.js";

export function moveToyRobot(toyRobot) {
  if (!isValidPositionOnTable(toyRobot?.position)) {
    return;
  }

  let newPosition = { ...toyRobot.position };
  switch (toyRobot.direction) {
    case DIRECTION.NORTH:
      newPosition.y += 1;
      break;
    case DIRECTION.EAST:
      newPosition.x += 1;
      break;
    case DIRECTION.SOUTH:
      newPosition.y -= 1;
      break;
    case DIRECTION.WEST:
      newPosition.x -= 1;
      break;
  }

  if (isValidPositionOnTable(newPosition)) {
    toyRobot.position = newPosition;
  }

  return toyRobot;
}
