//buttons
    //when a button is clicked
    //load 10 gipfy stills on the page
    //load rating for each gipfy with it
        //each gif will display it's rating
//gif button functions
    //when a still gif is clicked the image should begin to animate
        //replace src with "data-animate" value
        //change "data-status", animate
    //when an animated gif is clicked it should change to be still
        //replace src with "data-still" value
        //change "data-status", still
//add a new button- search term
    //input field, a user can enter any term to search for gifs
    //when click submit
        //new button will be added for use
        //append searched term to "data-topic" attr
            
            

let topics = ["dog", "dawg", "cats"];
let search = "";
let limit = 10;

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
//fill gifs

    //jquery to grab "data-topic" set to search value
    
    
    //query gify api with "data-attr" value
            
$(document).on("click", "img", function() {
    still = $(this).attr("data-still")
    animate = $(this).attr("data-animate")
    status = $(this).attr("data-status")
    console.log("clicked")

    if (status == "still"){
        $(this).attr("src", animate)
        $(this).attr("status", "animate")
        console.log(state)
        console.log("clicked")

    } else {
        $(this).attr("src", still)
        $(this).attr("status", "still")

    }




});


$(document).on("click", ".topicButton",function(){
    $("#gifs").empty()
    
    search = $(this).attr("data-topic")
    console.log(search);
    //  jquery to grab "data-topic" set to search value
   
    let queryURL = "https://api.giphy.com/v1/gifs/search?q=" + search + "&&rating=pg&&limit=" + limit + "&&api_key=Ss4Q4xQlkM4F26E43IeKPi92k0s4W3oW";
    //

    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function(response) {
        for (let i = 0; i < 11; i++){
        // console.log(response.data[i]);

         //create variable to capture what information from JSON you want to capture
         
         let animateUrl = response.data[i].images.fixed_height_small.url;
         let stillUrl = response.data[i].images.fixed_height_small_still.url;
         let rating = response.data[i].rating;

       
         let gif = $("<img>");
           

         //create image elements with tattributes of the specified source and alt
         gif.attr({"src": stillUrl, "alt": "gif", "data-rating": rating, 
         "data-still": stillUrl, "data-animate": animateUrl, "data-status": "still"});
         

         //prepend each image to the images div, so each image request
         
        console.log(rating)
        console.log(stillUrl)
        console.log(animateUrl)
        
        $("#gifs").prepend(gif); 
        }
        
    });
  
      //variable to store the jQuery object for repeated use
         //the following attributs need to be GOT from gify and saved as attributes to the element via jquery
            //"src", response.fixed_height_small_still.url
            //"data-rating", response.rating
            //"data-still", response.fixed_height_small_still.url
            //"data-animate", response.fixed_height_small.url
            //"data-status", "still"


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
