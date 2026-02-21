import { TABLE_WIDTH, TABLE_HEIGHT } from "./constants.js";

export function isValidPositionOnTable(position) {
  const isValidPosition =
    position &&
    position.x < TABLE_WIDTH &&
    position.x >= 0 &&
    position.y < TABLE_HEIGHT &&
    position.y >= 0;

  if (!isValidPosition) {
    console.log("This command has been ignored since the position is invalid.");
  }

  return isValidPosition;
}
