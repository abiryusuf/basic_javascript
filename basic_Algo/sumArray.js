// find the total from the array 
var number = [5, 10, 23, 46, 50, 9, 58, 3];

var sum = 0;
for(var i = 0; i<number.length; i++){
    //var current = number[i];
    sum = sum + number[i];
    //sum = sum + current;
}
console.log(sum);

function total(num){
    var sum = 0;
    for(var i = 0; i<num.length; i++){
        var current = num[i];
        sum = sum + current;
        //sum += current
}
return sum;
}

var result = total(number);
console.log(result);