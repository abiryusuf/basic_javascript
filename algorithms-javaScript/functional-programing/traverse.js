let names = ["Facebook", "Apple", "Linkedin", "Google"];

const traverse = function(name){
    
   for(var i =0; i<name.length; i++){
       // result = name[i];
       //return result;
       console.log(name[i])
   }
   
  // return result;
}
 traverse(names);

names.forEach(name => {
    console.log("for each", name)
});
names.map(name => {
    console.log("map", name)
});

