let humanScore = 0;
let computerScore = 0;
let rounds=0;

let getComputerChoice = () => {
    let alegere =  Math.floor(Math.random() * 3);
    if(alegere === 0)
        return "rock";
    else if(alegere === 1)
        return "paper";
    else
        return "scissors";
}

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

function winner(content){
        if(humanScore === computerScore)
            content.textContent = "Egalitate";
        else if(humanScore > computerScore)
            content.textContent =`Human wins with ${humanScore} points.`;
        else
            content.textContent =`Computer wins with ${computerScore} points.`;
}

const buttons = document.querySelectorAll("button");
const body = document.querySelector("body");


buttons.forEach((button) =>{
    button.addEventListener("click",()=>{
        playRound(button.id,getComputerChoice());
        const scor = document.querySelector("p");
        const textWinner = document.querySelector("#winner");
        scor.textContent = `${humanScore} \\ ${computerScore}`;
        rounds++;
        textWinner.textContent="";
        if( rounds === 5){
            winner(textWinner);
            rounds = 0; humanScore = 0; computerScore = 0;
        }

    });
});


