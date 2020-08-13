function reverseString(str){
    var reverse = "";
    for(var i = 0; i<str.length; i++){
        var char = str[i];
        reverse = char + reverse;
    }
    return reverse;
}
var info = "I am abir";
var result = reverseString(info);
console.log(result);

