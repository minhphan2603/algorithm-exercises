/** https://leetcode.com/problems/largest-3-same-digit-number-in-string/?envType=daily-question&envId=2025-08-14 */
function largestGoodInteger(num: string): string {
  let result = "";
  for (let i = 2; i < num.length; i++) {
    if (num[i - 2] === num[i - 1] && num[i - 1] === num[i]) {
      if (num[i] > result) {
        result = num[i];
      }
      if (result === "9") {
        break;
      }
    }
  }
  return result ? `${result}${result}${result}` : "";
}

export default largestGoodInteger;
