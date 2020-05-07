const bug = document.getElementById("bug");
const box = document.querySelector(".box");

let point = document.getElementById("point");
let life = document.getElementById("life");
let clicked = false;

const max_width = box.offsetWidth-bug.offsetWidth;
const max_height = box.offsetHeight - bug.offsetHeight;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;   
}

function set_score(){
    if(!clicked){
        life.innerHTML = parseInt(life.innerHTML) - 1
        if(life.innerHTML==-1){
            alert("Game Over");
        }
    }else{
        point.innerHTML = parseInt(point.innerHTML) + 1
        clicked = false;
    }
}

setInterval(function(){
    bug.style.top = getRandomInt(0,max_width) + "px" ;
    bug.style.left = getRandomInt(0,max_height) + "px";
    set_score();
},1000);


bug.addEventListener('click', event => clicked = true);


