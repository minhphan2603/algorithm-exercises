/**
 * @param {number[]} boxes
 * @return {number}
 *
 * https://leetcode.com/problems/remove-boxes/
 *
 * https://leetcode.com/explore/featured/card/august-leetcoding-challenge-2021/614/week-2-august-8th-august-14th/3889/
 *
 * 546. Remove Boxes
 *
 * You are given several boxes with different colors represented by different positive numbers.
 *
 * You may experience several rounds to remove boxes until there is no box left. Each time you can choose some continuous boxes with the same color (i.e., composed of k boxes, k >= 1), remove them and get k * k points.
 *
 * Return the maximum points you can get.
 *
 * Input: boxes = [1,3,2,2,2,3,4,3,1]
 *
 * Output: 23
 *
 * Explanation:
 *
 * [1, 3, 2, 2, 2, 3, 4, 3, 1]
 *
 * ----> [1, 3, 3, 4, 3, 1] (3*3=9 points)
 *
 * ----> [1, 3, 3, 3, 1] (1*1=1 points)
 *
 * ----> [1, 1] (3*3=9 points)
 *
 * ----> [] (2*2=4 points)
 */

var removeBoxes = function (boxes) {
  const newBoxes = [];
  const boxesCount = [];
  boxes.forEach((color) => {
    if (color === newBoxes[newBoxes.length - 1]) {
      boxesCount[boxesCount.length - 1] += 1;
    } else {
      newBoxes.push(color);
      boxesCount.push(1);
    }
  });
  const memo = new Array(newBoxes.length)
    .fill(0)
    .map((i) =>
      new Array(newBoxes.length)
        .fill(0)
        .map((j) => new Array(boxes.length).fill(0))
    );
  const solve = (i, j, k) => {
    if (i > j) {
      return 0;
    }
    if (memo[i][j][k]) {
      return memo[i][j][k];
    }
    let res = k * k + solve(i + 1, j, boxesCount[i + 1]);

    for (let x = i + 1; x <= j; x++) {
      if (newBoxes[x] === newBoxes[i]) {
        res = Math.max(
          res,
          solve(i + 1, x - 1, boxesCount[i + 1]) +
            solve(x, j, k + boxesCount[x])
        );
      }
    }
    memo[i][j][k] = res;
    return res;
  };

  return solve(0, newBoxes.length - 1, boxesCount[0]);
};

// first approach
var removeBoxes1 = function (boxes) {
  const memo = new Array(boxes.length)
    .fill(0)
    .map((i) =>
      new Array(boxes.length)
        .fill(0)
        .map((j) => new Array(boxes.length).fill(0))
    );

  const solve = (i, j, k) => {
    if (i === j) {
      memo[i][j][k] = (k + 1) * (k + 1);
      return memo[i][j][k];
    }
    if (i > j) {
      return 0;
    }
    if (memo[i][j][k]) {
      return memo[i][j][k];
    }
    let res = (k + 1) * (k + 1) + solve(i + 1, j, 0);

    for (let x = i + 1; x <= j; x++) {
      if (boxes[x] === boxes[i]) {
        res = Math.max(res, solve(i + 1, x - 1, 0) + solve(x, j, k + 1));
      }
    }
    memo[i][j][k] = res;
    return res;
  };

  return solve(0, boxes.length - 1, 0);
};

console.log(
  removeBoxes([
    3, 8, 8, 5, 5, 3, 9, 2, 4, 4, 6, 5, 8, 4, 8, 6, 9, 6, 2, 8, 6, 4, 1, 9, 5,
    3, 10, 5, 3, 3, 9, 8, 8, 6, 5, 3, 7, 4, 9, 6, 3, 9, 4, 3, 5, 10, 7, 6, 10,
    7,
  ])
);

console.log(
  removeBoxes1([
    3, 8, 8, 5, 5, 3, 9, 2, 4, 4, 6, 5, 8, 4, 8, 6, 9, 6, 2, 8, 6, 4, 1, 9, 5,
    3, 10, 5, 3, 3, 9, 8, 8, 6, 5, 3, 7, 4, 9, 6, 3, 9, 4, 3, 5, 10, 7, 6, 10,
    7,
  ])
);
