
/*A prime number is a positive integer that has exactly two positive integer factors, 1 and itself. For example, if we list the factors of 28, we have 1, 2, 4, 7, 14, and 28. That's six factors. If we list the factors of 29, we only have 1 and 29. That's two factors. So we say that 29 is a prime number, but 28 isn't.

Another way of saying this is that a prime number is a positive integer that is not the product of two smaller positive integers. */


function checkPrime(num){
    for(var i =2; i<num; i++){
        if(num % i === 0){
            return "This is not prime";
        } else {
            return "This is prime";
        }
    }
}
var result = checkPrime(129);
console.log(result);