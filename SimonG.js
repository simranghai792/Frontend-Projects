let gameSeq = [];
let userSeq = [];

let btns = ["yellow","red","purple","green"];

let started = false; //game isnot started.
let level = 0;
let h2 = document.querySelector("h2");

//Document prr click krne seh game start ho jaaye. Isliye humne document prr eventListener lggaya.
document.addEventListener("keypress", function(){
    if(started == false) {
      console.log("Game is started");
      started = true;

//To levelup the game.
      levelUp();
    }
});


function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);

}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}


function levelUp() {
    userSeq = [];   //userSeq reset ho jaaye gya and user koh shuruvaat seh saari cheeze press krni pddegyi.
    level++;
    h2.innerText = `Level ${level}`;  

//random btn choose
let randIdx = Math.floor(Math.random() * 3);
let randColor = btns[randIdx];
let randBtn = document.querySelector(`.${randColor}`);

gameSeq.push(randColor);
// console.log(gameSeq);
gameFlash(randBtn);
//new functionality
if(level==4){
    alert("Your Easy Level is completed.Begin with MEDIUM LEVEL");
}
else if(level==10){
    alert("Your Medium Level is completed.Begin with HARD LEVEL");
}
} 

function checkAns(idx){
    // console.log("Current level: ",level);
    // let idx = level - 1;   //this is fixed index but we have to pass current index.
    if(userSeq[idx] === gameSeq[idx]){
    //   console.log("Same value");
       if(userSeq.length == gameSeq.length){
          setTimeout(levelUp, 1000);
       }
    } else{
        h2.innerHTML = `Game Over! Your score was <b>${level}</b>  <br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
      }
}

function btnPress() {
    // console.log(this);
    let btn = this;
    userFlash(btn);
 
    userColor = btn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);

    checkAns(userSeq.length-1); //current idex pass kiya.

}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
        btn.addEventListener("click", btnPress);
}


function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}    



