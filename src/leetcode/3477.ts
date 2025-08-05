/** https://leetcode.com/problems/fruits-into-baskets-ii/?envType=daily-question&envId=2025-08-05 */
function numOfUnplacedFruits(fruits: number[], baskets: number[]): number {
  let result = 0;
  for (const fruit of fruits) {
    let placed = false;
    for (let i = 0; i < baskets.length; i++) {
      if (baskets[i] >= fruit) {
        baskets[i] = 0;
        placed = true;
        break;
      }
    }
    result = result + (placed ? 0 : 1);
  }
  return result;
}

export default numOfUnplacedFruits;
