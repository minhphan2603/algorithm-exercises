/**
 * @param {number[]} arr
 * @return {number}
 *
 * Given an integer array arr, return the length of a maximum size turbulent subarray of arr.
 *
 * A subarray is turbulent if the comparison sign flips between each adjacent pair of elements in the subarray.
 *
 * More formally, a subarray [arr[i], arr[i + 1], ..., arr[j]] of arr is said to be turbulent if and only if:
 *
 * For i <= k < j:
 *
 * arr[k] > arr[k + 1] when k is odd, and
 *
 * arr[k] < arr[k + 1] when k is even.
 *
 * Or, for i <= k < j:
 *
 * arr[k] > arr[k + 1] when k is even, and
 *
 * arr[k] < arr[k + 1] when k is odd.
 *
 * Constraints:
 *
 * 1 <= arr.length <= 4 * 104
 *
 * 0 <= arr[i] <= 109
 *
 * Input: arr = [9,4,2,10,7,8,8,1,9]
 *
 * Output: 5
 *
 * Explanation: arr[1] > arr[2] < arr[3] > arr[4] < arr[5]
 */
var maxTurbulenceSize = function (arr) {
  let result = 1,
    temp = 1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] < arr[i]) {
      if (arr[i - 2] > arr[i - 1]) {
        temp++;
      } else {
        temp = 2;
      }
    } else if (arr[i - 1] > arr[i]) {
      if (arr[i - 2] < arr[i - 1]) {
        temp++;
      } else {
        temp = 2;
      }
    } else {
      temp = 1;
    }
    if (temp > result) {
      result = temp;
    }
  }
  return result;
};

let arr = [9, 4, 2, 10, 7, 8, 8, 1, 9];

console.log(maxTurbulenceSize(arr));
