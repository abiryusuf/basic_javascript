//split: using the split method to convert the string in array

var string = "abir";

var arr = string.split("").reverse().join("");
console.log(arr);

//reverse: reverse the array 
var num = [1,2,3,4,5];
var rev = num.reverse();
console.log(rev);

var join = num.join("");
console.log(join);

function reverseString(str){
    const result = str.split("").reverse().join("");
    return result;
}

var res = reverseString("abir");

console.log("second way to reverse the string " + res);

//second way
function reverseString2(str){
    let string = "";
    for (let i = 0; i < str.length; i++) {
        const element = str[i];
        string = element + string;
        
    }
    return string;
}

console.log(reverseString2("yusuf"));


function reverseInt(num){
   const rev = num.toString().split("").reverse().join("");
   return parseInt(rev) * Math.sign(num);
}

console.log(reverseInt(-10));