// find the highest number from the array list
var number = [5, 10, 23, 46, 50, 9, 58, 3,];
//array start from 0 by defalut
var largest = number[0];
var smallest = number[0];

//iterate
for(var i =0; i<number.length; i++){
    var current = number[i];
    //console.log(current);
    if(current>largest){
        largest = current;
    }else if(current<smallest){
        smallest = current;
    }
}
console.log(largest);
console.log(smallest);