import { generateReport } from "./operations/generateReport.js";
import { moveToyRobot } from "./operations/moveToyRobot.js";
import { placeToyRobot } from "./operations/placeToyRobot.js";
import { turnLeft } from "./operations/turnLeft.js";
import { turnRight } from "./operations/turnRight.js";
import readline from "readline";
import { COMMAND } from "./utils/model.js";

// Create input interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Toy Robot");
console.log("Commands:");
console.log(
  "PLACE X,Y,F   => Put the toy robot on the table in position X,Y and facing NORTH, SOUTH, EAST or WEST",
);
console.log(
  "MOVE   => Move the toy robot one unit forward in the direction it is currently facing.",
);
console.log(
  "LEFT   => Rotate the robot -90 degrees in the specified direction",
);
console.log("RIGHT  => Rotate the robot 90 degrees in the specified direction");
console.log("REPORT => Announce the X,Y and F of the robot");
console.log("QUIT   => Quit the game");

let toyRobot;

function askForCommand() {
  rl.question("\nPlease enter command: ", (input) => {
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
        rl.close();
        return;
      default:
        console.log("Unknown command.");
    }

    askForCommand();
  });
}

askForCommand();
