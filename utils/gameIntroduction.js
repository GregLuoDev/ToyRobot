export function gameIntroduction() {
  console.log("========Toy Robot========");
  console.log("Commands:");
  console.log(
    "PLACE X,Y,F   => Put the toy robot on the table in position X,Y and facing NORTH, SOUTH, EAST or WEST",
  );
  console.log(
    "MOVE   => Move the toy robot one unit forward in the direction it is currently facing",
  );
  console.log(
    "LEFT   => Rotate the robot -90 degrees in the specified direction",
  );
  console.log(
    "RIGHT  => Rotate the robot 90 degrees in the specified direction",
  );
  console.log("REPORT => Announce the X,Y and F of the robot");
  console.log("QUIT   => Quit the game");
}
