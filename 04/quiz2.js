const board = document.querySelector('#board');

for (let i = 0; i < 4; i += 1) {
  for (let j = 0; j < 4; j += 1) {
    const span = document.createElement('span');
    if ((i + j) % 2 === 1) {
      span.className = 'white';
    } else {
      span.className = 'black';
    }
    board.appendChild(span);
  }
}

const blocks = document.querySelectorAll('#board > span');

function init() {
  for (let i = 0; i < 16; i += 1) {
    if (blocks[i].style.backgroundColor !== blocks[i].className)
      blocks[i].style.backgroundColor = blocks[i].className;
  }
}

function select(event) {
  init();
  const block = event.currentTarget;
  block.style.backgroundColor = 'red';
}

for (let i = 0; i < 16; i += 1) {
  blocks[i].addEventListener('click', select);
}
