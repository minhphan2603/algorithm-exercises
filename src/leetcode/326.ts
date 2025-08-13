/** https://leetcode.com/problems/power-of-three/?envType=daily-question&envId=2025-08-13 */
function isPowerOfThree(n: number): boolean {
  return Number.isInteger(+(Math.log(n) / Math.log(3)).toPrecision(15));
}

export default isPowerOfThree;
