/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  const len = s.length;
  const stack = [];

  for (let i = 0; i < len; i++) {
    //遇到] 代表要乘以倍數了
    if (s[i] !== ']') {
      stack.push(s[i]);
      continue;
    }
    //整理出要乘以倍數的字串
    let cur = stack.pop();
    let result = '';
    while (cur !== '[') {
      result = cur + result;
      cur = stack.pop();
    }
    //找出乘以倍數的數字
    cur = stack.pop();
    let times = '';
    while (!isNaN(cur)) {
      times = cur + times;
      cur = stack.pop();
    }
    if (cur) {
      stack.push(cur);
    }
    //把乘好的字串 push 到satck
    stack.push(result.repeat(times));
  }
  //最後return stack裡的字串
  return stack.join('');
};

// decodeString('3[a]2[bc]');
// decodeString('2[abc]3[cd]ef');
decodeString('10[a]2[bc]');
