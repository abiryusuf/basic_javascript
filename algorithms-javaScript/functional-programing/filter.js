// const num = [2,4,6,8];
// const newNum = [];
// const array = num.map(x => {
//     newNum.push(x * x)
//     //console.log("for each", array)
// });

// console.log("for each", array)

function predicate(){
    var newReleases = [
        {
            id: 01,
            title: "Die Hard",
            rating: 4.0
        },
        {
            id: 02,
            title: "Bad Boys",
            rating: 5.0
        },
        {
            id: 03,
            title: "The Chamber",
            rating: 4.0
        },
        {
            id: 04,
            title: "Fracture",
            rating: 5.0
        }];
        //   return newReleases.filter(video =>
        //     video.rating === 5.00
        //     //return newReleases;
        // );
        var result = [];

        newReleases.filter(video => {
            return video.rating === 5.0 ? result.push(video) : null;
        });
        return result;
}
console.log(predicate());