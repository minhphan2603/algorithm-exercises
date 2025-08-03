/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 *
 * https://leetcode.com/explore/challenge/card/august-leetcoding-challenge-2021/616/week-4-august-22nd-august-28th/3950/
 *
 * We have n jobs, where every job is scheduled to be done from startTime[i] to endTime[i], obtaining a profit of profit[i].
 *
 * You're given the startTime, endTime and profit arrays, return the maximum profit you can take such that there are no two jobs in the subset with overlapping time range.
 *
 * If you choose a job that ends at time X you will be able to start another job that starts at time X.
 *
 * Input: startTime = [1,2,3,3], endTime = [3,4,5,6], profit = [50,10,40,70]
 *
 * Output: 120
 *
 * Explanation: The subset chosen is the first and fourth job.
 *
 * Time range [1-3]+[3-6] , we get profit of 120 = 50 + 70.
 */
var jobScheduling = function (startTime, endTime, profit) {
  const jobs = startTime.map((start, i) => ({
    start,
    end: endTime[i],
    wage: profit[i],
    total: profit[i],
  }));
  jobs.sort((a, b) => a.start - b.start);
  let result = 0;
  for (let i = 0; i < jobs.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (
        jobs[j].end <= jobs[i].start &&
        jobs[i].total < jobs[j].total + jobs[i].wage
      ) {
        jobs[i].total = jobs[j].total + jobs[i].wage;
      }
    }
    if (result < jobs[i].total) {
      result = jobs[i].total;
    }
  }
  return result;
};

let startTime = [1, 2, 3, 3],
  endTime = [3, 4, 5, 6],
  profit = [50, 10, 40, 70];

console.log(jobScheduling(startTime, endTime, profit));
