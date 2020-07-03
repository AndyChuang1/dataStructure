/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} X
 * @return {number}
 */
var maxSatisfied = function (customers, grumpy, X) {
  let total = 0;
  let secretTime = 0;
  //算出不用秘密武器可以滿足客人的時間
  for (let i = 0; i < customers.length; i++) {
    if (grumpy[i] === 0) {
      total += customers[i];
    }
  }
  // 因為我們要得到最大效益，先把grumpy*customers
  for (let i = 0; i < grumpy.length; i++) {
    grumpy[i] = grumpy[i] * customers[i];
  }
  let l = 0;
  let sum = 0;
  // 使用Sliding window 計算出 最大效益 ，假設K=3 每個window為3，算出所有組合
  for (let r = 0; r < grumpy.length; r++) {
    sum += grumpy[r];
    if (r - l + 1 >= X) {
      secretTime = Math.max(sum, secretTime);
      sum -= grumpy[l];
      l++;
    }
  }
  console.log(total + secretTime);
  return total + secretTime;
};
maxSatisfied([1, 0, 1, 2, 1, 1, 7, 5], [0, 1, 0, 1, 0, 1, 0, 1], 3);

//Time complexity = 3n = O(n)
//Space complexity =  O(1)
