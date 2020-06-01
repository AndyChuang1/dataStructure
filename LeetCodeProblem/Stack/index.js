var removeDuplicates = function (S) {
  const stack = [];

  for (let i = 0; i < S.length; i++) {
    if (S[i] !== stack[stack.length - 1]) {
      stack.push(S[i]);
    } else {
      stack.pop();
    }
  }
  return stack.join('');
};
