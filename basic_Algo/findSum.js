function FindSum(num, ans){
    let checkValue = 0;
    let found = false;

    for (let i = 0; i < num.length; i++) {
         checkValue = ans - num[i]
        if(num.includes(checkValue, i + 1)){
            found = true
            break
        }
        
    }
    return found;
}

var res = FindSum([10, 15, 3, 8], 18);
console.log(res);