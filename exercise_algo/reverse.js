var name = "abiryusuf";
// var x = name.reverse()
// console.log(x)

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