var person1 = {
    name: "Abir",
    place: "Bangladesh"
}

var person2 = {
    name: "Mim",
    place: "NY"
}

var person = {
    fullName: function(age, color){
        return this.name + " " + this.place + "," + age + "," + color;
    }
}
// when too many objects belongs to one method, then we use the "call" method 
var result = person.fullName.call(person1, 30, "red");

console.log(result);

