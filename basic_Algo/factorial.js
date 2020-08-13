var fact = 1;
for(var i =1; i<=5; i++){
    fact = fact * i
}
console.log(fact);

function factorail(num){
    var fact = 1;
    for(var i =1; i<=num; i++){
        fact = fact * i
    }
    return fact;
}

var result = factorail(5);
console.log(result);