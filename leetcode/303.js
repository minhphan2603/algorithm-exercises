/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.value = [...nums];
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 *
 * https://leetcode.com/problems/range-sum-query-immutable/
 *
 * 303. Range Sum Query - Immutable
 */
NumArray.prototype.sumRange = function (left, right) {
  let result = 0;
  let mid = Math.floor((right + left) / 2);
  for (let i = left; i <= mid; i++) {
    result += this.value[i] + this.value[right + left - i];
  }
  return (right + left) % 2 === 0
    ? result - this.value[(right + left) / 2]
    : result;
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */

var obj = new NumArray([-2, 0, 3, -5, 2, -1]);
var param_1 = obj.sumRange(0, 4);

console.log(param_1);
