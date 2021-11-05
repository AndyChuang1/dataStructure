/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxDistance = function (nums1, nums2) {
  let result = 0;
  const n = nums1.length;

  for (let i = 0; i < n; i++) {
    let l = i;
    let r = nums2.length;

    while (r >= l) {
      if (nums2[l] >= nums1[i]) {
        result = Math.max(result, l - i);
        l++;
      } else {
        break;
      }
    }
  }

  return result;
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxDistanceBS = function (nums1, nums2) {
  let result = 0;
  const n = nums1.length;

  for (let i = 0; i < n; i++) {
    let l = i;
    let r = nums2.length;
    const target = nums1[i];
    const fIdx = bs(nums2, l, target);

    result = Math.max(result, fIdx - l);
    console.log(result);
  }

  return result;
};

var bs = function (nums2, l, target) {
  let r = nums2.length;

  while (l <= r) {
    const mid = l + ((r - l) >> 1);
    if (nums2[mid] >= target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return r;
};

maxDistanceBS([55, 30, 5, 4, 2], [100, 20, 10, 10, 5]);
