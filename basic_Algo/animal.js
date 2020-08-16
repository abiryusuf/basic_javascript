
function animals(depth){
    var animals =0; // store the value
    //Step 1: Per mile 50 animels
    if(depth<=10){
        animals = 7 * 50;
    }else if(depth <=20){ // Step 2: per mile 100
        var firstPart = 10 * 50;
        var remaing = depth - 10;
        var secondPart = remaing * 100;
        animals = firstPart + secondPart;

    }else if (depth<=30){
        var first = 10 * 50;
        var second = 20 * 100;
        var rem = depth - 20;
        var thirdPart = rem * 300;
        animals = first+ second + thirdPart;
    }
    return animals;
}
var stepOne = animals(5);
var stepTwo = animals(12);
var stepThree = animals(22);
console.log("First 10 miles :", stepOne, ", Second 10 miles :", stepTwo, ", More then 20 miles :",stepThree);


// var depth = 21;
// var animals =0; // store the value
// //Step 1: Per mile 50 animels
// if(depth<=10){
//     animals = 7 * 50;
// }else if(depth <=20){ // Step 2: per mile 100
//     var firstPart = 10 * 50;
//     var remaing = depth - 10;
//     var secondPart = remaing * 100;
//     animals = firstPart + secondPart;

// }else if (depth<=30){
//     var first = 10 * 50;
//     var second = 20 * 100;
//     var rem = depth - 20;
//     var thirdPart = rem * 300;
//     animals = first+ second + thirdPart;
// }
// console.log(animals);