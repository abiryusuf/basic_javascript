var number = [4,6,6,7,7,8,9,9]
console.log(number.indexOf(5))
console.log(number[-1])

function duplicateNumber(num){
    var newArray = []

    for (let i = 0; i < num.length; i++) {
        const current = num[i];
        // indexOf will check current element has in the newArry 
        // if it is not, it will show -1
        var index = newArray.indexOf(current)
        if (index === -1) {
            newArray.push(current)
        }
        
    }
    return newArray
}

console.log(duplicateNumber(number))