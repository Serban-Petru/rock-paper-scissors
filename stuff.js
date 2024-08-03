function getComputerChoice(max){
    return Math.floor(Math.random() * max);
}
function getHumanChoice(){
    return prompt("Ce alegi?");
}

//0 - piatra
//1 - hartie
//2 - foarfece
function playRound(humanChoice, computerChoice) {
    if(humanChoice === "p" && computerChoice == 2) 
        humanScore++;
    else if(humanChoice === "f" && computerChoice == 1)
        humanScore++;
    else if(humanChoice === "h" && computerChoice == 0)
        humanScore++;
    else if(humanChoice === "p" && computerChoice == 1)
        computerScore++;
    else if(humanChoice === "f" && computerChoice == 0)
        computerScore++;
    else if(humanChoice === "h" && computerChoice == 2)
        computerScore++;
    else
        console.log("remiza");    
}

function playGame(){
    for(let i=0;i<5;i++){
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice(3);
        playRound(humanSelection, computerSelection);
        console.log("PC alegere: " + computerSelection);
        console.log("PC score: " + computerScore);
        console.log("Om score: " + humanScore);
        console.log("=========================");
    }
    if(humanScore > computerScore)
        console.log("Ai castigat!");
    else
        console.log("PC a castigat");
}

let humanSelection = 0;
let computerSelection = 0;

let humanScore = 0;
let computerScore = 0 ;

playGame();