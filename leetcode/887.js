/**
 * @param {number} k
 * @param {number} n
 * @return {number}
 *
 * https://leetcode.com/problems/super-egg-drop/
 *
 * 887. Super Egg Drop
 *
 * You are given k identical eggs and you have access to a building with n floors labeled from 1 to
 *
 * You know that there exists a floor f where 0 <= f <= n such that any egg dropped at a floor higher than f will break, and any egg dropped at or below floor f will not break.
 *
 * Each move, you may take an unbroken egg and drop it from any floor x (where 1 <= x <= n). If the egg breaks, you can no longer use it. However, if the egg does not break, you may reuse it in future moves.
 *
 * Return the minimum number of moves that you need to determine with certainty what the value of f is.
 *
 * Input: k = 1, n = 2
 *
 * Output: 2
 *
 * Explanation:
 *
 * Drop the egg from floor 1. If it breaks, we know that f = 0.
 *
 * Otherwise, drop the egg from floor 2. If it breaks, we know that f = 1.
 *
 * If it does not break, then we know f = 2.
 *
 * Hence, we need at minimum 2 moves to determine with certainty what the value of f is.
 */
var superEggDrop = function (k, n) {
  const maxK = Math.min(Math.ceil(Math.log2(n)), k);
  if (maxK === 1 || n === 1) return n;
  let result = 1;
  n--;
  const count = new Array(maxK + 1).fill(0).map(() => [0, 1]);
  while (n > 0) {
    count[2].push(count[2][result] + 1);
    for (let i = 3; i <= maxK; i++) {
      count[i].push(count[i][result] + count[i - 1][result]);
    }
    result++;
    n -= count[maxK][result];
  }
  return result;
};

var superEggDrop2 = function (k, n) {
  if (n <= 2) return n;
  const maxK = Math.min(Math.ceil(Math.log2(n)), k);
  const count = new Array(maxK + 1).fill(0).map(() => new Array(n + 1).fill(0));
  for (let i = 1; i <= n; i++) {
    count[1][i] = i;
  }
  for (let i = 2; i <= maxK; i++) {
    count[i][1] = 1;
    for (let j = 2; j <= n; j++) {
      count[i][j] = j;
      for (let testedFloor = 1; testedFloor < j; testedFloor++) {
        const temp =
          Math.max(count[i - 1][testedFloor - 1], count[i][j - testedFloor]) +
          1;
        if (count[i][j] > temp) {
          count[i][j] = temp;
        }
      }
    }
  }
  //   count.forEach((arr) => {
  //     const max = Math.max(...arr);
  //     const stats = [];
  //     for (let i = 0; i <= max; i++) {
  //       const value = arr.filter((item) => item === i).length;
  //       stats.push(value);
  //     }
  //     console.log(JSON.stringify(stats));
  //   });
  return count[maxK][n];
};

let k = 2,
  n = 2;
console.log(superEggDrop(k, n), superEggDrop2(k, n));
