
const year = 3947;
let remainder = year/4

if(remainder === 0){
    console.log("This is leap year");
}
else {
    console.log("This is not leap year")
}

// 2nd way
function check(year){

const remainder = year/4

if(remainder === 0){
   return "This is leap year";
}
else {
    return "This is not leap year";
}

}

var x = check(2300);
console.log(x)