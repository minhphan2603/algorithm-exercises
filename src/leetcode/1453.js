/**
 * @param {number[][]} points
 * @param {number} r
 * @return {number}
 *
 * https://leetcode.com/problems/maximum-number-of-darts-inside-of-a-circular-dartboard/
 *
 * 1453. Maximum Number of Darts Inside of a Circular Dartboard
 *
 * You have a very large square wall and a circular dartboard placed on the wall. You have been challenged to throw darts into the board blindfolded. Darts thrown at the wall are represented as an array of points on a 2D plane.
 *
 * Return the maximum number of points that are within or lie on any circular dartboard of radius r.
 *
 * Input: points = [[-3,0],[3,0],[2,6],[5,4],[0,9],[7,8]], r = 5
 *
 * Output: 5
 *
 * Explanation: Circle dartboard with center in (0,4) and radius = 5 contain all points except the point (7,8).
 */
var numPoints = function (points, r) {
  const calcDistance = (x1, y1, x2, y2) => {
    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
  };
  const countPointsInCircle = (pArr, c, r) => {
    return pArr.reduce(
      (acc, p) => acc + (calcDistance(p[0], p[1], c[0], c[1]) <= r),
      0
    );
  };
  let result = 1;
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      const distance = calcDistance(
        points[i][0],
        points[i][1],
        points[j][0],
        points[j][1]
      );
      if (distance === 2 * r) {
        const center = [
          (points[i][0] + points[j][0]) / 2,
          (points[i][1] + points[j][1]) / 2,
        ];
        const temp = countPointsInCircle(points, center, r);
        if (temp > result) {
          result = temp;
        }
      } else if (distance < 2 * r) {
        const x1 = points[i][0];
        const y1 = points[i][1];
        const x2 = points[j][0];
        const y2 = points[j][1];
        if (y1 !== y2) {
          const A = (x2 * x2 - x1 * x1 + y2 * y2 - y1 * y1) / (2 * (y2 - y1));
          const B = (x2 - x1) / (y2 - y1);
          const C = 1 + B * B;
          const D = 2 * B * y1 - 2 * x1 - 2 * A * B;
          const E = x1 * x1 + A * A + y1 * y1 - 2 * A * y1 - r * r;
          const delta = D * D - 4 * C * E;
          let center = [(-D - Math.sqrt(delta)) / (2 * C), 0];
          center[1] = A - B * center[0];
          let temp = countPointsInCircle(points, center, r);
          if (temp > result) {
            result = temp;
          }
          center = [(-D + Math.sqrt(delta)) / (2 * C), 0];
          center[1] = A - B * center[0];
          temp = countPointsInCircle(points, center, r);
          if (temp > result) {
            result = temp;
          }
        } else {
          let center = [(x1 + x2) / 2, 0];
          center[1] =
            Math.sqrt(r * r - (center[0] - x1) * (center[0] - x1)) + y1;
          let temp = countPointsInCircle(points, center, r);
          if (temp > result) {
            result = temp;
          }
          center[1] =
            -Math.sqrt(r * r - (center[0] - x1) * (center[0] - x1)) + y1;
          temp = countPointsInCircle(points, center, r);
          if (temp > result) {
            result = temp;
          }
        }
      }
    }
  }
  return result;
};

const pointsInput = [
  [-2, 0],
  [2, 0],
  [0, 2],
  [0, -2],
];
const radius = 1;

console.log(numPoints(pointsInput, radius));
