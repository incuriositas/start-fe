var box = document.querySelector('#box');

var new_X = 0;
var new_Y = 0;
var cursor_X = 0;
var cursor_Y = 0; 

function dragMouseDown(e) {
    cursor_X = e.clientX; 
    cursor_Y = e.clientY; 
    document.onmouseup = closeDragElement; 
    document.onmousemove = elementDrag; 
} 
function elementDrag(e) { 
    new_X = cursor_X - e.clientX;
    new_Y = cursor_Y - e.clientY;
    cursor_X = e.clientX;
    cursor_Y = e.clientY; 
    box.style.top = (box.offsetTop - new_Y) + "px"; 
    box.style.left = (box.offsetLeft - new_X) + "px"; 
} 
function closeDragElement() { 
    document.onmouseup = null; 
    document.onmousemove = null;
} 

box.addEventListener('mousedown', dragMouseDown);