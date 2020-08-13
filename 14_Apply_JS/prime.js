function primeNumber(n){
    // prime number can divided only 1 or this number. e.g 13/13 or 1/13
    //index start from 2, because a number can divided 0 and 1 but we will get same result.
    for(var i = 2; i<n; i ++){
        if(n % i === 0){
            return "This is not prime number";
        }

    }
    return "This is prime number";
}

var result = primeNumber(13);
console.log(result);
