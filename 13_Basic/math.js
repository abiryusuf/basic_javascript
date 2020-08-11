var num = 3.51;
var absoluteNumber = Math.abs(num);

console.log("absolite number " + absoluteNumber);

// var math=Math.PI
// console.log(math)

// Round
// Math.round(x) returns the value of x rounded to its nearest integer:
var x = Math.round(num)
console.log("round " + x)

//celi: Math.ceil(x) returns the value of x rounded UP to its nearest integer.
var number = 4.56;
var numCeil = Math.ceil(number);
console.log("ceil " + numCeil);

// floor
var mathFloor = Math.floor(number)
console.log("floor " + mathFloor);

//random: Math.random() returns a random number between 0 (inclusive), and 1 (exclusive)
var randomMath = Math.random()  * 10;
var result = Math.round(randomMath);
console.log("random " + result);

/* Note: celi is going to up and floor is going to down nearest interger
and round dependes on 0.05 
example : Math.round(4.7);    // returns 5
          Math.round(4.4);    // returns 4 
          
          sources: w3 school*/