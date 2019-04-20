let topics = ["so", "to", "foo"];

function rendButtons (){
    $("#buttons").empty()
    for (let i = 0; i < topics.length; i++){
    let button = $("<button>")
        .addClass("topicButton")
        .text(topics[i])
        .attr("data-topic", topics[i]);
        $("#buttons").append(button);
    }
   
}
rendButtons()

$(document).on("click", ".topicButton", function(){
    console.log(($this).attr("data-topic"));

});

$("#addNewTopic").on("click", function(){
    event.preventDefault();

    let newTopic = $("#newTopic").val().trim()
    console.log(newTopic);
    topics.push(newTopic);
    rendButtons()


});

let state = $(this).attr("data-state")
      let animateGif = $(this).attr("data-animate")
      let stillGif = $(this).attr("data-still")
      let still = "still";
      let animate = "animate";


      if (state == "still"){
        $(this).attr("src", animateGif)
        $(this).attr("data-state", animate)
        console.log(state)
        
var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    console.log(response);
});