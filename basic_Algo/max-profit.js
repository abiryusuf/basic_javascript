var maxProfit = function(prices){

    var smallest = Infinity;
    var bestProfit = 0;
    for (let i = 0; i < prices.length; i++) {
        const ele = prices[i];

        smallest = Math.min(smallest, ele);
        bestProfit = Math.max(bestProfit, ele - smallest);
        
    }
    return bestProfit;
}
var num = [4,5,6,78,9];
var res = maxProfit(num);
console.log(res)