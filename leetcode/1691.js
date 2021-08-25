/**
 * @param {number[][]} cuboids
 * @return {number}
 *
 * https://leetcode.com/problems/maximum-height-by-stacking-cuboids/
 *
 * 1691. Maximum Height by Stacking Cuboids
 *
 * Given n cuboids where the dimensions of the ith cuboid is cuboids[i] = [widthi, lengthi, heighti] (0-indexed). Choose a subset of cuboids and place them on each other.
 *
 * You can place cuboid i on cuboid j if widthi <= widthj and lengthi <= lengthj and heighti <= heightj. You can rearrange any cuboid's dimensions by rotating it to put it on another cuboid.
 *
 * Return the maximum height of the stacked cuboids.
 *
 * Input: cuboids = [[50,45,20],[95,37,53],[45,23,12]]
 *
 * Output: 190
 *
 * Explanation:
 *
 * Cuboid 1 is placed on the bottom with the 53x37 side facing down with height 95.
 *
 * Cuboid 0 is placed next with the 45x20 side facing down with height 50.
 *
 * Cuboid 2 is placed next with the 23x12 side facing down with height 45.
 *
 * The total height is 95 + 50 + 45 = 190.
 */
var maxHeight = function (cuboids) {
  const cases = [
    { i: 1, j: 2 },
    { i: 0, j: 2 },
    { i: 0, j: 1 },
  ];
  const canArrange = (x1, y1, z1, x2, y2, z2) => {
    return z1 >= z2 && ((x1 >= x2 && y1 >= y2) || (x1 >= y2 && y1 >= x2));
  };
  let result = 0;
  const maxHeights = new Array(cuboids.length)
    .fill(0)
    .map(() =>
      new Array(cuboids.length)
        .fill(0)
        .map(() => new Array(3).fill(0).map(() => new Array(3).fill(0)))
    );
  for (let i = 0; i < cuboids.length; i++) {
    for (let j = 0; j < cuboids.length; j++) {
      if (i !== j) {
        for (let hi = 0; hi < 3; hi++) {
          for (let hj = 0; hj < 3; hj++) {
            if (
              maxHeights[i][j][hi][hj] === 0 &&
              canArrange(
                cuboids[i][cases[hi].i],
                cuboids[i][cases[hi].j],
                cuboids[i][hi],
                cuboids[j][cases[hj].i],
                cuboids[j][cases[hj].j],
                cuboids[j][hj]
              )
            ) {
              maxHeights[i][j][hi][hj] = cuboids[i][hi] + cuboids[j][hj];
              if (result < maxHeights[i][j][hi][hj]) {
                result = maxHeights[i][j][hi][hj];
              }
              const tempSet = new Set(cuboids[i]);
              if (
                tempSet.has(cuboids[j][0]) &&
                tempSet.has(cuboids[j][1]) &&
                tempSet.has(cuboids[j][2])
              ) {
                maxHeights[j][i][hj][hi] = -Infinity;
              }
            }
          }
        }
      } else {
        result = Math.max(result, ...cuboids[i]);
        maxHeights[i][i][0][0] = cuboids[i][0];
        maxHeights[i][i][1][1] = cuboids[i][1];
        maxHeights[i][i][2][2] = cuboids[i][2];
      }
    }
  }
  for (let k = 0; k < cuboids.length; k++) {
    for (let i = 0; i < cuboids.length; i++) {
      if (i !== k) {
        for (let j = 0; j < cuboids.length; j++) {
          if (k !== j && i !== j) {
            for (let hk = 0; hk < 3; hk++) {
              for (let hi = 0; hi < 3; hi++) {
                for (let hj = 0; hj < 3; hj++) {
                  if (
                    canArrange(
                      cuboids[i][cases[hi].i],
                      cuboids[i][cases[hi].j],
                      cuboids[i][hi],
                      cuboids[k][cases[hk].i],
                      cuboids[k][cases[hk].j],
                      cuboids[k][hk]
                    ) &&
                    canArrange(
                      cuboids[k][cases[hk].i],
                      cuboids[k][cases[hk].j],
                      cuboids[k][hk],
                      cuboids[j][cases[hj].i],
                      cuboids[j][cases[hj].j],
                      cuboids[j][hj]
                    )
                  ) {
                    if (
                      maxHeights[i][j][hi][hj] <
                      maxHeights[i][k][hi][hk] +
                        maxHeights[k][j][hk][hj] -
                        cuboids[k][hk]
                    ) {
                      maxHeights[i][j][hi][hj] =
                        maxHeights[i][k][hi][hk] +
                        maxHeights[k][j][hk][hj] -
                        cuboids[k][hk];
                      if (result < maxHeights[i][j][hi][hj]) {
                        result = maxHeights[i][j][hi][hj];
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return result;
};

console.log(
  maxHeight([
    [50, 45, 20],
    [95, 37, 53],
    [45, 23, 12],
  ])
);
