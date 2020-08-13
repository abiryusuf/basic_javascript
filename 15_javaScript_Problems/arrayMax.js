var marks = [98, 78, 60, 96, 70, 24];
//console.log(marks[0]);

// Default value 0 or index start from 0 or counting start from 0
var max = 0; // or var max = marks [0];

var arrayLength = marks.length


for(var i = 0; i<arrayLength; i++){
    // store the array's elements "marks[i]"
    var current = marks[i];

    if(current > max){
        max = current;
    }
    
}
console.log("Higest number: ", max)

// Average and Sum 
for(var j = 0; j<arrayLength; j++){
    max = max + marks[j];

    var avg = max/arrayLength;
    var sum = max + arrayLength;
    var mul = max * arrayLength;
    var result = Math.round(avg);


  

   

}
if(avg<= 60){
    console.log("Grade : D" );
}
else if (avg <= 70){
    console.log("Grade : C");
}
else if (avg >= 80 ){
    console.log("Grade : B");
}
else if (avg<= 90){
    console.log("Grade : A");
}
console.log("Average Number : " + avg);
console.log("average", result);
console.log("sum " + sum);
console.log("mul ", mul)

