//미니 술 게임 만들기   끝
//랜덤번호 만들기 끝
//유저가 번호를 누름! 그리고 GO버튼을 누름 끝
//랜덤 번호 < 유저번호 다운! 끝
//랜덤 번호 > 유저번호 업! 끝
// Reset 버튼을 누르면 게임이 리셋된다. 끝
// 5번의 기회를 다 쓰면 게임이 끝난다. (더이상 추측 불가 버튼입력 불가상태)
//유저가 1 ~ 100 범위 밖에 숫자를 입력하면 알려준다. 기회 깎이지 않음
// 유저가 이미 입력한 숫자를 또 입력하면 알려준다 기회를 깎지 않는다.


//랜덤번호를 저장 하는 장소
let computerNum = 0;
let playButton = document.getElementById("play-Button")
let userInput = document.getElementById("user-input")
let resultArea = document.getElementById("result-area")
let resetButton = document.getElementById("reset-button")
let chances = 5
let GameOver = false
let chanceArea = document.getElementById("chanse-area")

playButton.addEventListener('click', play)
resetButton.addEventListener('click', reset)
//랜덤번호를 뽑는 장소
function pickRandomNum(){
    computerNum = Math.floor(Math.random()*100)+1,
    console.log("정답", computerNum)
}

function play(){
    let userValue = userInput.value

    chances -- ;
    chanceArea.textContent = `"남은기회:${chances}번"`;
    console.log("chances", chances)


    if(userValue < computerNum){
            resultArea.textContent = "Up!"
    }else if(userValue > computerNum){
        resultArea.textContent = "Down!"
    }else{
        resultArea.textContent = "정답!"
    }


    if(chances < 1){
        GameOver=true
    }

    if(GameOver == true){
        playButton.disabled = true;
    }
}

function reset(){
   //user input창이 깨끗하게 정리되고
   userInput.value = "";
   //새로운 번호가 생성됨
   pickRandomNum()
}

pickRandomNum()























// let computerNum = 0;
// function pickRandomNum(){
//     computerNum = Math.floor (Math.random()*100)+1 ;
//     console.log("정답", computerNum)
// }

// pickRandomNum()

