// 1. 클릭시 O X 출력하게 하기
// 2. 승리 조건 달성시 얼럿 띄우기
// 3. 스타트 눌렀을때 시작하기
// 4. 리셋 누르면 초기화
// 5.  how to play 사용설명 
// 클릭을하면 O X를 출력을 한다. 단 조건이 있다. 처음 순서는 O이며 그 자리에 만약 O가 있으면 X를 출력을하고 X가 있다면 O를 출력을 한다.
// 똑같은자리 플레이못하게
// (turn = true) => O 의 차례 / (turn = true) => X 의 차례
// 승리조건 123, 456 , 789, 147,258,369 , 159 , 357
// 차례 표시 넣기
const td = document.querySelectorAll("td");
let turn = true;
const startBtn = document.getElementById("start");
const tableMain = document.getElementById("tableMain");
const reset = document.getElementById("reset");


function pushO(tdTarget){
    tdTarget.innerHTML="O";
    turn = false;
}

function pushX(tdTarget){
    tdTarget.innerHTML="X";
    turn = true;
}

// 차례알림 추가하기
function playing(e){
    if(turn && e.target.innerHTML.length === 0) {
        pushO(e.target);
        turnAlert();
        gameEnd();
        }
    else if(!turn && e.target.innerHTML.length=== 0){
        pushX(e.target);
        turnAlert();
        gameEnd();
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
}}
gameEnd();


// 승리조건 012, 345, 678, 036,147,258,048,246
