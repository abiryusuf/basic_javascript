const acronymBuilder = function(str){
 
    var words = str.split(" ");
    var result = "";

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        result += word[0].toUpperCase();
        
    }
    return result;
}

var res = acronymBuilder("abir yusuf"); 
console.log(res);