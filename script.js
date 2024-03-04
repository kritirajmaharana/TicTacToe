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
        element.textContent = "x"
        iszero = false;
        element.setAttribute("disabled", false)
    }else{
        element.textContent = "o"
        iszero = true;
        element.setAttribute("disabled", false)

    }
   }) 
});
})();