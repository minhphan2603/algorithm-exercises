/**
 * @param {string} s
 * @return {number}
 *
 * https://leetcode.com/explore/challenge/card/september-leetcoding-challenge-2021/637/week-2-september-8th-september-14th/3971/
 *
 * https://leetcode.com/problems/basic-calculator/
 *
 * Given a string s representing a valid expression, implement a basic calculator to evaluate it, and return the result of the evaluation.
 *
 * Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().
 *
 * Constraints:
 *
 * 1 <= s.length <= 3 * 105
 *
 * s consists of digits, '+', '-', '(', ')', and ' '.
 *
 * s represents a valid expression.
 *
 * '+' is not used as a unary operation.
 *
 * '-' could be used as a unary operation but it has to be inside parentheses.
 *
 * There will be no two consecutive operators in the input.
 *
 * Every number and running calculation will fit in a signed 32-bit integer.
 *
 * Input: s = "(1+(4+5+2)-3)+(6+8)"
 *
 * Output: 23
 */
var calculate = function (s) {
  let finalSign = 1;
  let curSign = 1;
  const signBeforeParenthesis = [];
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== " ") {
      if (s[i] === "(") {
        finalSign = finalSign * curSign;
        signBeforeParenthesis.push(curSign);
        curSign = 1;
      } else if (s[i] === ")") {
        finalSign =
          finalSign * signBeforeParenthesis[signBeforeParenthesis.length - 1];
        signBeforeParenthesis.pop();
      } else if (s[i] === "+") {
        curSign = 1;
      } else if (s[i] === "-") {
        curSign = -1;
      } else {
        let operand = 0;
        while ("0" <= s[i] && s[i] <= "9") {
          operand = operand * 10 + Number(s[i]);
          i++;
        }
        i--;
        result = result + finalSign * curSign * operand;
      }
    }
  }
  return result;
};

let s = "-(-1-(-45 + 21 )- 3 ) -  ( 6 +8 + (-10))";

console.log(calculate(s), eval(s));
