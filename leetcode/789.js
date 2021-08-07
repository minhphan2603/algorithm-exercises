/**
 * @param {number[][]} ghosts
 * @param {number[]} target
 * @return {boolean}
 */
var escapeGhosts = function (ghosts, target) {
  const targetDistance = Math.abs(target[0]) + Math.abs(target[1]);
  for (let i = 0; i < ghosts.length; i++) {
    if (
      Math.abs(target[0] - ghosts[i][0]) + Math.abs(target[1] - ghosts[i][1]) <=
      targetDistance
    ) {
      return false;
    }
  }
  return true;
};

console.log(
  escapeGhosts(
    [
      [-1, 0],
      [0, 1],
      [-1, 0],
      [0, 1],
      [-1, 0],
    ],
    [0, 0]
  )
);
