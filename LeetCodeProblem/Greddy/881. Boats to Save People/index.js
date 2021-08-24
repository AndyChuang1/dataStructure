/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function (people, limit) {
  const sortPeople = people.sort((a, b) => a - b);
  let l = 0;
  let r = people.length - 1;
  let count = 0;

  while (l <= r) {
    let sumWeight = sortPeople[l] + sortPeople[r];
    count++;
    if (sumWeight <= limit) {
      l++;
      r--;
      continue;
    }
    r--;
  }

  return count;
};
numRescueBoats([44, 10, 29, 12, 49, 41, 23, 5, 17, 26], 50);
