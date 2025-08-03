/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 * https://leetcode.com/problems/combination-sum-iii/
 */
var combinationSum3 = function (k, n) {
  if (n < (k * (k + 1)) / 2) {
    return [];
  } else if (n > ((9 + (9 - k + 1)) * k) / 2) {
    return [];
  } else {
    const result = [];
    const currentArr = [];
    const recur = (start, remain) => {
      if (remain <= 9 && currentArr.length + 1 == k) {
        result.push([...currentArr, remain]);
        currentArr.length && currentArr.length--;
        return;
      }
      for (let i = start; i <= 9 - (k - currentArr.length - 1); i++) {
        const min =
          ((i * 2 + k - currentArr.length) * (k - currentArr.length - 1)) / 2;
        const max =
          ((9 + (9 - (k - currentArr.length - 1) + 1)) *
            (k - currentArr.length - 1)) /
          2;
        const nextRemain = remain - i;
        // console.log(min, max, nextRemain, currentArr, i);
        if (nextRemain < min) {
          currentArr.length && currentArr.length--;
          return;
        } else if (nextRemain === min) {
          const temp = [];
          for (let j = 0; j < k - currentArr.length; j++) {
            temp.push(i + j);
          }
          result.push([...currentArr, ...temp]);
          currentArr.length && currentArr.length--;
          return;
        } else if (nextRemain === max) {
          const temp = [];
          for (let j = k - currentArr.length - 2; j >= 0; j--) {
            temp.push(9 - j);
          }
          result.push([...currentArr, i, ...temp]);
        } else if (nextRemain < max) {
          currentArr.push(i);
          recur(i + 1, nextRemain);
        }
      }
    };
    recur(1, n);
    return result;
  }
};

console.log(combinationSum3(3, 21));
