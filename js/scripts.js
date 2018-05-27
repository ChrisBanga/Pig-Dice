$("button#start").click(function(){
  $(".landing-page").show();
  $(".game").hide();
})
$("button#new-game").click(function(){
  $(".landing-page").hide();
  $(".game").show();
})

//Business logic
class Player(){
  this.roll = 0;
  this.roundScore = 0;
  this.totalScore= 0;
  this.turn = 0;
  this.playerName= 0;
  //there are 2 possible outcomes roll= 1 and this round is over
  //or roll !=1 and the player keeps playing
  this.play= function(){
    if(this.roll ===1){
      this.roundScore = 0;
      alert("1!"+this.playerName+ ", your turn is over!")
      else{
        this.roundscore += this.roll;
      }
    }
  }
  //what happens if player decides to skip his turn
  this.hold= function(){
    this.totalScore += this.roundScore;
    this.roundScore = 0;
    alert("Pass!")
  }

}
