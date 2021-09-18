/**
 * @param {number[]} milestones
 * @return {number}
 */
var numberOfWeeks = function (milestones) {
  let maxNum = 0;
  let maxNumIdx = -1;
  let sumAll = 0;

  for (let i = 0; i < milestones.length; ++i) {
    if (maxNum < milestones[i]) {
      maxNum = milestones[i];
      maxNumIdx = i;
    }
    sumAll = sumAll + milestones[i];
  }

  return milestones[maxNumIdx] - (sumAll - milestones[maxNumIdx]) < 2
    ? sumAll
    : (sumAll - milestones[maxNumIdx]) * 2 + 1;
};
