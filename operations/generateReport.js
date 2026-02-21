import { isValidPositionOnTable } from "../utils/isValidPositionOnTable.js";

export function generateReport(toyRobot) {
  if (!isValidPositionOnTable(toyRobot?.position)) {
    return toyRobot;
  }

  console.log(
    `Output: ${toyRobot.position.x}, ${toyRobot.position.y}, ${toyRobot.direction}`,
  );
}
