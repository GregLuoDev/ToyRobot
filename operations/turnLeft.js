import { isValidPositionOnTable } from "../utils/isValidPositionOnTable.js";
import { DIRECTION_ARRAY } from "../utils/constants.js";

export function turnLeft(toyRobot) {
  if (!isValidPositionOnTable(toyRobot?.position)) {
    return toyRobot;
  }

  const index = DIRECTION_ARRAY.indexOf(toyRobot.direction);
  const newIndex = index === 0 ? 3 : index - 1;
  const newDirection = DIRECTION_ARRAY[newIndex];

  return { ...toyRobot, direction: newDirection };
}
