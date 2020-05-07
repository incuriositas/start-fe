const boxes = document.querySelectorAll('.box');
const offset = { x: 0, y: 0 };

let boxTarget = null;

function mouseDown(event) {
  boxTarget = event.target;
  offset.x = boxTarget.offsetLeft - event.clientX;
  offset.y = boxTarget.offsetTop - event.clientY;
}

function mouseUp() {
  boxTarget = null;
}

function mouseMove(event) {
  if (!boxTarget) return;

  boxTarget.style.left = `${event.clientX + offset.x}px`;
  boxTarget.style.top = `${event.clientY + offset.y}px`;
}

boxes.forEach((box) => {
  box.addEventListener('mousedown', mouseDown);
  box.addEventListener('mouseup', mouseUp);
});
document.body.addEventListener('mousemove', mouseMove);
