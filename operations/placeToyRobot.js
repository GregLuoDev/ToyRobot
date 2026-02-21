import { isValidPositionOnTable } from "../utils/isValidPositionOnTable.js";
import { DIRECTION, Position, ToyRobot } from "../utils/model.js";

export function placeToyRobot(commandParts) {
  if (commandParts.length <= 1) {
    console.log(
      `The PLACE command(${commandParts.join(" ")}) is wrong. The format likes: PLACE X,Y,F`,
    );
    return;
  }

  const rest = commandParts.slice(1).join("");
  const placeParameters = rest.split(",");
  if (placeParameters.length !== 3) {
    console.log(
      `The parameters of PLACE command(${commandParts.join(" ")}) is wrong. The parameters like: X,Y,F`,
    );
    return;
  }

  const direction = placeParameters[2];
  if (!Object.values(DIRECTION).includes(direction)) {
    console.log(
      `The direction of the PLACE command(${commandParts.join(" ")})  is wrong`,
    );
    return;
  }

  const x = +placeParameters[0];
  const y = +placeParameters[1];
  if (isNaN(x) || isNaN(y)) {
    console.log(
      `The position of the PLACE command(${commandParts.join(" ")})  is wrong`,
    );
    return;
  }

  const newPosition = new Position(x, y);
  if (isValidPositionOnTable(newPosition)) {
    return new ToyRobot(direction, newPosition);
  }
}
