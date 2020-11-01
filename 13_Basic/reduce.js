const num = [1,2,3,4,5];

const reducer = (num1, num2 ) => 
    num1 + num2;

console.log("reduce", num.reduce(reducer));



function factorialDemo(num){
    var factorial = 1;
    for (var i = 0; i < num.length; i++) {
        //const ele = num[i];
        factorial += factorial * i;
        
    }
    return factorial;
}
var str = factorialDemo(num);
console.log("factorial", str);

