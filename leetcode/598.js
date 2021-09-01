/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function (m, n, ops) {
  for (let i = 0; i < ops.length; i++) {
    if (ops[i][0] < m) {
      m = ops[i][0];
    }
    if (ops[i][1] < n) {
      n = ops[i][1];
    }
  }
  return m * n;
};

let m = 3,
  n = 3,
  ops = [
    [2, 2],
    [3, 3],
    [3, 3],
    [3, 3],
    [2, 2],
    [3, 3],
    [3, 3],
    [3, 3],
    [2, 2],
    [3, 3],
    [3, 3],
    [3, 3],
  ];

console.log(maxCount(m, n, ops));
