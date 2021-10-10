/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeBitwiseAnd = function (left, right) {
  let L = left,
    R = right;
  let i = 0,
    result = 0;
  while (L > 0 && R > 0) {
    let leftBit = L % 2,
      rightBit = R % 2;
    L = Math.floor(L / 2);
    R = Math.floor(R / 2);
    if (leftBit && rightBit) {
      const temp = Math.pow(2, i);
      if (left + temp > right) {
        result += temp;
      }
    }
    i++;
  }
  return result;
};

let left = 5,
  right = 7;

console.log(rangeBitwiseAnd(left, right));
