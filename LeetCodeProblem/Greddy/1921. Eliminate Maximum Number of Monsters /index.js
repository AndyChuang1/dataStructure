/**
 * @param {number[]} dist
 * @param {number[]} speed
 * @return {number}
 */
var eliminateMaximum = function (dist, speed) {
  let killCount = 0;

  const timeWithIdx = [];

  for (let i = 0; i < dist.length; i++) {
    const time = dist[i] / speed[i];
    timeWithIdx.push([i, time]);
  }

  timeWithIdx.sort((a, b) => {
    return a[1] - b[1];
  });

  for (let i = 0; i < timeWithIdx.length; ++i) {
    const curE = dist[timeWithIdx[i][0]] - speed[timeWithIdx[i][0]] * i;
    if (curE <= 0 && i !== 0) break;
    killCount++;
  }
  console.log(killCount);
  return killCount;
};
// eliminateMaximum([1, 1, 2, 3], [1, 1, 1, 1]);

eliminateMaximum([4, 8, 6, 8, 2, 7, 4], [1, 3, 3, 1, 10, 1, 1]);

var eliminateMaximum2 = function (dist, speed) {
  let killCount = 0;

  const timeArr = [];

  for (let i = 0; i < dist.length; i++) {
    const time = dist[i] / speed[i];
    timeArr.push(time);
  }

  timeArr.sort((a, b) => {
    return a - b;
  });

  for (let i = 0; i < dist.length; ++i) {
    const curE = timeArr[i] - i;
    if (curE <= 0) break;
    killCount++;
  }
  return killCount;
};
