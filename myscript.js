var humanScore = 0;
var computerScore = 0;

function getComputerChoice() {
      const randomNum = Math.floor(Math.random()*3);

    if (randomNum === 0) {
        return "rock"
    } else if (randomNum === 1) {
        return "scissors"
       }   else {
        return "paper" ;
    }
}
function getHumanChoice(){
    let choice = prompt("Choose Rock, Paper or Scissors:").toLowerCase();
    if (choice === "rock" || choice === "paper" || choice ===  "scissors" ) {return choice}
    else { alert ("INVALID CHOICE") 
        return getHumanChoice();
    }
};
function playRound(humanSelection, computerSelection)  {

    if ( humanSelection === computerSelection )  { 
        return "tie"; }
 else if (
    (humanSelection === "rock" && computerSelection === "scissors") || 
    (humanSelection === "paper" && computerSelection === "rock") || 
    (humanSelection === "scissors" && computerSelection === "paper")) {
        return "win"; }
    else  {
        return "lose"; }
}

 function game() {
    humanScore = 0;
computerScore = 0;
   for (let i = 1; i <= 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        const result = playRound( humanSelection, computerSelection );

        console.log(`Round ${i}:`);
        console.log(`You chose: ${humanSelection}`);
        console.log(`computer chose: ${computerSelection}`);
        if (result === "win") {
            humanScore++;
            console.log("You win this round!");}
        else if (result === "lose") {
                computerScore++;
                console.log("You lose this round!");}
        else {console.log("It's a tie!")};
            console.log( `Score: Player ${humanScore} - Computer ${computerScore}`) ;
      console.log( "--------------------" );
    }
   if(humanScore > computerScore) {
    console.log("You won the game!")
   } else if( humanScore < computerScore ) {
    console.log("You lose this game!")
   } else {
    console.log("Itś a draw!")
   }
}