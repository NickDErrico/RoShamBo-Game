//on click function
let userChoice
let winbox //= document.querySelector("scoreWins.".innerhtml)
let losebox
//let winLossRatio = winbox / (winbox + winbox);

//on click function
document.getElementById("rock").addEventListener("click", function() {
  userChoice = "Rock";
  computerChoice();
});

document.getElementById("paper").addEventListener("click", function() {
  userChoice = "Paper";
  computerChoice();
});

document.getElementById("scissors").addEventListener("click", function() {
  userChoice = "Scissors";
  computerChoice();
});

//computer choice RNG function & if/else for RPS
let computerChoice = () => {
  var randomNum =  Math.floor(Math.random() * 3) + 1;
  // 1 will = rock, 2 will = paper, 3 will equal scissors
  if (randomNum === 1 && userChoice === "Rock"){
    alert("Computer chose Rock, it's a Tie!");
  }else if (randomNum === 2 && userChoice === "Rock") {
      alert("Computer chose Paper, you lose");
      document.querySelector(".scoreLosses".innerhtml = losebox++);
  }else if(randomNum === 3 && userChoice === "Rock") {
      alert("Computer chose Scissors, You WIN!");
       document.querySelector(".scoreWins".innerhtml = winbox++);
  }
 if (randomNum === 1 && userChoice === "Paper"){
   alert("Computer chose Rock, you WIN!");
   document.querySelector(".scoreWins".innerhtml = winbox++);
 }else if (randomNum === 2 && userChoice === "Paper") {
     alert("Computer chose Paper, it's a Tie");
 }else if(randomNum === 3 && userChoice === "Rock") {
     alert("Computer chose scissors, you lose")
     document.querySelector(".scoreLosses".innerhtml = losebox++);
  }
if (randomNum === 1 && userChoice === "Scissors"){
  alert("Computer chose rock, you lose");
  document.querySelector(".scoreLosses".innerhtml = losebox++);
}else if (randomNum === 2 && userChoice === "Scissors") {
    alert("Computer chose paper, you WIN!");
    document.querySelector(".scoreWins".innerhtml = winbox++);
}else (randomNum === 3 && userChoice === "Rock")
    alert("Computer chose Scissors, it's a Tie");
 };


//add lizard and spock
//add to counter
//console.log(winLossRatio)//in appropriate spot
//recalculate win/loss ratio(percentage)
