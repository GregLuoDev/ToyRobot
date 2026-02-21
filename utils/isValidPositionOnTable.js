import { Dimension_X, Dimension_Y } from "./model.js";

export function isValidPositionOnTable(position) {
  const isValidPosition =
    position &&
    position.x < Dimension_X &&
    position.x >= 0 &&
    position.y < Dimension_Y &&
    position.y >= 0;

  console.log("position", position);
  if (!isValidPosition) {
    console.log("This command has been ignored since the position is invalid.");
  }

  return isValidPosition;
}
