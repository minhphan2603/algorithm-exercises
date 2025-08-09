/** https://leetcode.com/problems/power-of-two/description/?envType=daily-question&envId=2025-08-09 */
function isPowerOfTwo(n: number): boolean {
  return Number.isInteger(Math.log2(n));
}

export default isPowerOfTwo;
