import { TABLE_WIDTH, TABLE_HEIGHT } from "../core/constants.js";

export function isValidPosition(position) {
  const isValidPosition =
    position.x < TABLE_WIDTH &&
    position.x >= 0 &&
    position.y < TABLE_HEIGHT &&
    position.y >= 0;

  if (!isValidPosition) {
    console.log(
      `This command has been ignored since the position (x:${position.x}, y:${position.y}) is invalid.`,
    );
  }

  return isValidPosition;
}
