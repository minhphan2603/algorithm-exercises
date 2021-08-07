/**
 * @param {number[][]} grid
 * @return {number}
 * https://leetcode.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/
 */
var minCost = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  const getNextCells = (i, j) => {
    const result = [];
    if (j + 1 < n) {
      result.push({ i, j: j + 1, d: 1 });
    }
    if (j - 1 >= 0) {
      result.push({ i, j: j - 1, d: 2 });
    }
    if (i + 1 < m) {
      result.push({ i: i + 1, j, d: 3 });
    }
    if (i - 1 >= 0) {
      result.push({ i: i - 1, j, d: 4 });
    }
    return result;
  };
  const cost = new Array(m).fill(0).map(() => new Array(n).fill(Infinity));
  const checked = new Array(m).fill(0).map(() => new Array(n).fill(false));
  const queue = [];
  cost[0][0] = 0;
  queue.push({ i: 0, j: 0 });
  while (queue.length > 0) {
    const minCell = queue.reduce(
      (result, item, index) => {
        if (cost[result.i][result.j] > cost[item.i][item.j]) {
          return { ...item, qi: index };
        }
        return { ...result };
      },
      { ...queue[0], qi: 0 }
    );
    checked[minCell.i][minCell.j] = true;
    queue.splice(minCell.qi, 1);
    minCellCost = cost[minCell.i][minCell.j];
    minCellDir = grid[minCell.i][minCell.j];
    const nextCells = getNextCells(minCell.i, minCell.j);
    nextCells.forEach(({ i, j, d }) => {
      if (!checked[i][j]) {
        if (cost[i][j] === Infinity) {
          queue.push({ i, j });
        }

        if (cost[i][j] > minCellCost + (minCellDir !== d)) {
          cost[i][j] = minCellCost + (minCellDir !== d);
        }
      }
    });
  }
  return cost[m - 1][n - 1];
};

console.log(
  minCost([
    [1, 2],
    [4, 3],
  ])
);
