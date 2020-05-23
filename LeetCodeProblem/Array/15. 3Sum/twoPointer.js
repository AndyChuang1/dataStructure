function threeSum(nums) {
  const result = [];
  const len = nums.length;
  //lgN
  //[-4,-1,-1,0,1,2]
  nums.sort((a, b) => a - b);
  //n^2
  for (let i = 0; i < len; i++) {
    let l = i + 1;
    let r = nums.length - 1;
    //因為排序的關西 如果下一個i與當前i重複就跳過此round 因為會有重複的結果
    if (i > 0 && nums[i] == nums[i - 1]) continue;

    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];
      if (sum === 0)
        //滿足條件時，兩個指針要一起移動
        result.push([nums[i], nums[l], nums[r]]);
      l++;
      r--;
      //再次檢查下一次指針如果與當前重複就在跳過避免重複
      while (l < r && nums[l] == nums[l - 1]) {
        l++;
      }
      while (l < r && nums[r] == nums[r + 1]) {
        r--;
      }
    }
    if (sum > 0) {
      r--;
    }
    if (sum < 0) {
      l++;
    }
  }
  return result;
}

function threeSum(nums) {
  const result = [];
  const len = nums.length;
  //lgN
  //[-4,-1,-1,0,1,2]
  nums.sort((a, b) => a - b);
  //n^2
  for (let i = 0; i < len; i++) {
    let l = i + 1;
    let r = nums.length - 1;
    //因為排序的關西 如果下一個i與當前i重複就跳過此round 因為會有重複的結果
    if (i > 0 && nums[i] == nums[i - 1]) continue;

    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];
      if (sum === 0)
        //滿足條件時，兩個指針要一起移動
        result.push([nums[i], nums[l], nums[r]]);
      l++;
      r--;
      //再次檢查下一次指針如果與當前重複就在跳過避免重複
      while (l < r && nums[l] == nums[l - 1]) {
        l++;
      }
      while (l < r && nums[r] == nums[r + 1]) {
        r--;
      }
    }
    if (sum > 0) {
      r--;
    }
    if (sum < 0) {
      l++;
    }
  }
  return result;
}
