var name = "abiryusuf";
// var x = name.reverse()
// console.log(x)

function reverseWords(str){
    var words = str.split("")
    var result = '';
    for (let i = 0; i < words.length; i++) {
        const element = words[i];
        var res1 = element + result
        
    }
    return res1
    
}
console.log(reverseWords(name))