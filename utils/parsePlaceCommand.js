import { DIRECTION_ARRAY } from "../core/constants.js";

export function parsePlaceCommand(commandParts) {
  const command = commandParts.join(" ");
  if (commandParts.length <= 1) {
    console.log(
      `The PLACE command (${command}) is invalid. The format should be: PLACE X,Y,F.`,
    );
    return;
  }

  const rest = commandParts.slice(1).join("");
  const placeParameters = rest.split(",");
  if (placeParameters.length !== 3) {
    console.log(
      `The parameters of PLACE command(${command}) is invalid. The parameters should be: X,Y,F.`,
    );
    return;
  }

  const x = +placeParameters[0].trim();
  const y = +placeParameters[1].trim();
  if (isNaN(x) || isNaN(y)) {
    console.log(
      `The position of the PLACE command (${command}) is invalid. The position must be numbers: X, Y.`,
    );
    return;
  }

  const direction = placeParameters[2].trim();
  const index = DIRECTION_ARRAY.indexOf(direction);
  if (index === -1) {
    console.log(
      `The direction of the PLACE command (${command}) is invalid. The direction must be one of "NORTH", "EAST", "SOUTH", or "WEST".`,
    );
    return;
  }

  return { x, y, direction };
}
