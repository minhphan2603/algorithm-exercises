/**
 * @param {number[]} nums
 * @return {number}
 *
 * https://leetcode.com/problems/maximum-alternating-subsequence-sum/
 *
 * 1911. Maximum Alternating Subsequence Sum
 *
 * The alternating sum of a 0-indexed array is defined as the sum of the elements at even indices minus the sum of the elements at odd indices.
 *
 * For example, the alternating sum of [4,2,5,3] is (4 + 5) - (2 + 3) = 4.
 *
 * Given an array nums, return the maximum alternating sum of any subsequence of nums (after reindexing the elements of the subsequence).
 *
 * A subsequence of an array is a new array generated from the original array by deleting some elements (possibly none) without changing the remaining elements' relative order. For example, [2,7,4] is a subsequence of [4,2,3,7,2,1,4] (the underlined elements), while [2,4,2] is not.
 *
 * Input: nums = [4,2,5,3]
 *
 * Output: 7
 *
 * Explanation: It is optimal to choose the subsequence [4,2,5] with alternating sum (4 + 5) - 2 = 7.
 */
var maxAlternatingSum = function (nums) {
  let maxAddLast = nums[0];
  let maxMinusLast = -nums[0];
  let result = maxAddLast;
  for (let i = 1; i < nums.length; i++) {
    let tempAdd = maxAddLast;
    if (maxAddLast < Math.max(maxMinusLast + nums[i], nums[i])) {
      maxAddLast = Math.max(maxMinusLast + nums[i], nums[i]);
    }
    if (maxMinusLast < Math.max(tempAdd - nums[i], -nums[i])) {
      maxMinusLast = Math.max(tempAdd - nums[i], -nums[i]);
    }
    result = Math.max(result, maxAddLast, maxMinusLast);
  }
  return result;
};

console.log(maxAlternatingSum([6, 2, 1, 2, 4, 5]));
