//buttons
    //when a button is clicked
    //load 10 gipfy stills on the page
    //load rating for each gipfy with it
        //each gif will display it's rating
//gif button functions
    //when a still gif is clicked the image should begin to animate
        //replace src with "data animate" value
        //change
    //when an animated gif is clicked it should change to be still
//add a new button- search term
    //input field, a user can enter any term to search for gifs
    //when click submit
        //new button will be added for use
            //the following attributs need to be GOT from gify and saved as attributes to the element via jquery
            //"src", response.fixed_height_small_still.url
            //"data-rating", response.rating
            //"data-still", response.fixed_height_small_still.url
            //"data-animate", response.fixed_height_small.url
            //"data-status", "still"
            //
            still, animate, stauts(static, animate))
                //still image link

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

// let state = $(this).attr("data-state")
//       let animateGif = $(this).attr("data-animate")
//       let stillGif = $(this).attr("data-still")
//       let still = "still";
//       let animate = "animate";


//       if (state == "still"){
//         $(this).attr("src", animateGif)
//         $(this).attr("data-state", animate)
//         console.log(state)

var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + search + "&&rating=pg&&limit=10&&api_key=Ss4Q4xQlkM4F26E43IeKPi92k0s4W3oW";
var search = 420;
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    console.log(response);
    response.rating
    response.fixed_height_small_still.url
    response.fixed_height_small.url
    
});