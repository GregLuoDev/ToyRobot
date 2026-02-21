import { DIRECTION_ENUM } from "../core/constants.js";
import { isValidPosition } from "../utils/isValidPosition.js";

export function moveToyRobot(toyRobot) {
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

  if (isValidPosition(newPosition)) {
    return { ...toyRobot, position: newPosition };
  }

  return toyRobot;
}
