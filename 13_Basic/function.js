function add (a,b){
    var result = a + (a -b);
    return result;
}
/* console.log is a function that logs the arguments you pass to the web console. 
return is a statement which specifies the value returned from a function */
var sum = add(10, 5);
console.log(sum);

function adder(x, y, z ){
 // console.log is a function that logs the arguments you pass to the web console.
    console.log(x + y + z);

}
adder(4,4, 4);

function addReturn(x, y, z){
// return is a statement which specifies the value returned from a function  
   return x + y +z;
}
var sum1 = addReturn(5, 5, 5);
console.log(sum1);


function multiplier(a, b, c){
    var result = a * b * c;
    return result;
}
var mul = multiplier(2,3,2);
console.log(mul);

// Check the string 
function isString (x, y, z){
    if(typeof x === "string" && typeof y === "string" && typeof z === 
    "string"){
        return "Yep They are the string";
    }
    else {
        return "No, they are not ";
    }
}
var str = isString("abir" , "yusuf", "mim");
console.log(str);


// check the value

function vowelCheck (x){
    var first = x.toLowerCase().charAt(0);

    if(first === "a" || first === "e" || first === "i" || first === "o" || first === "u"){
        return "The first letter is vowel";
    }
    else {
        return "No, The first letter is not vowel";
    }

}
var vow = vowelCheck("abir");
console.log(vow);

