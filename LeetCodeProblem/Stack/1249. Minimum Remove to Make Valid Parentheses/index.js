/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
  let stack = [];
  let strArr = s.split('');

  for (let i = 0; i < s.length; i++) {
    //把( index push到stack
    if (strArr[i] === '(') stack.push(i);
    if (strArr[i] === ')') {
      if (stack.length) {
        stack.pop();
      } else {
        strArr[i] = '';
      }
    }
  }
  //如果stack還有東西代表是多餘的( 把他remove掉
  if (stack.length) {
    stack.forEach(i => {
      console.log(strArr[i]);
      strArr[i] = '';
    });
  }
  return strArr.join('');
  //   console.log();
};

minRemoveToMakeValid('lee(t(c)o)de)');
//Time complexity O(n)
//Space complexity O(n) 因為使用stack
