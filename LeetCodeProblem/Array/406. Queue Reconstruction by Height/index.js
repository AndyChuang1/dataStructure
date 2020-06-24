/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
  let result = [];
  //從高到低排序 如果高一樣 再從k做升序排序
  let sortPeople = people.sort((a, b) => {
    return a[0] === b[0] ? a[1] - b[1] : b[0] - a[0];
  });
  //假設陪序結果為[[7,0],[7,1],[6,1],[5,0],[5,2],[4,4]]，我們已經知道排序為高到低，我們只要注意k ，並插入正確位置
  for ([h, k] of sortPeople) {
    result.splice(k, 0, [h, k]);
  }
  console.log(sortPeople);
  return result;
};

reconstructQueue([
  [7, 0],
  [4, 4],
  [7, 1],
  [5, 0],
  [6, 1],
  [5, 2],
]);
