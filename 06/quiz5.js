const boxes = document.querySelectorAll('.box');

let offset = {x:0, y:0};
let box_target = null;

function mouse_down(event){
    box_target = event.target;
    offset.x = box_target.offsetLeft - event.clientX;
    offset.y = box_target.offsetTop - event.clientY;
}

function mouse_up(){
    box_target = null;
}

function mouse_move(event){
    if (!box_target) return;

    box_target.style.left = event.clientX + offset.x + "px";
    box_target.style.top = event.clientY + offset.y + "px";
}

boxes.forEach(box => {
    box.addEventListener('mousedown',mouse_down);
    box.addEventListener('mouseup',mouse_up);
});
document.body.addEventListener('mousemove',mouse_move);