var name = 'abir yusuf';
console.log(name[-1])
console.log(name.split(""))

function countWord(str){
    //var str1 = str.split("")
    var count = 0;
    for (let i = 0; i < str.length; i++) {
        const element = str[i];
       if (element ==" " && str[i-1] != " ") {
           count++
       }
        
    }
    
}
count++

console.log(countWord(name))