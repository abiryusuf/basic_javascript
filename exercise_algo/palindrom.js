var x = 'mom'

function plaindrom(str){
    var word = str.split("")
    let isPlandrom;
    for (let i = 0; i < word.length; i++) {
        const start = word[i];
        // access from end 
        const end = word[word.length -1 - i]
        if (start === end) {
            isPlandrom = true;
        
        } else {
            isPlandrom = false
        }
    
        
    }
    return isPlandrom
}
console.log(plaindrom(x))

