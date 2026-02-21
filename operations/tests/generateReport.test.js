import { generateReport } from "../generateReport";

describe("generateReport", () => {
  test("generates correct report for a valid toyRobot", () => {
    const toyRobot = {
      position: { x: 1, y: 2 },
      direction: "NORTH",
    };

    const report = generateReport(toyRobot);
    expect(report).toBe("Output: 1, 2, NORTH");
  });

  test("generates correct report for different position and direction", () => {
    const toyRobot = {
      position: { x: 3, y: 4 },
      direction: "EAST",
    };

    const report = generateReport(toyRobot);
    expect(report).toBe("Output: 3, 4, EAST");
  });

  test("works with edge values", () => {
    const toyRobot = {
      position: { x: 0, y: 0 },
      direction: "SOUTH",
    };

    const report = generateReport(toyRobot);
    expect(report).toBe("Output: 0, 0, SOUTH");
  });
});
