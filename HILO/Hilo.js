$(document).ready(function(){
  var num = parseInt(Math.random() * 100);
  console.log(num);
  var rightValue = false;
  function count() {
    var counter = 0;
    return function () {
      if (counter >= 14 || rightValue == true) {
        counter = 0;
        rightValue = false;
      } else {
        return counter += 1;
      }
    }
  }
  var countStorage = count()
  $("button").on(
    "click",
    function(){
    // countStorage();

      var value = $("input").val();
      console.log(value);
      if (value > num) {
        $("p").text("Too high! Guess again!");
      } else if (value < num) {
        $("p").text("Too low! Guess again!");
      } else if (value == num) {
        num = parseInt(Math.random() * 100);
        rightValue = true;
        console.log(num);
        $("p").removeClass("warning");
        $("p").text("You got it right! But I'm thinking of a new number.")
      } else {
        $("p").text("Invalid input.");
        $("input").value("");
      }
      if (countStorage() >= 10 && value != num) {
        $("p").addClass("warning");
      }
      if (countStorage() == 14 && value != num) {

        $("p").text("Too many guesses. You lose! I'm thinking of a new number now.")
        $("p").removeClass("warning");
        num = parseInt(Math.random() * 100);
        console.log(num);
      }
    })
})
