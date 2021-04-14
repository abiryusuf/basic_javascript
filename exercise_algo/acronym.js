var name = "abir yusuf"

//split: need to convert string to array list then i can loop for each word or letter by index
var res = name.split('');
console.log(res)

var res1 = name.split(" ")
console.log(res1)

function acronym(str){
    var word = str.split(" ")
    var result = "";
    for (let i = 0; i < word.length; i++) {
        const element = word[i];
        result += element[0].toUpperCase()
    }
    return result
}
console.log(acronym(name))

