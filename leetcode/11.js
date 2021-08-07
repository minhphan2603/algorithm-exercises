/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let result = 0,
    i = 0,
    j = height.length - 1;
  while (i < j) {
    if (height[i] < height[j]) {
      if (result < height[i] * (j - i)) {
        result = height[i] * (j - i);
      }
      i++;
    } else if (height[i] === height[j]) {
      if (result < height[i] * (j - i)) {
        result = height[i] * (j - i);
      }
      i++;
      j--;
    } else {
      if (result < height[j] * (j - i)) {
        result = height[j] * (j - i);
      }
      j--;
    }
  }
  return result;
};

console.log(maxArea([1, 50, 50, 2, 5, 4, 8, 3, 7]));
