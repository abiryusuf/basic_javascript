
//Array is collection of list or element or hold more than one value 

var zooAnimals = ["Zebra", "Rhino", "Giraffe", "Owl", "Lion", "Tiger"];

// Prints 4 to the console because there are 4 items in our zooAnimals array.
console.log(zooAnimals.length);

//Index always start from 0

 // Prints Rhino to the console. Remember, the first item in an array has an index position of 0!
 console.log(zooAnimals[1]);

 //By index
 // If array list can not find the value/element from the list it will show -1
 console.log(zooAnimals.indexOf("Rhin"));

 var Owl = zooAnimals[3];

console.log(Owl)

zooAnimals[5] = "cats";
console.log(zooAnimals);

zooAnimals.push("Dogs");
console.log(zooAnimals);

zooAnimals[zooAnimals.length] = "xyz";
console.log(zooAnimals);

console.log(zooAnimals.length);
zooAnimals.pop();
console.log(zooAnimals);
// var text = "<ul>";
// for(var i =0; i<zooAnimals.length; i++){
//      text += "<li>" + zooAnimals + "</li>";
// }
// text += "</ul>";
// console.log(text)
var fruits = ["Banana", "Orange", "Apple", "Mango"];
typeof fruits;

// slice
var color = ["red", "blue", "black", "white", "yellow"];
console.log(color.slice(2,4))





