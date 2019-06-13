// Variable Declaration

buttonColors = ["red", "blue", "green", "yellow"];
var randomChosenColor = [];
var gamePattern = [];
var userClickedPattern = [];
var level = 1;


// Add A New Sequence

function newSequence(){
  $("h1").html("Level " + level);
  level++;
  var rand = Math.floor(Math.random()*4);
  randomChosenColor = buttonColors[rand];
  gamePattern.push(randomChosenColor);

  $("#"+randomChosenColor).fadeIn(50).fadeOut(50).fadeIn(50);

  playSound(randomChosenColor);
}

// Detect User Click

$(".btn").click(function(event){
  var userChosenColor = event.target.id;
  userClickedPattern.push(userChosenColor);
  console.log(userClickedPattern);
  playSound(userChosenColor);
  animatePress(userChosenColor);
  checkAnswer(level-1);
});

// Play Sound

function playSound(name){
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

// Animate User Click

function animatePress(currentColor){
  $("#" + currentColor).addClass("pressed");
  setTimeout(function(){
    $("#"+currentColor).removeClass("pressed");
  }, 100);
}

// Detect Game Start

$(document).one("keypress", function(){
  newSequence();
})

// Check the User Answer

function checkAnswer(currentLevel){
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]){
    console.log("success");
    nextSequence();
    userClickedPattern = [];
  } else {
    console.log("fail");
  }
}
