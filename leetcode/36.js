/**
 * @param {character[][]} board
 * @return {boolean}
 *
 * https://leetcode.com/problems/valid-sudoku/
 *
 * https://leetcode.com/explore/challenge/card/august-leetcoding-challenge-2021/615/week-3-august-15th-august-21st/3904/
 *
 * Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
 *
 * Each row must contain the digits 1-9 without repetition.
 *
 * Each column must contain the digits 1-9 without repetition.
 *
 * Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
 *
 * Note:
 *
 * A Sudoku board (partially filled) could be valid but is not necessarily solvable.
 *
 * Only the filled cells need to be validated according to the mentioned rules.
 */
var isValidSudoku = function (board) {
  const setArr = "123456789".split("");
  const [rows, columns] = [0, 1].map((_) =>
    new Array(9).fill(0).map((_) => new Set(setArr))
  );
  const areas = new Array(3)
    .fill(0)
    .map((_) => new Array(3).fill(0).map((_) => new Set(setArr)));

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] !== ".") {
        const isOkay =
          rows[i].delete(board[i][j]) &&
          columns[j].delete(board[i][j]) &&
          areas[Math.floor(i / 3)][Math.floor(j / 3)].delete(board[i][j]);
        if (!isOkay) return false;
      }
    }
  }
  return true;
};

console.log(
  isValidSudoku([
    [".", ".", "4", ".", ".", ".", "6", "3", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    ["5", ".", ".", ".", ".", ".", ".", "9", "."],
    [".", ".", ".", "5", "6", ".", ".", ".", "."],
    ["4", ".", "3", ".", ".", ".", ".", ".", "1"],
    [".", ".", ".", "7", ".", ".", ".", ".", "."],
    [".", ".", ".", "5", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
  ])
);
