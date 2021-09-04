/**
 * @param {number[][]} triplets
 * @param {number[]} target
 * @return {boolean}
 */
var mergeTriplets = function (triplets, target) {
  let count = 0;

  for (const [j, t] of triplets.entries()) {
    if (t[0] > target[0] || t[1] > target[1] || t[2] > target[2]) continue;
    let maxNum = 0;
    for (let i = 0; i < 3; i++) {
      if (triplets[j][i] === target[i]) {
        maxNum = triplets[j][i];
      } else {
        maxNum = Math.max(triplets[j][i], maxNum);
      }
    }
    if (maxNum === target[j]) {
      continue;
    } else {
      return false;
    }
  }

  return true;
};
mergeTriplets(
  [
    [9, 4, 9],
    [7, 4, 8],
    [10, 5, 1],
    [3, 7, 6],
    [5, 3, 4],
  ],
  [9, 7, 9]
);

var mergeTriplets1 = function (triplets, target) {
  let r1 = 0,
    r2 = 0,
    r3 = 0;

  for (let i = 0; i < triplets.length; i++) {
    if (triplets[i][0] <= target[0] && triplets[i][1] <= target[1] && triplets[i][2] <= target[2]) {
      if (triplets[i][0] === target[0]) r1 = 1;
      if (triplets[i][1] === target[1]) r2 = 1;
      if (triplets[i][2] === target[2]) r3 = 1;
    }
  }

  return r1 && r2 && r3;
};
