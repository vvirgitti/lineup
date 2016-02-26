'use strict';

  const playerList = [];

  $("#submit").click(function(){
    const playerName = $("#playerName").val();
    const position = $("#position").val();
    console.log("**********")
    console.log(playerList);
    console.log(playerName);
    setTimeout(function(){
      $.post("http://localhost:3000/roster", {playerName:playerName, position:position}, function(playerName, position){
        window.location = 'http://localhost:3000/roster.html';
      });
    }, 2000);
    localStorage.setItem("Player Name", playerName);
    // localStorage.setItem("Position", position);
    console.log("========== ");
    console.log(playerList);
    // console.log(playerName + " " + position);
  });
