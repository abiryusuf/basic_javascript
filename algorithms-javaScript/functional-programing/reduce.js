function reduce(){
    var boxarts = [
        {
            width:400,
            height:200
        },
        {
            width: 230,
            height: 200
        },
        {
            width: 300,
            height: 600
        }],

        currnetSize,
        maxSize = -1,
        largestBoxart;

        boxarts.map(boxart => {
            currnetSize = boxart.width * boxart.height;
            if(currnetSize > maxSize){
                largestBoxart = boxart;
                maxSize = currnetSize;
            }
        });
        return largestBoxart;
}
console.log(reduce());