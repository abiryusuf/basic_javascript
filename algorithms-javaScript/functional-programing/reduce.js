function reduce(){
    var boxarts = [
        {
            width:200,
            height:200
        },
        {
            width: 230,
            height: 200
        },
        {
            width: 300,
            height: 200
        }],

        currnetSize,
        maxSize =-1,
        largestBoxart;

        boxarts.forEach(boxart => {
            currnetSize = boxart.width * boxart.height;
            if(currnetSize >maxSize){
                largestBoxart = boxart;
                maxSize = currnetSize;
            }
        });
        return largestBoxart;
}
console.log(reduce());