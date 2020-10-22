function movies (){
    var newReleases = [
        {
        id: 6738838,
        title: "Die Hard",
        rating: [4.0]
    },

    {
        id: 4848482,
        title: "Bad boys",
        rating: [3.5]
    },
    {
        id: 65432445,
        title: "The Chamber",
        rating: [4.0]
      }, {
        id: 675465,
        title: "Fracture",
        rating: [5.0]
      }
],
newTitlePairs = [];

newReleases.forEach(video => {
    newTitlePairs.push({
        id: video.id,
        title: video.title,
        rating: video.rating
    });
});
return newTitlePairs;
}

console.log(movies())