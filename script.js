let time = 60
let score = 0
let rn;

document.querySelector("#pbtm").addEventListener("click", function (details) {
    if (Number(details.target.textContent) === rn) {
        hit()
        makeBubble()
        scoreIncrease()
    }
    else {
        hit()
        makeBubble()
    }

})

function scoreIncrease() {
    score += 10
    document.getElementById("score").textContent = score
}

function hit() {
    rn = Math.floor(Math.random() * 10)
    document.getElementById("hitval").textContent = rn
}

function makeBubble() {
    let bubbles = ''
    for (let index = 0; index < 140 - 7; index++) {

        bubbles += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`
    }
    // let bubbleHolder=document.getElementById("pbtm")
    // bubbleHolder.innerHTML= bubbles
    document.getElementById("pbtm").innerHTML = bubbles
}

function timer(params) {
    let timeCount = setInterval(function () {
        if (time > 0) {
            time--
            document.getElementById("timer").innerHTML = time
        }
        else {
            clearInterval(timeCount)
            document.querySelector("#pbtm").innerHTML=`<h1 id="result">Game Finished<br> Your Score: ${score}</h1>`
        }
    }, 1000)
}

makeBubble()
timer()
hit()
