function palindrome(str){
    const res = str.split("").reverse().join("");
    return str === res;
}

var result = palindrome("madam")
console.log(result)