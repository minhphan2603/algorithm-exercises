/** https://leetcode.com/problems/rearranging-fruits/description/?envType=daily-question&envId=2025-08-03 */
function minCost(basket1: number[], basket2: number[]): number {
  const stats: Record<number, number> = {};
  const allFruits: number[] = [];
  for (const [i, basket] of [basket1, basket2].entries()) {
    const factor = Math.pow(-1, i);
    for (let j = 0; j < basket.length; j++) {
      const fruit = basket[j];
      if (stats[fruit] == null) {
        stats[fruit] = 1 * factor;
        allFruits.push(fruit);
      } else {
        stats[fruit] = stats[fruit] + 1 * factor;
      }
    }
  }

  let checkingNegativeFruits: number[] = [];
  let checkingPositiveFruits: number[] = [];
  let minFruit = Infinity;
  for (const fruit of allFruits) {
    if (stats[fruit] !== 0) {
      if (stats[fruit] % 2 !== 0) {
        return -1;
      }
      stats[fruit] = stats[fruit] / 2;
      if (stats[fruit] < 0) {
        checkingNegativeFruits.push(fruit);
      } else {
        checkingPositiveFruits.push(fruit);
      }
    }
    if (minFruit > fruit) {
      minFruit = fruit;
    }
  }

  checkingNegativeFruits.sort((a, b) => a - b);
  checkingPositiveFruits.sort((a, b) => a - b);

  let result = 0;
  let j = checkingPositiveFruits.length - 1;
  for (let i = 0; i < checkingNegativeFruits.length; i++) {
    const fruit1 = checkingNegativeFruits[i];
    for (j; j >= 0; j--) {
      const fruit2 = checkingPositiveFruits[j];
      const swapAmount = Math.min(
        Math.abs(stats[fruit1]),
        Math.abs(stats[fruit2])
      );
      const cost = Math.min(minFruit * 2, fruit1, fruit2);
      result += swapAmount * cost;
      stats[fruit1] += swapAmount;
      stats[fruit2] -= swapAmount;
      if (stats[fruit1] === 0) {
        break;
      }
    }
  }

  return result;
}

export default minCost;
