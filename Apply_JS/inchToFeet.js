function inchToFeet(inch){
    var feet = (inch/12);
    var y = Math.round(feet)
    return y; 
}

var x = inchToFeet(200);
console.log(x)