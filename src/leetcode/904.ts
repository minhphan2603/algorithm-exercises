/** https://leetcode.com/problems/fruit-into-baskets/?envType=daily-question&envId=2025-08-04 */
function totalFruit(fruits: number[]): number {
  let result = 1;
  let fruitSet = new Set([fruits[0]]);
  let i = 0;
  let lastFruitAmount = 1;
  for (let j = 1; j < fruits.length; j++) {
    fruitSet.add(fruits[j]);
    if (fruitSet.size > 2) {
      result = Math.max(result, j - i);
      i = j - lastFruitAmount;
      fruitSet = new Set([fruits[i], fruits[j]]);
    }
    lastFruitAmount = fruits[j] === fruits[j - 1] ? lastFruitAmount + 1 : 1;
  }

  return Math.max(result, fruits.length - i);
}

export default totalFruit;
