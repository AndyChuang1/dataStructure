/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  let result = [];

  for (let i = 0; i < nums1.length; i++) {
    // m
    let isFind = false;
    let idx = nums2.indexOf(nums1[i]);
    //n
    for (let j = idx; j < nums2.length; j++) {
      if (nums1[i] < nums2[j] && !isFind) {
        result.push(nums2[j]);
        isFind = true;
      }
    }
    if (!isFind) {
      result.push(-1);
    }
  }
  return result;

  // O(m*n)
};
