/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 *
 * https://leetcode.com/problems/expression-add-operators/
 *
 * Given a string num that contains only digits and an integer target, return all possibilities to add the binary operators '+', '-', or '*' between the digits of num so that the resultant expression evaluates to the target value.
 *
 * 1 <= num.length <= 10
 *
 * Input: num = "123", target = 6
 *
 * Output: ["1*2*3","1+2+3"]
 */
var addOperators = function (num, target) {
  if (num.length === 1) {
    if (num == target) {
      return [num];
    }
    return [];
  }
  const result = [];
  const ops = ["*", "+", "-", undefined];
  const solve = (
    i,
    expression,
    lastOperand,
    lastOp,
    acc,
    lastOperand2,
    lastOp2
  ) => {
    if (i >= num.length) {
      if (acc === target && expression != 0) {
        result.push(expression);
      }
    } else {
      const temp = Number(num[i]);
      let newAcc;
      switch (lastOp2) {
        case "+":
          newAcc = acc - lastOperand2 + lastOperand2 * temp;
          break;
        case "-":
          newAcc = acc + lastOperand2 - lastOperand2 * temp;
          break;
        default:
          newAcc = lastOperand2 * temp;
          break;
      }
      solve(
        i + 1,
        expression + "*" + num[i],
        temp,
        "*",
        newAcc,
        lastOperand2 * temp,
        lastOp2
      );
      solve(i + 1, expression + "+" + num[i], temp, "+", acc + temp, temp, "+");
      solve(i + 1, expression + "-" + num[i], temp, "-", acc - temp, temp, "-");

      if (
        !(
          expression[expression.length - 1] === "0" &&
          ops.includes(expression[expression.length - 2])
        )
      ) {
        const newLastOperand2 =
          lastOperand2 * 10 + (lastOperand2 * temp) / lastOperand;
        switch (lastOp2) {
          case "+":
            newAcc = acc - lastOperand2 + newLastOperand2;
            break;
          case "-":
            newAcc = acc + lastOperand2 - newLastOperand2;
            break;
          default:
            newAcc = newLastOperand2;
            break;
        }
        solve(
          i + 1,
          expression + num[i],
          lastOperand * 10 + temp,
          lastOp,
          newAcc,
          newLastOperand2,
          lastOp2
        );
      }
    }
  };
  solve(1, num[0], Number(num[0]), "", Number(num[0]), Number(num[0]), "");
  return result;
};

let num = "999999999";
target = 81;

console.log(addOperators(num, target));
