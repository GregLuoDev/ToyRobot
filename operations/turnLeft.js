import { DIRECTION_ARRAY } from "../core/constants.js";

export function turnLeft(toyRobot) {
  const index = DIRECTION_ARRAY.indexOf(toyRobot.direction);
  const newIndex = index === 0 ? 3 : index - 1;
  const newDirection = DIRECTION_ARRAY[newIndex];

  return { ...toyRobot, direction: newDirection };
}
