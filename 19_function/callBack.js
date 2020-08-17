function callBack(name, age, task) {
    console.log("Hello", name);
    console.log("My age: ", age);
   // washHand();
  //takeShower();
    task();
}
function washHand(){
    console.log("Wash your Hand");
}
function takeShower(){
    console.log("Take shower");
}
callBack("My name is abir", 20, washHand);
callBack("My name is yusuf", 23, takeShower);