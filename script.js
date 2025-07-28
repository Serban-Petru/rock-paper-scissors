
let getComputerChoice = () => {
    let alegere =  Math.floor(Math.random() * 3);
    if(alegere === 0)
        return "rock";
    else if(alegere === 1)
        return "paper";
    else
        return "scissors";
}

let getHumanChoice = () => {
   return prompt("Alege!").toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    if(humanChoice === "rock" && computerChoice === "scissors"){
        console.log("Human Wins!")
        humanScore++;
    }
    else if(humanChoice === "paper" && computerChoice === "rock"){
        console.log("Human Wins!")
        humanScore++;
    }
    else if(humanChoice === "scissors" && computerChoice === "paper"){
        console.log("Human Wins!")
        humanScore++;
    }
    else if(humanChoice === computerChoice){ 
        console.log("Egalitate!");
    }
    else{
        console.log("Computer Wins!")
        computerScore++;
    }
}

function winner(){
    if(humanScore === computerScore)
        console.log("Egalitate");
    else if(humanScore > computerScore)
        console.log(`Human wins with ${humanScore} points.`);
    else
        console.log(`Computer wins with ${computerScore} points.`);
}

function playGame(){ 
    playRound(getHumanChoice(),getComputerChoice());
    playRound(getHumanChoice(),getComputerChoice());
    playRound(getHumanChoice(),getComputerChoice());
    playRound(getHumanChoice(),getComputerChoice());
    playRound(getHumanChoice(),getComputerChoice());
    winner();
}

playGame();