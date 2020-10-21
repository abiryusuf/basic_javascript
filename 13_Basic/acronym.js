// Write code to create a function that accepts a string and returns an acronym for the given string

const acronymBuilder = function(str){
    var words = str.split(" ");
    var result = "";

    for (let i = 0; i < words.length; i++) {
        const element = words[i];

        result += element[0].toUpperCase();
        
    }
    return result;
}

var info = "abir yusuf"
var res = acronymBuilder(info);
console.log(res);