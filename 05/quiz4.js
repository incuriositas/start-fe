const box = document.querySelector('#box');

let newX = 0;
let newY = 0;
let cursorX = 0;
let cursorY = 0;

function elementDrag(e) {
  newX = cursorX - e.clientX;
  newY = cursorY - e.clientY;
  cursorX = e.clientX;
  cursorY = e.clientY;
  box.style.top = `${box.offsetTop - newY}px`;
  box.style.left = `${box.offsetLeft - newX}px`;
}
function closeDragElement() {
  document.onmouseup = null;
  document.onmousemove = null;
}

function dragMouseDown(e) {
  cursorX = e.clientX;
  cursorY = e.clientY;
  document.onmouseup = closeDragElement;
  document.onmousemove = elementDrag;
}

box.addEventListener('mousedown', dragMouseDown);
