let userscore = 0;
let compscore = 0;
const userscoredisplay=document.querySelector("#user-score");
const computerscoredisplay=document.querySelector("#computer-score");

const choices = document.querySelectorAll(".choice");
const msgdisplay=document.querySelector("#msg");

const getcompchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}
const drawgame = () => {
    console.log("draw game");
    msgdisplay.innerText="draw game.play again";
    msgdisplay.style.backgroundColor = "#081b31";
}
const showwinner = (userwin,userchoice,compchoice) => {
    if (userwin) {
        userscore++;
        userscoredisplay.innerText=userscore;
        console.log("you win");
        msgdisplay.innerText=`you win your ${userchoice} beats ${compchoice} `;
        msgdisplay.style.backgroundColor = "green";
    }
    else {
        compscore++;
        computerscoredisplay.innerText=compscore;
        console.log("you lose ");
        msgdisplay.innerText=`you lose ${compchoice} beats your ${userchoice} `;
        msgdisplay.style.backgroundColor = "red";
    }
}
const playgame = (userchoice) => {
    console.log("user choice= ", userchoice);
    const compchoice = getcompchoice();
    console.log("comp choice= ", compchoice);
    if (userchoice === compchoice) {
        drawgame();
    } else {
        let userwin = true;
        if (userchoice === "rock") {
            userwin = compchoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            userwin = compchoice === "scissors" ? false : true;
        } else {
            userwin = compchoice === "rock" ? false : true;
        }
        showwinner(userwin,userchoice,compchoice);
    }

}
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    })
})
