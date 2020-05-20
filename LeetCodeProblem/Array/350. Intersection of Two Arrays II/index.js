/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

//it can optimize
var intersect = function (nums1, nums2) {
  let intersection = [];

  for (let i = 0; i < nums1.length; i++) {
    const intersectionIndex = nums2.indexOf(nums1[i]);
    if (intersectionIndex !== -1) {
      intersection.push(nums1[i]);
      nums2.splice(intersectionIndex, 1);
    }
  }

  return intersection;
};

intersect([4, 9, 5], [9, 4, 9, 8, 4]);
