(function GameBoard() {


const box = document.querySelectorAll('.box');
const rest = document.querySelector('#resetBtn');
var winner;
let iszero;

const winningArr = 
[[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[6,4,2],
];

box.forEach(element => {
   element.addEventListener('click', () => {
    if(iszero){
        element.textContent = "close"
        iszero = false;
        element.setAttribute("disabled", true);
    }else{
        element.textContent = "circle"
        iszero = true;
        element.setAttribute("disabled", false);
    }
    checkWinner();
    showWinnner();
 
});
});
rest.addEventListener('click', ()=>{
   reset();     
});

function reset(){
    box.forEach(element => {
        element.removeAttribute("disabled", true);
        element.textContent = "";
    });
};

function checkWinner(){
    for(let pattern of winningArr){
        let pos1 = box[pattern[0]].innerText;
        let pos2 = box[pattern[1]].innerText;
        let pos3 = box[pattern[2]].innerText;
        
        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                winner = pos1 ;
            }
        } ;
    }
};

function showWinnner(){
    if(winner === "circle" || winner === "close"){
        console.log(winner);
    };
}

})();

