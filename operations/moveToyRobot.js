import { DIRECTION_ENUM } from "../utils/constants.js";
import { isValidPositionOnTable } from "../utils/isValidPositionOnTable.js";

export function moveToyRobot(toyRobot) {
  if (!isValidPositionOnTable(toyRobot?.position)) {
    return;
  }

  let newPosition = { ...toyRobot.position };

  switch (toyRobot.direction) {
    case DIRECTION_ENUM.NORTH:
      newPosition.y++;
      break;
    case DIRECTION_ENUM.EAST:
      newPosition.x++;
      break;
    case DIRECTION_ENUM.SOUTH:
      newPosition.y--;
      break;
    case DIRECTION_ENUM.WEST:
      newPosition.x--;
      break;
  }

  if (isValidPositionOnTable(newPosition)) {
    return { ...toyRobot, position: newPosition };
  }

  return toyRobot;
}
