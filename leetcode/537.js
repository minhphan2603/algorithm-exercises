/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 *
 * https://leetcode.com/problems/complex-number-multiplication/
 *
 * A complex number can be represented as a string on the form "real+imaginaryi" where:
 *
 * real is the real part and is an integer in the range [-100, 100].
 *
 * imaginary is the imaginary part and is an integer in the range [-100, 100].
 *
 * i2 == -1.
 *
 * Given two complex numbers num1 and num2 as strings, return a string of the complex number that represents their multiplications.
 */
var complexNumberMultiply = function (num1, num2) {
  const a = num1.split("+");
  const b = num2.split("+");
  const [a1, a2] = a.map((i) => parseInt(i));
  const [b1, b2] = b.map((i) => parseInt(i));
  const x = a1 * b1 - a2 * b2;
  const y = a1 * b2 + b1 * a2;
  return `${x}+${y}i`;
};

console.log(complexNumberMultiply("1+-1i", "1+-1i"));
