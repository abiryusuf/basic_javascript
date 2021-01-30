function charMap(string){
    let charMap = {};
    for (const iterator of string) {
        if(charMap[iterator]){
            charMap[iterator]++
        }
        else{
            charMap[iterator] =1
        }
    }
    return charMap;
}

console.log(charMap("hello"))