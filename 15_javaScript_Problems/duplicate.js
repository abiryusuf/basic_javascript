var number = [3, 4, 4, 5, 5, 6, 7, 8, 2, 2, 9, 9 ];
//console.log(number[0]);
//console.log(number.indexOf(10));
var numberTwo = [];

for(var i = 0; i<number.length; i++){
    var current = number[i];
    //indexOf will check that current element has in numberTwo element 
    //if not, it will show -1 
    // if index is -1, push in the numberTwo
    var index = numberTwo.indexOf(current);
    if(index ==  -1){
        numberTwo.push(current);
    }
    // if(index ==  -1){
    //     numberTwo.push(current);
    // }
    // console.log(index);
    console.log(numberTwo);
}


