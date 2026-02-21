export const DIRECTION = Object.freeze({
  NORTH: "NORTH",
  EAST: "EAST",
  SOUTH: "SOUTH",
  WEST: "WEST",
});

export const COMMAND = Object.freeze({
  PLACE: "PLACE",
  MOVE: "MOVE",
  LEFT: "LEFT",
  RIGHT: "RIGHT",
  REPORT: "REPORT",
  QUIT: "QUIT",
});

export const Dimension_X = 5;
export const Dimension_Y = 5;

export class Position {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

export class ToyBoard {
  constructor(rows, columns) {
    this.rows = rows;
    this.columns = columns;
  }
}

export class ToyRobot {
  constructor(direction, position) {
    this.direction = direction;
    this.position = position;
  }
}
