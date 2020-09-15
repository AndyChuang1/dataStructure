var alphabetBoardPath = function (target) {
  const board = ['abcde', 'fghij', 'klmno', 'pqrst', 'uvwxy', 'z'];
  let prePosition = { x: 0, y: 0 };
  let preStr = 'a';
  let res = '';
  function findPosition(s) {
    let x = (s.charCodeAt() - 97) % 5;
    let y = Math.floor((s.charCodeAt() - 97) / 5);
    return { x, y };
  }
  function returnStr(s) {
    let str = '';
    let strPosition = findPosition(s);
    let diffX = strPosition.x - prePosition.x;
    let diffY = strPosition.y - prePosition.y;

    if (diffY > 0) {
      str += 'D'.repeat(diffY);
    } else {
      str += 'U'.repeat(Math.abs(diffY));
    }

    if (diffX > 0) {
      str += 'R'.repeat(diffX);
    } else {
      str += 'L'.repeat(Math.abs(diffX));
    }
    prePosition = strPosition;

    if (s == 'z') {
      let strArray = str.split('');
      let temp = strArray[0];
      strArray[0] = strArray[strArray.length - 1];
      strArray[strArray.length - 1] = temp;

      return strArray.join('');
    }

    return str;
  }

  for (let i = 0; i < target.length; i++) {
    let str = '';
    if (target[i] == preStr) {
      str += '!';
      res += str;
      continue;
    }
    str = returnStr(target[i]) + '!';

    preStr = target[i];
    res += str;
  }
  return res;
};
alphabetBoardPath('zb');
