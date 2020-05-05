/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const length = prices.length;
  let profit = [];
  for (let i = 0; i < length; i++) {
    let eachProfit = [];
    for (let j = i; j < length - 1; j++) {
      eachProfit.push(prices[j + 1] - prices[i]);
    }
    profit.push(Math.max(...eachProfit));
  }
  return Math.max(...profit) <= 0 ? 0 : Math.max(...profit);
};

var maxProfit2 = function (prices) {
  let miniPrice = prices[0];
  let maxProfit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (miniPrice > prices[i]) {
      miniPrice = prices[i];
    } else if (miniPrice < prices[i]) {
      const curProfit = prices[i] - miniPrice;
      maxProfit = Math.max(curProfit, maxProfit);
    }
  }
  return maxProfit;
};
