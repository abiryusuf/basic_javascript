// [n -1] + [n -2]

var fibo = [0, 1];

for(var i = 2; i<=10; i++){
    fibo [i] = fibo[i - 1] + fibo[i - 2];
}
console.log(fibo);

// function
function fibonacci(n){

    var fibo = [0, 1];

    for(var i = 2; i<=n; i++){
        fibo [i] = fibo[i - 1] + fibo[i - 2];
}
return fibo;

}
var result = fibonacci(10);
console.log(result);

// 2nd way
// declare the array starting with the first 2 values of the fibonacci sequence
let str = [0, 1];
function fibonacciDemo(num){
    for(let i = 1; i<=num; i++ ){
        // starting at array index 1, and push current index + previous index to the array
        str.push(str[i] + str[i -1]);
    }
    return str;

}
var t = fibonacciDemo(5);
console.log(t);