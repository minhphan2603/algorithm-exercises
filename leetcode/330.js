/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number}
 *
 * https://leetcode.com/explore/featured/card/august-leetcoding-challenge-2021/617/week-5-august-29th-august-31st/3956/
 *
 * Given a sorted integer array nums and an integer n, add/patch elements to the array such that any number in the range [1, n] inclusive can be formed by the sum of some elements in the array.
 *
 * Return the minimum number of patches required.
 *
 * Input: nums = [1,3], n = 6
 *
 * Output: 1
 *
 * Explanation:
 *
 * Combinations of nums are [1], [3], [1,3], which form possible sums of: 1, 3, 4.
 *
 * Now if we add/patch 2 to nums, the combinations are: [1], [2], [3], [1,3], [2,3], [1,2,3].
 *
 * Possible sums are 1, 2, 3, 4, 5, 6, which now covers the range [1, 6].
 *
 * So we only need 1 patch.
 */
var minPatches = function (nums, n) {
  let sum = 0;
  let i = 0;
  let result = 0;
  while (i < nums.length && n - sum > 0) {
    while (nums[i] - sum - 1 > 0) {
      sum = sum + sum + 1;
      result++;
      if (n - sum <= 0) {
        return result;
      }
    }
    sum = sum + nums[i];
    i++;
  }
  return result + Math.ceil(Math.log2((n + 1) / (sum + 1)));
};

let nums = [4, 5, 7, 7, 9, 37],
  n = 1000000000;

console.log(minPatches(nums, n));
