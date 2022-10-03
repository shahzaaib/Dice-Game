// Create variables for the game state
let player1Score = 0
let player2Score = 0
let player1Turn = true

// Create variables to store references to the necessary DOM nodes
const player1Scoreboard = document.getElementById("player1Scoreboard");
const player2Scoreboard = document.getElementById("player2Scoreboard");
const player1Dice = document.getElementById("player1Dice");
const player2Dice = document.getElementById("player2Dice");
const message = document.getElementById("message")
const rollBtn = document.getElementById("rollBtn");
const resetBtn = document.getElementById("resetBtn");

rollBtn.addEventListener("click", function() {
    const randomNmbr = Math.floor(Math.random() * 6) + 1
    
     // 1. Find out which players turn it is
  if (player1Turn){
    player1Score = player1Score + randomNmbr;
    player1Scoreboard.textContent = player1Score;
    player1Dice.textContent = randomNmbr;
    player1Dice.classList.remove("active");
    player2Dice.classList.add("active");
    message.textContent = "Player 2 Turn";
    //player1Scoreboard.textContent = randomNmbr;
 } else
 {
     player2Score += randomNmbr;
     player2Scoreboard.textContent = player2Score;
  player2Dice.textContent = randomNmbr;
  player2Dice.classList.remove("active");
  player1Dice.classList.add("active");
  message.textContent = "Player 1 Turn";
  //player2Scoreboard.textContent = randomNmbr;
 }
  // 1. Check if a player has won. If so, change the message to "Player X has won!"
  function rollReset(){
    rollBtn.style.display = "none"
   resetBtn.style.display = "block"
}

if (player1Score >= 20) {
   message.textContent = "Player 1 has won! 🥳"
   rollReset();
} else if (player2Score >= 20) {
   message.textContent = "Player 2 has won! 🎉"
   rollReset();
}
    player1Turn = !player1Turn;
 // 2. log out the value e.g. "Player 1 rolled 5"
 
 // 3. Switch the turn back to the other player
 //  if (player1Turn) {
    //      player1Turn = false
    //  } else {
    //      player1Turn = true
    // }
   
})
resetBtn.addEventListener("click", function(){
      reset();
})

function reset(){
player1Turn = true;
player1Scoreboard.textContent = 0;
player2Scoreboard.textContent = 0;
player1Dice.textContent = "-";
player2Dice.textContent = "-";
message.textContent = "Player 1 Turn";
resetBtn.style.display = "none"
rollBtn.style.display = "block";
player1Score = 0;
player2Score = 0;
player2Dice.classList.remove("active");
player1Dice.classList.add("active");  

}


