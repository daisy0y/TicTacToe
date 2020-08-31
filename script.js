//타이머기능넣기
// 무승부 오류는 drawValue 값을 클릭할때 주는거에서 O,X 입력될때마다 value값을 1씩 더하게 변경하여 오류 수정
const GAME_TIME = 5;
const td = document.querySelectorAll("td");
const startBtn = document.getElementById("start");
const tableMain = document.getElementById("tableMain");
const reset = document.getElementById("reset");
const timeDisplay = document.querySelector("#time")

let turn = true;  // 순서 초기값
let drawValue = 1; // 무승부 초기값
let setTime = GAME_TIME;
let countDown;

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


// 알림 추가하기
function playing(e){
    if(turn && e.target.innerHTML.length === 0) {
        resetInterval();
        pushO(e.target);
        turnAlert();
        gameEnd();
        draw();
        run();
        }
    else if(!turn && e.target.innerHTML.length=== 0){
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
        run();

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
       if(td[0].innerText == "O" && td[1].innerText == "O" && td[2].innerText == "O"
       || td[3].innerText == "O" && td[4].innerText == "O" && td[5].innerText == "O"
       || td[6].innerText == "O" && td[7].innerText == "O" && td[8].innerText == "O"
       || td[0].innerText == "O" && td[3].innerText == "O" && td[6].innerText == "O"
       || td[1].innerText == "O" && td[4].innerText == "O" && td[7].innerText == "O"
       || td[2].innerText == "O" && td[5].innerText == "O" && td[8].innerText == "O"
       || td[0].innerText == "O" && td[4].innerText == "O" && td[8].innerText == "O"
       || td[2].innerText == "O" && td[4].innerText == "O" && td[6].innerText == "O"
       || time === 0 && turn === false
       ){
           resetInterval();
           gameReset();
           drawValue = 0;
           alert("O 팀이 승리하였습니다 ! 축하합니다!");
   }else if(td[0].innerText == "X" && td[1].innerText == "X" && td[2].innerText == "X"
   || td[3].innerText == "X" && td[4].innerText == "X" && td[5].innerText == "X"
   || td[6].innerText == "X" && td[7].innerText == "X" && td[8].innerText == "X"
   || td[0].innerText == "X" && td[3].innerText == "X" && td[6].innerText == "X"
   || td[1].innerText == "X" && td[4].innerText == "X" && td[7].innerText == "X"
   || td[2].innerText == "X" && td[5].innerText == "X" && td[8].innerText == "X"
   || td[0].innerText == "X" && td[4].innerText == "X" && td[8].innerText == "X"
   || td[2].innerText == "X" && td[4].innerText == "X" && td[6].innerText == "X"
   || time === 0 && turn === true
   ){
       resetInterval();
       gameReset();
       drawValue = 0;
       alert("X 팀이 승리하였습니다 ! 축하합니다!");
}}
gameEnd();

// 무승부 함수
function draw(){
    if(drawValue === 9){
        resetInterval();
        drawValue = 0;
        gameReset();
        alert("무승부 입니다!");
    }
    }
    
// 타이머
// 시작을 누르면 카운트다운 시작
// 시간내에 마무리 하지 못하면 현재순서 패배 처리
// 칸 누를때마다 리셋되어 재시작되게
// 게임 끝났을때마다 카운트리셋

function run(){
    resetInterval();
    setTime = GAME_TIME;
    countDown = setInterval(countInterval,1000);

}

function countInterval(){
     if( setTime > 0 )
 {
    setTime--
    timeDisplay.innerText = setTime;
  }
   else if(setTime === 0 && turn === true){ 
    alert("X 팀이 승리하였습니다 ! 축하합니다!");
    gameReset();
    drawValue = 0;
    setTime = GAME_TIME;
    timeDisplay.innerText = setTime;
      clearInterval(countDown)
  }else if(setTime === 0 && turn === false){ 
    alert("O 팀이 승리하였습니다 ! 축하합니다!");
    gameReset();
    drawValue = 0;
    setTime = GAME_TIME;
    timeDisplay.innerText = setTime;
      clearInterval(countDown)
  }else{
    setTime = GAME_TIME;
    timeDisplay.innerText = setTime;
      clearInterval(countDown)
  }

}

function resetInterval(){
    setTime = GAME_TIME;
    timeDisplay.innerText = setTime;
    clearInterval(countDown)

}