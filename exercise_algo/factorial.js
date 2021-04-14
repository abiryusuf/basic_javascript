function factorial(num){
    var str = 1;
    for (let i = 1; i <= num; i++) {
        
        str = str * i
        
    }
    return str
}
console.log(factorial(5))