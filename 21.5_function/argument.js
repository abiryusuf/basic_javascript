// If i don't use variable keyWord such as var, let or const, it will be global variable by default. 
//Argument is like a array. 
function getInfo(fName, lName){
  //let fullName = fName + " " + lName;
  let fullName = "";
  for (let i = 0; i < arguments.length; i++) {
      const element = arguments[i];
      fullName = fullName + " " + element;
      
  }
  return fullName;
}

var printName = getInfo("abir", "yusuf", "mim", "arafat");
console.log(printName);


function add(num1, num2){
    let sum =0;
    for (let i = 0; i < arguments.length; i++) {
        const number = arguments[i];
        sum += number;
        
    }
    return sum;
}
var result = add(3, 5, 6, 8, 9);
console.log(result);


