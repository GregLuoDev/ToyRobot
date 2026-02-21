export function isValidToyRobot(toyRobot) {
  const isValid =
    !!toyRobot &&
    !!toyRobot.direction &&
    !!toyRobot.position &&
    toyRobot.position.x !== undefined &&
    toyRobot.position.y !== undefined;
  if (!isValid) {
    console.log(
      "This command was ignored because the toy robot has not been placed.",
    );
  }

  return isValid;
}
