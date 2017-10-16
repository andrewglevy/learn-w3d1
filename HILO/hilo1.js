$(document).ready(function(){
  var num = parseInt(Math.random() * 100);
  console.log(num);
  var rightValue = false;
  var userTries = 0;
  // $("p").text("");
  $("p").append(" Guesses = " + userTries);
  $("button").on(
    "click",
    function(){
    // countStorage();

      var value = $("input").val();
      console.log(value);
      if (value > num) {
        $("p").text("Too high! Guess again!");
        $("p").append(" Guesses = " + userTries);
        userTries += 1
      } else if (value < num) {
        $("p").text("Too low! Guess again!");
        userTries += 1
        $("p").append(" Guesses = " + userTries);
      } else if (value == num) {
        num = parseInt(Math.random() * 100);
        rightValue = true;
        userTries = 0
        console.log(num);
        $("p").removeClass("warning");
        $("p").text("You got it right! But I'm thinking of a new number.")
      } else {
        $("p").text("Invalid input.");
        $("input").val("");
        $("p").append(" Guesses = " + userTries);
      }
      if (userTries >= 5 && value != num) {
        $("p").addClass("warning");
      }
      if (userTries == 7 && value != num) {

        $("p").text("Too many guesses. You lose! I'm thinking of a new number now.")
        $("p").removeClass("warning");
        num = parseInt(Math.random() * 100);
        console.log(num);
        userTries = 0;
      }
    })
})
