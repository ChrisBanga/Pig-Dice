var player1= "";
var player2= "";
var rollTheDice= function (){
  return Math.floor(Math.random() * 6) + 1;
}

//Business logic
class Player{
  constructor (turn){
    this.roll = 0;
    this.roundScore = 0;
    this.totalScore= 0;
    //this.turn = turn;
    this.playerName;
    //there are 2 possible outcomes roll= 1 and this round is over
    //or roll !=1 and the player keeps playing
    this.play= function(){
      if(this.roll === 1){
        this.roundScore = 0;
        alert("1!"+this.playerName+ ", your turn is over!")
      }
      else {
          this.roundScore += this.roll;
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
    //erase all scores once New game is started
    $("#roll-P1").empty();
    $("#round-score-P1").empty();
    $("total-score-P1").empty();
    $("#roll-P2").empty();
    $("#round-score-P2").empty();
    $("total-score-P2").empty();

    $(".landing-page").show();


  })
  $("button#p1-roll").click(function(event){
    player1.roll = rollTheDice();
    $("#roll-P1").text(player1.roll);
    player1.play();
    $("#round-score-P1").text(player1.roundScore);

  })
  $("button#p2-roll").click(function(event){
    player2.roll = rollTheDice();
    $("#roll-P2").text(player2.roll);
    player2.play();
    $("#round-score-P2").text(player2.roundScore);

  })
  $("button#p1-hold").click(function(event){
    player1.hold();
    $("#total-score-P1").text(player1.totalScore);
    //When plyer "passes" erase all scores expect total
    $("#roll-P1").empty();
    $("#round-score-P1").empty();

  })
  $("button#p2-hold").click(function(event){
    player2.hold();
    $("#total-score-P2").text(player2.totalScore);
    $("#roll-P2").empty();
    $("#round-score-P2").empty();
  })
});
