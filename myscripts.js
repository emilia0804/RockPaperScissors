let round = 0;
let computerChoice,humanChoice;
let humanScore = 0;
let computerScore = 0;

let buttons = document.querySelectorAll("#buttons");
buttons.forEach((button) => {
    button.addEventListener("click",playGame);
});

function getComputerChoice(){
    let random= Math.floor(Math.random()*3);
    
    if(random === 0){
        computerChoice = "rock";
    }
    else if(random === 1){
        computerChoice = "paper";
    }
    else if(random === 2){
        computerChoice = "scissors";
    }
    return computerChoice;
}

function playRound(humanChoice,computerChoice){
    if(humanChoice === "rock" && computerChoice === "scissors" ||
       humanChoice === "paper" && computerChoice === "rock" ||
       humanChoice === "scissors" && computerChoice === "paper"
    ){
        return ("win");
    }
    else if(computerChoice === "rock" && humanChoice === "scissors" ||
        computerChoice === "paper" && humanChoice === "rock" ||
        computerChoice === "scissors" && humanChoice === "paper" 
    ){
        return ("lose");
    }  
    
}
 
function showFinalResult(humanScore,computerScore){
    let humanScoreDiv = document.querySelector(".humanScore");
    humanScoreDiv.textContent =  "Your Score: "+ humanScore;

    let computerScoreDiv = document.querySelector(".computerScore");
    computerScoreDiv.textContent= "Computer Score: "+computerScore;

    let finalResultDiv = document.querySelector(".finalResult");

    if(humanScore < computerScore){
        finalResultDiv.textContent = "Sorry! You Lose!";
    }
    else if(humanScore > computerScore){
        finalResultDiv.textContent = "Congratulations! You win";
    }
    else{
        finalResultDiv.textContent = "It's a tie";
    }
}

function playGame(e){
    if(round >= 5 ) return;

    const humanSelection = e.target.value.toLowerCase();
    const computerSelection = getComputerChoice();

    let humanChoiceDiv = document.querySelector(".humanChoice");
    humanChoiceDiv.textContent ="You choose "+humanSelection ;

    let computerChoiceDiv = document.querySelector(".computerChoice")
    computerChoiceDiv.textContent = "Computer choose "+computerSelection;

    let smallResultDiv = document.querySelector(".smallResult")

    const result = playRound(humanSelection,computerSelection);
    if(result === "win"){
        humanScore += 1;
        smallResultDiv.textContent = "You win this round! "+humanSelection +" beats "+computerSelection;
    }
    else if(result === "lose"){
        computerScore += 1;
        smallResultDiv.textContent = "You lose this round! "+computerSelection +" beats "+humanSelection;
    }
    else{
        smallResultDiv.textContent = "It's a tie";
    }
    round++;
    
    if(round == 5 ) {
    let line = document.querySelector(".line");
    line.textContent = "-------------------------------------------";

    showFinalResult(humanScore,computerScore);
    } 
}
