let boxes = document.querySelectorAll(".box");
let resetbutton = document.querySelector("#reset-button");
let newgamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true; //for players

let winpatterns =[
           [0, 1, 2],
           [0, 3, 6],
           [0, 4, 8],
           [1, 4, 7],
           [2, 5, 8],
           [2, 4, 6],
           [3, 4, 5],
           [6, 7, 8],

          ];



const resetGame = ()=>{
    turn0 = true;
    msgcontainer.classList.add("hide");
    for(let box of boxes){
        box.disabled = false;
        box.innerText ="";
    }
   
};

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("box is clicked");
        if(turn0 === true){
            box.innerText = "X";
            turn0 = false;
        }else{
            box.innerText = "O";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();        
        
    });
    
});

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    //rest of boxes disable when winner
    for(let box of boxes){
        box.disabled = true;
    }
};
const checkWinner = ()=>{
   for(let pattern of winpatterns) {
    // console.log(pattern[0],pattern[1],pattern[2]);
    // console.log(
    //     boxes[pattern[0]].innerText, 
    //     boxes[pattern[1]].innerText, 
    //     boxes[pattern[2]].innerText);

        let pos1val =  boxes[pattern[0]].innerText;
        let pos2val =  boxes[pattern[1]].innerText;
        let pos3val =  boxes[pattern[2]].innerText;

        if(pos1val !="" && pos2val !="" && pos3val !=""){
            if(pos1val===pos2val && pos2val === pos3val){
                console.log("Winner",pos1val);
                showWinner(pos1val);
            }
        }
    }
   
};

newgamebtn.addEventListener("click", resetGame);
resetbutton.addEventListener("click", resetGame);
