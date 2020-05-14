let count = 0;
let FirstCount = 0;
function F(num) {
  count++;
  if (num == 0) {
    return 0;
  } else if (num == 1) {
    return 1;
  } else {
    return F(num - 1) + F(num - 2);
  }
}
// console.log(F(5)); // 5
// console.log(count);

//使用cache 存入已經算過的function
// function F_optimize(num, cache = []) {
//   count++;
//   if (cache[num]) {
//     return cache[num];
//   } else {
//     FirstCount++;
//     if (num === 0) {
//       cache[num] = 0;
//     } else if (num === 1) {
//       cache[num] = 1;
//     } else {
//       cache[num] = F_optimize(num - 1, cache) + F_optimize(num - 2, cache);
//     }
//   }
//   return cache[num];
// }
let cache = [];
function F_optimize(num) {
  count++;
  if (cache[num]) {
    return cache[num];
  } else {
    FirstCount++;
    if (num === 0) {
      cache[num] = 0;
    } else if (num === 1) {
      cache[num] = 1;
    } else {
      cache[num] = F_optimize(num - 1) + F_optimize(num - 2);
    }
  }
  return cache[num];
}
F_optimize(5);
console.log(count); //總共運行次數
console.log(FirstCount); //執行運算次數
