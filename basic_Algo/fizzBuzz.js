
var arr = [3, 5, 12, 15, 6, 8, 9];
function fizzBuzz(){
    for (let i = 0; i <= arr.length; i++) {
        if(i % 3 === 0 &&  i % 5 === 0){
            console.log("fizzBuzz");
        }
        else if(i % 3 === 0){
            console.log("fizz");
        }
        else if(i % 5 === 0){
            console.log("buzz");
        }
        else {
            console.log(i)
        }

        
    }
}

fizzBuzz(arr)