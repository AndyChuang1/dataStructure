/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
  let sum = 0;
  const stack = [];

  for (let i = 0; i < ops.length; i++) {
    if (ops[i] == 'C') {
      let pre = stack.pop();
      sum -= pre;
    } else if (ops[i] == 'D') {
      let pre = stack[stack.length - 1];
      let double = pre * 2;
      stack.push(double);
      sum += double;
    } else if (ops[i] == '+') {
      let sum2Round = stack[stack.length - 1] + stack[stack.length - 2];
      stack.push(sum2Round);
      sum += sum2Round;
    } else {
      console.log(ops[i]);
      let point = Number(ops[i]);
      stack.push(point);
      sum += point;
    }
  }
  console.log(sum);
  return sum;
};

var calPoints2 = function (ops) {
  let stack = [];
  ops.forEach(op => {
    if (parseInt(op)) {
      stack.push(parseInt(op));
    } else if (op === '+') {
      stack.push((stack[stack.length - 1] || 0) + (stack[stack.length - 2] || 0));
    } else if (op === 'D') {
      stack.push((stack[stack.length - 1] || 0) * 2);
    } else if (op === 'C') {
      stack.pop();
    }
  });
  console.log(stack);
  return stack.reduce((a, v) => a + v, 0);
};
calPoints2(['5', '2', 'C', 'D', '+']);
// calPoints(['5', '-2', '4', 'C', 'D', '9', '+', '+']);
