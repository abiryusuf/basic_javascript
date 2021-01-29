// function palindrome(str){
//     const res = str.split("").reverse().join("");
//     return str === res;
// }

// var result = palindrome("madam")
// console.log(result)

// //option 2

// function palindrome2(string){
//     let ispPalindrome = false;
//     const strArray = string.split("");
//     for (let i = 0; i < strArray.length; i++) {
//         const start = strArray[i];
//         //console.log(element);

//         const end = strArray[strArray.length -1 - i];
//         if(start !== end){
//             isPalindrome = false;
//             break;
//         }
//         ispPalindrome = true;
//     }
//     return ispPalindrome;
// }

// console.log(palindrome2("madam"));

// function palindrome3(string){
//     let isPalindrome = false;
//     const strArray = string.split("");
//     for (let i = 0; i < strArray.length; i++) {
//         //acess the array from beginning
//         const start = strArray[i];
//         //acess the array from end
//         const end = strArray[strArray.length -1 - i]
//         if(start === end){
//             isPalindrome = true;
//             break;
//         }
//         isPalindrome = false;
        
//     }
//     return isPalindrome;
// }

// console.log(palindrome3("abir"));


var name = "abir";

var res = name.split("");

console.log(res);

function palindrome(str){
    //var isPalindrome = true;
    var result =str.split("").reverse().join("");
    if(result === str){
        return true
        
    }else {
        return false
    }
    
}

console.log(palindrome("madam"))