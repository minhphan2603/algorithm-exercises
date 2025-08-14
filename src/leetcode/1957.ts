/** https://leetcode.com/problems/delete-characters-to-make-fancy-string/?envType=daily-question&envId=2025-08-14 */
function makeFancyString(s: string): string {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i - 1] && s[i] === s[i - 2]) {
      continue;
    }
    result += s[i];
  }
  return result;
}

export default makeFancyString;
