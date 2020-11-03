const name = "abir yusuf";

const acronym = str => {
    var words = str.split(" ");
    var result = "";
    for (let i = 0; i < words.length; i++) {
        const word = words[i];

        result += word[i].toUpperCase()
        
    }
    return result;
}

var str1 = acronym(name);
console.log(str1);