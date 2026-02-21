import { generateReport } from "./operations/generateReport.js";
import { moveToyRobot } from "./operations/moveToyRobot.js";
import { placeToyRobot } from "./operations/placeToyRobot.js";
import { turnLeft } from "./operations/turnLeft.js";
import { turnRight } from "./operations/turnRight.js";
import readline from "readline";
import { COMMAND } from "./utils/constants.js";
import { gameIntroduction } from "./utils/gameIntroduction.js";

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

gameIntroduction();

let toyRobot;

function askForCommand() {
  reader.question("\nPlease enter command: ", (input) => {
    const commandString = input.trim().replace(/\s+/g, " ").toUpperCase();
    const commandParts = commandString.split(" ");
    const command = commandParts[0];

    switch (command) {
      case COMMAND.PLACE:
        toyRobot = placeToyRobot(commandParts);
        break;
      case COMMAND.MOVE:
        toyRobot = moveToyRobot(toyRobot);
        break;
      case COMMAND.LEFT:
        toyRobot = turnLeft(toyRobot);
        break;
      case COMMAND.RIGHT:
        toyRobot = turnRight(toyRobot);
        break;
      case COMMAND.REPORT:
        generateReport(toyRobot);
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

askForCommand();
