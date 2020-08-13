var number = [60, 90, 80, 90, 86, 92, 85];

// put the new element from array list "number"
// index start from 0 by default
var container = 0; 

var arrayLength = number.length;

for(var i = 0; i<arrayLength; i++){
    //add total number
    container = container +  number[i];
    // divided by length
    var avg = container/arrayLength;
    // math floor 
    var result = Math.floor(avg);



};
if(result <= 60){
    console.log("Grade is D");
}else if (result <=70){
    console.log("Grade is C ");
}else if(result<=80){
    console.log("Grade is B");
}else if (result<=90){
    console.log("Grade is A")
}
console.log("Average",  result);