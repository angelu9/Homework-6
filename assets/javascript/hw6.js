var topics = [
    "tom brady", "rob gronkowski", "steven gostkowski", "donta hightower", "james white", 
    "julian edelman", "sony michel", "stephon gilmore", "devin mccourty", "kyle van noy",
    "jason mccourty", "marcus cannon", "joe thuney", "matthew slatter", "patrick chung",
];

function displayPlayers() {

var player = $(this).attr("data-type");
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + player + "&apikey=D4JtLD9Yk5wIiYdckJrhDfcUUY83tLi6";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){
    console.log(queryURL);

    var results = response.data;

    for(var i=0; i < results.length; i++){

        var playerDiv = $("<div class ='player'>");

        var rating = results[i].rating;

        var p = $("<p>").text("Rating: " + rating);
    }
    
    
})
};

displayPlayers();