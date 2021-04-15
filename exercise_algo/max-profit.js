// Write a function that takes an array of integers representing the price of a stock on different days. Return the maximum profit that can be made from buying and selling a single stock

price = [4,6,7,89]

function maxProfit(prices){
    var smallest = Infinity
    var max = 0;
    for (let i = 0; i < prices.length; i++) {
        const element = prices[i];
        smallest = Math.min(smallest, element)
        max = Math.max(max, element - smallest)
        
    }
    return max
}

console.log(maxProfit(price))