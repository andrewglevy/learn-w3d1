$(document).ready(function(){
  $("button").on(
    "click",
    function() {
      var answer = Math.floor(Math.random() * 4);
      var question = $("input").val();

      if (answer == 0){
      $("p").text("Yes, but you will be eaten by a shark.");
      } else if (answer == 1){
      $("p").text("No, and also you will be eaten by a shark.");
      } else if (answer == 2){
      $("p").text("Answer unclear, but it doesn't matter because you will be eaten by a shark.");
      } else if (answer == 3){
      $("p").text("Ask again later, and in the meantime try to stay away from any large bodies of water.");
      }
      $("input").val("");
    });
});
