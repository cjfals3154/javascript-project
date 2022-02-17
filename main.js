let computerNumber = 0;
let playButton = document.getElementById("play-button")
let userInput = document.getElementById("user-input")
let resultText = document.getElementById("result-text")
let numberReset = document.getElementById("number-reset")
let chanceArea = document.getElementById("chance-area")
let chance = 5
let gameOver = false
let history = []

playButton.addEventListener("click", play)
numberReset.addEventListener("click", reset)
userInput.addEventListener("focus", function(){
    userInput.value = ""
})

function pickNumber(){
    computerNumber = Math.floor(Math.random() * 100) + 1 ;
    console.log("정답은", computerNumber)
}

function play(){
    const userValue = userInput.value

    if(userValue < 1 || userValue > 100){
        resultText.textContent = "1 ~ 100까지의 숫자를 입력하세요"
        return;
    }

    if(history.includes(userValue)){
        resultText.textContent = "중복 된 숫자에요"
        return
    }

    chance --;
    chanceArea.textContent = `남은찬스${chance}번`
    history.push(userValue)

    if(userValue < computerNumber){
        resultText.textContent = "Up!!!!~"
    } else if(userValue > computerNumber){
        resultText.textContent = "Down~"
    } else{
        resultText.textContent = "정답!!!"
        gameOver = true
    }

    if(chance < 1){
        gameOver = true
    }
    if(gameOver == true){
        playButton.disabled = true
    }
}

function reset(){
    pickNumber()
    userInput.value = ""
    resultText.textContent = "게임을 새로 시작하지"
    chance = 5;
    chanceArea.innerText = `남은 기회 :${chance}`
    
}

pickNumber()

