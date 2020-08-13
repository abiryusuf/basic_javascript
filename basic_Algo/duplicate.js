var number = [3,4,4,56,2,2,7,8,6,9,9];

var numberTwo = [];

for(var i =1; i<number.length; i++){
    var current = number[i];
    //console.log(current);
    //check the array element that includes in new Array "numberTwo"
    var index = numberTwo.indexOf(current);
    if(index == - 1){
        numberTwo.push(current);
    }
    //console.log(index);
}
console.log(numberTwo)

function removeDuplicate(num){
    var numberTwo = [];

    for(var i =1; i<num.length; i++){
        var current = num[i];
        //console.log(current);
        //check the array element that includes in new Array "numberTwo"
        var index = numberTwo.indexOf(current);
        if(index == - 1){
            numberTwo.push(current);
        }
        //console.log(index);
    }
}
var result = removeDuplicate(number);
console.log(result);