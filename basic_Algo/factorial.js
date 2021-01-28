// var fact = 1;
// for(var i =1; i<=5; i++){
//     fact = fact * i
// }
// console.log(fact);

function factorail(num){
    var fact = 1;
    for(var i =1; i<=num; i++){
        fact = fact * i
    }
    return fact;
}


// var result = factorail(5);
// console.log(result);

const factorial = num =>{
    var fact = 1;

    for(var i=1; i<=num; i++ ){
        fact = fact * i;
    }
    return fact
}
var str1 = factorial(5);
console.log(str1)

var number = [1,2,3,4,5];

const reducer = (num1, num2) => num1 +  num2;

console.log("reduce", number.reduce(reducer));