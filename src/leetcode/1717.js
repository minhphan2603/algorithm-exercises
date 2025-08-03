/**
 * https://leetcode.com/problems/maximum-score-from-removing-substrings/
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var maximumGain = function (s, x, y) {
  let result = 0;
  const validChars = new Set(["a", "b"]);
  const scoreMap = { ab: x, ba: y };
  const startChar = x > y ? "a" : "b";
  const endChar = x > y ? "b" : "a";

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (validChars.has(char)) {
      let j = i;
      let startCount = 0;
      let endCount = 0;
      while (validChars.has(s[j])) {
        if (s[j] === startChar) {
          startCount++;
        } else {
          endCount++;
          if (startCount) {
            result += scoreMap[startChar + endChar];
            startCount--;
            endCount--;
          }
        }

        j++;
      }

      result += scoreMap[endChar + startChar] * Math.min(startCount, endCount);

      i = j;
    }
  }

  console.log(result);

  return result;
};

maximumGain("aabbaaxybbaabb", 5, 4);
