

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

    for (let i = 0; i < num.length; i++) {
        var element = num[i];
       // console.log(element *2);
       if(element % 2 === 0){
           console.log (element, ": is even number");
       }else {
            console.log(element, ": is odd number");
       }
        
    }
    
   

}
var number = [3,6,78,12,10,4,7,9];
evenOdd(number);
