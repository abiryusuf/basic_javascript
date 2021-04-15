var number = [4,6,7,8,23,56]

function maxNumber(num){
    var max = 0;
    for (let i = 0; i < num.length; i++) {
        const current = num[i];
        if (current > max){
            max = current
        }
        
    }
    return max
}
console.log(maxNumber(number))