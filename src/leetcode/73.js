/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 *
 * https://leetcode.com/problems/set-matrix-zeroes/
 * 
 * https://leetcode.com/explore/challenge/card/august-leetcoding-challenge-2021/614/week-2-august-8th-august-14th/3888/
 *
 * Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's, and return the matrix.
 *
 * You must do it in place.
 *
 * Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
 *
 * Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
 */
var setZeroes = function (matrix) {
  let horizontal0 = false;
  let vertical0 = false;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
        if (i === 0) {
          horizontal0 = true;
        }
        if (j === 0) {
          vertical0 = true;
        }
      }
    }
  }
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[i].length; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }
  if (horizontal0) {
    for (let i = 0; i < matrix[0].length; i++) {
      matrix[0][i] = 0;
    }
  }
  if (vertical0) {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][0] = 0;
    }
  }
};

const m = [
  [0, 1, 2, 0],
  [3, 0, 5, 2],
  [1, 3, 1, 5],
];

setZeroes(m);

console.log(m);
