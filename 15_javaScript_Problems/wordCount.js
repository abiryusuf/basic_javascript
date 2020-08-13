var info = "I am  Abir Yusuf. I am  from Bangladesh";
console.log(info.length)
var count = 0;
for(var i = 0; i<info.length; i++){
    var char = info[i];
    if(char == " " && info[i-1] !=" "){
        count++;
    }

}
count++
console.log(count);