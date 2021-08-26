/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  const emptyCells = [];
  const [rows, columns] = [0, 1].map((_) =>
    new Array(9).fill(0).map((_) => new Set())
  );
  const areas = new Array(3)
    .fill(0)
    .map((_) => new Array(3).fill(0).map((_) => new Set()));

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] !== ".") {
        rows[i].add(board[i][j]);
        columns[j].add(board[i][j]);
        areas[Math.floor(i / 3)][Math.floor(j / 3)].add(board[i][j]);
      } else {
        emptyCells.push({ i, j });
      }
    }
  }
  const solve = (x) => {
    if (x === emptyCells.length) return true;
    for (let i = 1; i <= 9; i++) {
      let char = i + "";
      if (
        !rows[emptyCells[x].i].has(char) &&
        !columns[emptyCells[x].j].has(char) &&
        !areas[Math.floor(emptyCells[x].i / 3)][
          Math.floor(emptyCells[x].j / 3)
        ].has(char)
      ) {
        board[emptyCells[x].i][emptyCells[x].j] = char;
        rows[emptyCells[x].i].add(char);
        columns[emptyCells[x].j].add(char);
        areas[Math.floor(emptyCells[x].i / 3)][
          Math.floor(emptyCells[x].j / 3)
        ].add(char);
        const isOkay = solve(x + 1);
        if (isOkay) return true;
        rows[emptyCells[x].i].delete(char);
        columns[emptyCells[x].j].delete(char);
        areas[Math.floor(emptyCells[x].i / 3)][
          Math.floor(emptyCells[x].j / 3)
        ].delete(char);
      }
    }
    return false;
  };
  solve(0);
};

const a = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

solveSudoku(a);

console.log(a);
