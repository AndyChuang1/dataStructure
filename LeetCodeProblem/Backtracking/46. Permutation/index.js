const permute = function (nums) {
  const results = [];
  step(nums, results);
  return results;
};

function step(nums, results, current = new Set()) {
  if (nums.length === current.size) {
    results.push([...current]);
    return;
  }

  for (let value of nums) {
    if (current.has(value)) {
      continue;
    }

    current.add(value);
    step(nums, results, current);
    current.delete(value);
  }
}

permute([1, 2, 3]);
