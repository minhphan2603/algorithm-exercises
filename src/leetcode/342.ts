/** https://leetcode.com/problems/power-of-four/?envType=daily-question&envId=2025-08-14 */
function isPowerOfFour(n: number): boolean {
  return Number.isInteger(+(Math.log(n) / Math.log(4)).toPrecision(15));
}

export default isPowerOfFour;
