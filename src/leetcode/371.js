/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 * https://leetcode.com/problems/sum-of-two-integers/
 */
var getSum = function (a, b) {
  const getSignedBinary = (x) => {
    const result = [];
    let temp = Math.abs(x);
    while (result.length < 16) {
      result.push(temp % 2);
      temp = Math.floor(temp / 2);
    }
    if (x < 0) {
      let found1 = false;
      result.forEach((bit, i) => {
        if (!found1) {
          if (bit === 1) {
            found1 = true;
          }
        } else {
          switch (bit) {
            case 0:
              result[i] = 1;
              break;
            default:
              result[i] = 0;
              break;
          }
        }
      });
    }
    return result;
  };
  const binA = getSignedBinary(a);
  const binB = getSignedBinary(b);
  const result = new Array(16).fill(0);
  let spare;
  binA.forEach((_, i) => {
    let tempSpare;
    if (binA[i] === binB[i]) {
      result[i] = 0;
      tempSpare = binA[i];
      if (spare) {
        result[i] = 1;
      }
      spare = tempSpare;
    } else {
      result[i] = 1;
      if (spare) {
        result[i] = 0;
        spare = 1;
      }
    }
  });
  if (result[15] === 1) {
    let found1 = false;
    result.forEach((bit, i) => {
      if (!found1) {
        if (bit === 1) {
          found1 = true;
        }
      } else {
        switch (bit) {
          case 0:
            result[i] = 1;
            break;
          default:
            result[i] = 0;
            break;
        }
      }
    });
    return parseInt("-".concat(result.reverse().join("")), 2);
  }
  return parseInt(result.reverse().join(""), 2);
};

console.log(getSum(-7, 1));
