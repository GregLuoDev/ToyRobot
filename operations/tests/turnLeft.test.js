import { turnLeft } from "../turnLeft";

describe("turnLeft", () => {
  test("turns from NORTH to WEST", () => {
    const toyRobot = { position: { x: 0, y: 0 }, direction: "NORTH" };
    const result = turnLeft(toyRobot);
    expect(result.direction).toBe("WEST");
    expect(result.position).toEqual(toyRobot.position); // position unchanged
  });

  test("turns from WEST to SOUTH", () => {
    const toyRobot = { position: { x: 1, y: 2 }, direction: "WEST" };
    const result = turnLeft(toyRobot);
    expect(result.direction).toBe("SOUTH");
    expect(result.position).toEqual(toyRobot.position);
  });

  test("turns from SOUTH to EAST", () => {
    const toyRobot = { position: { x: 2, y: 3 }, direction: "SOUTH" };
    const result = turnLeft(toyRobot);
    expect(result.direction).toBe("EAST");
    expect(result.position).toEqual(toyRobot.position);
  });

  test("turns from EAST to NORTH", () => {
    const toyRobot = { position: { x: 3, y: 4 }, direction: "EAST" };
    const result = turnLeft(toyRobot);
    expect(result.direction).toBe("NORTH");
    expect(result.position).toEqual(toyRobot.position);
  });

  test("does not mutate the original toyRobot object", () => {
    const toyRobot = { position: { x: 5, y: 5 }, direction: "NORTH" };
    const result = turnLeft(toyRobot);
    expect(result).not.toBe(toyRobot); // new object returned
  });
});
