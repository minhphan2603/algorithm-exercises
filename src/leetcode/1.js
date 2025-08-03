/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * https://leetcode.com/problems/two-sum/
 */
var twoSum = function (nums, target) {
  const check = {};
  for (let i = 0; i < nums.length; i++) {
    if (check[nums[i]] === undefined) {
      check[nums[i]] = i;
    }
    if (
      check[target - nums[i]] !== undefined &&
      check[target - nums[i]] !== i
    ) {
      return [check[target - nums[i]], i];
    }
  }
};

export default twoSum;
