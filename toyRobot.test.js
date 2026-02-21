jest.mock("readline", () => {
  const mockQuestion = jest.fn();
  const mockClose = jest.fn();

  return {
    __esModule: true,
    default: {
      createInterface: jest.fn(() => ({
        question: mockQuestion,
        close: mockClose,
      })),
      __mockQuestion: mockQuestion,
      __mockClose: mockClose,
    },
  };
});

jest.mock("./operations/placeToyRobot.js", () => ({
  placeToyRobot: jest.fn(),
}));

jest.mock("./operations/moveToyRobot.js", () => ({
  moveToyRobot: jest.fn(),
}));

jest.mock("./operations/turnLeft.js", () => ({
  turnLeft: jest.fn(),
}));

jest.mock("./operations/turnRight.js", () => ({
  turnRight: jest.fn(),
}));

jest.mock("./operations/generateReport.js", () => ({
  generateReport: jest.fn(),
}));

jest.mock("./utils/isValidToyRobot.js", () => ({
  isValidToyRobot: jest.fn(),
}));

jest.mock("./utils/gameIntroduction.js", () => ({
  gameIntroduction: jest.fn(),
}));

import { askForCommand } from "./toyRobot.js";
import { placeToyRobot } from "./operations/placeToyRobot.js";
import { moveToyRobot } from "./operations/moveToyRobot.js";
import { generateReport } from "./operations/generateReport.js";
import { isValidToyRobot } from "./utils/isValidToyRobot.js";
import readline from "readline";

const mockQuestion = readline.__mockQuestion;
const mockClose = readline.__mockClose;

describe("askForCommand", () => {
  let consoleSpy;

  beforeEach(() => {
    jest.clearAllMocks();
    consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test("PLACE command calls placeToyRobot", () => {
    const mockRobot = { position: { x: 1, y: 2 }, direction: "NORTH" };
    placeToyRobot.mockReturnValue(mockRobot);

    mockQuestion.mockImplementationOnce((_, cb) => {
      cb("PLACE 1,2,NORTH");
    });

    askForCommand();

    expect(placeToyRobot).toHaveBeenCalledWith(["PLACE", "1,2,NORTH"]);
  });

  test("MOVE command after PLACE", () => {
    const mockRobot = { position: { x: 0, y: 0 }, direction: "NORTH" };

    placeToyRobot.mockReturnValue(mockRobot);
    moveToyRobot.mockReturnValue(mockRobot);
    isValidToyRobot.mockReturnValue(true);

    mockQuestion
      .mockImplementationOnce((_, cb) => cb("PLACE 0,0,NORTH"))
      .mockImplementationOnce((_, cb) => cb("MOVE"));

    askForCommand();

    expect(moveToyRobot).toHaveBeenCalled();
  });

  test("REPORT prints output", () => {
    const mockRobot = { position: { x: 0, y: 0 }, direction: "NORTH" };

    placeToyRobot.mockReturnValue(mockRobot);
    generateReport.mockReturnValue("Output: 0,0,NORTH");
    isValidToyRobot.mockReturnValue(true);

    mockQuestion
      .mockImplementationOnce((_, cb) => cb("PLACE 0,0,NORTH"))
      .mockImplementationOnce((_, cb) => cb("REPORT"));

    askForCommand();

    expect(generateReport).toHaveBeenCalled();
    expect(consoleSpy).toHaveBeenCalledWith("Output: 0,0,NORTH");
  });

  test("QUIT command closes readline", () => {
    mockQuestion.mockImplementationOnce((_, cb) => cb("QUIT"));

    askForCommand();

    expect(mockClose).toHaveBeenCalled();
  });
});
