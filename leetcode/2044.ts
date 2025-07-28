/** https://leetcode.com/problems/count-number-of-maximum-bitwise-or-subsets/?envType=daily-question&envId=2025-07-28 */
function countMaxOrSubsets(nums: number[]): number {
  const maxOr = nums
    .sort((a, b) => b - a)
    .reduce((total, num) => total | num, 0);
  let result = 0;

  const greedy = (i: number, calculatingOr: number) => {
    if (calculatingOr === maxOr) {
      result = result + Math.pow(2, Math.max(0, nums.length - i));
    } else if (i < nums.length) {
      greedy(i + 1, calculatingOr);
      greedy(i + 1, calculatingOr | nums[i]);
    }
  };
  greedy(0, 0);

  return result;
}
