/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let l = 0;
  let r = height.length - 1;
  let maxArea = 0;

  while (l < r) {
    let width = r - l;
    let minHeight = Math.min(height[l], height[r]);
    let area = width * minHeight;

    if (area > maxArea) {
      maxArea = area;
    }
    //原因是因為面積只取到兩邊最小的高，如果某一邊比另外一邊高，就表示矮的那邊已經碰到極限了，所以就向內找看看有沒有更高的高。
    if (height[l] < height[r]) {
      l++;
    } else {
      r--;
    }
  }
  return maxArea;
};

maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
maxArea([2, 3, 4, 5, 18, 17, 6]);

// Time complexity: O(n)   最差 就是跑完 height n
// Space complexity O(1) : 不會隨著height.length 變多
