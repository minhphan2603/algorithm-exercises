/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 *
 * https://leetcode.com/explore/challenge/card/september-leetcoding-challenge-2021/636/week-1-september-1st-september-7th/3965/
 */
var slowestKey = function (releaseTimes, keysPressed) {
  let result = keysPressed[0];
  let max = releaseTimes[0];
  for (let i = 1; i < releaseTimes.length; i++) {
    if (
      max < releaseTimes[i] - releaseTimes[i - 1] ||
      (max === releaseTimes[i] - releaseTimes[i - 1] && result < keysPressed[i])
    ) {
      max = releaseTimes[i] - releaseTimes[i - 1];
      result = keysPressed[i];
    }
  }
  return result;
};

let releaseTimes = [12, 23, 36, 46, 62],
  keysPressed = "spuda";

console.log(slowestKey(releaseTimes, keysPressed));
