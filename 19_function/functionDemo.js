const x = function(a, b){
    return a * b;
}
var z = x(4,3)
console.log(z)

function myFunction(a, b){
    //return arguments.length;
    return a * b
}

var res = myFunction(4, 5, 7);
//console.log(res);

var text = myFunction.toString();
console.log("string", text)

var x1 = function(x, y){
    return x * y;
}

const x2 = (x, y) => x * y;

console.log(x2(3,4))