/**
 * @param {string} binary
 * @return {string}
 */
/**
 * @param {string} binary
 * @return {string}
 */
var maximumBinaryString = function (binary) {
  const n = binary.length;
  let firstZeroIdx = -1;
  let zeroCount = 0;
  for (let i = 0; i < n; ++i) {
    if (binary[i] == 0 && firstZeroIdx === -1) {
      firstZeroIdx = i;
    }
    if (binary[i] == 0) {
      zeroCount++;
    }
  }

  // if zeroCount <2 , we can't do any best operation
  return zeroCount >= 2
    ? '1'.repeat(firstZeroIdx + zeroCount - 1) + '0' + '1'.repeat(n - (firstZeroIdx + zeroCount))
    : binary;
};

maximumBinaryString('000110');
