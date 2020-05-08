/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let porfit = 0;

  for (let i = 1; i < prices.length; i++) {
    const todayProfit = prices[i] - prices[i - 1];

    if (todayProfit > 0) {
      porfit += todayProfit;
    }
  }
  return porfit;
};
