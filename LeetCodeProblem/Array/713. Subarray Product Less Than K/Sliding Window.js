/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
  // 因為題目要正整數，所以只要k小於1 就不會有答案
  if (k <= 1) return 0;

  let product = 1;
  let l = 0,
    r = 0;
  let count = 0;

  while (r < nums.length) {
    product *= nums[r];
    //如果乘積>=K 表示l要往右移動 乘積除以l 才能把乘積變成
    while (product >= k) {
      product /= nums[l];
      l++;
    }

    count += r - l + 1;
    r++;
  }

  return count;
};
numSubarrayProductLessThanK([10, 5, 2, 6], 100);

// Ex: [10, 5, 2, 6], K = 100   (right = "*", left = "^")
//      ^
//      *            => 10 < K => Find [10]
//     -------------
//      ^
//          *        => 10*5 < K => Find [10, 5], [5]
//     -------------
//      ^
//             *     => 10*5*2 >= K =>  left 右移 !!!
//     -------------
//          ^
//             *     => 5*2 < K => Find [5, 2], [2]
//     -------------
//          ^
//                *  => 5*2*6 < K => Fid [5, 2, 6], [2, 6], [6]
