
var randomNumber= "";
var total= "";
var crystalOne= 0;
var crystalTwo= 0;
var crystalThree= 0;
var crystalFour= 0;



// between 19-120
    function randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min);
      }



function newgame(){
    var randomNumber = randomIntFromInterval(19,120)
    $(".target-number").text("Target: " + randomNumber);
    console.log(randomNumber);
    total = 0;
    $(".total-score-is").text("Your total score is" + total);
}; 


newgame()


$("#crystal1").click(function (){
    alert("clicked")
});