$(document).ready(function () {

  var topics = [
    "tom brady", "rob gronkowski", "stephen gostkowski", "donta hightower", "james white",
    "julian edelman", "sony michel", "stephon gilmore", "devin mccourty", "kyle van noy",
    "jason mccourty", "marcus cannon", "joe thuney", "matthew slatter", "patrick chung",
  ];

  function populateButtons(arrayToUse, classToAdd, areaToAddTo) {
    $(areaToAddTo).empty();

    for (var i = 0; i < arrayToUse.length; i++) {
      var a = $("<button>");
      a.addClass(classToAdd);
      a.attr("data-type", arrayToUse[i]);
      a.text(arrayToUse[i]);
      $(areaToAddTo).append(a);
    }

  }

  $(document).on("click", ".player-button", function () {
    $("#players").empty();
    $(".player-button").removeClass("active");
    $(this).addClass("active");

    var type = $(this).attr("data-type");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + type + "&api_key=D4JtLD9Yk5wIiYdckJrhDfcUUY83tLi6&limit=10";

    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function (response) {
        console.log(queryURL);
        var results = response.data;

        for (var i = 0; i < results.length; i++) {
          var playerDiv = $("<div class=\"player-item\">");

          var rating = results[i].rating;

          var p = $("<p>").text("Rating: " + rating);

          var animated = results[i].images.fixed_height.url;
          var still = results[i].images.fixed_height_still.url;

          var playerImage = $("<img>");
          playerImage.attr("src", still);
          playerImage.attr("data-still", still);
          playerImage.attr("data-animate", animated);
          playerImage.attr("data-state", "still");
          playerImage.addClass("player-image");

          playerDiv.append(p);
          playerDiv.append(playerImage);

          $("#players").append(playerDiv);
        }
      });
  });

  $(document).on("click", ".player-image", function () {

    var state = $(this).attr("data-state");

    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    }
    else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
  });

  $("#add-player").on("click", function (event) {
    event.preventDefault();
    var newPlayer = $("input").eq(0).val();

    if (newPlayer.length > 2) {
      topics.push(newPlayer);
    }

    populateButtons(topics, "player-button", "#player-buttons");

  });

  populateButtons(topics, "player-button", "#player-buttons");
});




