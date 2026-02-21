import { turnRight } from "../turnRight";

describe("turnRight", () => {
  test("turns from NORTH to EAST", () => {
    const toyRobot = { position: { x: 0, y: 0 }, direction: "NORTH" };
    const result = turnRight(toyRobot);
    expect(result.direction).toBe("EAST");
    expect(result.position).toEqual(toyRobot.position); // position unchanged
  });

  test("turns from EAST to SOUTH", () => {
    const toyRobot = { position: { x: 1, y: 2 }, direction: "EAST" };
    const result = turnRight(toyRobot);
    expect(result.direction).toBe("SOUTH");
    expect(result.position).toEqual(toyRobot.position);
  });

  test("turns from SOUTH to WEST", () => {
    const toyRobot = { position: { x: 2, y: 3 }, direction: "SOUTH" };
    const result = turnRight(toyRobot);
    expect(result.direction).toBe("WEST");
    expect(result.position).toEqual(toyRobot.position);
  });

  test("turns from WEST to NORTH", () => {
    const toyRobot = { position: { x: 3, y: 4 }, direction: "WEST" };
    const result = turnRight(toyRobot);
    expect(result.direction).toBe("NORTH");
    expect(result.position).toEqual(toyRobot.position);
  });

  test("does not mutate the original toyRobot object", () => {
    const toyRobot = { position: { x: 5, y: 5 }, direction: "NORTH" };
    const result = turnRight(toyRobot);
    expect(result).not.toBe(toyRobot); // new object returned
  });
});
