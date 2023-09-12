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
                    $(".win-alert").css("margin-top", "0");
                    $(".alert > h1").html("DRAW");
                }
                turn = "o"
                this.insertAdjacentHTML('beforeend', '<div class="x"><div class="cross"></div><div class="cross"></div></div>')
                xMoves.push(Array.prototype.indexOf.call(this.parentNode.children, e.target))
                for (let i = 0; i < winConditions.length; i++) {
                    if(xMoves.includes(winConditions[i][0]) && xMoves.includes(winConditions[i][1]) && xMoves.includes(winConditions[i][2])){
                        $(".win-alert").css("margin-top", "0");
                        $(".alert > h1").html("X HAS WON");
                        $(".xscore > p").html(+$(".xscore > p").html() + 1);
                    }
                }
            }
        } else {
            noOfSquare = Array.prototype.indexOf.call(this.parentNode.children, e.target);
            if (!xMoves.includes(noOfSquare) && !oMoves.includes(noOfSquare)) {
                emptySpaces--
                if (emptySpaces == 0) {
                    $(".win-alert").css("margin-top", "0");
                    $(".alert > h1").html("DRAW");
                }
                turn = "x"
                this.insertAdjacentHTML('beforeend', '<div class="o"><div class="circle"></div></div>')
                oMoves.push(Array.prototype.indexOf.call(this.parentNode.children, e.target))
                for (let i = 0; i < winConditions.length; i++) {
                    if(oMoves.includes(winConditions[i][0]) && oMoves.includes(winConditions[i][1]) && oMoves.includes(winConditions[i][2])){
                        $(".win-alert").css("margin-top", "0");
                        $(".alert > h1").html("O HAS WON");
                        $(".oscore > p").html(+$(".oscore > p").html() + 1);
                    }
                }
            }
        }
    };

}

document.querySelector(".play-again-btn").onclick = function () { 
    $(".win-alert").css("margin-top", "-100vh");
    $(".game-container .x").remove();
    $(".game-container .o").remove();
    turn = "x"
    emptySpaces = "9"
    xMoves = []
    oMoves = []
}
document.querySelector(".reset-score-btn").onclick = function () { 
    $(".win-alert").css("margin-top", "-100vh");
    $(".game-container .x").remove();
    $(".game-container .o").remove();
    turn = "x"
    emptySpaces = "9"
    xMoves = []
    oMoves = []
    $(".xscore > p").html(0);
    $(".oscore > p").html(0);
}