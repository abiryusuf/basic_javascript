
var maxNumber = function(num){
    var max = 0;
  for (let i = 0; i < num.length; i++) {
      const currentNum= num[i];
      //console.log(currentNum)
      if (currentNum > max) {
          max = currentNum;
      }
      
  }
  return max;
}
var number = [4,5,7,8,3,10,70]
console.log(maxNumber(number))