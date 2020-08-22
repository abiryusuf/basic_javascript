var name = 'abir';

function info(){
    var location = "NY";
    console.log(name, location);
}

info();

var area = (function(){
    var width = 4;
    var height = 3;
    return width * height;
}());

//let  result = area(4, 5);
console.log(area);
// (iife, iffy) Immediately invoked function expressions : the functions are not have name, they call function immediately 
(function(){
    var name = "Yusuf";
    console.log("Last Name :", name)
})
();
//add();