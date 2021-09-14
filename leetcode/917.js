/**
 * @param {string} s
 * @return {string}
 *
 *
 * Given a string s, reverse the string according to the following rules:
 *
 * All the characters that are not English letters remain in the same position.
 *
 * All the English letters (lowercase or uppercase) should be reversed.
 *
 * Return s after reversing it.
 *
 * Constraints:
 *
 * 1 <= s.length <= 100
 *
 * s consists of characters with ASCII values in the range [33, 122].
 *
 * s does not contain '\"' or '\\'.
 *
 * Input: s = "Test1ng-Leet=code-Q!"
 *
 * Output: "Qedo1ct-eeLg=ntse-T!"
 */
var reverseOnlyLetters = function (s) {
  let s1 = "",
    s2 = "",
    i = 0,
    j = s.length - 1;

  const checkEnglishLetter = (ch) => {
    return ("A" <= ch && ch <= "Z") || ("a" <= ch && ch <= "z");
  };

  while (i < j) {
    if (checkEnglishLetter(s[i]) && checkEnglishLetter(s[j])) {
      s1 = s1 + s[j];
      s2 = s[i] + s2;
      i++;
      j--;
    } else {
      if (!checkEnglishLetter(s[i])) {
        s1 = s1 + s[i];
        i++;
      } else {
        s2 = s[j] + s2;
        j--;
      }
    }
  }
  if (i === j) {
    s1 = s1 + s[i];
  }
  return s1 + s2;
};

let s = "7_28]";

console.log(reverseOnlyLetters(s));
