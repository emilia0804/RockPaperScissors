let computerChoice,humanChoice;
let humanScore = 0;
let computerScore = 0;

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

function getHumanChoice(){
    humanChoice = prompt("Choose one to play Rock,Paper,Scissors: ").toLowerCase();
    return humanChoice;
}

function playRound(humanChoice,computerChoice){
    if(humanChoice === "rock" && computerChoice === "scissors" ||
       humanChoice === "paper" && computerChoice === "rock" ||
       humanChoice === "scissors" && computerChoice === "paper"
    ){
        humanScore += 1;
        console.log("You win! "+humanChoice +" beats "+computerChoice);
    }
    else if(computerChoice === "rock" && humanChoice === "scissors" ||
        computerChoice === "paper" && humanChoice === "rock" ||
        computerChoice === "scissors" && humanChoice === "paper" 
    ){
        computerScore += 1;
        console.log("You lose! "+computerChoice+" beats "+humanChoice);
    }  
    else{
        console.log("It's a tie");
    }
    
}
 
function finalResult(humanScore,computerScore){
    console.log("Your Score: "+ humanScore);
    console.log("Computer Score: "+computerScore);
    if(humanScore < computerScore){
        console.log("Sorry! You Lose!");
    }
    else if(humanScore > computerScore){
        console.log("Congratulations! You win");
    }
    else{
        console.log("It's a tie");
    }
}

function playGame(){
    for(let i=1;i<=5;i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection,computerSelection);

    }     
}

playGame();
finalResult(humanScore,computerScore);
