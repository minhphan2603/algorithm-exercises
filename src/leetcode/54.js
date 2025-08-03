/**
 * @param {number[][]} matrix
 * @return {number[]}
 *
 * https://leetcode.com/explore/challenge/card/september-leetcoding-challenge-2021/638/week-3-september-15th-september-21st/3977/
 *
 * Given an m x n matrix, return all elements of the matrix in spiral order.
 *
 * m == matrix.length
 *
 * n == matrix[i].length
 *
 * 1 <= m, n <= 10
 *
 * -100 <= matrix[i][j] <= 100
 */
var spiralOrder = function (matrix) {
  let result = [];
  let dir = 0,
    n1 = 0,
    n2 = matrix[0].length - 1,
    m1 = 0,
    m2 = matrix.length - 1;
  while (m1 <= m2 && n1 <= n2) {
    switch (dir) {
      case 0:
        for (let i = n1; i <= n2; i++) {
          result.push(matrix[m1][i]);
        }
        m1++;
        break;
      case 1:
        for (let i = m1; i <= m2; i++) {
          result.push(matrix[i][n2]);
        }
        n2--;
        break;
      case 2:
        for (let i = n2; i >= n1; i--) {
          result.push(matrix[m2][i]);
        }
        m2--;
        break;
      case 3:
        for (let i = m2; i >= m1; i--) {
          result.push(matrix[i][n1]);
        }
        n1++;
        break;
      default:
        break;
    }
    dir = (dir + 1) % 4;
  }
  return result;
};

let matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

console.log(spiralOrder(matrix));
