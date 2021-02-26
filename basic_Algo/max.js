
var maxNumber = function(num){
    var max = [];
    for (let i = 0; i < num.length; i++) {
        const currentNum = num[i];

        if (currentNum > max) {
            max = currentNum;
        }
        
    }
    return max;
}
var number = [4,5,7,8,3,10]
console.log(maxNumber(number))