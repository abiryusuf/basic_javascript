
var number = [3,4,2,3,4,6,7,9,9,10,11,10];

var numberTwo = [];

for (let i = 0; i < number.length; i++) {
    const current = number[i];
    var index = numberTwo.indexOf(current);
    if (index == -1) {
        numberTwo.push(current);
        //console.log(numberTwo)
    }
    console.log(numberTwo)
}

