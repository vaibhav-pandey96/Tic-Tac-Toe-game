var boxes = document.querySelectorAll(".box");
var newgamebutton = document.querySelector("#newgamebtn");
var reset = document.querySelector(".reset-btn");
var msgContainer = document.querySelector(".msg-container");
var msg = document.querySelector("#msg");
let turn0 = true;
let count = 0;
const winningPattern = [[0,1,2],[3,4,5],[6,7,8], //for row
                    [0,3,6],[1,4,7],[2,5,8],  //for Column
[0,4,8],[2,4,6]]  // for diagonal


const resetEverything = ()=>{
  turn0 =true;
  count=0;
  enablebtns();
  msgContainer.classList.add("hide");
}        

const newgameUI = () => {
    turn0 =true;
    count=0;
    enablebtns();
    msgContainer.classList.add("hide");
}

boxes.forEach(function(box){
    box.addEventListener('click', () =>{
        if(turn0){
            box.innerText = "X";
            turn0 = false;
        }
        else{
            box.innerText = "0";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();   
    });
});

const disablesbtns = () =>{
  for(let box of boxes){
    box.disabled = true;
  }
};

const enablebtns = () =>{
    for(let box of boxes){
      box.disabled = false;
      box.innerHTML = "";
    }
};

const showWinner = (winner) =>{
    msg.innerHTML = `${winner}, Wins`;
    msgContainer.classList.remove("hide");
    disablesbtns();
    console.log(newgamebutton);
}

const checkWinner = function (){
    for(let pattern of winningPattern){
       let pos0val = boxes[pattern[0]].innerHTML;
       let pos1val = boxes[pattern[1]].innerHTML;
       let pos2val = boxes[pattern[2]].innerHTML;
    
    if(pos0val != "" && pos1val !="" && pos2val != ""){
        if(pos0val === pos1val && pos1val === pos2val){
            console.log("winner", pos0val);
            showWinner(pos0val);  
        }
    }
 }
}

document.addEventListener("DOMContentLoaded", () => {
    reset.addEventListener('click', resetEverything);
    newgamebutton.addEventListener('click', newgameUI);
});