import { isValidPositionOnTable } from "../utils/isValidPositionOnTable.js";
import { DIRECTION } from "../utils/model.js";

export function turnLeft(toyRobot) {
  if (!isValidPositionOnTable(toyRobot?.position)) {
    return toyRobot;
  }

  switch (toyRobot.direction) {
    case DIRECTION.NORTH:
      toyRobot.direction = DIRECTION.WEST;
      break;
    case DIRECTION.EAST:
      toyRobot.direction = DIRECTION.NORTH;
      break;
    case DIRECTION.SOUTH:
      toyRobot.direction = DIRECTION.EAST;
      break;
    case DIRECTION.WEST:
      toyRobot.direction = DIRECTION.SOUTH;
      break;
  }

  return toyRobot;
}
