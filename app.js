let gameSeq=[];
let userSeq=[];

let btns=["yellow","red","purple","green"];

let started=false;
let Level=0;
let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game Stared");
        started=true;
        levelUp();
    }
});

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function levelUp(){
Level++;
h2.innerText=`Level${Level}`;
let randomIdx=Math.floor(Math.random()*3);
let randomColor=btns[randomIdx];
let randomBtn=document.querySelector(`.${randomColor}`);
// console.log(randomIdx);
// console.log(randomColor);
// console.log(randomBtn);

gameSeq.push(randomColor);
console.log(gameSeq);
btnflash(randomBtn);
btnflash();
}

function btnpress(){
    let btn=this;
    btnflash(btn);
}

let allBtns=document.querySelectorAll(".btn");
for(btns of allBtns){
btns.addEventListener("click",btnpress);
}