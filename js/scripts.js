var player1= "";
var player2= "";

//Business logic
class Player{
  constructor (turn){
    this.roll = 0;
    this.roundScore = 0;
    this.totalScore= 0;
    this.turn = turn;
    this.playerName;
    //there are 2 possible outcomes roll= 1 and this round is over
    //or roll !=1 and the player keeps playing
    this.play= function(){
      if(this.roll === 1){
        this.roundScore = 0;
        alert("1!"+this.playerName+ ", your turn is over!")
      }
      else {
          this.roundscore += this.roll;
        }
    }
    //what happens if player decides to skip his turn
    this.hold= function(){
      this.totalScore += this.roundScore;
      this.roundScore = 0;
      alert("Pass!")
    }

  }

}

//User interface
$(document).ready(function(){
  $("button#start").click(function(event){
    player1 = new Player;
    player2 = new Player;

    $(".game").show();
    $(".landing-page").hide();

    var player1Name = $("#playerOne").val();
    $("#playerName1").text(player1Name);

    var player2Name = $("#playerTwo").val();
    $("#playerName2").text(player2Name);

    player1.playerName = player1Name;
    player2.playerName = player2Name;

  })
  $("button#new-game").click(function(event){
    $(".game").hide();
    var emptyNames= function(){
      $("#playerOne").val("");
      $("#playerTwo").val("");
      }
    emptyNames();
    $(".landing-page").show();

  })
});
