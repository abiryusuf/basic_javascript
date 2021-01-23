var person1 = {
    name: "Abir",
    place: "Bangladesh"
}

var person2 = {
    name: "Mim",
    place: "NY"
}

var person = {
    fullName: function(){
        return this.name + " " + this.place;
    }
}

var result = person.fullName.call(person1);

console.log(result);

