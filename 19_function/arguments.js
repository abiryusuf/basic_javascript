function add(num1, num2) {
    //I can use the arguments only inside the function
    console.log(arguments);
    //console.log(arguments[2]);
    var sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const num = arguments[i];
        console.log(num);
        sum = sum + num;
        
    }
    return sum;
}

const result = add(3, 5, 7, 9, 10);
console.log("total", result); 