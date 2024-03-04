(function GameBoard() {


const box = document.querySelectorAll('.box');
const rest = document.querySelector('#resetBtn');

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
   });
});
checkWinner(); 

function checkWinner(){
    for(let pattern of winningArr){
        console.log(pattern);
    }
}
})();

