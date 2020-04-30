/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let strNum = digits.join('');
  let resultNum = (BigInt(strNum) + BigInt(1)).toString();

  return resultNum.split('');
};

var plusOne2 = function (digits) {
  const length = digits.length;

  for (let i = length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }
    digits[i] = 0;
  }
  digits.unshift(1); //如果 input = [9],[0] 就會跑到這一行 補一個1
  return digits;
};

// console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));
console.log(plusOne2([9, 5, 6, 7]));
