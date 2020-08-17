

// for (let i = 0; i < number.length; i++) {
//     var element = number[i];
//    // console.log(element *2);
//    if(element % 2 === 0){
//        console.log(element, ": is even number");
//    }else {
//        console.log(element *2, ": is odd number")
//    }
    
// }

function evenOdd(num){
    var result;
    for (var i = 0; i < num.length; i++) {
        var element = num[i];
       // console.log(element *2);
       if(element % 2 === 0){
           //console.log (element, ": is even number");
           result = element, ": is even number";
       }else {
            //console.log(element, ": is odd number");
            result = element, ": is odd number";
       }
        
    }
    return result
    
   

}
var number = [7];
var result = evenOdd(number);
console.log(result);