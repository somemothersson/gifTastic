//array to hold basic images
let topics = ["dog", "dawg", "cats"];
//variable to store the search term
let search = "";
//the number of gifs to return on query, can be adjusted to change results dynamically
let limit = 10;


//function to create buttons for the base items in the array
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
//load buttons
rendButtons()

//add a new button for giphy fun and action
            
//function to add user defined searchs to button array
$("#addNewTopic").on("click", function(){
    event.preventDefault();
    //jQuery variable to grab the input value of the form 
    let newTopic = $("#newTopic").val().trim()
    //push to the new topic to the array
    topics.push(newTopic);
    //will reload all existing buttons and add newly created as it is now part of the array
    rendButtons()
});

//function to animate a still image and still an animated image        
$(document).on("click", "img", function() {
    //jQuery to grab the element attributes we need to change the soure and status of the element
    still = $(this).attr("data-still")
    animate = $(this).attr("data-animate")
    status = $(this).attr("data-status")
 

//by default the imaged are loaded still, click will check if the status is still, and if so - the src will be changed to 
//the animated url and the image will animate  
    if (status == "still"){
        //replace src with "data-animate" value
        $(this).attr("src", animate)
         //change "data-status", animate
        $(this).attr("data-status", "animate")
        
        
//when an animated gif is clicked it will revrse the above action and change to still
    } else if (status = "animate"){
         //replace src with "data-still" value
        $(this).attr("src", still)
          //change "data-status", still
        $(this).attr("data-status", "still")

    }

});


//When a topic button is clicked - this function holds the API Get and appending of images to DIV
$(document).on("click", ".topicButton",function(){
    //empty any existing gifs
    $("#gifs").empty()
    //jquery to grab "data-topic" set to search value
   
    search = $(this).attr("data-topic")
   
    //pass search term, and limit into api key that includes rating preference
    let queryURL = "https://api.giphy.com/v1/gifs/search?q=" + search + "&&rating=pg&&limit=" + limit + "&&api_key=Ss4Q4xQlkM4F26E43IeKPi92k0s4W3oW";

    //JSON API GET call
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function(response) {
        //loop to create individual items based on the limit
        for (let i = 0; i < limit+1 ; i++){
       

         //variables to capture pertinent information from JSON you want to capture still and animated URLS +  rating
         
         let animateUrl = response.data[i].images.fixed_height_small.url;
         let stillUrl = response.data[i].images.fixed_height_small_still.url;
         let rating = response.data[i].rating;

         //jqeury varibles to make creating new elements cleaner and easier to update
        let figure = $("<imgcaption>")
         let gif = $("<img>");
         let rater = $("<h3>")
       
           

         //apply neccesary attributes to each element: source, alt, seperate links for still and animated images 
         //+ an attr for animate/still control. The still image will be loaded by default and the animate stored to
         //allow toggleing between still and animated
         gif.attr({"src": stillUrl, "alt": "gif", "data-rating": rating, 
         "data-still": stillUrl, "data-animate": animateUrl, "data-status": "still"});
         

         //append each image/gif to the images div, with Rating
         
        $("#gifs").append(gif, rater)
      
        }
        
    });
  
   

});

