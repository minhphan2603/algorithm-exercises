/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestDistancePair = function (nums, k) {
  const count = {};
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const temp = Math.abs(nums[i] - nums[j]);
      if (!count[temp]) {
        count[temp] = 1;
      } else {
        count[temp]++;
      }
    }
  }
  const distances = Object.keys(count).sort((a, b) => a - b);
  console.log(distances);
  let x = 0;
  for (let i = 0; i < distances.length; i++) {
    x += count[distances[i]];
    if (x >= k) {
      return distances[i];
    }
  }
};

console.log(smallestDistancePair([38, 33, 57, 65, 13, 2, 86, 75, 4, 56], 26));
