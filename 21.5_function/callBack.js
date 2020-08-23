function welComeGuest(name, greetHandler){
    greetHandler(name);
}
function greetMorning(name){
    console.log("Good Morning", name)
}
var myName = "Abir";
welComeGuest(myName, greetMorning);