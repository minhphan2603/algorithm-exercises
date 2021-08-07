/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
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

console.log(twoSum([3, 3], 6));
