'use strict';

  const playerList = [];

  $("#submit").click(function(){
    const playerName = $("#playerName").val();
    const position = $("#position").val();
    const rating = $("#rating").val();
    console.log("**********")
    console.log(playerList);
    console.log(playerName);
    console.log(position);
    console.log(rating);
    setTimeout(function(){
      $.post("http://localhost:3000/roster", {playerName:playerName, position:position, rating: rating}, function(playerName, position, rating){
        window.location = 'http://localhost:3000/roster.html';
      });
    }, 2000);
    localStorage.setItem("Player Name", playerName);
    localStorage.setItem("Position", position);
    localStorage.setItem("Rating", rating);
    console.log("========== ");
    console.log(playerList);
    // console.log(playerName + " " + position);
  });
