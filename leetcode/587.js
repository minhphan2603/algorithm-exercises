/**
 * @param {number[][]} trees
 * @return {number[][]}
 *
 * You are given an array trees where trees[i] = [xi, yi] represents the location of a tree in the garden.
 *
 * You are asked to fence the entire garden using the minimum length of rope as it is expensive. The garden is well fenced only if all the trees are enclosed.
 *
 * Return the coordinates of trees that are exactly located on the fence perimeter.
 *
 * Input: points = [[1,1],[2,2],[2,0],[2,4],[3,3],[4,2]]
 *
 * Output: [[1,1],[2,0],[3,3],[2,4],[4,2]]
 */
var outerTrees = function (trees) {
  if (trees.length <= 3) {
    return trees;
  }
  const result = new Set();
  let root = 0;
  for (let i = 1; i < trees.length; i++) {
    if (
      trees[i][0] < trees[root][0] ||
      (trees[i][0] === trees[root][0] && trees[i][1] < trees[root][1])
    ) {
      root = i;
    }
  }
  result.add(root);
  let vectorA = { x: 0, y: 1 };
  let stop = false;
  while (!stop) {
    let temp, nextRoot;
    let cos = -2;
    for (let i = 0; i < trees.length; i++) {
      const vectorB = {
        x: trees[i][0] - trees[root][0],
        y: trees[i][1] - trees[root][1],
      };

      const tempCos =
        Math.round(
          (100000000000000 * (vectorA.x * vectorB.x + vectorA.y * vectorB.y)) /
            (Math.sqrt(vectorA.x * vectorA.x + vectorA.y * vectorA.y) *
              Math.sqrt(vectorB.x * vectorB.x + vectorB.y * vectorB.y))
        ) / 100000000000000;
      if (tempCos > cos) {
        cos = tempCos;
        temp = [i];
        nextRoot = i;
      } else if (tempCos === cos) {
        temp.push(i);
        if (
          vectorB.x * vectorB.x + vectorB.y * vectorB.y >
          (trees[nextRoot][0] - trees[root][0]) *
            (trees[nextRoot][0] - trees[root][0]) +
            (trees[nextRoot][1] - trees[root][1]) *
              (trees[nextRoot][1] - trees[root][1])
        ) {
          nextRoot = i;
        }
      }
    }
    temp.forEach((i) => {
      if (result.has(i)) {
        stop = true;
      }
      result.add(i);
    });
    vectorA = {
      x: trees[nextRoot][0] - trees[root][0],
      y: trees[nextRoot][1] - trees[root][1],
    };
    root = nextRoot;
  }
  return trees.filter((_, i) => result.has(i));
};

let points = [[1, 5]];
console.log(outerTrees(points));
