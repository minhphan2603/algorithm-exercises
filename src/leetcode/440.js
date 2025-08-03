/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 * https://leetcode.com/problems/k-th-smallest-in-lexicographical-order/
 *
 * Given two integers n and k, return the kth lexicographically smallest integer in the range [1, n].
 *
 * Input: n = 13, k = 2
 *
 * Output: 10
 *
 * Explanation: The lexicographical order is [1, 10, 11, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9], so the second smallest number is 10.
 */
var findKthNumber = function (n, k) {
  const test = new Array(n)
    .fill(0)
    .map((_, i) => i + 1)
    .sort();
  console.log(test[k - 1]);
  let nStr = n.toString();
  let result = "";
  let digit = "1";
  while (k > 1) {
    if (Number(result + digit) < Number(nStr.slice(0, result.length + 1))) {
      const range = Number(
        new Array(nStr.length - result.length).fill(1).join("")
      );
      const temp = k - range;
      if (temp > 1) {
        k = temp;
        digit++;
      } else if (temp === 1) {
        return Number(result + (Number(digit) + 1));
      } else if (temp === 0) {
        result = result + digit;
        while (Number(result + 9) <= Number(nStr)) {
          result = result + 9;
        }
        return Number(result);
      } else {
        result = result + digit;
        k--;
        nStr = result + new Array(nStr.length - result.length).fill(9).join("");
        digit = 0;
      }
    } else if (
      Number(result + digit) === Number(nStr.slice(0, result.length + 1))
    ) {
      const range =
        Number(new Array(nStr.length - result.length - 1).fill(1).join("")) +
        Number(nStr.slice(result.length + 1)) +
        1;
      const temp = k - range;
      if (temp > 1) {
        k = temp;
        digit++;
        nStr = new Array(nStr.length - 1).fill(9).join("");
      } else if (temp === 1) {
        return Number(result + (Number(digit) + 1));
      } else if (temp === 0) {
        result = result + digit;
        const tempResult = result;
        while (Number(result + 9) <= Number(nStr)) {
          result = result + 9;
        }
        return result !== tempResult ? Number(result) : Number(nStr);
      } else {
        result = result + digit;
        k--;
        digit = 0;
      }
    }
  }
  return Number(result + digit);
};

console.log(findKthNumber(110, 13));
