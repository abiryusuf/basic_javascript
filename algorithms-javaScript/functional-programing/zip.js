function zip(){
    var videos = [{
        "id": 70111470,
        "title": "Die Hard",
        "rating": 4.0,
      }, {
        "id": 654356453,
        "title": "Bad Boys",
        "rating": 5.0,
      }, {
        "id": 65432445,
        "title": "The Chamber",
        "rating": 4.0,
      }, {
        "id": 675465,
        "title": "Fracture",
        "rating": 5.0
    }],
    bookmarks = [{
        id: 470,
        time: 23432
      }, {
        id: 453,
        time: 234324
      }, {
        id: 445,
        time: 987834
      }],

    videoBookMark = [];

    for (let i = 0; i < (videos.length, bookmarks.length); i++) {
        videoBookMark.push({
            videoId: videos[i].id,
            videoTitle:videos[i].title,
            bookmarks: bookmarks[i].id
        });
        
        
    }
    return videoBookMark;
   
  
}
console.log(zip());