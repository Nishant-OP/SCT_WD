let boxes= document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

let winningPatterns = 
[[0, 1, 2],
 [0, 3, 6],
 [0, 4, 8],
 [1, 4, 7],
 [2, 4, 6],
 [3, 4, 5],
 [6, 7, 8],
 [2, 5, 8]];

boxes.forEach((box) => {
    box.addEventListener("click", ()=> {
        console.log("Box was clicked");
        if(turnO){
            box.innerText="O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    })
})


const checkWinner = () => {
    for(pattern of winningPatterns){
        let position1Value = boxes[pattern[0]].innerText;
        let position2Value = boxes[pattern[1]].innerText;
        let position3Value = boxes[pattern[2]].innerText;

        if(position1Value != "" && position2Value != "" && position3Value != "") {
            if(position1Value == position2Value && position2Value == position3Value){
                console.log("Winner is:", position1Value);
                showWinner(position1Value);
            }
        }
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
    resetBtn.style.display = "none";
};

const disableBoxes = () => {
    for(box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    resetBtn.style.display = "inline-block";

}

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);