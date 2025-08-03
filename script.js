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
        if(humanScore === computerScore){ 
            // content.textContent = "Egalitate";
            dropBoxWinner("Egalitate");
        }
        else if(humanScore > computerScore){ 
            let humanWin=`Human wins with ${humanScore} points.`;
            dropBoxWinner(humanWin,"lightgreen");
        }
        else{
            let computerWin =`Computer wins with ${computerScore} points.`;
            dropBoxWinner(computerWin,"red");
        }
}

const buttons = document.querySelectorAll("button");
const body = document.querySelector("body");

function dropBoxWinner(string, color){
    const winnerRecord = document.querySelector("ul");
    const winner = document.createElement("li");
    winnerRecord.appendChild(winner);
    winner.textContent = string;
    winner.style.backgroundColor =color; 
    winner.scrollIntoView();

}

buttons.forEach((button) =>{
    button.addEventListener("click",()=>{
        playRound(button.id,getComputerChoice());
        const scor = document.querySelector("p");
        const textWinner = document.querySelector("#winner");
        scor.textContent = `${humanScore} \\ ${computerScore}`;
        rounds++;
        // textWinner.textContent="";

        if( rounds === 5){
            winner(textWinner);
            rounds = 0; humanScore = 0; computerScore = 0;
        }

    });
});


