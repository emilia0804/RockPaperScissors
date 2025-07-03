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
        return ("win");
    }
    else if(computerChoice === "rock" && humanChoice === "scissors" ||
        computerChoice === "paper" && humanChoice === "rock" ||
        computerChoice === "scissors" && humanChoice === "paper" 
    ){
        return ("lose");
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
        const result = playRound(humanSelection,computerSelection);

        console.log(`Round ${i}`);
        console.log(`You choose ${humanSelection}`);
        console.log(`Computer choose ${computerSelection}`)
        if(result === "win"){
            humanScore += 1;
            console.log("You win this round! "+humanSelection +" beats "+computerSelection);
        }
        else if(result === "lose"){
            humanScore += 1;
            console.log("You lose this round! "+computerSelection +" beats "+humanSelection);
        }
        else{
            console.log("It's a tie");
        }
    }  
    console.log("Game Over!!!!");
    console.log("-----------------------------------------")   
}

playGame();
finalResult(humanScore,computerScore);
