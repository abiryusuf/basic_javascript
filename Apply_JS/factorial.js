
// factorail = 1 * 2 * 3 * 4 * 5;
var fact = 1
 for(var i = 1; i<=5; i++){
  fact += fact * i;
  console.log(fact);
}
// function
function factorialDemo(num){
   var factorial = 1;
    for(var i = 1; i<=num; i++){
        factorial += factorial * i;
        
}
return factorial

}

var x = factorialDemo(6);
console.log("function: " + x);

// while
function whileFunction(number){
    x = 1;
    var factWhile = 1;
    while(x<=number){
        factWhile = factWhile * x;
        x++;
        //console.log("while " + factWhile);
    }
    return factWhile;

}
var q = whileFunction(5);
console.log("While " + q);

// Recursion: Recursion is the technique of making a function call itself
/// 5! = 1*2*3*4*5 
//  6! = 1*2*3*4*5*6 or 5! * 6 or (6 - 1) * 6 
// (n - 1) * n or n * (n -1)
function factorialF(number){
    if(number === 1){
        return 1;
    }
    return number * factorialF(number -1);
}

var y = factorialF(4);
console.log(y);