Array.prototype.contactAll = function(){
    var results = [];
    this.forEach(subArray => {
        if(Array.isArray(subArray))
        subArray.forEach((item) => results.push(item))
        else
        throw new Error ("Its not two dimensional array")
    });
    return results;
}

function queryNestArray(){
    var movieLists = [{
        name: "New Releases",
        videos: [{
          "id": 70111470,
          "title": "Die Hard",
          "rating": 4.0
        }, {
          "id": 654356453,
          "title": "Bad Boys",
          "rating": 5.0
        }]
      }, {
        name: "Dramas",
        videos: [{
          "id": 65432445,
          "title": "The Chamber",
          "rating": 4.0
        }, {
          "id": 675465,
          "title": "Fracture",
          "rating": 5.0
        }]
      }],
      allVideoIdsInMovieLists = [];
      return movieLists.map(movieList => 
        movieList.videos.map(video =>
            video.id
            )
            )
            .contactAll();
}
console.log(queryNestArray());