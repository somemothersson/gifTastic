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
