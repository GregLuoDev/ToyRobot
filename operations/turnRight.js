import { DIRECTION_ARRAY } from "../core/constants.js";

export function turnRight(toyRobot) {
  const index = DIRECTION_ARRAY.indexOf(toyRobot.direction);
  const newIndex = (index + 1) % 4;
  const newDirection = DIRECTION_ARRAY[newIndex];

  return { ...toyRobot, direction: newDirection };
}
