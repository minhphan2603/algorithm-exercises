/**
 * @param {number[]} obstacles
 * @return {number[]}
 * https://leetcode.com/problems/find-the-longest-valid-obstacle-course-at-each-position/description/
 * 1964. Find the Longest Valid Obstacle Course at Each Position
 * You want to build some obstacle courses. You are given a 0-indexed integer array obstacles of length n, where obstacles[i] describes the height of the ith obstacle.
 * For every index i between 0 and n - 1 (inclusive), find the length of the longest obstacle course in obstacles such that:
 * You choose any number of obstacles between 0 and i inclusive.
 * You must include the ith obstacle in the course.
 * You must put the chosen obstacles in the same order as they appear in obstacles.
 * Every obstacle (except the first) is taller than or the same height as the obstacle immediately before it.
 * Return an array ans of length n, where ans[i] is the length of the longest obstacle course for index i as described above.
 *
 * Example 3:
 *
 * Input: obstacles = [3,1,5,6,4,2]
 *
 * Output: [1,1,2,3,2,2]
 *
 * Explanation: The longest valid obstacle course at each position is:
 * - i = 0: [3], [3] has length 1.
 * - i = 1: [3,1], [1] has length 1.
 * - i = 2: [3,1,5], [3,5] has length 2. [1,5] is also valid.
 * - i = 3: [3,1,5,6], [3,5,6] has length 3. [1,5,6] is also valid.
 * - i = 4: [3,1,5,6,4], [3,4] has length 2. [1,4] is also valid.
 * - i = 5: [3,1,5,6,4,2], [1,2] has length 2.
 */
var longestObstacleCourseAtEachPosition = function (obstacles) {
  const result = [1];
  const statMin = [obstacles[0]];
  for (let i = 1; i < obstacles.length; i++) {
    result.push(1);
    if (statMin[0] > obstacles[i]) {
      statMin[0] = obstacles[i];
    } else if (statMin[statMin.length - 1] <= obstacles[i]) {
      result[i] = statMin.length + 1;
      statMin.push(obstacles[i]);
    } else {
      let x = 0,
        y = statMin.length - 1;
      while (x < y) {
        let k = Math.floor((x + y) / 2);
        if (k === x) {
          result[i] = k + 2;
          statMin[k + 1] = obstacles[i];
          break;
        }
        if (statMin[k] <= obstacles[i]) {
          x = k;
        } else {
          y = k;
        }
      }
    }
  }
  return result;
};

const start = Date.now();
console.log(longestObstacleCourseAtEachPosition([2, 1, 2, 3, 1, 4]));
const end = Date.now();
console.log(end - start);
