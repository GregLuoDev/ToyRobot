import { generateReport } from "./operations/generateReport.js";
import { moveToyRobot } from "./operations/moveToyRobot.js";
import { placeToyRobot } from "./operations/placeToyRobot.js";
import { turnLeft } from "./operations/turnLeft.js";
import { turnRight } from "./operations/turnRight.js";
import { COMMAND } from "./core/constants.js";
import { gameIntroduction } from "./utils/gameIntroduction.js";
import { isValidToyRobot } from "./utils/isValidToyRobot.js";
import readline from "readline";

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

gameIntroduction();

let toyRobot;

export function askForCommand() {
  reader.question("\nPlease enter command: ", (input) => {
    const commandString = input.trim().replace(/\s+/g, " ").toUpperCase();
    const commandParts = commandString.split(" ");
    const command = commandParts[0];

    switch (command) {
      case COMMAND.PLACE:
        toyRobot = placeToyRobot(commandParts);
        break;
      case COMMAND.MOVE:
        if (isValidToyRobot(toyRobot)) {
          toyRobot = moveToyRobot(toyRobot);
        }
        break;
      case COMMAND.LEFT:
        if (isValidToyRobot(toyRobot)) {
          toyRobot = turnLeft(toyRobot);
        }
        break;
      case COMMAND.RIGHT:
        if (isValidToyRobot(toyRobot)) {
          toyRobot = turnRight(toyRobot);
        }
        break;
      case COMMAND.REPORT:
        if (isValidToyRobot(toyRobot)) {
          const report = generateReport(toyRobot);
          console.log(report);
        }
        break;
      case COMMAND.QUIT:
        reader.close();
        return;
      default:
        console.log("Invalid command.");
    }

    askForCommand();
  });
}

if (process.env.NODE_ENV !== "test") {
  askForCommand();
}
