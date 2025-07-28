/** https://leetcode.com/problems/count-number-of-maximum-bitwise-or-subsets/?envType=daily-question&envId=2025-07-28 */
function countMaxOrSubsets(nums: number[]): number {
  let maxOr = 0;
  let result = 0;

  const greedy = (i: number, calculatingOr: number) => {
    if (i >= nums.length) {
      if (calculatingOr === maxOr) {
        result++;
      } else if (calculatingOr > maxOr) {
        maxOr = calculatingOr;
        result = 1;
      }
    } else {
      greedy(i + 1, calculatingOr);
      greedy(i + 1, calculatingOr | nums[i]);
    }
  };
  greedy(0, 0);

  return result;
}
