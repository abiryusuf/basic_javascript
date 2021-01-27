// function reverseString(str){
//     var reverse = "";
//     for(var i = 0; i<str.length; i++){
//         var char = str[i];
//         reverse = char + reverse;
//     }
//     return reverse;
// }
// var info = "I am abir";
// var result = reverseString(info);
// console.log(result);

function reverseString(str){
    var reverse = str.split("");
    var res = "";
    for (let i = 0; i < reverse.length; i++) {
        const element = reverse[i];
        var res1 = element + res;

        //console.log(element);
        
    }
    return res1;
}
console.log(reverseString("abir"));
