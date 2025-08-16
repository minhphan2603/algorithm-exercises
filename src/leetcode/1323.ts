/** https://leetcode.com/problems/maximum-69-number/?envType=daily-question&envId=2025-08-14 */
function maximum69Number(num: number): number {
  const numStr = num.toString();
  let changed = false;
  let result = "";
  for (const char of numStr) {
    if (char === "6" && !changed) {
      result += "9";
      changed = true;
    } else {
      result += char;
    }
  }
  return +result;
}

export default maximum69Number;
