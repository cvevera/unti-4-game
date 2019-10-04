$(document).ready(function() {

    var randomNumber= Math.floor(Math.random() * (120-19) + 19);
    $("#target-number").text("Target: " + randomNumber);
    var total= 0;
    var crystal1= Math.floor(Math.random() * 12 + 1);
    var crystal2= Math.floor(Math.random() * 12 + 1);
    var crystal3= Math.floor(Math.random() * 12 + 1);
    var crystal4= Math.floor(Math.random() * 12 + 1);
    var wins = 0;
    var losses = 0;
    
    function newgame(){
        randomNumber = Math.floor(Math.random() * (120-19) + 19);
        $("#target-number").text("Target: " + randomNumber);
        console.log(randomNumber);
        total = 0;
        crystal1= Math.floor(Math.random() * 12 + 1);
        console.log(crystal1)
        crystal2= Math.floor(Math.random() * 12 + 1);
        console.log(crystal2)
        crystal3= Math.floor(Math.random() * 12 + 1);
        console.log(crystal3)
        crystal4= Math.floor(Math.random() * 12 + 1);
        console.log(crystal4)
        $(".total").text(0);
    }; 
    
    function win(){
    alert("You won!");
      wins++; 
      $('#numberWins').text("Wins: " + wins);
      newgame();
    }
    
    function lose(){
    alert ("You lose!");
      losses++;
      $('#numberLosses').text("Losses: " + losses);
      newgame()
    }
    
    function winLoseCheck() {
        if (total === randomNumber){
              win();
        }
            else if (total > randomNumber) {
              lose();
            } 
    }
    
    $("#crystal1").click(function (){
        total = crystal1 + total; 
        $("#total").html(total);
        console.log (total, randomNumber)
        winLoseCheck()
    
    });
    $("#crystal2").click(function (){
        total = crystal2 + total; 
        $("#total").html(total);
        console.log (total, randomNumber)
        winLoseCheck()
            
    });
    $("#crystal3").click(function (){
        total = crystal3 + total; 
        $("#total").html(total);
        console.log (total, randomNumber)
        winLoseCheck()
    });
    $("#crystal4").click(function (){
        total = crystal4 + total; 
        $("#total").html(total);
        console.log (total, randomNumber)
        winLoseCheck()
    });
    
    });
    