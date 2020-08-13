var students = [["EN", 80, "Data", 90, "programming" , 90, "operating", 80]];
var arrayLength = students.length;
var avgMarkes = 0;

for(var i =0; i <arrayLength; i++){
    avgMarkes += students[i][1];
    var avg = (avgMarkes/arrayLength)
    console.log("Average Number : " + avg);
}
//console.log("Average Number: " + avg);

if(avg<= 60){
    console.log("Grade : D" );
}
else if (avg <= 70){
    console.log("Grade : C");
}
else if (avg <= 80 ){
    console.log("Grade : B");
}
else if (avg<= 90){
    console.log("Grade : A");
}
var abir = {
    name: "abir",
    age: 29,
    locaction: "NY"
}

console.log("My name is " + abir.name + " age of " + abir.age + " I am living " + abir.locaction);