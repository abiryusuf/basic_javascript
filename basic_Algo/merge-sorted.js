// Write code to merge two sorted arrays into a new sorted array
//https://www.youtube.com/watch?v=xF3TU-QlhJQ
var arrNum1 = [1,3,5,7,9];
var arrNum2 = [2,4,8,10,11,12,16];

var mergeSorted = function(arr1, arr2){

  var result = []; // New array

  var index1 = 0; //store the arr1
  var index2 = 0; // store the arry2
  var size1 = arr1.length;
  var size2 = arr2.length;

  while(index1 < size1 && index2 < size2){
    var num1 = arr1[index1];
    var num2 = arr2[index2];

    if (num1 < num2) {
      result.push(num1);
      index1++;
      
    }else {
      result.push(num2);
      index2++
    }
  }

  while(index1 < size1){
    var num1 = arr1[index1];
    result.push(num1);
    index1++;
  }
  while(index2<size2){
    var num2 = arr2[index2];
    result.push(num2);
    index2++;
  }
  return result;
}

var x = mergeSorted(arrNum1, arrNum2);
console.log(x);

