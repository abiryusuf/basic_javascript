//Strings are used for storing and manipulating text

//length

var name = 'Abir';
//console.log(name.length);

var info = "I am abir Yusuf";
console.log(info.indexOf("abir"));

var str = "apple, Banana, KiWi";
console.log(str.slice(7, 13))

var text1 = "Abir";
var text2 = "Yusuf";

var res = text1.concat(" ", text2);
var res1 = text2 + " " + text1;
console.log(res1);