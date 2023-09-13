var turn = "x"
var emptySpaces = 9
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
var xMoves = []
var oMoves = []


for (const element of document.querySelectorAll(".play-area")) {
    element.onclick = function (e) {
        if (turn == "x") {
            noOfSquare = Array.prototype.indexOf.call(this.parentNode.children, e.target);
            if (!xMoves.includes(noOfSquare) && !oMoves.includes(noOfSquare)) {
                emptySpaces--
                if (emptySpaces == 0) {
                    document.querySelector(".win-alert").style.marginTop = "0"
                    document.querySelector(".alert > h1").innerHTML = "DRAW"
                }
                turn = "o"
                this.insertAdjacentHTML('beforeend', '<div class="x"><div class="cross"></div><div class="cross"></div></div>')
                xMoves.push(Array.prototype.indexOf.call(this.parentNode.children, e.target))
                for (let i = 0; i < winConditions.length; i++) {
                    if(xMoves.includes(winConditions[i][0]) && xMoves.includes(winConditions[i][1]) && xMoves.includes(winConditions[i][2])){
                        document.querySelector(".win-alert").style.marginTop = "0"
                        document.querySelector(".alert > h1").innerHTML = "X HAS WON"
                        document.querySelector(".xscore > p").innerHTML = +document.querySelector(".xscore > p").innerHTML + 1
                    }
                }
            }
        } else {
            noOfSquare = Array.prototype.indexOf.call(this.parentNode.children, e.target);
            if (!xMoves.includes(noOfSquare) && !oMoves.includes(noOfSquare)) {
                emptySpaces--
                if (emptySpaces == 0) {
                    document.querySelector(".win-alert").style.marginTop = "0"
                    document.querySelector(".alert > h1").innerHTML = "DRAW"
                }
                turn = "x"
                this.insertAdjacentHTML('beforeend', '<div class="o"><div class="circle"></div></div>')
                oMoves.push(Array.prototype.indexOf.call(this.parentNode.children, e.target))
                for (let i = 0; i < winConditions.length; i++) {
                    if(oMoves.includes(winConditions[i][0]) && oMoves.includes(winConditions[i][1]) && oMoves.includes(winConditions[i][2])){
                        document.querySelector(".win-alert").style.marginTop = "0"
                        document.querySelector(".alert > h1").innerHTML = "O HAS WON"
                        document.querySelector(".oscore > p").innerHTML = +document.querySelector(".oscore > p").innerHTML + 1
                    }
                }
            }
        }
    };

}

document.querySelector(".play-again-btn").onclick = function () { 
    document.querySelector(".win-alert").style.marginTop = "-100vh"
    for (const element of document.querySelectorAll(".game-container .x")) {
        element.remove()
    }
    for (const element of document.querySelectorAll(".game-container .o")) {
        element.remove()
    }
    turn = "x"
    emptySpaces = "9"
    xMoves = []
    oMoves = []
}
document.querySelector(".reset-score-btn").onclick = function () { 
    document.querySelectorAll(".win-alert").style.marginTop = "-100vh"
    for (const element of document.querySelectorAll(".game-container .x")) {
        element.remove()
    }
    for (const element of document.querySelectorAll(".game-container .o")) {
        element.remove()
    }
    turn = "x"
    emptySpaces = "9"
    xMoves = []
    oMoves = []
    document.querySelector(".xscore > p").innerHTML = 0
    document.querySelector(".oscore > p").innerHTML = 0
}