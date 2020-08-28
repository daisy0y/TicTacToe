//how to play 사용설명 
//타이머기능넣기
// 무승부 오류는 drawValue 값을 클릭할때 주는거에서 O,X 입력될때마다 value값을 1씩 더하게 변경하여 오류 수정
const td = document.querySelectorAll("td");
let turn = true;  // 순서 초기값
const startBtn = document.getElementById("start");
const tableMain = document.getElementById("tableMain");
const reset = document.getElementById("reset");
let drawValue = 1; // 무승부 초기값

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


// 차례알림 추가하기
function playing(e){
    if(turn && e.target.innerHTML.length === 0) {
        pushO(e.target);
        turnAlert();
        gameEnd();
        draw();
        }
    else if(!turn && e.target.innerHTML.length=== 0){
        pushX(e.target);
        turnAlert();
        gameEnd();
        draw();
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


// 차례알림
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
       || td[2].innerText == "O" && td[4].innerText == "O" && td[6].innerText == "O"){
      alert("O 팀이 승리하였습니다 ! 축하합니다!");
      gameReset();
      drawValue = 0;
   }else if(td[0].innerText == "X" && td[1].innerText == "X" && td[2].innerText == "X"
   || td[3].innerText == "X" && td[4].innerText == "X" && td[5].innerText == "X"
   || td[6].innerText == "X" && td[7].innerText == "X" && td[8].innerText == "X"
   || td[0].innerText == "X" && td[3].innerText == "X" && td[6].innerText == "X"
   || td[1].innerText == "X" && td[4].innerText == "X" && td[7].innerText == "X"
   || td[2].innerText == "X" && td[5].innerText == "X" && td[8].innerText == "X"
   || td[0].innerText == "X" && td[4].innerText == "X" && td[8].innerText == "X"
   || td[2].innerText == "X" && td[4].innerText == "X" && td[6].innerText == "X"){
  alert("X 팀이 승리하였습니다 ! 축하합니다!");
  gameReset();
  drawValue = 0;
}}
gameEnd();

// 무승부 함수
function draw(){
    if(drawValue === 9){
        alert("무승부 입니다!");
        drawValue = 0;
        gameReset();
    }
    }
    
    