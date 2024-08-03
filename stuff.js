function getComputerChoice(max) {
    let val=Math.floor(Math.random() * max);
    if(val == 0)
        return "p";
    else if(val == 1)
        return "h";
    else
        return "f";
}
function getHumanChoice() {
    return prompt("Ce alegi?");
}

//0 - piatra
//1 - hartie
//2 - foarfece
function playRound(humanChoice, computerChoice) {
    if (humanChoice === "p" && computerChoice == "f")
        humanScore++;
    else if (humanChoice === "f" && computerChoice == "h")
        humanScore++;
    else if (humanChoice === "h" && computerChoice == "p")
        humanScore++;
    else if (humanChoice === "p" && computerChoice == "h")
        computerScore++;
    else if (humanChoice === "f" && computerChoice == "p")
        computerScore++;
    else if (humanChoice === "h" && computerChoice == "f")
        computerScore++;
    else
        console.log("remiza");
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice(3);
        playRound(humanSelection, computerSelection);
        console.log("PC alegere: " + computerSelection);
        console.log("PC score: " + computerScore);
        console.log("Om score: " + humanScore);
        console.log("=========================");
    }
    if (humanScore > computerScore)
        console.log("Ai castigat!");
    else if(humanScore < computerScore)
        console.log("PC a castigat");
    else
    console.log("Remiza");
}

let humanSelection = 0;
let computerSelection = 0;

let humanScore = 0;
let computerScore = 0;

playGame();