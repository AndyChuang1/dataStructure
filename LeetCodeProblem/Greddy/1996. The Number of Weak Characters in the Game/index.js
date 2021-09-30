/**
 * @param {number[][]} properties
 * @return {number}
 */
var numberOfWeakCharacters = function (properties) {
  const n = properties.length;
  const sumArr = [];
  let count = new Set();

  for (let i = 0; i < n; ++i) {
    const sum = properties[i][0] + properties[i][1];
    sumArr.push([i, sum]);
  }

  sumArr.sort((a, b) => {
    return b[1] - a[1];
  });

  for (let i = 0; i < n; ++i) {
    for (let j = i + 1; j < n; ++j) {
      const sub = sumArr[i][1] - sumArr[j][1];
      if (sub >= 2) {
        if (
          properties[sumArr[i][0]][0] > properties[sumArr[j][0]][0] &&
          properties[sumArr[i][0]][1] > properties[sumArr[j][0]][1]
        ) {
          count.add(sumArr[j][0]);
        }
      }
    }
  }
  return count.size;
};

var numberOfWeakCharacters2 = function (properties) {
  const n = properties.length;
  let weekCount = 0;
  let max = 0;
  properties.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    }
    return b[0] - a[0];
  });

  for (let i = 0; i < n; ++i) {
    max = Math.max(max, properties[i][1]);

    if (max > properties[i][1]) {
      weekCount++;
    }
  }

  return weekCount;
};
// numberOfWeakCharacters([
//   [7, 7],
//   [1, 2],
//   [9, 7],
//   [7, 3],
//   [3, 10],
//   [9, 8],
//   [8, 10],
//   [4, 3],
//   [1, 5],
//   [1, 5],
// ]);

numberOfWeakCharacters2([
  [1, 5],
  [10, 4],
  [4, 3],
]);
