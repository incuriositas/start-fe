const addRedBtn = document.querySelector('.add-red');
const addBtn = document.querySelector('.add-btn');
const deleteBtn = document.querySelector('.delete-btn');
const textBtn = document.querySelector('.text-btn');
const resetBtn = document.querySelector('.reset-btn');
const toggleBtn = document.querySelector('.toggle-btn');
const imageBtn = document.querySelector('.image-btn');
const text = document.querySelector('.txt').value;

const redClassName = 'red';
const boxClassName = 'box';
const imageURL = 'https://i.imgur.com/69NjYBH.png';

function addRed() {
  const boxes = document.querySelectorAll('.box');
  boxes.forEach(function setBoxRed(box) {
    box.classList.add(redClassName);
  });
}

function addBox() {
  const box = document.createElement('div');
  box.className = boxClassName;
  document.body.appendChild(box);
}

function delBox() {
  const boxes = document.querySelectorAll('.box');
  if (boxes.length !== 0) boxes.item(boxes.length - 1).remove();
}

function setText() {
  const boxes = document.querySelectorAll('.box');
  boxes.forEach(function setBoxText(Box) {
    const box = Box;
    box.innerHTML = text;
  });
}

function reset() {
  const boxes = document.querySelectorAll('.box');
  boxes.forEach(function resetBox(box) {
    box.remove();
  });
}

function toggle() {
  const boxes = document.querySelectorAll('.box');
  boxes.forEach(function setToggle(Box) {
    const box = Box;
    if (box.style.display === 'none') box.style.display = 'block';
    else box.style.display = 'none';
  });
}

function setImage() {
  const boxes = document.querySelectorAll('.box');
  if (boxes.length === 0) {
    addBox();
  }
  boxes.forEach(function setbox(box) {
    const img = document.createElement('img');
    img.src = imageURL;
    box.appendChild(img);
  });
}

addRedBtn.addEventListener('click', addRed);
addBtn.addEventListener('click', addBox);
deleteBtn.addEventListener('click', delBox);
textBtn.addEventListener('click', setText);
resetBtn.addEventListener('click', reset);
toggleBtn.addEventListener('click', toggle);
imageBtn.addEventListener('click', setImage);
