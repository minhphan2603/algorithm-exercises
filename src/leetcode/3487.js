/**
 * https://leetcode.com/problems/maximum-unique-subarray-sum-after-deletion/
 * @param {number[]} nums
 * @return {number}
 */
var maxSum = function (nums) {
  let result = nums[0];
  let setNums = { [nums[0]]: true };
  for (let i = 1; i < nums.length; i++) {
    if (setNums[nums[i]]) {
      continue;
    }
    setNums[nums[i]] = true;
    result = Math.max(result, result + nums[i], nums[i]);
  }
  return result;
};
