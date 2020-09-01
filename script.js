
const GAME_TIME = 5;
const td = document.querySelectorAll("td");
const startBtn = document.getElementById("start");
const tableMain = document.getElementById("tableMain");
const reset = document.getElementById("reset");
const timeDisplay = document.querySelector("#time")

let turn = true;  // 순서 초기값
let drawValue = 1; // 무승부 초기값
let setTime = GAME_TIME; //게임시작 세팅값
let countDown;  // 타이머인터벌
let status = true; // 타이머 상태 체크값
let checkStatus;  //타이머 상태 체크 인터벌

function pushO(tdTarget){
    tdTarget.innerHTML="O";
    turn = false;
    drawValue += 1;
}

function pushX(tdTarget){
    tdTarget.innerHTML="X";
    turn = true;
    drawValue += 1;
}

function playing(e){
    if(turn && e.target.innerHTML.length === 0 && !gameEnd()) {
        resetInterval();
        pushO(e.target);
        turnAlert();
        gameEnd();
        draw();
        run();
        }
    else if(!turn && e.target.innerHTML.length === 0){
        resetInterval();
        pushX(e.target);
        turnAlert();
        gameEnd();
        draw();
        run();
       }
}


function clickTd(){
    for(let i = 0 ; i < td.length; i++){
      td[i].addEventListener("click",function(e){
        playing(e);
       
        });
       }
    }
clickTd();

// 시작버튼
function start(){   
        startBtn.addEventListener("click",function(){
        tableMain.style.pointerEvents="auto"
        resetInterval();
        clearStatus()
        run();
        timerStatus()
        status = true;

    })
}
start();

// 리셋버튼
function clickReset(){
    
    reset.addEventListener("click",function(){
        for(let i = 0 ; i < td.length;i++){
            td[i].innerText="";
            tableMain.style.pointerEvents="none"
            drawValue = 0 ;
            resetInterval();
       }
        }
       )}
clickReset();



// 보드판 초기화
function gameReset(){
    for(let i = 0 ; i < td.length;i++){
        td[i].innerText="";
        tableMain.style.pointerEvents="none"
        
    }
}

// 순서알림
function turnAlert(){
    if(turn === true){
        document.getElementById("turn").innerHTML="O";
    }else if(turn === false){
        document.getElementById("turn").innerHTML="X";
    }
}
turnAlert();

// 경기종료

function gameEnd(){
    resetInterval();
    if(td[0].innerText == "O" && td[1].innerText == "O" && td[2].innerText == "O"
    || td[3].innerText == "O" && td[4].innerText == "O" && td[5].innerText == "O"
    || td[6].innerText == "O" && td[7].innerText == "O" && td[8].innerText == "O"
    || td[0].innerText == "O" && td[3].innerText == "O" && td[6].innerText == "O"
    || td[1].innerText == "O" && td[4].innerText == "O" && td[7].innerText == "O"
    || td[2].innerText == "O" && td[5].innerText == "O" && td[8].innerText == "O"
    || td[0].innerText == "O" && td[4].innerText == "O" && td[8].innerText == "O"
    || td[2].innerText == "O" && td[4].innerText == "O" && td[6].innerText == "O"
    ){
        alert("O 팀이 승리하였습니다 ! 축하합니다!");
        gameReset();
        drawValue = 0;
        status = false;}
        
        else if(td[0].innerText == "X" && td[1].innerText == "X" && td[2].innerText == "X"
        || td[3].innerText == "X" && td[4].innerText == "X" && td[5].innerText == "X"
        || td[6].innerText == "X" && td[7].innerText == "X" && td[8].innerText == "X"
        || td[0].innerText == "X" && td[3].innerText == "X" && td[6].innerText == "X"
        || td[1].innerText == "X" && td[4].innerText == "X" && td[7].innerText == "X"
        || td[2].innerText == "X" && td[5].innerText == "X" && td[8].innerText == "X"
        || td[0].innerText == "X" && td[4].innerText == "X" && td[8].innerText == "X"
        || td[2].innerText == "X" && td[4].innerText == "X" && td[6].innerText == "X"
        ){
            alert("X 팀이 승리하였습니다 ! 축하합니다!");
            gameReset();
            drawValue = 0;
            status = false;
}}
gameEnd();

// 무승부
function draw(){
    if(drawValue === 9){
        drawValue = 0;
        gameReset();
        alert("무승부 입니다!");
        status = false;
    }
    }

// 타이머

function run(){
    resetInterval();
    setTime = GAME_TIME;
    countDown = setInterval(countInterval,1000);
}

function countInterval(){
     if( setTime > 0 )
 {
    setTime--;
    timeDisplay.innerText = setTime;
  }
   else if(setTime === 0 && turn === true){ 
    alert("X 팀이 승리하였습니다 ! 축하합니다!");
    gameReset();
    drawValue = 0;
    resetInterval();
    clearStatus()}
    
    else if(setTime === 0 && turn === false){ 
        alert("O 팀이 승리하였습니다 ! 축하합니다!");
        gameReset();
        drawValue = 0;
        resetInterval();
        clearStatus()
    }
}

function resetInterval(){
    setTime = GAME_TIME;
    timeDisplay.innerText = setTime;
    clearInterval(countDown)

}

// 타이머 상태 체크

function timerStatus(){
    checkStatus = setInterval(checkGame,100)
}

function clearStatus(){
    clearInterval(checkStatus);
}

function checkGame(){
    if(!status){
        clearInterval(countDown)
    }
}