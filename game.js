var userClickedPattern =[];
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
$(".btn").click(function(event){
    var userChosenColour = event.target.id;
    userClickedPattern.push(userChosenColour);
    // console.log(userClickedPattern);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    // var audio2 = new Audio('sounds/' + userChosenColour + '.mp3');
    // audio2.play();
});
function nextSequence(){
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    // var audio = new Audio('sounds/' + randomChosenColour + '.mp3');
    // audio.play();
    
}
function playSound(name){
    var audio = new Audio('sounds/' + name + '.mp3');
    audio.play();
}
// function animatePress(currentColour){
//     $("#"+currentColour).click(function(event){
//         event.addClass("pressed");
//     });
// }
function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    setTimeout(function() {
        $("#"+currentColour).removeClass("pressed");
    }, 100);
}